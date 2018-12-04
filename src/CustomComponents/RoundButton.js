import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    Animated
} from 'react-native';


import CustomIcon from './CustomIcon';
import { Palette } from '../Styles';


const { height } = Dimensions.get('screen');
const AnimatedCustomIcon = Animated.createAnimatedComponent(CustomIcon);


export default class RoundButton extends Component {
    constructor(props){
        super(props);
        this.state ={
            active: this.props.active,
            tintColor: (this.props.active)? new Animated.Value(1) : new Animated.Value(0),
        }
        this.activate = this.activate.bind(this);
        this.deactivate = this.deactivate.bind(this);
        this.pressed = this.pressed.bind(this);
    }

    activate(){
        Animated.timing(
            this.state.tintColor,
            {
                toValue: 1,
                duration: 500
            }
        ).start();
    }

    deactivate(){
        Animated.timing(
            this.state.tintColor,
            {
                toValue: 0,
                duration: 500
            }
        ).start();
    }

    pressed(){
        if(this.state.active){
            let s = this.state;
            s.active = false;
            this.setState(s);
            this.deactivate();
            this.props.onPress();
        } else {
            let s = this.state;
            s.active = true;
            this.setState(s);
            this.activate();
            this.props.onPress();
        }
    }

    render(){

        let interpolation = this.state.tintColor.interpolate({
            inputRange:[0, 1],
            outputRange:['#CCCCCC', this.props.tintColor]
        });

        return (
            <TouchableHighlight underlayColor={ Palette.text } style={styles.container} onPress={this.pressed} >
                <AnimatedCustomIcon name={this.props.icon} size={50} style={{color: interpolation}} />
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        height: height*0.1,
        width: height*0.1,
        borderRadius: height*0.05,
        backgroundColor: Palette.text
    }
});