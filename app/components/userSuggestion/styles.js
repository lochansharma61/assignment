import { StyleSheet, Dimensions } from 'react-native';
import Metrics from '../../themes/metrics'
import Fonts from '../../themes/fonts'
import Colors from '../../themes/colors'

export default StyleSheet.create({

    container: {
        backgroundColor: Colors.lightYellow,
        paddingHorizontal: Metrics.screenWidth*0.0266,
        paddingVertical: Metrics.screenHeight*0.0149, 
        marginTop:Metrics.screenHeight*0.0299
    },
    headerView: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    logo: {
        width: Metrics.screenWidth*0.090, 
        height: Metrics.screenHeight*0.050
    },
    title: {
        fontFamily: Fonts.type.medium, 
        fontSize: Metrics.screenWidth*0.0346, 
        color: Colors.grey, 
        marginLeft: Metrics.screenWidth*0.0133
    },
    profileView: {
        marginHorizontal:Metrics.screenWidth*0.013,
        marginVertical: Metrics.screenHeight*0.0074
    },
    userImage: {
        width: Metrics.screenWidth*0.373, 
        height: Metrics.screenWidth*0.328, 
        borderRadius: Metrics.screenWidth*0.0213, 
        overflow: 'hidden', 
        paddingHorizontal: Metrics.screenWidth*0.0266,
        paddingVertical: Metrics.screenHeight*0.0149, 
    },
    plusIcon: {
        width: Metrics.screenWidth*0.058, 
        height: Metrics.screenWidth*0.058, 
        alignSelf:'flex-end'
    },
    textView: { 
        marginTop:Metrics.screenHeight*0.076
    },
    userName: {
        fontFamily:Fonts.type.medium, 
        fontSize:Metrics.screenWidth*0.037, 
        color: Colors.white
    },
    userLocation: {
        fontFamily:Fonts.type.medium, 
        fontSize:Metrics.screenWidth*0.026, 
        color: Colors.white
    }

})