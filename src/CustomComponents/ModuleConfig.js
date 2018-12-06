import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native';


import { Palette } from '../Styles';
import LeafButton from './LeafButton';
import IconSelectorButton from './IconSelectorButton';
import CustomIcon from './CustomIcon';


const { height, width } = Dimensions.get('screen');


export default class ModuleConfig extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.delBtnContainer}>
                    <LeafButton label='Excluir' widthMultiplier={0.23} onPress={()=>this.props.navigation.goBack()} />
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.verticalInput}>
                        <LeafButton style={styles.label} label='Nome do Módulo' widthMultiplier={0.5} useOpacity={true} />
                        <TextInput style={styles.normalInput} underlineColorAndroid='transparent' />
                    </View>
                    <View style={styles.horizontalView}>
                        <IconSelectorButton id={0} data={this.props.navigation.state.params.module} navigation={this.props.navigation} tintColor={ Palette.main } bgColor={ Palette.accent() } underlayColor={ Palette.accent(0.3) } onPress={()=>this.props.navigation.navigate('IconPicker')} />
                        <IconSelectorButton id={1} data={this.props.navigation.state.params.module} navigation={this.props.navigation} tintColor={ Palette.main } bgColor={ Palette.accent() } underlayColor={ Palette.accent(0.3) } onPress={()=>this.props.navigation.navigate('IconPicker')} />
                        <IconSelectorButton id={2} data={this.props.navigation.state.params.module} navigation={this.props.navigation} tintColor={ Palette.main } bgColor={ Palette.accent() } underlayColor={ Palette.accent(0.3) } onPress={()=>this.props.navigation.navigate('IconPicker')} />
                    </View>
                    <View style={[styles.horizontalView, { paddingTop: height*0.03 }]}>
                        <TouchableHighlight style={styles.backButton} onPress={()=>this.props.navigation.goBack()}>
                            <CustomIcon name="arrow-left" size={26} color={ Palette.text } />
                        </TouchableHighlight>
                        <LeafButton label='Confirmar' widthMultiplier={0.7} onPress={()=>this.props.navigation.goBack()} />
                    </View>
                </View>
                <View style={styles.filler}>
            
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: Palette.main
    },
    delBtnContainer:{
        flex: 1,
        width: '100%',
        paddingHorizontal: width*0.05,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems:'flex-end'
    },
    contentContainer:{
        flex: 3,
        width: '100%',
        paddingTop: height*0.02,
        alignItems:'center'
    },
    verticalInput:{
        width: '90%',
        flexDirection: 'column',
        marginBottom: height*0.02
    },
    label:{
        marginBottom: height*0.02
    },
    normalInput:{
        width: '100%',
        height: height*0.06,
        backgroundColor: Palette.text,
        borderRadius: width*0.01,
        paddingHorizontal: 10,
        fontSize: 20,
        color: Palette.accent()
    },
    horizontalView:{
        width: '100%',
        paddingHorizontal: width*0.05,
        paddingBottom: height*0.02,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backButton:{
        height: height*0.06,
        width: height*0.06,
        backgroundColor: Palette.accent(),
        justifyContent:'center',
        alignItems:'center',
        borderRadius: height*0.005
    },
    filler:{
        flex: 2,
        width: '100%'
    }
});