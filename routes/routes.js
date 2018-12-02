import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text
} from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

import { Palette } from '../src/Styles';

import SignUp from '../src/SignUp';
import Login from '../src/Login';

const { height } = Dimensions.get('screen');

const SignedOutRoutes = createStackNavigator({
    SignUp:{
        screen:SignUp
    },
    Login:{
        screen:Login
    }
},{
    defaultNavigationOptions:{
        header: ()=>{return <Icon />}
    }
});

export const SignedOutContainer = createAppContainer(SignedOutRoutes);

/* export const signedInRoutes = createDrawerNavigator({
    Drawer:Drawer,
    Modal:Modal
}); */

class Icon extends Component {
    render(){
        return (
            <View style={{backgroundColor: Palette.main, height: height*0.07, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:Palette.text, fontWeight:'bold'}}>Imagenzinha</Text>
            </View>
        );
    }
}