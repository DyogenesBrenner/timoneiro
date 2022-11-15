import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background,
    },

    box:{
        backgroundColor: colors.gray_dark,
        padding: 5,
        width: '100%',
        height: 50,
        justifyContent: "center",
        marginBottom: 10,
        zIndex: 11,
        borderRadius: 10,
    },

    loading:{
        marginTop: 10,
        marginBottom: 10,
    },

    search:{
        width: '90%',
        color: colors.white,
        fontSize: 18
    },

    containerSearch:{
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 25,
        backgroundColor: colors.gray_editor,
        borderRadius: 10,
        padding: 15,
        paddingLeft: 20,
    },
  
    iconSearch:{
        alignSelf: 'center',
        paddingLeft: 10,
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
        width: 175,
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

    buttonWhatsapp:{
        width: 100,
        height: 42,
        backgroundColor: "green",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        left: -3,
        zIndex: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

    buttonEdit:{
        width: 100,
        height: 42,
        backgroundColor: "#c1c1c1",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        left: 3,
        borderRadius: 10,
        zIndex: 9,
    },

    card : {
        width: 300,
        height: 180,
        backgroundColor: '#32B76C',
        borderRadius: 8,
        marginVertical: 6,
    },

    containerFloat:{
        bottom: 20,
        right: 20,
        position: 'absolute',
        backgroundColor: colors.primary,
        borderRadius: 10,
        zIndex: 9,
        width: 50,
        height: 50,
        justifyContent: "center",
    },

    CartButton:{
        justifyContent: "center",
        alignItems: "center",

    },
})