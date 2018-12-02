import { AsyncStorage } from 'react-native';



export const TOKEN_KEY = '@PlantIO:token';


export const onSignIn = async ()=> await AsyncStorage.setItem(TOKEN_KEY, 'true');


export const onSignOut = async ()=> await AsyncStorage.removeItem(TOKEN_KEY);


export const checkSession = async ()=>{
    let token = await AsyncStorage.getItem(TOKEN_KEY);

    return (token !== null)? true : false;
}