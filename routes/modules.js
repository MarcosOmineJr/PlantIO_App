import React from 'react';
import { createStackNavigator } from 'react-navigation';

import ModulesScreen from '../src/ModulesScreen';
import Header from '../src/CustomComponents/Header';
import ModuleScreen from '../src/ModuleScreen';


const modules = createStackNavigator({
    ModulesScreen:{
        screen:ModulesScreen,
        navigationOptions:({navigation})=>{
            return {
                header: <Header title='Home' navigation={navigation} />
            }
        }
    },
    ModuleScreen:{
        screen:ModuleScreen,
        navigationOptions:({navigation})=>{
            return {
                header: <Header title='Módulo' navigation={navigation} />
            }
        }
    }
});

export default modules;