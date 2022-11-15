import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { styles } from "./styles";

const CustomStatusBar = () => (
    <View style={[styles.statusBar]}>
      <SafeAreaView>
        <StatusBar translucent barStyle={"light-content"}  />
      </SafeAreaView>
    </View>
  );

  export default CustomStatusBar