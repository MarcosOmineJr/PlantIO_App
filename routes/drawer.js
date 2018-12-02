import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';


import MainRoutes from './mainRoutes';
import LateralMenu from '../src/CustomComponents/LateralMenu';

const { width } = Dimensions.get('screen');

const Drawer = createDrawerNavigator({
    MainRoutes:MainRoutes
},
{
    drawerWidth: width*0.97,
    contentComponent:LateralMenu
});

export default Drawer;