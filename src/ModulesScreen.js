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
import { getDataFromAsyncStorage, fetchDataFromPlantIOAPI, fetchDataFromClimatempoAPI } from'./services/Fetch';
import TouchableModuleCard from './CustomComponents/TouchableModuleCard';
import WeatherCard from './CustomComponents/WeatherCard';
import InfoBar from './CustomComponents/InfoBar';


const styles = StyleSheet.create(generalStyles.modulesScreen);
const { width } = Dimensions.get('screen');


export default class ModulesScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            pIOData:{},
            list:[],
            refreshing: true,
        }
        this.fetchData = this.fetchData.bind(this);
        this.getModulesList = this.getModulesList.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
        //this.timeBasedRefresher = setInterval(async()=>{let data = await AsyncStorage.getItem('PLANT_IO_DATA'); let s = this.state; s.pIOData = data; s.list=data.modules; this.setState(s);}, 1000);
    }

    async componentDidMount(){
        await this.fetchData();
    }

    async getModulesList(){
        let data = await getDataFromAsyncStorage('PLANT_IO_DATA');
        let s = this.state;
        s.pIOData = data;
        s.list = data.modules;
        this.setState(s);
    }
    
    async fetchData(){
        let s = this.state;
        s.refreshing = true;
        this.setState(s);
        let r = await fetchDataFromPlantIOAPI('getModules.php');
        await AsyncStorage.setItem('PLANT_IO_DATA', JSON.stringify(r));
        await this.getModulesList();
        await fetchDataFromClimatempoAPI();
        let disableRefresh = ()=>{
            let s = this.state;
            s.refreshing = false;
            this.setState(s);
        }
        disableRefresh();
    }


    _onRefresh(){
        this.fetchData();
    }
    
    render(){
        console.log(this.state);
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <FlatList
                    contentContainerStyle={{width: width,  alignItems: 'center'}}
                    data={this.state.list}
                    renderItem={({item})=><TouchableModuleCard data={item} navigation={this.props.navigation} />}
                    keyExtractor={(item, index)=>item.key.toString()}
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