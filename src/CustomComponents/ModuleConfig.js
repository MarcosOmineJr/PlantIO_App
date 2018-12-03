import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';


import InfoBar from './InfoBar';
import { Palette } from '../Styles';


export default class ModuleConfig extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.navigation.state.params.name} Configuração</Text>
                <InfoBar text='Módulo da Plantação' renderBackButton={true} navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: Palette.main
    },
    text:{
        fontFamily: 'cabin',
        fontSize: 50,
        color: Palette.text
    }
});