import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    View,
    Text,
    Animated
} from 'react-native';
import Collapsible from 'react-native-collapsible';


import { Palette } from '../Styles';


const { height, width } = Dimensions.get('screen');
const AnimatedButton = Animated.createAnimatedComponent(TouchableHighlight);


export default class HintCard extends Component {
    constructor(props){
        super(props);
        this.state={
            btnBG: new Animated.Value(0),
            collapsed: this.props.collapsed
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.pressed = this.pressed.bind(this);
    }

    open(){
        Animated.timing(
            this.state.btnBG,
            {
                toValue:1,
                duration:500
            }
        ).start();
    }

    close(){
        Animated.timing(
            this.state.btnBG,
            {
                toValue:0,
                duration:500
            }
        ).start();
    }

    pressed(){
        let s = this.state
        if(s.collapsed){
            s.collapsed = false;
            this.open();
        } else {
            s.collapsed = true;
            this.close();
        }
        this.setState(s);
    }

    render(){
        
        let btnBG = this.state.btnBG.interpolate({
            inputRange:[0, 1],
            outputRange:[Palette.main, Palette.accent()]
        });
        let txt;
        if(this.props.data.special[0] !== ''){
            txt = this.props.data.history+'\n\n'+this.props.data.special[0]+'\n\n- '+this.props.data.special[1]+'\n\n- '+this.props.data.special[2]+'\n\n- '+this.props.data.special[3]+'\n\n- '+this.props.data.special[4];
        } else {
            txt = this.props.data.history
        }

        return(
            <View style={styles.container}>
                <AnimatedButton underlayColor={(this.state.collapsed)? Palette.main : Palette.accent() } style={{...styles.btn, backgroundColor: btnBG}} onPress={this.pressed}>
                    <Text style={styles.title}>{this.props.data.title}</Text>
                </AnimatedButton>
                <Collapsible style={styles.txtContainer} collapsed={this.state.collapsed}>
                    <View>
                        <Text style={styles.txt}>
                            {txt}
                        </Text>
                    </View>
                </Collapsible>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width: width,
        paddingHorizontal: width*0.05,
        marginBottom: height*0.03
    },
    btn:{
        height: height*0.1,
        width: '100%',
        paddingHorizontal: width*0.07,
        justifyContent: 'center',
        borderRadius: width*0.01,
        zIndex: 2
    },
    title:{
        fontFamily: 'comfortaa',
        fontSize: height*0.03,
        color: Palette.text
    },
    txtContainer:{
        width: '100%',
        paddingHorizontal: width*0.07,
        paddingBottom: width*0.07,
        paddingTop: (width*0.07+height*0.01),
        justifyContent: 'center',
        borderBottomLeftRadius: width*0.01,
        borderBottomRightRadius: width*0.01,
        marginTop: -(height*0.01),
        backgroundColor: Palette.main
    },
    txt:{
        fontFamily: 'cabin',
        fontSize: height*0.023,
        color: Palette.text
    }
});