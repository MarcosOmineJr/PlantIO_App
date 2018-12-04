import React, { Component } from 'react';
import {
    StyleSheet,
    StatusBar,
    View,
    FlatList
} from 'react-native';


import generalStyles from './Styles';
import TouchableModuleCard from './CustomComponents/TouchableModuleCard';
import WeatherCard from './CustomComponents/WeatherCard';
import InfoBar from './CustomComponents/InfoBar';


const styles = StyleSheet.create(generalStyles.modulesScreen);


export default class ModulesScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[
                {key:'1', name: 'Módulo 1', light: false, soil:true, waterLevel:2},
                {key:'2', name: 'Xablauzinho', light: true, soil:true, waterLevel:1},
                {key:'3', name: 'Modulozaço', light: true, soil:false, waterLevel:3},
                {key:'4', name: 'Módulotron', light: false, soil:false, waterLevel:3},
                {key:'5', name: 'Plant IO', light: true, soil:false, waterLevel:1},
                {key:'6', name: 'Halala', light: false, soil:false, waterLevel:2}
            ],
            weather:{
                min: 10,
                max: 20,
                icon: '2rn'
            }
        }
    }
    
    render(){
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <FlatList contentContainerStyle={styles.modulesList}
                    data={this.state.list}
                    renderItem={({item})=><TouchableModuleCard data={item} weather={this.state.weather} navigation={this.props.navigation} />}
                />
                <WeatherCard weather={this.state.weather} />
                <InfoBar text='Lista de módulos e Clima' />
            </View>
        );
    }
}