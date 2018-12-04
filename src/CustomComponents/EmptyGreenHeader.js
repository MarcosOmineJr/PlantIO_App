import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';


import { Palette } from '../Styles';
import CustomIcon from './CustomIcon';


const { height } = Dimensions.get('screen');


export default class EmptyGreenHeader extends Component {
    render(){
        return (
            <View style={{backgroundColor: Palette.main, height: height*0.07, alignItems:'center'}}>
                <CustomIcon name="deco-top" size={45} color={Palette.text} />
            </View>
        );
    }
}