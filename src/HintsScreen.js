import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';


import generalStyles from './Styles';
import HintCard from './CustomComponents/HintCard';
import InfoBar from './CustomComponents/InfoBar';


const styles = StyleSheet.create(generalStyles.hintsScreen);


export default class HintsScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[
                {key:'0', title:'Dica 1', history:'Lembre-se para  plantar orgânicos, procure produtos com a classificação pelo Ministério da Agricultura, apenas isto poderá confirmar a origem orgânica do solo.', special:['','','','','']},
                {key:'1', title:'Dica 2', history:'Utilizar agrotóxicos está fora de questão, então se faz o uso de pesticidas caseiros ou orgânicos como; Bioisca; spray de pimenta ou urtiga; armadilha amarela; etc.', special:['','','','','']},
                {key:'2', title:'Dica 3', history:'O uso de adubos orgânicos é recomendado para garantir o resultado esperado. O adubo pode ser feito em casa utilizando receitas ou comprado, buscando sempre a classificação do produto pelo Ministério da Agricultura.', special:['','','','','']},
                {key:'3', title:'Dica 4', history:'Plantas como alface e espinafre devem ter suas sementes enterradas em no mínimo dez centímetros de terra.', special:['','','','','']},
                {key:'4', title:'Dicas para plantar Alface', history:'Sua origem está no leste Mediterrâneo e é uma hortaliça da família Astaracea. Trazida para o Brasil pelos portugueses no século XVI. Do tipo folhosa, é conhecida por ser um dos principais ingredientes em saladas. Seu teor calórico é de aproximadamente 15 calorias para cada 100g, contando com vitaminas A, D, B12, B6, C.',
                special:['Cuidados Específicos:', 'Temperatura de 10°C a 24°C;', 'Luminosidade direta maior parte do dia;', 'Irrigação deve ser feita uma vez por dia, para manter o solo úmido;', 'Largura de 10cm a 40cm / altura entre 10cm a 30cm.']},
                {key:'5', title:'Dicas para plantar Espinafre', history:'Originária do sudeste da Ásia faz parte da família das amarantáceas. Um arbusto de folhas comestíveis e estas se revezam na planta. É uma grande fronte de ferro e vitamina A. Assim é um alimento de consumo recomendável para combater hipertensão, escorbuto, pedras nos rins e artrites, podendo ainda ser utilizado para a remoção de manchas na pele.',
                special:['Cuidados Específicos:', 'Temperatura de 13°C a 20°C;', 'Luminosidade direta ou sombra parcial;', 'Irrigação deve ser feita uma vez por dia, para manter o solo úmido;', 'Largura de até 15cm / altura de até 30cm.']},
                {key:'6', title:'Dicas para plantar Hortelã', history:'É uma planta com origem na Ásia da família Lamiaceae, contudo é cultivada em todo mundo, graças a sua boa tolerância a diferentes condições climáticas. É considerada uma planta medicinal e aromática, sendo utilizada para tratar problemas digestivos e estresse. Podendo ser utilizada como tempero, óleo e chás.',
                special:['Cuidados Específicos:', 'Temperatura amena ou temperada, suportando o frio, mas não o congelamento.', 'Luminosidade direta ou sombra parcial com alta luminosidade;', 'Irrigação deve ser feita uma vez por dia, para manter o solo úmido;', 'Largura de até 40cm / altura de até 100cm.']},
                {key:'7', title:'Dicas para plantar Pimenta', history:'De origem americana e da família Solanaceae. A espécie de pimenta mais plantada pelo mundo, apesar de serem normalmente ornamentais, também podem ser consumidas, com ardência média.',
                special:['Cuidados Específicos:', 'Temperatura de 16ºC a 35ºC;', 'Luminosidade direta;', 'Irrigação deve ser feita uma vez por dia, para manter o solo úmido;', 'Largura de até 60cm / altura de até 45cm.']}
            ],
            collapsed:[true, true, true, true, true, true, true, true]
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.list}
                    renderItem={({item})=><HintCard data={item} collapsed={this.state.collapsed[parseInt(item.key)]} />}
                />
                <InfoBar text='Dicas sobre Agronomia' renderBackButton={true} navigation={this.props.navigation} backRoute='Modules' />
            </View>
        );
    }
}