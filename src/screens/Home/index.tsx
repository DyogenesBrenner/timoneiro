import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    RefreshControl,
    StatusBar,
    AsyncStorage,
    Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './style';
import { DrawerActions, useNavigation } from '@react-navigation/core';

//import api from '../../services/api';
import Load from '../../components/Load';
import CustomStatusBar from '../../components/CustomStatusBar';

export default function Home(){
    const navigation: any = useNavigation();
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = React.useState(false);
    const [data, setData] = useState({amount: 3});
    const preffi = 25;
    StatusBar.setBarStyle('dark-content', true);

    useEffect(() => {
        getData()
    }, [])

    const onRefresh = () => {
        setRefreshing(true);
        getData();
    };

    function getData(){
        setIsLoading(false);
        setRefreshing(false);
    }

    return(
        <View style={styles.container}>
            <CustomStatusBar/>
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={styles.containerHeader}>
                        <TouchableOpacity
                            style={styles.menu}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <MaterialIcons name="menu" size={35} color="white" />
                        </TouchableOpacity>
                        <Image style={styles.logo} source={require('../../assets/logo.png')} />
                    </View>
                </View>
                { isLoading ?
                    <Load /> :
                    <ScrollView
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >
                        <View style={styles.containerBox}>
                            <TouchableOpacity onPress={() => navigation.navigate("Projects")}>
                                <View>
                                    <View style={styles.box}>
                                        <MaterialIcons style={styles.iconRegistered} name="category" size={70} color="#17a2b8" />
                                        <View style={styles.textos}>
                                            <Text style={styles.rText}>Projetos</Text>
                                            <Text style={styles.lenghtText}>{data.amount}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.boxfooter}>
                                        <Text style={[styles.textFooter]}>Projetos cadastrados</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                                <View style={styles.textos}>
                                    <Text style={styles.lenghtText}>Sair</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                }
            </View>
        </View>
    )
}
