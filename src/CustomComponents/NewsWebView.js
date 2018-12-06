import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class NewsWebView extends Component {

    static navigationOptions = {
        title:'Plant IO Notícias'
    }

    render(){
        return (
            <WebView source={{uri: this.props.navigation.state.params.url}} />
        );
    }
}