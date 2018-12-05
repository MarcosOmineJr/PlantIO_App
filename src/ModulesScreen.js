import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    StatusBar,
    View,
    FlatList,
    RefreshControl,
    AsyncStorage
} from 'react-native';


import generalStyles from './Styles';
import TouchableModuleCard from './CustomComponents/TouchableModuleCard';
import WeatherCard from './CustomComponents/WeatherCard';
import InfoBar from './CustomComponents/InfoBar';


const styles = StyleSheet.create(generalStyles.modulesScreen);
const { width } = Dimensions.get('screen');


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
            refreshing: false,
        }

        this.fetchData = this.fetchData.bind(this);
        this._onRefresh = this._onRefresh.bind(this);

        this.fetchData();
    }

    async fetchData(){
        let token = 'e5443796bd91dc9b9da8bddb95b5aee3';

        let r = await fetch('https://apiadvisor.climatempo.com.br/api/v1/forecast/locale/3477/days/15?token='+token);
        let responseText = await r.text();
        AsyncStorage.setItem('WEATHER_INFO', responseText);
    }

    componentDidMount(){
        this.fetchData();
    }

    _onRefresh(){
        let s = this.state;
        s.refreshing = true;
        this.setState(s);
        this.fetchData();
    }
    
    render(){

        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <FlatList
                    contentContainerStyle={{width: width, alignItems: 'center'}}
                    data={this.state.list}
                    renderItem={({item})=><TouchableModuleCard data={item} weather={this.state.weather} navigation={this.props.navigation} />}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={()=>this._onRefresh}
                        />
                    }
                />
                <WeatherCard refreshing={this.state.refreshing} />
                <InfoBar text='Lista de Módulos e clima'/>
            </View>
        );
    }
}