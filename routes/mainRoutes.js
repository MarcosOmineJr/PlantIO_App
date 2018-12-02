import { createBottomTabNavigator } from 'react-navigation';


import ModulesScreen from '../src/ModulesScreen';
import HintsScreen from '../src/HintsScreen';
import NewsScreen from '../src/NewsScreen';
import CommunityScreen from '../src/CommunityScreen';


const TabNavigator = createBottomTabNavigator({
    ModulesScreen:{
        screen: ModulesScreen,
        navigationOptions:{
            tabBarLabel: 'Módulos',
            tabBarIcon: null //Mudar depois
        }
    },
    HintsScreen:{
        screen: HintsScreen,
        navigationOptions:{
            tabBarLabel: 'Dicas',
            tabBarIcon: null //Mudar depois
        }
    },
    NewsScreen:{
        screen: NewsScreen,
        navigationOptions:{
            tabBarLabel: 'Notícias',
            tabBarIcon: null //Mudar depois
        }
    },
    CommunityScreen:{
        screen: CommunityScreen,
        navigationOptions:{
            tabBarLabel: 'Comunidade',
            tabBarIcon: null //Mudar depois
        }
    },
});

export default TabNavigator;