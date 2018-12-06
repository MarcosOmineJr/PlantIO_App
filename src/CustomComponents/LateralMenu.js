import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    TouchableHighlight,
    Text,
    AsyncStorage
} from 'react-native';


import { Palette } from '../Styles';
import { onSignOut } from '../services/Auth';
import CustomIcon from './CustomIcon';
import CustomSwitch from './CustomSwitch';
import { getDataFromAsyncStorage, convertFetchedDataFromPlantIOAPI, fetchDataFromPlantIOAPI } from '../services/Fetch';


const { width, height } = Dimensions.get('screen');


export default class LateralMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            activated:[false, false],
            auto:0,
            user: ''
        }

        this.getMode = this.getMode.bind(this);
    }

    async getMode(){
        let pIOData = await getDataFromAsyncStorage('PLANT_IO_DATA');
        let s = this.state;
        s.auto = convertFetchedDataFromPlantIOAPI(pIOData.auto, 'boolean');
        s.user = pIOData.email;
        if(this.state.auto){
            s.activated[0] = true;
        } else {
            s.activated[0] = false;
        }
        s.loaded = true;
        this.setState(s);
    }

    async toggleAuto(v){
        let pIOData = await getDataFromAsyncStorage('PLANT_IO_DATA');
        pIOData.auto = v;
        await AsyncStorage.setItem('PLANT_IO_DATA', JSON.stringify(pIOData));

    }

    async getModeToSet(){
        let pIOData = await getDataFromAsyncStorage('PLANT_IO_DATA');
        let auto = convertFetchedDataFromPlantIOAPI(pIOData.auto, 'boolean');
        return auto;
    }

    componentDidMount(){
        this.getMode();
    }

    render(){
        if(!this.state.loaded){
            return null;
        }
        return (
            <View style={styles.menuContentContainer}>
                <View style={styles.closeBtnContainer}>
                    <TouchableHighlight underlayColor={ Palette.accent(0.3) } style={styles.logOutBtn} onPress={()=>onSignOut().then(this.props.navigation.closeDrawer())}>
                        <CustomIcon name="cross" size={26} color={ Palette.text } />
                    </TouchableHighlight>
                </View>
                <View style={styles.userContainer}>
                    <Text ellipsizeMode='tail' numberOfLines={1} style={styles.username}>{this.state.user}</Text>
                    <TouchableHighlight style={styles.logOutBtn} onPress={()=>{this.props.navigation.closeDrawer; onSignOut().then(this.props.navigation.navigate('SignedOut'))}}>
                        <Text style={styles.logOutBtnText}>Desconectar</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.menuButtonsContainer}>
                    <View style={[styles.menuButton, { marginBottom: height*0.05 }]}>
                        <Text style={styles.menuButtonText}>Modo Automático</Text>
                        <CustomSwitch active={this.state.activated[0]} onPress={()=>this.getModeToSet().then((auto)=>(!auto)? this.toggleAuto(true) : this.toggleAuto(false))} />
                    </View>
                    <View style={styles.menuButton}>
                        <Text style={styles.menuButtonText}>Notificações por e-mail</Text>
                        <CustomSwitch active={this.state.activated[1]} onPress={()=>{}} />
                    </View>
                </View>
                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>Direitos Autorais &copy;</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuContentContainer:{
        flex:1
    },
    closeBtnContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: width*0.05,
        backgroundColor: Palette.main
    },
    closeBtnText:{
        color: Palette.accent(),
        fontFamily: 'comfortaa',
        fontSize: 15
    },
    userContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: width*0.05,
        backgroundColor: Palette.accent()
    },
    logOutBtn:{
        padding: 10
    },
    username:{
        color: Palette.text,
        fontFamily: 'comfortaa',
        fontSize: 27,
        width:width*0.5
    },
    logOutBtnText:{
        color: Palette.main,
        fontFamily: 'comfortaa',
        fontSize: 15
    },
    menuButtonsContainer:{
        flex:8,
        backgroundColor: Palette.main,
        paddingTop: height*0.15
    },
    menuButton:{
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: width*0.06
    },
    menuButtonText:{
        fontFamily: 'comfortaa',
        color: Palette.text,
        fontSize: height*0.027
    },
    footerContainer:{
        flex:1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerText:{
        fontFamily: 'comfortaa',
        color: Palette.text,
        fontSize: height*0.025
    }
});