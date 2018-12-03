import React from 'react';
import { createStackNavigator } from 'react-navigation';

import NewsScreen from '../src/NewsScreen';
import Header from '../src/CustomComponents/Header';


const news = createStackNavigator({
    NewsScreen:{
        screen:NewsScreen,
        navigationOptions:({navigation})=>{
            return {
                header: <Header title='Notícias' navigation={navigation} />
            }
        }
    }
});

export default news;