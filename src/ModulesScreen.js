import React, { Component } from 'react';
import {
    StyleSheet,
    StatusBar,
    View,
    FlatList
} from 'react-native';


import generalStyles from './Styles';
import ModuleCard from './CustomComponents/ModuleCard';
import WeatherCard from './CustomComponents/WeatherCard';
import InfoBar from './CustomComponents/InfoBar';


const styles = StyleSheet.create(generalStyles.modulesScreen);


export default class ModulesScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[
                {key:'1', name: 'Módulo 1'},
                {key:'2', name: 'Xablauzinho'},
                {key:'3', name: 'Modulozaço'},
                {key:'4', name: 'Módulotron'},
                {key:'5', name: 'Plant IO'},
                {key:'6', name: 'Halala'}
            ]
        }
    }
    
    render(){
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <FlatList contentContainerStyle={styles.modulesList}
                    data={this.state.list}
                    renderItem={({item})=><ModuleCard data={item} navigation={this.props.navigation} />}
                />
                <WeatherCard />
                <InfoBar text='Lista de módulos e Clima' />
            </View>
        );
    }
}