import { Platform, StatusBar, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background,
    },
    
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },

    appBar: {
        backgroundColor:'#79B45D',
        height: APPBAR_HEIGHT,
    },

    content: {
        flex: 1,
        backgroundColor: '#33373B',
    },

    header:{
        backgroundColor: colors.gray_dark,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 5},
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 80,
    },

    menu:{
        position: 'absolute',
        left: 20,
        alignSelf: "center",
        top: 20,
    },

    logo:{
        width: 180,
        height: 60,
        alignSelf: "center",
        marginTop: 5,
        resizeMode: 'contain',
    },

    containerHeader:{
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    titleTasks:{
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 50,
    },

    greeting:{
        fontSize: 18,
        color: colors.heading,
        fontFamily: fonts.text,
        alignSelf: "center",
    },

    userName:{
        fontSize: 22,
        color: colors.heading,
        lineHeight: 40,
        fontFamily: fonts.text,
    },

    image:{
        width: 70,
        height: 70,
        borderRadius: 30
    },

    lenghtText:{
        color: colors.green, 
        fontSize: 35, 
        fontFamily: fonts.text,
    },

    tasks:{
        marginTop: 20,
        marginBottom: 50,
    },

    taskBackground:{
        backgroundColor: '#333333'
    },

    tasksText:{
        marginTop: 10,
        fontSize: 20,
        marginBottom: 10,
        color: '#000'
    },

    logout:{
        position: 'absolute',
        right: 0,
        color: colors.red,
        alignSelf: "center"
    },

    containerBox:{
        width: '78%',
        alignSelf: "center",
        marginBottom: 25,
    },

    box:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        marginTop: 30,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 1},
        backgroundColor: colors.gray_dark,
    },

    boxfooter:{
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: colors.gray_dark,
        borderTopColor: colors.gray_border,
        borderTopWidth: .5,
        padding: 10
    },

    rText:{
        fontSize: 20,
        color: 'gray',
        fontFamily: fonts.text,
    },

    textFooter:{
        color: colors.gray_placeholder,
        textAlign: 'center',
        fontSize: 15,
        fontFamily: fonts.text,
    },

    iconRegistered:{
        justifyContent: 'center',
        alignSelf: 'center',
    },

    textos:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    circleProgressView:{
        flexDirection: 'row',
        alignSelf: "center",
        marginTop: 20,
    },

    textProgress:{
        fontFamily: fonts.text,
        fontSize: 16,
        color: 'gray',
    },

    textProgressTitle:{
        fontFamily: fonts.text,
        fontSize: 20,
        color: '#000',
    },

    textProgressContainer:{
        alignSelf: "center",
        marginRight: 20,
    },

    numberInside:{
        fontFamily: fonts.text,
        fontSize: 25,
        color: '#000',
        textDecorationLine: 'underline',

    },

    boxContainer:{
        marginRight: 20,
        width: 200,
        marginLeft: 10,
    }
      
})