import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import generalStyles from './Styles';

const styles = StyleSheet.create(generalStyles.modulesScreen);

export default class ModulesScreen extends Component {
    
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Módulos</Text>
            </View>
        );
    }
}