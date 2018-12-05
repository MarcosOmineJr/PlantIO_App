import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    View,
    Image,
    Text
} from 'react-native';


import { Palette } from '../Styles';


const { width, height } = Dimensions.get('screen');


export default class CommunityCard extends Component {
    render(){
        return (
            <TouchableHighlight style={styles.container}>
                <View>
                    <View style={styles.horizontalContainer}>
                        <Image source={this.props.data.image} style={styles.img} />
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{this.props.data.title}</Text>
                        </View>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.subtitle}>{this.props.data.subtitle}</Text>
                        <Text style={styles.txt}>{this.props.data.text}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width: width*0.9,
        backgroundColor: Palette.main,
        padding: width*0.05,
        borderRadius: width*0.01,
        marginBottom: height*0.03
    },
    horizontalContainer:{
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    img:{
        height: height*0.2,
        width: height*0.2
    },
    titleContainer:{
        height: height*0.225,
        width: height*0.225,
        alignItems: 'center'
    },
    title:{
        fontFamily: 'comfortaa',
        fontSize: height*0.03,
        color: Palette.text
    },
    textContainer:{
        flex: 1
    },
    subtitle:{
        fontFamily: 'cabin',
        fontSize: height*0.03,
        color: Palette.text,
        marginBottom: 10
    },
    txt:{
        fontFamily: 'cabin',
        fontSize: height*0.023,
        color: Palette.text
    }
});