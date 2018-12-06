import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import SignUp from '../src/SignUp';
import Login from '../src/Login';
import EmptyGreenHeader from '../src/CustomComponents/EmptyGreenHeader';
import AddModule from '../src/AddModule'
import Drawer from './drawer';
import ModuleConfig from '../src/CustomComponents/ModuleConfig';
import IconPicker from '../src/CustomComponents/IconPicker';
import NewsWebView from '../src/CustomComponents/NewsWebView';


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
        header: ()=>{return <EmptyGreenHeader />} //Replaces the library default header with our custom header
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
            header: ()=>{return <EmptyGreenHeader />}
        }
    },
    ModuleConfig:{
        screen:ModuleConfig,
        navigationOptions:{
            header: ()=>{return <EmptyGreenHeader />}
        }
    },
    IconPicker:{
        screen:IconPicker,
        navigationOptions:{
            header: ()=>{return <EmptyGreenHeader />}
        }
    },
    NewsView:{
        screen:NewsWebView
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