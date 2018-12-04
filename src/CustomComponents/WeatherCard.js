import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Text
} from 'react-native';


import { Palette, date, season } from '../Styles';
import CustomIcon from './CustomIcon';


const { height, width } = Dimensions.get('screen');


export default class WeatherCard extends Component {

    constructor(props){
        super(props);
        this.state={

        }
        this.month = ['NOV', 'DEZ', 'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ', 'JAN', 'FEV'];
        this.today = date;
        this.season = season;
        this.seasonPT = this.translateSeason();
    }

    translateSeason(){
        let temp;
            switch(this.season){
                case 'summer':
                    temp = 'Verão';
                    break;
                case 'fall':
                    temp = 'Outono';
                    break;
                case 'winter':
                    temp = 'Inverno';
                    break;
                case 'spring':
                    temp = 'Primavera';
                    break;
            }
            return temp;
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.month}>
                    <Text style={styles.monthTxtInactive}>{this.month[this.today.getMonth()]}</Text>
                    <Text style={styles.monthTxtInactive}>{this.month[this.today.getMonth()+1]}</Text>
                    <Text style={styles.monthTxtActive}>{this.month[this.today.getMonth()+2]}</Text>
                    <Text style={styles.monthTxtInactive}>{this.month[this.today.getMonth()+3]}</Text>
                    <Text style={styles.monthTxtInactive}>{this.month[this.today.getMonth()+4]}</Text>
                </View>
                <View style={styles.weather}>
                    <View style={styles.weatherCard}>
                        <View style={styles.weatherDayContainer}>
                            <Text style={styles.weatherDay}>Hoje</Text>
                        </View>
                        <View style={styles.weatherIconContainer}>
                            <CustomIcon name={this.props.weather.icon} size={35} color={Palette.text} />
                        </View>
                        <View style={styles.minMaxTemperatureContainer}>
                            <Text style={styles.minTemperature}>{this.props.weather.min}º</Text>
                            <Text style={styles.maxTemperature}>{this.props.weather.max}º</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.season}>
                    <View style={styles.circleOutline}>
                        <View style={styles.circleInline}></View>
                    </View>
                    <Text style={styles.seasonTxt}>{this.seasonPT}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width: '90%',
        height: '45%',
        backgroundColor: Palette.main,
        borderTopLeftRadius: width*0.01,
        borderTopRightRadius: width*0.01,
        marginTop: height*0.02
    },
    month:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: width*0.08
    },
    monthTxtInactive:{
        fontFamily: 'comfortaa',
        color: Palette.accent(0.3),
        fontSize: height*0.025
    },
    monthTxtActive:{
        fontFamily: 'comfortaa',
        color: Palette.text,
        fontSize: height*0.035
    },
    weather:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width*0.08,
        paddingVertical: height*0.02
    },
    weatherCard:{
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        borderRadius: width*0.01,
        backgroundColor: Palette.accent(0.3)
    },
    weatherDayContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    weatherDay:{
        fontFamily: 'comfortaa',
        fontSize: height*0.035,
        color: Palette.text
    },
    weatherIconContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    minMaxTemperatureContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingRight: width*0.03
    },
    minTemperature:{
        fontFamily: 'comfortaa',
        fontSize: height*0.03,
        color: Palette.main
    },
    maxTemperature:{
        fontFamily: 'comfortaa',
        fontSize: height*0.04,
        color: Palette.text
    },
    season:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: width*0.05
    },
    circleOutline:{
        justifyContent: 'center',
        alignItems: 'center',
        height: width*0.1,
        width: width*0.1,
        borderRadius: width*0.05,
        backgroundColor: Palette.text
    },
    circleInline:{
        height: width*0.085,
        width: width*0.085,
        borderRadius: width*0.0425,
        backgroundColor: Palette.main
    },
    seasonTxt:{
        fontFamily: 'comfortaa',
        color: Palette.text,
        fontSize: height*0.025,
        marginLeft: width*0.03
    }
});