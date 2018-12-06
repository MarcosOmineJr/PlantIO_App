import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Dimensions,
    Alert,
    AsyncStorage
} from 'react-native';

import generalStyles from './Styles';
import LeafButton from './CustomComponents/LeafButton';
import { onSignUp } from './services/Auth';

const styles = StyleSheet.create(generalStyles.signUp);
const { height } = Dimensions.get('screen');

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            moduleCode:'',
            moduleName:''
        }

        this.setInputText = this.setInputText.bind(this);
        this.createAccount = this.createAccount.bind(this);
    }

    async createAccount(){
        if(this.state.email == ''){
            Alert.alert('Preencha o e-mail', 'preencha o campo do e-mail!');
            return false;
        } else if(this.state.password == ''){
            Alert.alert('Preencha a senha', 'preencha o campo da senha!');
            return false;
        } else if(this.state.moduleCode == ''){
            Alert.alert('Preencha o código do módulo', 'preencha o campo do código do módulo!');
            return false;
        } else if(this.state.moduleName == ''){
            Alert.alert('Preencha o nome do módulo', 'preencha o campo do nome do módulo com qualquer nome que queira dar!');
            return false;
        } else{
            let send = {
                email: this.state.email,
                password: this.state.password,
                moduleCode: this.state.moduleCode,
                moduleName: this.state.moduleName
            };
            await onSignUp(send);
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
            case 'moduleCode':
            s.moduleCode = text;
            break;
            case 'moduleName':
            s.moduleName = text;
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
                    <View style={[styles.horizontalInput, {marginBottom: height*0.04}]}>
                        <LeafButton label='Senha' widthMultiplier={0.23} useOpacity={true} />
                        <TextInput style={styles.hiInput} textContentType='password' secureTextEntry={true} underlineColorAndroid='transparent' onChangeText={(t)=>this.setInputText(t, 'password')} />
                    </View>
                    <View style={styles.verticalInput}>
                        <LeafButton style={styles.label} label='Código do Módulo' widthMultiplier={0.5} useOpacity={true} />
                        <TextInput style={styles.normalInput} underlineColorAndroid='transparent' onChangeText={(t)=>this.setInputText(t, 'moduleCode')} />
                    </View>
                    <View style={styles.verticalInput}>
                        <LeafButton style={styles.label} label='Nome do Módulo' widthMultiplier={0.5} useOpacity={true} />
                        <TextInput style={styles.normalInput} underlineColorAndroid='transparent' onChangeText={(t)=>this.setInputText(t, 'moduleName')} />
                    </View>
                    <LeafButton style={styles.signUpBtn} label='Confirmar' widthMultiplier={0.3} onPress={()=>this.createAccount().then((r)=>(!r)? ()=>{} : this.props.navigation.navigate('SignedIn'))} />
                    <LeafButton style={styles.loginBtn} label='Já tem conta? Entre Aqui' widthMultiplier={0.9} onPress={()=>this.props.navigation.navigate('Login')} />
                </View>
            </View>
        );
    }
}