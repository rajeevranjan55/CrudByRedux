import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import React, {useState} from 'react';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';
import {DetailsOnNextPage, updateUser} from '../../Redux/UserSlice';
import {useRoute} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const Form = ({navigation}) => {
  const dispatch = useDispatch();
  const route = useRoute();
  const type = route.params?.type || '';

  const [input, setInput] = useState({

    name: type == 'edit' ? route.params.data.name : '',
    email: type == 'edit' ? route.params.data.email : '',
    password: type == 'edit' ? route.params.data.password : '',
    confirmPassword: type == 'edit' ? route.params.data.confirmPassword : '',
  });
  // console.log(input.name);

  const handleInput = (key, value) => {
    setInput({...input, [key]: value});
    // console.log(input);
  };

  const handleDAta = () => {
    if(type=='edit'){
      // console.log(input,"input");
        dispatch(updateUser(input))
    }else{
        dispatch(DetailsOnNextPage(input));
    }
   
    navigation.navigate('UserDetails');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          value={input.name}
          placeholder="Name"
          style={styles.txtinputStyle}
          onChangeText={e => handleInput('name', e)}
        />
        <TextInput
          value={input.email}
          placeholder="email"
          style={styles.txtinputStyle}
          onChangeText={e => handleInput('email', e)}
        />
        <TextInput
          value={input.password}
          placeholder="password"
          style={styles.txtinputStyle}
          secureTextEntry={true}
          onChangeText={e => handleInput('password', e)}
        />
        <TextInput
          value={input.confirmPassword}
          placeholder="confirmPassword"
          style={styles.txtinputStyle}
          secureTextEntry={true}
          onChangeText={e => handleInput('confirmPassword', e)}
        />

        <Button onPress={handleDAta} />
      </View>
    </SafeAreaView>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"blue"
  },
  txtinputStyle: {
    marginBottom: width / 15,
    backgroundColor: 'lightgrey',
    width: width / 1.2,
    height: height / 18,
    borderRadius: 5,
    paddingLeft: 10,
  },
});
