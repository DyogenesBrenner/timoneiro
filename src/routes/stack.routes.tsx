import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Projects from "../screens/Projects";
import ProjectEdit from "../screens/ProjectEdit";

const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Projects" component={Projects}/>
            <Stack.Screen name="ProjectEdit" component={ProjectEdit}/>
        </Stack.Navigator>
    )
}

function AppRoutes(){
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    )
}

export default AppRoutes;