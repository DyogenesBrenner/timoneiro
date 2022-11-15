import React, { useEffect } from "react";
import Routes from './src/routes/stack.routes'
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';
import { useTheme } from "@react-navigation/native";
import colors from "./src/styles/colors";

export default function App() {
  
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  const theme = useTheme();
  theme.colors.background = colors.background
  
  if (!fontsLoaded) return <AppLoading />;
  
  return (
    <Routes />
  );
}