import React, { Component } from 'react';
import * as Expo from 'expo';


import { createRootNavigator, SignedInContainer, SignedOutContainer } from '../../routes/routes';
import { checkSession } from '../services/Auth';
import { fetchDataFromClimatempoAPI, fetchDataFromPlantIOAPI } from '../services/Fetch';


export class AsyncSetup extends Component {

    constructor(props){
        super(props);
        this.state = {
            signed: false,
            isReady:false //Begins by showing the loading screen
        };
    }


    //Load the custom fonts:
    async loadApp(){

        //Pick the fonts from the project '"root"/assets/fonts/' folder and assign the names 'cabin' and 'confortaa' that can be used in 'fontFamily' style props:
        await Expo.Font.loadAsync({
            cabin: require('../../assets/fonts/Cabin-Regular.ttf'),
            comfortaa: require('../../assets/fonts/Comfortaa-Bold.ttf'),
            PlantIO_Icons: require('../../assets/icons/pio-ui-icons.ttf')
        })

        //Check if user is logged in:
        checkSession()
            .then((r)=>{let s = this.state; s.signed = r; this.setState(s);})
            .catch((error)=>alert(error));

        //Fetch Modules List from the Plant IO API and stores in AsyncStorage to be used all over the app:
        await fetchDataFromPlantIOAPI();
        await fetchDataFromClimatempoAPI();

        //When everything is loaded, set isReady to true, thus, redirecting the app to the main routes:
        let s = this.state;
        s.isReady = true
        this.setState(s);
    }

    componentDidMount(){
        this.loadApp();
    }
    
    render(){

        //If the app is not loaded yet it returns the loading screen, else, it returns the navigators (routes)
        if (!this.state.isReady){
            return <Expo.AppLoading />
        } else {
            const Root = createRootNavigator(this.state.signed);
            return <Root />; //provisório
        }
    }
}