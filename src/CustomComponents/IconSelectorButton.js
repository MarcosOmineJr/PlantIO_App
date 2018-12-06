import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    Image
} from 'react-native';


import CustomIcon from './CustomIcon';


const { height } = Dimensions.get('screen');


export default class IconSelectorButton extends Component {
    render(){
        let image;
        console.log(this.props.data.icons[this.props.id]);
        if(this.props.data.icons[this.props.id] == ''){
            return (
                <TouchableHighlight underlayColor={ this.props.underlayColor } style={{...styles.container, backgroundColor: this.props.bgColor }} onPress={()=>this.props.navigation.navigate('IconPicker', {iconId:this.props.id, module: this.props.data})}>
                    <CustomIcon name="plus" size={26} color={ this.props.tintColor } />
                </TouchableHighlight>
            );
        }
        switch(this.props.data.icons[this.props.id]){
            case '../../assets/icons/alface.png':
                image = require('../../assets/icons/alface.png');
                break;
            case '../../assets/icons/espinafre.png':
                image = require('../../assets/icons/espinafre.png');
                break;
            case '../../assets/icons/hortela.png':
                image = require('../../assets/icons/hortela.png');
                break;
            case '../../assets/icons/pimenta.png':
                image = require('../../assets/icons/pimenta.png');
                break;
        }
        return (
            <TouchableHighlight underlayColor='transparent' style={styles.container} onPress={()=>this.props.navigation.navigate('IconPicker', {iconId:this.props.id, module: this.props.data})}>
                <Image
                    style={{height:'100%', width:'100%'}}
                    resizeMode='contain'
                    source={image}
                />
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height: height*0.06,
        width: height*0.06,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: height*0.005
    }
});