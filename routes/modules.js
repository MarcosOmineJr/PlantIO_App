import React from 'react';
import { createStackNavigator } from 'react-navigation';

import ModulesScreen from '../src/ModulesScreen';
import Header from '../src/CustomComponents/Header';


const modules = createStackNavigator({
    ModulesScreen:{
        screen:ModulesScreen,
        navigationOptions:({navigation})=>{
            return {
                header: <Header title='Home' navigation={navigation} />
            }
        }
    }
});

export default modules;