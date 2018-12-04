import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    TouchableHighlight,
    Text
} from 'react-native';


import { Palette } from '../Styles';
import { onSignOut } from '../services/Auth';
import CustomIcon from './CustomIcon';
import CustomSwitch from './CustomSwitch';


const { width, height } = Dimensions.get('screen');

export default class LateralMenu extends Component {
    render(){
        return (
            <View style={styles.menuContentContainer}>
                <View style={styles.closeBtnContainer}>
                    <TouchableHighlight underlayColor={ Palette.accent(0.3) } style={styles.logOutBtn} onPress={()=>onSignOut().then(this.props.navigation.closeDrawer())}>
                        <CustomIcon name="cross" size={26} color={ Palette.text } />
                    </TouchableHighlight>
                </View>
                <View style={styles.userContainer}>
                    <Text style={styles.username}>Usuário</Text>
                    <TouchableHighlight style={styles.logOutBtn} onPress={()=>onSignOut().then(this.props.navigation.navigate('SignedOut'))}>
                        <Text style={styles.logOutBtnText}>Desconectar</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.menuButtonsContainer}>
                    <View style={[styles.menuButton, { marginBottom: height*0.05 }]}>
                        <Text style={styles.menuButtonText}>Modo Automático</Text>
                        <CustomSwitch onPress={()=>{}} />
                    </View>
                    <View style={styles.menuButton}>
                        <Text style={styles.menuButtonText}>Notificações por e-mail</Text>
                        <CustomSwitch onPress={()=>{}} />
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
        fontSize: 30
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