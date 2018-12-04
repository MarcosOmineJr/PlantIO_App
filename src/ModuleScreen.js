import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
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
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.moduleInfo}>
                    <View style={styles.sensors}>
                        <View style={styles.weatherIcon}>
                            <CustomIcon name={this.props.navigation.state.params.weather.icon} size={30} color={ Palette.text } />
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