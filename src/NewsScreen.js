import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';


import generalStyles from './Styles';
import InfoBar from './CustomComponents/InfoBar';


const styles = StyleSheet.create(generalStyles.newsScreen);

export default class NewsScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Notícias</Text>
                <InfoBar text='Notícias de Agronomia' renderBackButton={true} navigation={this.props.navigation} backRoute='Hints' />
            </View>
        );
    }
}