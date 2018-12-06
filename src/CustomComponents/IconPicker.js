import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    TouchableHighlight,
    Text,
    Image,
    Animated,
    AsyncStorage
} from 'react-native';


import { Palette } from '../Styles';
import { getDataFromAsyncStorage } from '../services/Fetch';
import CustomIcon from './CustomIcon';


const { height, width } = Dimensions.get('screen');
const AnimatedButton = Animated.createAnimatedComponent(TouchableHighlight);


export default class IconPicker extends Component {
    constructor(props){
        super(props);
        this.state={
            modules:[],
            activeIcon:'',
            iconBG: [new Animated.Value(0), new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)]
        };

        this.getModulesList = this.getModulesList.bind(this);
        this.setIcon = this.setIcon.bind(this);
        this.activeAnimation = this.activeAnimation.bind(this);
        this.inactiveAnimation = this.inactiveAnimation.bind(this);
        this.confirmIcon = this.confirmIcon.bind(this);
    }

    componentDidMount(){
        this.getModulesList();
    }

    async getModulesList(){
        let pIOData = await getDataFromAsyncStorage('PLANT_IO_DATA');
        let s = this.state;
        s.modules = pIOData.modules;
        this.setState(s);
    }

    activeAnimation(icon){
        Animated.timing(
            this.state.iconBG[icon],
            {
                toValue: 1,
                duration: 200
            }
        ).start();
    }

    inactiveAnimation(icon){
        Animated.timing(
            this.state.iconBG[icon],
            {
                toValue: 0,
                duration: 200
            }
        ).start();
    }

    async confirmIcon(){
        let s = this.state;
        try{
            s.modules[this.props.navigation.state.params.module.key].icons[this.props.navigation.state.params.iconId] = this.state.activeIcon;
            this.setState(s);
            await AsyncStorage.setItem('PLANT_IO_DATA', JSON.stringify(s.modules));
            let test = await AsyncStorage.getItem('PLANT_IO_DATA');
            console.log('Teste:\n\n'+test)
        }
        catch(error){
            console.log(error.message);
        }
        console.log(s.modules[parseInt(this.props.navigation.state.params.module.key)]);
    }

    setIcon(icon){
        let s = this.state;
        switch(icon){
            case 0:
            this.activeAnimation(0);
            this.inactiveAnimation(1);
            this.inactiveAnimation(2);
            this.inactiveAnimation(3);
            s.activeIcon = '../../assets/icons/alface.png'
            break;
            case 1:
            this.inactiveAnimation(0);
            this.activeAnimation(1);
            this.inactiveAnimation(2);
            this.inactiveAnimation(3);
            s.activeIcon = '../../assets/icons/espinafre.png'
            break;
            case 2:
            this.inactiveAnimation(0);
            this.inactiveAnimation(1);
            this.activeAnimation(2);
            this.inactiveAnimation(3);
            s.activeIcon = '../../assets/icons/hortela.png'
            break;
            case 3:
            this.inactiveAnimation(0);
            this.inactiveAnimation(1);
            this.inactiveAnimation(2);
            this.activeAnimation(3);
            s.activeIcon = '../../assets/icons/pimenta.png'
            break;
        }
        this.setState(s);
    }

    render(){
        let bgAnimation = [this.state.iconBG[0].interpolate({
            inputRange:[0,1],
            outputRange:[ Palette.main, Palette.text ]
        }), this.state.iconBG[1].interpolate({
            inputRange:[0,1],
            outputRange:[ Palette.main, Palette.text ]
        }), this.state.iconBG[2].interpolate({
            inputRange:[0,1],
            outputRange:[ Palette.main, Palette.text ]
        }), this.state.iconBG[3].interpolate({
            inputRange:[0,1],
            outputRange:[ Palette.main, Palette.text ]
        })]
        
        return (
            <View style={styles.container}>
                <View style={styles.iconsContainer}>
                    <View style={styles.horizontalContainer}>
                        <AnimatedButton underlayColor='transparent' style={{...styles.iconBtn, backgroundColor: bgAnimation[0]}} onPress={()=>this.setIcon(0)}>
                            <Image style={styles.icon} resizeMode='contain' source={require('../../assets/icons/alface.png')} />
                        </AnimatedButton>
                        <AnimatedButton underlayColor='transparent' style={{...styles.iconBtn, backgroundColor: bgAnimation[1]}} onPress={()=>this.setIcon(1)}>
                            <Image style={styles.icon} resizeMode='contain' source={require('../../assets/icons/espinafre.png')} />
                        </AnimatedButton>
                        <AnimatedButton underlayColor='transparent' style={{...styles.iconBtn, backgroundColor: bgAnimation[2]}} onPress={()=>this.setIcon(2)}>
                            <Image style={styles.icon} resizeMode='contain' source={require('../../assets/icons/hortela.png')} />
                        </AnimatedButton>
                    </View>
                    <View style={styles.horizontalContainer}>
                        <AnimatedButton underlayColor='transparent' style={{...styles.iconBtn, backgroundColor: bgAnimation[3]}} onPress={()=>this.setIcon(3)}>
                            <Image style={styles.icon} resizeMode='contain' source={require('../../assets/icons/pimenta.png')} />
                        </AnimatedButton>
                    </View>
                </View>
                
                <View style={styles.horizontalContainer}>
                    <TouchableHighlight style={styles.backButton} onPress={()=>this.props.navigation.goBack()}>
                        <CustomIcon name="arrow-left" size={26} color={ Palette.text } />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.confirmButton} onPress={()=>this.confirmIcon().then(this.props.navigation.navigate('ModuleScreen', {module: this.state.modules[this.props.navigation.state.params.module.key]}))}>
                        <Text style={styles.btntxt}>Confirmar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Palette.main,
        paddingHorizontal: width*0.05,
        paddingTop: height*0.02
    },
    iconsContainer:{
        width: '100%'
    },
    horizontalContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: height*0.05
    },
    iconBtn:{
        borderRadius: height*0.005,
        backgroundColor: Palette.text
    },
    icon:{
        width: height*0.1,
        height: height*0.1
    },
    backButton:{
        height: height*0.07,
        width: height*0.07,
        backgroundColor: Palette.accent(),
        justifyContent:'center',
        alignItems:'center',
        borderRadius: height*0.005
    },
    confirmButton:{
        height: height*0.07,
        width: width*0.7,
        backgroundColor: Palette.accent(),
        justifyContent:'center',
        alignItems:'center',
        borderRadius: height*0.005
    },
    btntxt:{
        fontFamily: 'comfortaa',
        fontSize: height*0.03,
        color: Palette.text
    }
});