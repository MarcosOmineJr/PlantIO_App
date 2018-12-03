import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import { Palette } from '../src/Styles';


import SignUp from '../src/SignUp';
import Login from '../src/Login';
import CustomIcon from '../src/CustomComponents/CustomIcon';
import AddModule from '../src/AddModule'
import Drawer from './drawer';


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
const SignedInRoutes = createStackNavigator({
    Drawer:{
        screen:Drawer,
        navigationOptions:{
            header: null
        }
    },
    AddScreen:{
        screen:AddModule,
        navigationOptions:{
            header: ()=>{return <Icon />}
        }
    }
},
{
    mode: 'modal'
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
            <View style={{backgroundColor: Palette.main, height: height*0.07, alignItems:'center'}}>
                <CustomIcon name="plant-io" size={40} color={Palette.text} />
            </View>
        );
    }
}