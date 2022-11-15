import React from 'react';
import { Alert, AsyncStorage, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

import { styles } from './styles';
import { DrawerActions, useNavigation } from '@react-navigation/core';

const CustomDrawer: React.FC = () => {
    const navigation: any = useNavigation();

    async function logout() {
        Alert.alert('Sair', `Você tem certeza que quer sair?`, [
            {
                text: 'Não',
                style: 'cancel',
            },
            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        await AsyncStorage.clear();
                        navigation.navigate('Login');
                    } catch (error) {
                        Alert.alert('Não foi possivel sair, tente novamente!')
                    }
                }
            }
        ])
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
            <View style={{ width: '90%', backgroundColor: '#c1c1c1', height: 0.5, alignSelf: 'center', marginBottom: 5, marginTop: 20 }}></View>
            <ScrollView style={styles.container}>
                <View>
                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Home")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}
                    >
                        <MaterialIcons style={styles.iconRegistered} name="home" size={30} color="gray" />
                        <Text style={styles.PagesText}>Início</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Projects")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}
                    >
                        <MaterialIcons style={styles.iconRegistered} name="category" size={30} color="gray" />
                        <Text style={styles.PagesText}>Projetos</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => logout()} style={styles.Sair} >
                    <MaterialIcons name="subdirectory-arrow-left" size={25} color="gray" />
                    <Text style={styles.SairText}>Sair da conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CustomDrawer;