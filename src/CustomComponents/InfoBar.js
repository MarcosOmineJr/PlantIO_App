import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Text,
    TouchableHighlight
} from 'react-native';


import { Palette } from '../Styles';
import CustomIcon from './CustomIcon';


const { width, height } = Dimensions.get('screen');


export default class InfoBar extends Component {
    render(){
        if(this.props.renderBackButton){
            return (
                <View style={styles.container}>
                    <View style={styles.infoBarLeft}>
                        <TouchableHighlight style={styles.backBtnContainer} underlayColor={Palette.main} onPress={()=>(typeof this.props.backRoute !== 'undefined')? this.props.navigation.navigate(this.props.backRoute) : this.props.navigation.goBack()} >
                            <CustomIcon name="arrow-left" size={26} color={Palette.text} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.infoBarText}>
                        <Text style={styles.info}>{this.props.text}</Text>
                    </View>
                    <View style={styles.infoBarRight}>

                    </View>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <Text style={styles.info}>{this.props.text}</Text>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container:{
        width: width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: height*0.06,
        backgroundColor: Palette.accent()
    },
    infoBarLeft:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backBtnContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoBarText:{
        flex:3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    info:{
        fontFamily: 'comfortaa',
        fontSize: height*0.025,
        color: Palette.text
    },
    infoBarRight:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});