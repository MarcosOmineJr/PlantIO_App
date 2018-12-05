import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    AsyncStorage
} from 'react-native';


import generalStyles from './Styles';
import WaterLevelIndicator from './CustomComponents/WaterLevelIndicator';
import UntouchableModuleCard from './CustomComponents/UntouchableModuleCard';
import IconSelectorButton from './CustomComponents/IconSelectorButton';
import ModuleActionsCard from './CustomComponents/ModuleActionsCard'
import InfoBar from './CustomComponents/InfoBar';


import { Palette } from './Styles';
import CustomIcon from './CustomComponents/CustomIcon';


const styles = StyleSheet.create(generalStyles.moduleScreen);


export default class ModuleScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            weather:{
                text_icon:{
                    icon:{
                        afternoon:'plant-io',
                        dawn:'plant-io',
                        day:'plant-io',
                        morning:'plant-io',
                        night:'plant-io'
                    }
                }
            },
            time: new Date()
        }

        this.getWeatherData = this.getWeatherData.bind(this);
    }

    async getWeatherData(){
        let w = await AsyncStorage.getItem('WEATHER_INFO');
        let parsedW = JSON.parse(w);
        let s = this.state;
        s.weather = parsedW.data[0];
        this.setState(s);
    }

    componentDidMount(){
        this.getWeatherData();
    }


    render(){
        let weatherIcon;
        if(this.state.time.getHours() >= 4 && this.state.time.getHours() < 6){
            weatherIcon = this.state.weather.text_icon.icon.dawn
        } else if(this.state.time.getHours() >= 6 && this.state.time.getHours() < 12){
            weatherIcon = this.state.weather.text_icon.icon.morning
        } else if(this.state.time.getHours() >= 12 && this.state.time.getHours() < 18){
            weatherIcon = this.state.weather.text_icon.icon.afternoon
        } else {
            weatherIcon = this.state.weather.text_icon.icon.night
        }

        return (
            <View style={styles.container}>
                <View style={styles.moduleInfo}>
                    <View style={styles.sensors}>
                        <View style={styles.weatherIcon}>
                            <CustomIcon name={weatherIcon} size={30} color={ Palette.text } />
                        </View>
                        <WaterLevelIndicator data={this.props.navigation.state.params.module} />
                    </View>
                    <View style={styles.moduleCard}>
                        <UntouchableModuleCard item={this.props.navigation.state.params.module} navigation={this.props.navigation} />
                    </View>
                    <View style={styles.iconSelectors}>
                        <IconSelectorButton navigation={this.props.navigation} tintColor={ Palette.accent() } bgColor={ Palette.main } underlayColor={ Palette.accent(0.3) } onPress={()=>this.props.navigation.navigate('IconPicker')} />
                        <IconSelectorButton navigation={this.props.navigation} tintColor={ Palette.accent() } bgColor={ Palette.main } underlayColor={ Palette.accent(0.3) } onPress={()=>this.props.navigation.navigate('IconPicker')} />
                        <IconSelectorButton navigation={this.props.navigation} tintColor={ Palette.accent() } bgColor={ Palette.main } underlayColor={ Palette.accent(0.3) } onPress={()=>this.props.navigation.navigate('IconPicker')} />
                    </View>
                </View>
                <ModuleActionsCard data={this.props.navigation.state.params.module} />
                <InfoBar text='Módulo da Plantação' renderBackButton={true} navigation={this.props.navigation} />
            </View>
        );
    }
}