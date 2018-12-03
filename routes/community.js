import React from 'react';
import { createStackNavigator } from 'react-navigation';

import CommunityScreen from '../src/CommunityScreen';
import Header from '../src/CustomComponents/Header';


const community = createStackNavigator({
    CommunityScreen:{
        screen:CommunityScreen,
        navigationOptions:({navigation})=>{
            return {
                header: <Header title='Comunidade' navigation={navigation} />
            }
        }
    }
});

export default community;