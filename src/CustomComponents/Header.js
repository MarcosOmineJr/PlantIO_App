import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    TouchableHighlight,
    Text
} from 'react-native';
import { Feather } from '@expo/vector-icons';


import { Palette } from '../Styles';
import CustomIcon from './CustomIcon';


const { height, width } = Dimensions.get('screen');


class HeaderLeft extends Component {

    render(){
        return (
            <TouchableHighlight style={styles.HLBtn} onPress={()=>this.props.navigation.openDrawer()}>
                <Feather name='menu' size={30} color={Palette.main} />
            </TouchableHighlight>
        );
    }
}

class HeaderTitle extends Component {

    render(){
        return (
            <View style={styles.HTContainer}>
                <View style={styles.HTTitleContainer}>
                    <Text style={styles.HTTxt}>{this.props.title}</Text>
                </View>
                <View style={styles.HTIconContainer}>
                    <CustomIcon name="plant-io" size={40} color={Palette.main} />
                </View>
                <View style={styles.HTFillerContainer}></View>
            </View>
        );
    }
}

class HeaderRight extends Component {

    render(){
        return (
            <TouchableHighlight style={styles.HRBtn} onPress={()=>this.props.navigation.navigate('AddScreen')}>
                <Feather name='plus' size={30} color={Palette.main} />
            </TouchableHighlight>
        );
    }
}

export default class Header extends Component {
    render(){
        return (
            <View style={styles.HContainer}>
                <View style={styles.headerLeft}>
                    <HeaderLeft navigation={this.props.navigation} />
                </View>
                <View style={styles.headerTitle}>
                    <HeaderTitle title={this.props.title} />
                </View>
                <View style={styles.headerRight}>
                    <HeaderRight navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    HLBtn:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    HTContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    HTTitleContainer:{
        flex: 1,
        paddingTop:25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    HTTxt:{
        color: Palette.main,
        fontFamily: 'comfortaa',
        fontSize: height*0.02
    },
    HTIconContainer:{
        flex: 1,
        height: '100%',
        alignItems: 'center'
    },
    HTFillerContainer:{
        flex: 1
    },
    HRBtn:{
        justifyContent: 'center',
        alignItems: 'center',
    },



    HContainer:{
        flexDirection: 'row',
        width: width,
        height: height*0.12,
    },
    headerLeft:{
        paddingTop:25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle:{
        flex: 6
    },
    headerRight:{
        paddingTop:25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});