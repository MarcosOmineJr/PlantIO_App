import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

export const signedOutRoutes = createStackNavigator({
    Login:{
        screen:Login,
        
    }
},{
    defaultNavigationOptions:{
        headerleft: ()=>{return null},
        headerTitle: ()=>{return <Icon />},
        headerRight: ()=>{return null}
    }
});

export const signedInRoutes = createDrawerNavigator({
    Modal:Modal,
    Drawer:Drawer
});

class Icon extends Component {
    render(){
        return (
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'#fff', fontWeight:'bold'}}>Imagenzinha</Text>
            </View>
        );
    }
}