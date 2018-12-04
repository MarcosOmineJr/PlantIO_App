import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    TouchableHighlight,

} from 'react-native';


import { Palette } from '../Styles';
import CustomIcon from './CustomIcon';


const { height } = Dimensions.get('screen');


export default class IconPicker extends Component {
    render(){
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.backButton} onPress={()=>this.props.navigation.goBack()}>
                    <CustomIcon name="arrow-left" size={26} color={ Palette.text } />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Palette.main
    },
    backButton:{
        height: height*0.06,
        width: height*0.06,
        backgroundColor: Palette.accent(),
        justifyContent:'center',
        alignItems:'center',
        borderRadius: height*0.005
    }
});