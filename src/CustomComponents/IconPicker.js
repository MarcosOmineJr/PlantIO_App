import React, { Component } from 'react';
import {
    StyleSheet,
    View,

} from 'react-native';


import { Palette } from '../Styles';


export default class IconPicker extends Component {
    render(){
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Palette.main
    }
});