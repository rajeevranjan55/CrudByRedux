import { StyleSheet,  } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// import navigationstrings from '../constants/navigationstrings';
import * as Screens from "../Screens";

const stack = createNativeStackNavigator();
export default function () {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="Form" component={Screens.Form} />
        <stack.Screen name="UserDetails" component={Screens.UserDetails} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
