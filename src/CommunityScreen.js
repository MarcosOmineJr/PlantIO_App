import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';


import generalStyles from './Styles';
import InfoBar from './CustomComponents/InfoBar';


const styles = StyleSheet.create(generalStyles.communityScreen);

export default class CommunityScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Comunidade</Text>
                <InfoBar text='Comunidade Agronomia' renderBackButton={true} navigation={this.props.navigation} backRoute='News' />
            </View>
        );
    }
}