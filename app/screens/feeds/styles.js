import { StyleSheet, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');
import Colors from '../../themes/colors'

export default StyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: Colors.warmGrey
    },
    image: {
        height: 50, 
        width: 50, 
        position: 'absolute', 
        bottom: 30, 
        right: 30
    }
})