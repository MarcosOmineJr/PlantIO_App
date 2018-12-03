import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Text
} from 'react-native';
import { Feather } from '@expo/vector-icons';


import { Palette } from '../Styles';


const { height, width } = Dimensions.get('screen');


export default class ModuleCard extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.moduleName}>{this.props.data.name}</Text>
                <Feather name="more-vertical" size={30} color={Palette.text} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: width*0.06,
        paddingRight: width*0.03,
        height: height*0.1,
        width: width*0.9,
        backgroundColor: Palette.main,
        borderRadius: width*0.01,
        marginBottom: height*0.02
    },
    moduleName:{
        color: Palette.text,
        fontFamily: 'comfortaa',
        fontSize: height*0.04
    }
});