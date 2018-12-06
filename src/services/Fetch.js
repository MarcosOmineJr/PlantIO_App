import { AsyncStorage } from 'react-native';


export const fetchDataFromPlantIOAPI = async (method, obj={})=>{
    /* let init = {
        method:'POST',
        mode:'cors',
        body:JSON.stringify(obj)
    }

    try{
        let r = await fetch('http://api.plantio.life/' + method, init);
        let decodedResponse = await r.json();
        return(decodedResponse);
    } catch(error){
        console.log(error.message);
    } */

    let modulesSimulation={
        status:'OK',
        message:'',
        email:'exemplo@exemplo.com',
        auto:0,
        modules:[
            {key:0, name:'Módulo 1', code:120, waterLevel:3, soilMoisture: 'dry', brightnessLevel:'dark', isLedsOn:1, isPumpOn:1, icons:['','','']},
            {key:1, name:'Módulo 2', code:333, waterLevel:2, soilMoisture: 'humid', brightnessLevel:'bright', isLedsOn:0, isPumpOn:1, icons:['','','']}
        ]
    }
    await AsyncStorage.setItem('PLANT_IO_DATA', JSON.stringify(modulesSimulation));
    return modulesSimulation;
}

export const convertFetchedDataFromPlantIOAPI = (c, convertTo)=>{
    let temp;
    switch(convertTo){
        case 'boolean':
            if(c == 1){
                temp = true;
            } else {
                temp = false;
            }
            break;
        case 'key':
            temp = c.toString();
            break;
        default:
            alert('specified convertTo doesn\'t exist');
    }
    return temp;
}

export const getDataFromAsyncStorage = async (string)=>{
    let data = await AsyncStorage.getItem(string);
    let parsedData = await JSON.parse(data);
    return parsedData;
}

export const fetchDataFromClimatempoAPI = async ()=>{
    let w = await getDataFromAsyncStorage('WEATHER_INFO');
    if(typeof w === 'undefined'){
        console.log('requesting weather data from API')
        let token = 'e5443796bd91dc9b9da8bddb95b5aee3';

        let r = await fetch('https://apiadvisor.climatempo.com.br/api/v1/forecast/locale/3477/days/15?token='+token);
        let responseText = await r.text();
        AsyncStorage.setItem('WEATHER_INFO', responseText);
    }
}