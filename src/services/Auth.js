import { AsyncStorage } from 'react-native';
import { fetchDataFromPlantIOAPI } from './Fetch';


export const TOKEN_KEY = '@PlantIO:token';

export const onSignUp = async (obj)=>{
    let r = await fetchDataFromPlantIOAPI('createAccount.php', obj);
    await AsyncStorage.setItem('PLANT_IO_DATA', JSON.stringify(r));
    await AsyncStorage.setItem(TOKEN_KEY, 'true');
};

export const onSignIn = async ()=>{
    let r = await fetchDataFromPlantIOAPI('login.php', obj);
    await AsyncStorage.setItem('PLANT_IO_DATA',  JSON.stringify(r));
    await AsyncStorage.setItem(TOKEN_KEY, 'true');
};


export const onSignOut = async ()=> await AsyncStorage.removeItem(TOKEN_KEY);


export const checkSession = async ()=>{
    let token = await AsyncStorage.getItem(TOKEN_KEY);

    return (token !== null)? true : false;
}