import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
    box:{
        backgroundColor: colors.gray_dark,
        padding: 15,
        width: '100%',
        height: 70,
        justifyContent: "center",
        marginBottom: 10,
        zIndex: 11,
        borderRadius: 10,
    },

    container:{
        backgroundColor: colors.background,
    },

    item_title: {
        color: colors.white, 
        fontWeight: "600",
        fontSize: 18, 
        paddingBottom: 10, 
        paddingTop: 10 
    },

    item_description: { 
        color: colors.gray_light, 
        paddingBottom: 10,
        fontSize: 16,
    }
})