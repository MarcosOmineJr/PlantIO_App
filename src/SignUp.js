import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import generalStyles from './Styles';

const styles = StyleSheet.create(generalStyles.signUp);

export default class SignUp extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={{fontSize:40, fontWeight:'bold', color:'#ffffff'}}>Olá Mundo!</Text>
            </View>
        );
    }
}