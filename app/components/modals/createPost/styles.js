import { StyleSheet } from "react-native";
import Metrics from '../../../themes/metrics'
import Fonts from '../../../themes/fonts'
import Colors from '../../../themes/colors'

export default StyleSheet.create({
    inputText: {
        height: Metrics.screenHeight * (150/Metrics.screenHeight), 
        width: '100%',
        marginTop: Metrics.screenHeight * (20/Metrics.screenHeight),
        borderRadius: 10,
        borderColor: 'rgb(169,169,169)',
        borderWidth: 2
    },
    inputContainer: { 
        height: Metrics.screenHeight * (400/Metrics.screenHeight), 
        width: '100%', 
        backgroundColor: 'white', 
        padding: 30 
    },
    mainContainer: { 
        flex: 1, 
        justifyContent: 'flex-end', 
        backgroundColor: 'rgba(0, 0, 0, 0.3)' 
    },
    subContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: 10 
    },
    buttonContainer: { 
        height: Metrics.screenHeight * (50/Metrics.screenHeight), 
        width: Metrics.screenWidth * (90/Metrics.screenWidth), 
        borderRadius: 10, 
        backgroundColor: Colors.lightBlue, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: Metrics.screenHeight * (30/Metrics.screenHeight), 
        alignSelf: 'center' 
    }

});
