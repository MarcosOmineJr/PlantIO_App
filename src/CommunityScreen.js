import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';


import generalStyles from './Styles';
import InfoBar from './CustomComponents/InfoBar';
import CommunityCard from './CustomComponents/CommunityCard';


const styles = StyleSheet.create(generalStyles.communityScreen);

export default class CommunityScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[
                {key:'0', image: require('../assets/img/plant_io_logo.png'), title:'“Plantio”, uma revolução no mercado de orgânicos.', subtitle:'A tecnologia inovadora busca tornar acessível o consumo de orgânicos.', text:'O projeto com inicio em 2018, por alunos de Design Digital da faculdade Anhembi Morumbi, denominado “Plantio”, tem como objetivo facilitar e aumentar a consumo de produtos de origem orgânica no Brasil. O Plantio trata-se de um vaso inteligente, capaz de cuidar das necessidades de plantas desde sua fase de muda até a colheita, exigindo um cuidado mínimo por parte do usuário.  Toda a configuração é possível através de um aplicativo de celular, onde também é possível supervisionar detalhes como a fase de crescimento e clima.\n\nInicialmente o vaso será comercializado em uma escala menor, para ser utilizado em ambientes pequenos, servindo para consumo próprio. Todavia, existe a intenção de aumentar essa escala e produzir um modelo maior e mais complexo para que seja usado para plantações em massa.\n\nQuanto custará?\n\nO preço ainda não foi divulgado, mas o projeto busca ser acessível para todos que estejam interessados e seu lançamento será por volta de 2020.'},
                {key:'1', image: require('../assets/img/feira.png'), title:'Grande feira de orgânicos em São Paulo.', subtitle:'Em sua primeira edição será organizada por produtores locais.', text:'A feira terá sua primeira edição em 2019, o evento, promete reunir produtores de todo o Brasil, para que haja troca de informações e produtos, procurando reunir a comunidade. O evento não será fechado, ou seja, consumidores e interessados são bem-vindos a participar.\n\nA existência de pequenas feiras de orgânicos já é costume no Brasil, contudo, os organizadores estão querendo mudar isso e tornar o evento anual casa sua primeira edição atinja suas metas, que ocorrerá entre os dias 10 e 12 de Março, na Expo Center São Paulo.\n\nOs ingressos ainda não estão disponíveis para o público, contudo produtores já podem pedir para reservar um espaço no evento através de seu site.'},
                {key:'2', image: require('../assets/img/biomix.png'), title:'Oferta imperdível de condicionador tipo A.', subtitle:'Não perca a oportunidade para comprar o solo ideal para suas plantas.', text:'Durante o mês de feveiro a Leroy Merlin fará uma promoção na linha agrícola da Biomix, chegando a 50% de desconto em alguns dos produtos, informe-se sobre a loja participante mais próxima. Vale lembrar que a Biomix está a 25 anos no mercado, oferecendo sempre produtos orgânicos com a aprovação do Ministério de Agricultura.\n\nA promoção ocorrerá no mês inteiro, desde o dia 1 até ao 28, contudo poderá haver algumas mudanças dependendo da loja, então não deixe de perguntar.'}
            ]
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.list}
                    renderItem={({item})=><CommunityCard data={item} navigation={this.props.navigation} />}
                />
                <InfoBar text='Comunidade Agronomia' renderBackButton={true} navigation={this.props.navigation} backRoute='News' />
            </View>
        );
    }
}