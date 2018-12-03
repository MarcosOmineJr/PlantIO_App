import { createIconSetFromFontello } from '@expo/vector-icons';

import fontelloConfig from '../../assets/icons/config.json';

//Creates Custom Icon set from icon font:
const CustomIcon = createIconSetFromFontello(fontelloConfig, 'PlantIO_Icons');

export default CustomIcon;