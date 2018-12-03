import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';


import generalStyles from './Styles';
import InfoBar from './CustomComponents/InfoBar';


const styles = StyleSheet.create(generalStyles.hintsScreen);

export default class HintsScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Dicas</Text>
                <InfoBar text='Dicas sobre Agronomia' renderBackButton={true} navigation={this.props.navigation} backRoute='Modules' />
            </View>
        );
    }
}