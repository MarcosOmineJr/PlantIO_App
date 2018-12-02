import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import generalStyles from './Styles';
import { LeafButton } from './CustomComponents/LeafButton';

const styles = StyleSheet.create(generalStyles.signUp);

export default class SignUp extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={{fontSize:40, fontFamily:'comfortaa', color:'#ffffff'}}>Olá Mundo!</Text>
                <LeafButton label='Olá' widthMultiplier={0.3} useOpacity={false} onPress={()=>alert('clicou!')} />
            </View>
        );
    }
}