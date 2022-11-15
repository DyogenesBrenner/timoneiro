import { Platform, StatusBar, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    
    statusBar: {
        height: STATUSBAR_HEIGHT,
        backgroundColor: colors.gray_dark,
    },

    appBar: {
        height: APPBAR_HEIGHT,
    },

    content: {
        flex: 1,
        backgroundColor: colors.background,
    },
})