import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');
const Button = ({onPress}) => {
  return (
      <Pressable onPress={onPress}>
          <View style={styles.ViewStyle}>
        <Text>Save Data</Text>
    </View>
      </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  ViewStyle: {
    borderRadius: width / 80,
    height: height / 15,
    width: width / 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    alignSelf: 'center',
  },
});
