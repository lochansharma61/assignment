import { StyleSheet, Dimensions } from 'react-native';
import Metrics from '../../themes/metrics'
import Fonts from '../../themes/fonts'
import Colors from '../../themes/colors'
export default StyleSheet.create({

    container: {
        backgroundColor: 'rgb(255,249,237)', 
        flex:1,
        marginTop: Metrics.screenHeight*0.0299, 
        width: '100%', 
        height:Metrics.screenHeight*0.464,
        paddingHorizontal: Metrics.screenWidth*0.0266,
        paddingVertical: Metrics.screenHeight*0.0149 
    },
    headerView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: Metrics.screenWidth*0.0266,
        paddingVertical: Metrics.screenHeight*0.0149 
    },
    logo: {
        width: Metrics.screenWidth*0.0906, 
        height: Metrics.screenHeight*0.0509
    },
    title: {
        fontFamily: Fonts.type.medium, 
        fontSize: Metrics.screenWidth*0.0346, 
        color: Colors.grey, 
        marginLeft: Metrics.screenWidth*0.0133 
    },
    adsView: {
        paddingHorizontal: Metrics.screenWidth*0.0266, 
        shadowColor: Colors.grey , 
        shadowOpacity: 0.2, 
        shadowOffset: { width: Metrics.screenWidth*0.0133, height: Metrics.screenHeight*0.00749 }
    }, 
    postView: {
        borderRadius: 10, 
        overflow: 'hidden'
    },
    imagePost: { 
        width: Metrics.screenWidth*0.48, 
        height: Metrics.screenHeight*0.275 
    },
    buyView: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: Metrics.screenWidth*0.0266,
        paddingVertical: Metrics.screenHeight*0.0149, 
        alignItems: 'center'
    },
    buyButton: {
        borderRadius: 3, 
        borderWidth: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderColor: Colors.white, 
        width: Metrics.screenWidth*0.1413, 
        height: Metrics.screenHeight*0.029 
    },
    buyText: {
        fontFamily: Fonts.type.demiBold, 
        fontSize: Metrics.screenWidth*0.0213, 
        color: Colors.white 
    },
    offerView: {
        width: Metrics.screenWidth*0.48, 
        height: Metrics.screenHeight*0.0689, 
        backgroundColor: Colors.white , 
        paddingHorizontal: Metrics.screenWidth*0.0266,
        marginBottom: Metrics.screenHeight*0.0149 
    },
    offerText: {
        fontFamily: Fonts.type.medium, 
        color: Colors.darkGrey, 
        fontSize: Metrics.screenWidth*0.0346, 
        paddingTop: Metrics.screenHeight*0.0074
    }, 
    validityView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    cafeName: {
        fontFamily: Fonts.type.medium, 
        color: Colors.darkGrey, 
        fontSize: Metrics.screenWidth*0.0213, 
        paddingTop: Metrics.screenHeight*0.0029
    },
    validTime: {
        fontFamily: Fonts.type.regular, 
        color: Colors.lightGrey, 
        fontSize: Metrics.screenWidth*0.016 
    }
})