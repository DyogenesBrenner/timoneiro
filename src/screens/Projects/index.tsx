import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, Dimensions, Alert } from 'react-native';
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

// import api from '../../services/api';
import ProjectCard from '../../components/ProjectCard';
import CustomStatusBar from '../../components/CustomStatusBar';
import colors from '../../styles/colors';

const Projects: React.FC = () => {

    const navigation: any = useNavigation();

    const [projects, setProjects] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [query, setQuery] = useState("");
    const [onEndReachedCalledDuringMomentum, setMT] = useState(true);

    async function loadData() {
        try {
            // const response = await api.get(`clientes/listar_clientes.php?pagina=${page}&limite=10`);

            // if(projects.length >= response.data.totalItems) return;

            if (loading === true) return;
      
            setLoading(true);
            setProjects([
                {
                    id: '1',
                    nome: 'Dyogenes',
                    celular: '11913565760',
                    endereco: 'Rua Santa Silveira, 218 - Jardim Penha',
                    email: 'email',
                    ativo: true
                },
                {
                    id: '2',
                    nome: 'Israel',
                    celular: '11913565760',
                    endereco: 'Rua Santa Silveira, 218 - Jardim Penha',
                    email: 'email',
                    ativo: true
                },
                {
                    id: '3',
                    nome: 'Iury',
                    celular: '11913565760',
                    endereco: 'Rua Santa Silveira, 218 - Jardim Penha',
                    email: 'email',
                    ativo: true
                }
            ])
      
            // setProjects([...projects, ...response.data.resultado]);
            setPage(page + 1);
          } catch (error) {
            console.log(error)
          }
    }

    const renderItem = function ({ item }: any) {
        return ( <ProjectCard data={item} />
        )
    }
      function Footer(load: any) {
        if (!load) return null;

        return (
            <View style={styles.loading}>
                <ActivityIndicator size={25} color="#000" />
            </View>
        )
    }

    async function Search() {
    //    const response = await api.get(`clientes/buscar_clientes.php?buscar=${query}`);
       
    //    setProjects(response.data.clientes);
    }

    useEffect(() => {
        loadData();
    }, [page, totalItems, projects]);

    return (
        <View style={styles.container}>
            <CustomStatusBar />
            <View style={styles.header}>
                <View style={styles.containerHeader}>
                    <TouchableOpacity
                        style={styles.menu}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="arrow-back" size={35} color={colors.white} />
                    </TouchableOpacity>
                    <Image style={styles.logo} source={require('../../assets/logo.png')} />
                </View>
            </View>

            <View style={{ paddingHorizontal: 15, flex: 1, }}>
                <View style={styles.containerSearch}>
                    <TextInput
                        style={styles.search}
                        placeholder="Pesquisa projeto"
                        placeholderTextColor={colors.gray_placeholder}
                        keyboardType="default"
                        onChangeText={(text) => setQuery(text)}
                        returnKeyType="search"
                        onTextInput= {() => Search()}
                    />

                    <TouchableOpacity
                        style={styles.iconSearch}
                        onPress={() => Search()}
                    >
                        <Ionicons name="search-outline" size={20} color="gray" />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, height: Dimensions.get('window').height + 30, }}>
                    <FlatList
                        data={projects}
                        renderItem={(item) => renderItem(item)}
                        keyExtractor={item => String(item.id)}
                        onEndReachedThreshold={0.1}
                        removeClippedSubviews
                        initialNumToRender={10}
                        onEndReached={(distanceFromEnd) => {
                          if (!onEndReachedCalledDuringMomentum) {
                            loadData().then(() => setLoading(false));
                            setMT(true);
                          }
                        }}
                        ListFooterComponent={(distanceFromEnd) => {
                          if (!onEndReachedCalledDuringMomentum) {
                            return <Footer load={loading} />
                          } else {
                            return <View></View>
                          }
                        }}
                        onMomentumScrollBegin={() => setMT(false)}
                        windowSize={10}
                        getItemLayout={(data, index) => (
                          { length: 50, offset: 50 * index, index }
                        )}
                    />
                </View>

                <View style={styles.containerFloat}>
                    <TouchableOpacity
                        style={styles.CartButton}
                        onPress={() => navigation.navigate("ProjectEdit", { id: null })}
                    >
                        <Ionicons name="add-outline" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Projects;