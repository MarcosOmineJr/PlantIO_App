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


const { width } = Dimensions.get('screen');

export default class LateralMenu extends Component {
    render(){
        return (
            <View style={styles.menuContentContainer}>
                <View style={styles.exitBtnContainer}>
                
                </View>
                <View style={styles.userContainer}>
                    <TouchableHighlight style={styles.logOutBtn} onPress={()=>onSignOut().then(this.props.navigation.navigate('SignedOut'))}>
                        <Text style={styles.logOutBtnText}>Sair</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.menuButtonsContainer}>

                </View>
                <View styles={styles.footerContainer}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuContentContainer:{
        flex:1
    },
    exitBtnContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: width*0.05,
        backgroundColor: Palette.main
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
    logOutBtnText:{
        color: Palette.main,
        fontFamily: 'comfortaa',
        fontSize: 15
    },
    menuButtonsContainer:{
        flex:8,
        backgroundColor: Palette.main
    },
    footerContainer:{
        flex:1,
        backgroundColor: '#000000'
    }
});