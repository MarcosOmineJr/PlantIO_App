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
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }

        this.setInputText = this.setInputText.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    async logIn(){
        if(this.state.email == ''){
            Alert.alert('Preencha o e-mail', 'preencha o campo do e-mail!');
            return false;
        } else if(this.state.password == ''){
            Alert.alert('Preencha a senha', 'preencha o campo da senha!');
            return false;
        } else{
            let send = {
                email: this.state.email,
                password: this.state.password
            };
            await onSignIn(send);
            return true;
        }
    }

    setInputText(text, state){
        let s = this.state;
        switch(state){
            case 'email':
            s.email = text;
            break;
            case 'password':
            s.password = text;
            break;
        }
        this.setState(s);
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={styles.horizontalInput}>
                        <LeafButton label='E-Mail' widthMultiplier={0.23} useOpacity={true} />
                        <TextInput style={styles.hiInput} textContentType='emailAddress' keyboardType='email-address' underlineColorAndroid='transparent' onChangeText={(t)=>this.setInputText(t, 'email')} />
                    </View>
                    <View style={styles.horizontalInput}>
                        <LeafButton label='Senha' widthMultiplier={0.23} useOpacity={true} />
                        <TextInput style={styles.hiInput} textContentType='password' secureTextEntry={true} underlineColorAndroid='transparent' onChangeText={(t)=>this.setInputText(t, 'password')} />
                    </View>
                    <LeafButton style={styles.loginBtn} label='Entrar' widthMultiplier={0.3} onPress={()=>this.logIn.then((r)=>(!r)? ()=>{} : this.props.navigation.navigate('SignedIn'))} />
                    <LeafButton style={styles.signUpBtn} label='Não tem conta? Crie sua conta aqui' widthMultiplier={0.9} onPress={()=>this.props.navigation.navigate('SignUp')} />
                </View>
            </View>
        );
    }
}