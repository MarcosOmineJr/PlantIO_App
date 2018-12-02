import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Dimensions
} from 'react-native';

import generalStyles from './Styles';
import LeafButton from './CustomComponents/LeafButton';

const styles = StyleSheet.create(generalStyles.signUp);
const { height } = Dimensions.get('screen');

export default class SignUp extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <LeafButton style={styles.loginBtn} label='Já tem conta? Entre Aqui' widthMultiplier={0.9} onPress={()=>this.props.navigation.navigate('Login')} />
                    <View style={styles.horizontalInput}>
                        <LeafButton label='E-Mail' widthMultiplier={0.23} useOpacity={true} />
                        <TextInput style={styles.hiInput} textContentType='emailAddress' keyboardType='email-address' underlineColorAndroid='transparent' />
                    </View>
                    <View style={[styles.horizontalInput, {marginBottom: height*0.04}]}>
                        <LeafButton label='Senha' widthMultiplier={0.23} useOpacity={true} />
                        <TextInput style={styles.hiInput} textContentType='password' secureTextEntry={true} underlineColorAndroid='transparent' />
                    </View>
                    <View style={styles.verticalInput}>
                        <LeafButton style={styles.label} label='Código do Módulo' widthMultiplier={0.5} useOpacity={true} />
                        <TextInput style={styles.normalInput} underlineColorAndroid='transparent' />
                    </View>
                    <View style={styles.verticalInput}>
                        <LeafButton style={styles.label} label='Nome do Módulo' widthMultiplier={0.5} useOpacity={true} />
                        <TextInput style={styles.normalInput} underlineColorAndroid='transparent' />
                    </View>
                    <LeafButton style={styles.signUpBtn} label='Confirmar' widthMultiplier={0.3} onPress={()=>alert('Pressionou Confirmar')} />
                </View>
            </View>
        );
    }
}