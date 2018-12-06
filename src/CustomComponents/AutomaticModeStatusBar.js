import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Text
} from 'react-native';


import { Palette } from '../Styles';


const { height, width } = Dimensions.get('screen');


export default class ModuleActionsCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: this.props.active
        }
    }
    render(){
        if(!this.props.active){
            return null;
        }
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width: width*0.8,
        height: height*0.07,
        backgroundColor: Palette.accent(),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width*0.01,
        marginBottom: height*0.02,

    },
    text:{
        fontFamily: 'comfortaa',
        color: Palette.text,
        fontSize: height*0.03
    }
});