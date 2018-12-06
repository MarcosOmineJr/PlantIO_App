import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Text
} from 'react-native';


import { Palette, season } from '../Styles';
import AutomaticModeStatusBar from './AutomaticModeStatusBar';
import { convertFetchedDataFromPlantIOAPI } from '../services/Fetch';
import RoundButton from './RoundButton';


const { height, width } = Dimensions.get('screen');


export default class ModuleActionsCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            light: convertFetchedDataFromPlantIOAPI(this.props.data.isLedsOn, 'boolean'),
            soil: convertFetchedDataFromPlantIOAPI(this.props.data.isPumpOn, 'boolean'),
            auto: convertFetchedDataFromPlantIOAPI(this.props.auto, 'boolean')
        }
    }

    render(){

        let seasonPT;

        switch(season){
            case 'summer':
                seasonPT = 'Verão';
                break;
            case 'fall':
                seasonPT = 'Outono';
                break;
            case 'winter':
                seasonPT = 'Inverno';
                break;
            case 'spring':
                seasonPT = 'Primavera';
                break;
        }

        if(this.state.auto){
            return (
                <View style={styles.container}>
                    <View style={styles.indicators}>
                        <View style={styles.indicatorsContainer}>
                            <TextIndicator label='Iluminação' active={this.state.light} />
                            <TextIndicator label='Solo' active={this.state.soil} />
                        </View>
                    </View>
                    <View style={{...styles.buttons, flexDirection: 'column'}}>
                        <AutomaticModeStatusBar text='Luz Ligada' active={this.state.light} />
                        <AutomaticModeStatusBar text='Irrigando o Solo' active={this.state.soil} />
                    </View>
                    <View style={styles.season}>
                        <View style={styles.circleOutline}>
                            <View style={styles.circleInline}></View>
                        </View>
                        <Text style={styles.seasonTxt}>{seasonPT}</Text>
                    </View>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <View style={styles.indicators}>
                    <View style={styles.indicatorsContainer}>
                        <TextIndicator label='Iluminação' active={this.state.light} />
                        <TextIndicator label='Solo' active={this.state.soil} />
                    </View>
                </View>
                <View style={styles.buttons}>
                    <RoundButton icon='light' active={this.state.light} tintColor='#F1CD33' onPress={()=>{}} />
                    <RoundButton icon='irrigator' active={this.state.soil} tintColor='#6485C7' onPress={()=>{}} />
                </View>
                <View style={styles.season}>
                    <View style={styles.circleOutline}>
                        <View style={styles.circleInline}></View>
                    </View>
                    <Text style={styles.seasonTxt}>{seasonPT}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width: '90%',
        flex: 4,
        backgroundColor: Palette.main,
        borderTopLeftRadius: width*0.01,
        borderTopRightRadius: width*0.01
    },
    indicators:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width*0.05,
        paddingVertical: width*0.05
    },
    indicatorsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        height: '100%',
        borderRadius: width*0.01,
        backgroundColor: Palette.accent(0.3)
    },
    buttons:{
        flex: 2,
        paddingHorizontal: width*0.05,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    season:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: width*0.03
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




class TextIndicator extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: this.props.active
        }
    }
    render(){
        return (
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{fontFamily: 'comfortaa', fontSize: height*0.03, marginRight: width*0.03, color: Palette.text, lineHeight: height*0.03, textAlignVertical: 'center'}}>{this.props.label}</Text>
                <View style={{width: width*0.045, height: width*0.045, borderRadius: width*0.0225, backgroundColor: Palette.text, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{width: width*0.035, height: width*0.035, borderRadius: width*0.0175, backgroundColor: (this.state.active)? 'yellow' : Palette.text }}></View>
                </View>
            </View>
        );
    }
}