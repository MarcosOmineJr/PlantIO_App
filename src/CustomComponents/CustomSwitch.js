import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    Animated
} from 'react-native';


import { Palette } from '../Styles';


const { height } = Dimensions.get('screen');
const AnimatedButton = Animated.createAnimatedComponent(TouchableHighlight);


export default class CustomSwitch extends Component {
    constructor(props){
        super(props);
        this.state={
            active: false,
            circleMovement: new Animated.Value(height*0.006),
            outsideColor: new Animated.Value(0),
            innerColor: new Animated.Value(0),
            circleColor: new Animated.Value(0)
        }
        this.activate =this.activate.bind(this);
        this.deactivate =this.deactivate.bind(this);
        this.pressed = this.pressed.bind(this);
    }

    activate(){
        Animated.sequence([

            Animated.parallel([
            
                Animated.timing(
                    this.state.circleMovement,
                    {
                        toValue: height*0.04,
                        duration: 300
                    }
                ),
                Animated.timing(
                    this.state.innerColor,
                    {
                        toValue: 1,
                        duration: 300
                    }
                ),
                Animated.timing(
                    this.state.circleColor,
                    {
                        toValue: 1,
                        duration: 300
                    }
                )

            ]),
            Animated.timing(
                this.state.outsideColor,
                {
                    toValue: 1,
                    duration: 300
                }
            )
        ]).start();
    }

    deactivate(){
        Animated.sequence([

            Animated.parallel([
            
                Animated.timing(
                    this.state.circleMovement,
                    {
                        toValue: height*0.006,
                        duration: 300
                    }
                ),
                Animated.timing(
                    this.state.innerColor,
                    {
                        toValue: 0,
                        duration: 300
                    }
                ),
                Animated.timing(
                    this.state.circleColor,
                    {
                        toValue: 0,
                        duration: 300
                    }
                )

            ]),
            Animated.timing(
                this.state.outsideColor,
                {
                    toValue: 0,
                    duration: 300
                }
            )
        ]).start();
    }

    pressed(){
        if(this.state.active){
            let s = this.state;
            s.active = false;
            this.setState(s);
            this.deactivate();
            this.props.onPress();
        } else {
            let s = this.state;
            s.active = true;
            this.setState({active: true});
            this.activate();
            this.props.onPress();
        }
    }

    render(){

        let outInterpolation = this.state.outsideColor.interpolate({
            inputRange:[0, 1],
            outputRange:[ Palette.text , Palette.accent() ]
        });
        let innerInterpolation = this.state.innerColor.interpolate({
            inputRange:[0, 1],
            outputRange:[ Palette.main, Palette.accent() ]
        });
        let circleColorInterpolation = this.state.circleColor.interpolate({
            inputRange:[0, 1],
            outputRange:[ Palette.accent(), Palette.main ]
        });

        return (
            <AnimatedButton underlayColor={ Palette.accent() } style={[styles.container, { backgroundColor: outInterpolation }]} onPress={()=>this.pressed()} >
                <Animated.View style={[styles.innerLine, { backgroundColor: innerInterpolation, paddingLeft: this.state.circleMovement }]}>
                    <Animated.View style={[styles.circle, { backgroundColor: circleColorInterpolation }]}></Animated.View>
                </Animated.View>
            </AnimatedButton>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        height: height*0.05,
        width: height*0.09,
        borderRadius: height*0.025,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerLine:{
        height: height*0.04,
        width: height*0.08,
        borderRadius: height*0.02,
        padding: height*0.006,
        flexDirection: 'row',
        alignItems: 'center'
    },
    circle:{
        height: height*0.034,
        width: height*0.034,
        borderRadius: height*0.017,
    }
});