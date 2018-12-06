import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    TouchableHighlight
} from 'react-native';


import { Palette } from '../Styles';
import CustomIcon from './CustomIcon';


const { height, width } = Dimensions.get('screen');


export default class UntouchableModuleCard extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.moduleName}>{this.props.data.name}</Text>
                <TouchableHighlight style={styles.configBtn} underlayColor={Palette.accent(0.3)} onPress={()=>this.props.navigation.navigate('ModuleConfig', {module: this.props.data})} >
                    <CustomIcon name="three-dot" size={26} color={Palette.text} />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        height: height*0.1,
        width: width*0.9,
        backgroundColor: Palette.main,
        borderRadius: width*0.01,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: width*0.06,
        paddingRight: width*0.03
    },
    moduleName:{
        color: Palette.text,
        fontFamily: 'comfortaa',
        fontSize: height*0.04
    },
    configBtn:{
        borderRadius: width*0.01
    }
});