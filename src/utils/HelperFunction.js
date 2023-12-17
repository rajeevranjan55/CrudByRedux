import AsyncStorage from "@react-native-async-storage/async-storage";

export const SetData=async (key,value)=>{
await AsyncStorage.setItem(key,value)
}

export const GetData=async (key)=>{
return await AsyncStorage.getItem(key)
}