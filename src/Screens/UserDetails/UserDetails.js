import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import { deleteUser } from '../../Redux/UserSlice';
const {height, width} = Dimensions.get('window');
export default function UserDetails({navigation}) {
  const data = useSelector(state => state.user.arr);
  // console.log(data,"data");
  const dispatch=useDispatch();
  // console.log(data);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View>
          <Text style={{textDecorationLine: 'underline'}}>UserDetails</Text>
        </View>
        <FlatList
          data={data}
         ListEmptyComponent={<Text>No Data</Text>}
          renderItem={({item,index}) => {
            return (
              <View
                style={{
                  backgroundColor: 'lightgrey',
                  width: width / 1.2,
                  borderRadius: 8,
                  flex: 1,
                  marginBottom: 10,
                  marginTop: 5,
                  padding: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text>{item.name} </Text>
                  <Text>{item.email} </Text>
                  <Text>{item.password} </Text>
                  <Text>{item.confirmPassword} </Text>
                </View>
                <View>
                  <Text
                    style={styles.btnStyle}
                    onPress={() => navigation.navigate('Form',{type:"edit",data:item,index:index})}>
                    Edit
                  </Text >
                  <Text style={{...styles.btnStyle,borderColor:"red"}}
                  onPress={()=>dispatch(deleteUser(index))}>Delete</Text>
                </View>
              </View>
            );
          }}
        />
        <Pressable
          style={{
            backgroundColor: 'skyblue',
            width: width / 2,
            height: height / 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('Form',{type:'add'})}>
          <Text>+ Add New User</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  btnStyle:{
    
        marginBottom: 10,
        backgroundColor: 'white',
        padding:6,
        borderColor:"black",
        borderWidth:0.5
        
      
  }
});
