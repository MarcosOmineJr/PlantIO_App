import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';

import generalStyles from './Styles';
import LeafButton from './CustomComponents/LeafButton';

const styles = StyleSheet.create(generalStyles.addModule);

export default class Login extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={styles.verticalInput}>
                        <LeafButton style={styles.label} label='Código do Módulo' widthMultiplier={0.5} useOpacity={true} />
                        <TextInput style={styles.normalInput} textContentType='emailAddress' keyboardType='email-address' underlineColorAndroid='transparent' />
                    </View>
                    <View style={styles.verticalInput}>
                        <LeafButton style={styles.label} label='Nome do Módulo' widthMultiplier={0.5} useOpacity={true} />
                        <TextInput style={styles.normalInput} textContentType='password' secureTextEntry={true} underlineColorAndroid='transparent' />
                    </View>
                    <LeafButton style={styles.addBtn} label='Adicionar' widthMultiplier={0.35} onPress={()=>this.props.navigation.goBack()} />
                </View>
            </View>
        );
    }
}