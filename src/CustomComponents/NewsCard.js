import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    View,
    Text
} from 'react-native';


import { Palette } from '../Styles';
import ScaledImage from './ScaledImage';


const { height, width } = Dimensions.get('screen');


export default class NewsCard extends Component {
    render(){
        let date = new Date(this.props.data.publishedAt);
        return (
            <TouchableHighlight style={styles.container}>
                <View style={styles.content}>
                    <ScaledImage style={styles.image} width={width*0.8} uri={this.props.data.urlToImage} />
                    <View style={styles.tituloContainer}>
                        <Text style={styles.titulo}>{this.props.data.title}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text ellipsizeMode='tail' numberOfLines={2} style={styles.text}>{this.props.data.description}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.info}>{date.toLocaleDateString()}</Text>
                        <Text style={styles.info}>{this.props.data.source.name}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Palette.main,
        borderRadius: width*0.01,
        marginBottom: height*0.03,
        width: '90%'
    },
    content:{
        width: width*0.9,
        padding: width*0.05
    },
    image:{
        borderRadius: width*0.01,
        marginBottom: height*0.02
    },
    tituloContainer:{
        width: width*0.8,
        alignItems: 'center',
        marginBottom: height*0.02
    },
    titulo:{
        fontFamily: 'comfortaa',
        fontSize: height*0.03,
        textAlign: 'justify',
        color: Palette.text
    },
    textContainer:{
        width: width*0.8,
        alignItems: 'center',
        marginBottom: height*0.02
    },
    text:{
        fontFamily: 'cabin',
        fontSize: height*0.023,
        color: Palette.text
    },
    infoContainer:{
        width: width*0.8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    info:{
        fontFamily: 'cabin',
        color: Palette.text,
        fontSize: height*0.023
    }
});