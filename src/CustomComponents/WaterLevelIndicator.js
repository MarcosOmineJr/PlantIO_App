import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Text
} from 'react-native';


import { Palette } from '../Styles';


const { height, width } = Dimensions.get('screen');


export default class WaterLevelIndicator extends Component {
    constructor(props){
        super(props);
        this.state = {
            level:[false, false, false]
        }
    }

    componentDidMount(){
        let s = this.state;
        for(let i = 0; i < this.props.data.waterLevel; i++){
            s.level[i] = true;
        }
        this.setState(s);
    }

    render(){

        return (
            <View style={styles.container}>
                <Text style={styles.txt}>Reservatório</Text>
                <View style={styles.outline}>
                    <View style={[styles.innerCircle, {backgroundColor: (this.state.level[0])? '#6485C7' : Palette.text }]}></View>
                </View>
                <View style={styles.outline}>
                    <View style={[styles.innerCircle, {backgroundColor: (this.state.level[1])? '#6485C7' : Palette.text }]}></View>
                </View>
                <View style={styles.outline}>
                    <View style={[styles.innerCircle, {backgroundColor: (this.state.level[2])? '#6485C7' : Palette.text }]}></View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: width*0.05,
        width: width*0.65,
        height: height*0.07,
        backgroundColor: Palette.main,
        borderRadius: width*0.01
    },
    txt:{
        fontFamily: 'comfortaa',
        fontSize: height*0.02,
        color: Palette.text,
        lineHeight: height*0.02,
        textAlignVertical: 'center'
    },
    outline:{
        width: width*0.045,
        height: width*0.045,
        borderRadius: width*0.0225,
        backgroundColor: Palette.text,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    innerCircle:{
        width: width*0.03,
        height: width*0.03,
        borderRadius: width*0.015
    }
});
