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
            <TouchableHighlight underlayColor={ this.props.underlayColor } style={{...styles.container, backgroundColor: this.props.bgColor }} onPress={()=>this.props.onPress()}>
                <CustomIcon name="plus" size={26} color={ this.props.tintColor } />
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height: height*0.06,
        width: height*0.06,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: height*0.005
    }
});