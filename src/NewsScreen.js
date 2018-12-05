import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    FlatList,
    RefreshControl
} from 'react-native';


import generalStyles from './Styles';
import NewsCard from './CustomComponents/NewsCard';
import InfoBar from './CustomComponents/InfoBar';


const styles = StyleSheet.create(generalStyles.newsScreen);
const { width } = Dimensions.get('screen');


export default class NewsScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
            refreshing: true
        }
        this.fetchData = this.fetchData.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
    }

    fetchData(){
        let token = '876bbc7256014ab3adf873fb0491ece2';
        let page = 1;
        let keywords = ['orgânico', 'alimentação', 'saúde', 'horta', 'alface', 'tomate', 'pimentão', 'cenoura', 'paisagismo', 'pesticida', 'agrotóxico', '"senado filho da puta fodendo os brasileiros todo dia"']
        let url = 'https://newsapi.org/v2/everything?q=';
        for(let i = 0; i < keywords.length; i++){
            if(i < keywords.length-1){
                url += keywords[i] + ' OR '
            } else {
                url += keywords[i]
            }
        }
        url += '&pageSize=10&page='+page
        let encodedURL = encodeURI(url);

        fetch(encodedURL, {method:'GET', headers:new Headers({"Authorization":token})})
            .then((r)=>r.json())
                .then((obj)=>{
                    let s  = this.state;
                    s.list = obj.articles;
                    s.refreshing = false
                    this.setState(s);
                });
    }

    componentDidMount(){
        this.fetchData();
    }

    _onRefresh(){
        let s = this.state;
        s.refreshing = true;
        this.setState(s);
        this.fetchData();
    }

    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={{width: width, alignItems: 'center'}}
                    data={this.state.list}
                    renderItem={({item})=><NewsCard data={item} navigation={this.props.navigation} />}
                    keyExtractor={(item, index)=>item.title}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                />
                <InfoBar text='Notícias de Agronomia' renderBackButton={true} navigation={this.props.navigation} backRoute='Hints' />
            </View>
        );
    }
}