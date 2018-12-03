import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HintsScreen from '../src/HintsScreen';
import Header from '../src/CustomComponents/Header';


const hints = createStackNavigator({
    HintsScreen:{
        screen:HintsScreen,
        navigationOptions:({navigation})=>{
            return {
                header: <Header title='Dicas' navigation={navigation} />
            }
        }
    }
});

export default hints;