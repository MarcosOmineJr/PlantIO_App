import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableHighlight
} from 'react-native';


import { Palette } from '../Styles';
import CustomIcon from './CustomIcon';


const { height } = Dimensions.get('screen');


export default class IconSelectorButton extends Component {
    render(){
        return (
            <TouchableHighlight underlayColor={ Palette.accent(0.3) } style={styles.container} onPress={()=>this.props.onPress()}>
                <CustomIcon name="plus" size={26} color={ Palette.text } />
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height: height*0.06,
        width: height*0.06,
        backgroundColor: Palette.accent(),
        justifyContent:'center',
        alignItems:'center',
        borderRadius: height*0.005
    }
});