import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';


import generalStyles from './Styles';
import InfoBar from './CustomComponents/InfoBar';


const styles = StyleSheet.create(generalStyles.moduleScreen);

export default class ModuleScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.navigation.state.params.name}</Text>
                <InfoBar text='Módulo da Plantação' renderBackButton={true} navigation={this.props.navigation} />
            </View>
        );
    }
}