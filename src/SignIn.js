import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import generalStyles from './Styles';

const styles = StyleSheet.create(generalStyles.signIn);

export default class SignUp extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    
                </View>
            </View>
        );
    }
}