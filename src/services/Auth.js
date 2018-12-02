import { AsyncStorage } from 'react-native';



export const TOKEN_KEY = '@PlantIO:token';


export const onSignIn = ()=>AsyncStorage.setItem(TOKEN_KEY, 'true');


export const onSignOut = ()=>AsyncStorage.removeItem(TOKEN_KEY);


export const checkSession = async ()=>{
    let token = await AsyncStorage.getItem(TOKEN_KEY);

    return (token !== null)? true : false;
}