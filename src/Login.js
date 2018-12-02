import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';

import generalStyles from './Styles';
import LeafButton from './CustomComponents/LeafButton';
import { onSignIn } from './services/Auth';

const styles = StyleSheet.create(generalStyles.login);

export default class Login extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={styles.horizontalInput}>
                        <LeafButton label='E-Mail' widthMultiplier={0.23} useOpacity={true} />
                        <TextInput style={styles.hiInput} textContentType='emailAddress' keyboardType='email-address' underlineColorAndroid='transparent' />
                    </View>
                    <View style={styles.horizontalInput}>
                        <LeafButton label='Senha' widthMultiplier={0.23} useOpacity={true} />
                        <TextInput style={styles.hiInput} textContentType='password' secureTextEntry={true} underlineColorAndroid='transparent' />
                    </View>
                    <LeafButton style={styles.loginBtn} label='Entrar' widthMultiplier={0.3} onPress={()=>onSignIn().then(this.props.navigation.navigate('SignedIn'))} />
                    <LeafButton style={styles.signUpBtn} label='Não tem conta? Crie sua conta aqui' widthMultiplier={0.9} onPress={()=>this.props.navigation.navigate('SignUp')} />
                </View>
            </View>
        );
    }
}