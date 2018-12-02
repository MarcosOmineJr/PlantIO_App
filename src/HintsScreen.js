import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import generalStyles from './Styles';

const styles = StyleSheet.create(generalStyles.hintsScreen);

export default class HintsScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Dicas</Text>
            </View>
        );
    }
}