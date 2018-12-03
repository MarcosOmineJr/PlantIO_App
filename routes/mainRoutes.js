import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';


import CustomIcon from '../src/CustomComponents/CustomIcon';
import Modules from './modules';
import Hints from './hints';
import News from './news';
import Community from './community';
import { Palette } from '../src/Styles';


const TabNavigator = createBottomTabNavigator({
    Modules:{
        screen: Modules,
        navigationOptions:{
            tabBarLabel: 'Módulos',
            tabBarIcon: ({focused})=>{return (focused)? <CustomIcon name="leaves" size={26} color={Palette.main} /> : <CustomIcon name="leaves" size={26} color='#cccccc' />}
        }
    },
    Hints:{
        screen: Hints,
        navigationOptions:{
            tabBarLabel: 'Dicas',
            tabBarIcon: ({focused})=>{return (focused)? <CustomIcon name="exclamation" size={26} color={Palette.main} /> : <CustomIcon name="exclamation" size={26} color='#cccccc' />}
        }
    },
    News:{
        screen: News,
        navigationOptions:{
            tabBarLabel: 'Notícias',
            tabBarIcon: ({focused})=>{return (focused)? <CustomIcon name="news" size={26} color={Palette.main} /> : <CustomIcon name="news" size={26} color='#cccccc' />}
        }
    },
    Community:{
        screen: Community,
        navigationOptions:{
            tabBarLabel: 'Comunidade',
            tabBarIcon: ({focused})=>{return (focused)? <CustomIcon name="community" size={26} color={Palette.main} /> : <CustomIcon name="community" size={26} color='#cccccc' />}
        }
    },
}, {
    tabBarOptions:{
        showLabel: false,
        style:{borderTopColor:'transparent'}
    }
});

export default TabNavigator;