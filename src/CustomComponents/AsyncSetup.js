import React, { Component } from 'react';
import * as Expo from 'expo';

import SignUp from '../SignUp';

export class AsyncSetup extends Component {
    constructor(props){
        super(props);
        this.state = {
            isReady:false
        };
    }

    async loadFonts(){
        await Expo.Font.loadAsync({
            cabin: require('../../assets/fonts/Cabin-Regular.ttf'),
            comfortaa: require('../../assets/fonts/Comfortaa-Bold.ttf')
        })

        this.setState({isReady:true});
    }

    componentDidMount(){
        this.loadFonts();
    }
    
    render(){
        if (!this.state.isReady){
            return <Expo.AppLoading />
        } else {
            return <SignUp/> //provisório
        }
    }
}