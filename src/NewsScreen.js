import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import generalStyles from './Styles';

const styles = StyleSheet.create(generalStyles.newsScreen);

export default class NewsScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Notícias</Text>
            </View>
        );
    }
}