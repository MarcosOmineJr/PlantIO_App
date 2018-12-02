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
import MainRoutes from './mainRoutes';
import LateralMenu from '../src/CustomComponents/LateralMenu';


const { height } = Dimensions.get('screen');


//Routes in case the user is logged out:
const SignedOutRoutes = createStackNavigator({
    SignUp:{
        screen:SignUp
    },
    Login:{
        screen:Login
    }
},{
    defaultNavigationOptions:{
        header: ()=>{return <Icon />} //Replaces the library default header with our custom header
    }
});


//Routes in case the user is logged in:
const SignedInRoutes = createDrawerNavigator({
    MainRoutes:MainRoutes
},
{
    contentComponent:LateralMenu
});


//General Route (a route connecting the two routes above):
export const createRootNavigator = (signed = false)=>{
    const RootNavigator = createStackNavigator({
        SignedIn: { screen: SignedInRoutes },
        SignedOut: { screen: SignedOutRoutes }
    },
    {
        headerMode: 'none',
        mode:'modal',
        initialRouteName: signed ? 'SignedIn' : 'SignedOut'
    });

    const RootNavigatorContainer = createAppContainer(RootNavigator);

    return RootNavigatorContainer;
}


//react-navigation requires that all routes must be loaded into a container:
export const SignedOutContainer = createAppContainer(SignedOutRoutes);
export const SignedInContainer = createAppContainer(SignedInRoutes);





//The component below is the image in the header:
class Icon extends Component {
    render(){
        return (
            <View style={{backgroundColor: Palette.main, height: height*0.07, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:Palette.text, fontWeight:'bold'}}>Imagenzinha</Text>
            </View>
        );
    }
}