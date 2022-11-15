import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {styles} from './style'
import AsyncStorage from '@react-native-community/async-storage';

import {
    TouchableOpacity,
    View,
    Text,
    TextInput,
    Image,
    StatusBar,
    Alert,
} from 'react-native'
import CustomStatusBar from "../../components/CustomStatusBar";
import colors from "../../styles/colors";

export default function Login(){
    const navigation: any = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function processLogin(){
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }]
        })
    }

    return (
        <View style={styles.container}>
            <CustomStatusBar />
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            <Text>TIMONEIRO</Text>
            <View style={styles.form}>
                <TextInput 
                    style={styles.login}
                    placeholder="Email"
                    placeholderTextColor={colors.gray}
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput 
                    secureTextEntry={true}
                    style={styles.login}
                    placeholder="Senha"
                    placeholderTextColor={colors.gray}
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                />
                <TouchableOpacity
                    style={styles.loginSave}
                    onPress={processLogin}>
                        <Text style={styles.text}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
