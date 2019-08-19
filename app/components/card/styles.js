import { StyleSheet, Dimensions } from 'react-native';
import Metrics from '../../themes/metrics'
import Fonts from '../../themes/fonts'
import Colors from '../../themes/colors'
export default StyleSheet.create({

    container: {
        flex:1, 
        backgroundColor: Colors.white, 
        marginTop: Metrics.screenHeight*0.0314
    },
    imagePost: {
        width: '100%', 
        height: Metrics.screenHeight*0.344 
    },
    multipleImageList: {
        height: Metrics.screenHeight*0.344, 
        width: '100%'
    },
    multipleImagePost: {
        width: Metrics.screenWidth*0.666,
        height: Metrics.screenHeight*0.374, 
        marginHorizontal: Metrics.screenWidth*0.013,
        marginVertical: Metrics.screenHeight*0.0074, 
    },
    videoButton: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    videoPost: {
        width: '100%', 
        height: Metrics.screenHeight*0.344
    },
    playButton: {
        position: 'absolute', 
        width: Metrics.screenWidth*0.133, 
        height: Metrics.screenHeight*0.0749
    },
    captionText: {
        fontFamily: Fonts.type.regular, 
        fontSize: Metrics.screenWidth*0.04, 
        paddingHorizontal: Metrics.screenWidth*0.0266,
        paddingVertical: Metrics.screenHeight*0.0149, 
        color: Colors.fadeGrey
    },
    likeIcon: {
        width: Metrics.screenWidth*0.053, 
        height: Metrics.screenHeight*0.0284
    },
    userProfileView: {
        flexDirection: 'row', 
        borderBottomWidth: 1, 
        borderBottomColor: Colors.whiteGrey, 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingHorizontal: Metrics.screenWidth*0.026, 
        paddingVertical: Metrics.screenHeight*0.022
    },
    profileIconView: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    profileBorder: {
        borderColor: Colors.fadeYellow, 
        borderWidth: 1, 
        borderRadius: Metrics.screenWidth*0.048, 
        width: Metrics.screenWidth*0.096, 
        height: Metrics.screenWidth*0.096, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    profileIcon: {
        width: Metrics.screenWidth*0.08, 
        height: Metrics.screenWidth*0.08, 
        borderRadius: Metrics.screenWidth*0.04
    },
    userNameView: {
        flexDirection: 'column', 
        marginLeft: Metrics.screenWidth*0.026
    },
    userName: {
        fontFamily: Fonts.type.regular, 
        fontSize: Metrics.screenWidth*0.0346, 
        color: Colors.pureGrey
    },
    seenView: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    timeText: {
        fontFamily: Fonts.type.regular, 
        fontSize: Metrics.screenWidth*0.026, 
        color: Colors.mediunGrey
    },
    eyeIcon: {
        width: Metrics.screenWidth*0.032, 
        height: Metrics.screenHeight*0.0104, 
        marginLeft: Metrics.screenWidth*0.0266
    },
    viewText: {
        fontFamily: Fonts.type.regular, 
        fontSize: Metrics.screenWidth*0.0266, 
        color: Colors.mediunGrey
    },
    menuView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: Metrics.screenWidth*0.0533,
        height: Metrics.screenHeight*0.0599
    },
    likeText: {
        fontFamily: Fonts.type.regular, 
        fontSize: Metrics.screenWidth*0.029, 
        color: Colors.grey
    },
    sharedText: {
        fontFamily: Fonts.type.regular, 
        fontSize: Metrics.screenWidth*0.029, 
        color: Colors.grey, 
        marginLeft: Metrics.screenWidth*0.0266 
    },
    sharedIcon: {
        width: Metrics.screenWidth*0.045, 
        height: Metrics.screenHeight*0.0239 
    },
    menuIcon: {
        height: Metrics.screenHeight*0.025, 
        width: Metrics.screenWidth*0.016, 
        marginLeft: Metrics.screenWidth*0.0533
    },
    commentSectionView: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    chatIconView: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        paddingHorizontal: Metrics.screenWidth*0.026, 
        paddingVertical: Metrics.screenHeight*0.022
    },
    chatIcon: {
        width: Metrics.screenWidth*0.0506, 
        height: Metrics.screenHeight*0.0284
    },
    chatText: {
        fontFamily: Fonts.type.regular, 
        fontSize: Metrics.screenWidth*0.0293, 
        color: Colors.grey
    },
    commentArea: {
        width: '100%'
    },
    commentView: {
        width: '85%', 
        height: 30, 
        justifyContent: 'space-between', 
        paddingHorizontal: Metrics.screenWidth*0.0266, 
        backgroundColor: Colors.whiteGrey, 
        borderRadius: 20, 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    commentInput: {
        width: '80%', 
        height: Metrics.screenHeight*0.0449, 
        paddingHorizontal: Metrics.screenWidth*0.0266 
    },
    sendIcon: {
        height: Metrics.screenHeight*0.029, 
        width: Metrics.screenWidth*0.0533
    },
    postSharedView: {
        backgroundColor: Colors.lightYellow, 
        width: '100%', 
        paddingVertical: Metrics.screenHeight*0.016, 
        paddingHorizontal: Metrics.screenWidth*0.0373
    },
    SharedUserInfo:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    sharedProfileView: {
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    sharedUserBorder: {
        borderColor: Colors.fadeYellow,
        borderWidth: 1, 
        borderRadius: Metrics.screenWidth*0.048, 
        width: Metrics.screenWidth*0.096, 
        height: Metrics.screenWidth*0.096, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    sharedUserIcon: {
        width: Metrics.screenWidth*0.08, 
        height: Metrics.screenWidth*0.08, 
        borderRadius: Metrics.screenWidth*0.04
    },
    shareUserNameView: {
        flexDirection: 'column', 
        marginLeft: Metrics.screenWidth*0.0266
    },
    sharedUserName: {
        fontFamily: Fonts.type.regular, 
        fontSize: Metrics.screenWidth*0.034, 
        color: Colors.pureGrey
    },
    postSharedTime: {
        fontFamily: Fonts.type.regular, 
        fontSize: Metrics.screenWidth*0.0266, 
        color: Colors.mediumGrey
    },
    sharedUserMenu: {
        height: Metrics.screenHeight*0.0254, 
        width: Metrics.screenWidth*0.016, 
        marginTop: Metrics.screenHeight*0.014 
    },
    sharedCommentText: {
        fontSize: Metrics.screenWidth*0.04, 
        fontFamily: Fonts.type.regular, 
        color: Colors.grey, 
        marginTop: Metrics.screenHeight*0.011 
    },
})