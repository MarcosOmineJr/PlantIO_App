import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    Text
} from 'react-native';

import { Palette } from '../Styles';

const { width, height } = Dimensions.get('screen');

export class LeafButton extends Component {
    constructor(props){
        super(props);
        this.bgc;
        if(this.props.useOpacity) bgc = Palette.accent(0.3); else bgc = Palette.accent();
        this.state = {
            styles: StyleSheet.create({
                container:{
                    width: width*this.props.widthMultiplier,
                    height: height*0.07,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: bgc,
                    borderTopLeftRadius: height*0.035,
                    borderBottomRightRadius: height*0.035
                },
                txt:{
                    color: Palette.text,
                    fontFamily: 'comfortaa',
                    fontSize: width*0.055,
                    lineHeight: width*0.06
                }
            })
        };
    }

    render(){
        return (
            <TouchableHighlight underlayColor={Palette.accent(0.3)} style={this.state.styles.container} onPress={this.props.onPress} >
                <Text style={this.state.styles.txt}>{this.props.label}</Text>
            </TouchableHighlight>
        );
    }
}
