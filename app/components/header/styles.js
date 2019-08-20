import { StyleSheet, Dimensions } from 'react-native';
import Metrics from '../../themes/metrics'
import Fonts from '../../themes/fonts'
import Colors from '../../themes/colors'

export default StyleSheet.create({

    container: {
        width: '100%', 
        backgroundColor: Colors.blue, 
        height: Metrics.screenHeight*0.1, 
        justifyContent: 'space-between', 
        flexDirection: 'row',    
        paddingHorizontal: Metrics.screenWidth*0.053,
        alignItems:'center'
    },
    logoIcon: {
        width: Metrics.screenWidth*0.100, 
        height: Metrics.screenHeight*0.064,
         
    },
    title: {
        fontFamily: Fonts.type.medium, 
        color: Colors.white, 
        fontSize: Metrics.screenWidth*0.056
    },
    frameIcon: {
        width: Metrics.screenWidth*0.095, 
        height: Metrics.screenHeight*0.058, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    frameText: {
        color: Colors.white, 
        fontFamily: Fonts.type.medium, 
        fontSize: Metrics.screenWidth*0.032
    }
})