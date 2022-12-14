import React, { useState, useEffect } from 'react';
import { Alert, Text, TextInput, View, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import LottieView from 'lottie-react-native';
import loadAnimation from '../../assets/success.json';
import { TextInputMask } from 'react-native-masked-text';
import CustomStatusBar from '../../components/CustomStatusBar';
import colors from '../../styles/colors';

// import api from '../../services/api';

type ParamList = {
    Detail: {
        id: string;
        
    };
};

function SuccessAnimation(){
    return (
    <View style={stylesAnimation.container}>
        <CustomStatusBar />
        <LottieView 
            source={loadAnimation}
            autoPlay
            loop
            style={stylesAnimation.animation}
        />
    </View>)
}

const stylesAnimation = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    animation:{
        backgroundColor: 'transparent',
        width: 100,
        height: 100,
    },
})


const NovoCliente: React.FC = () => {
    const navigation: any = useNavigation();

    const route = useRoute<RouteProp<ParamList, 'Detail'>>();
    const id = route?.params?.id;
       
    const [nome, setNome] = useState("");
    const [celular, setCelular] = useState("");
    const [endereco, setEndereco] = useState("");
    const [email, setEmail] = useState("");
    const [ativo, setAtivo] = useState("");
   
    const [sucess, setSucess] = useState(false);
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);
   
    async function saveData() {
        setSucess(true);

        try {
            const obj = {
                id: id,
                nome: nome,
                celular: celular,
                endereco: endereco,
                email: email,
                ativo: ativo,
            }

            // await api.post("clientes/salvar_clientes.php", obj);

            setNome("");
            setCelular("");
            setEndereco("");
            setEmail("");

        } catch (error) {
            Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
            setSucess(false);
        }
    }

    

    async function loadData() {
        try {
            setLoading(true);
            if (id != "0") {
                // const res = await api.get(`clientes/listar_clientes_id.php?id=${id_reg}`);

                // setNome(res.data.nome);
                // setCelular(res.data.telefone);
                // setEndereco(res.data.endereco);
                // setEmail(res.data.email);
                // setAtivo(res.data.ativo);
                setEdit(false);
                
            } else {
                setEdit(true);
            }
        } catch (error) {
            console.log('Error ao carregar os Dados');
        }
    }

     
        
    useEffect(() => {
        loadData().then(() => setLoading(false))
    }, [])

    if (loading === true) {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <ActivityIndicator style={{ marginTop: 100 }} color="#000" size="large" />
            </View>
        )
    }

    if (sucess) {
        return <SuccessAnimation />
    }
    

    return (
        <View style={{ flex: 1, marginTop: 20 }}>
            <CustomStatusBar />
            <View style={styles.Header}>
                <TouchableOpacity
                    style={styles.BackButton}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={35} color={colors.white} />

                </TouchableOpacity>
                {edit ?
                    <View style={styles.Title}>
                        <Text style={styles.TitleText}>Inserir Registro</Text>
                    </View>

                    :

                    <View style={styles.Title}>
                        <Text style={styles.TitleText}>Editar Registro</Text>
                    </View>
                }

            </View>

            <View>
                <Text style={styles.TitleInputs}>Nome completo</Text>

                <TextInput
                    placeholder="Nome completo"
                    onChangeText={(text) => setNome(text)}
                    value={nome}
                    style={styles.TextInput}
                />
            </View>

            <View>
                <Text style={styles.TitleInputs}>Celular</Text>

                <TextInputMask
                    style={styles.TextInput}
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(31) '
                    }}
                    value={celular}
                    onChangeText={text => setCelular(text)}
                    placeholder="Telefone Celular"
                />
            </View>

            <View>
                <Text style={styles.TitleInputs}>Endere??o</Text>

                <TextInput
                    placeholder="Rua A N?? 50 Bairro Teste"
                    onChangeText={(text) => setEndereco(text)}
                    value={endereco}
                    style={styles.TextInput}
                   
                />
            </View>

            <View>
                <Text style={styles.TitleInputs}>Email</Text>

                <TextInput
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    style={styles.TextInput}
                   
                />
            </View>

            <View>
                <Text style={styles.TitleInputs}>Ativo / Inativo</Text>
                <View style={styles.Picker}>
                    <Picker
                        selectedValue={ativo}
                        onValueChange={(itemValue, itemIndex) => setAtivo(itemValue)}
                        style={{ color: '#000' }}
                    >
                        <Picker.Item label="Ativo" value="Ativo" />
                        <Picker.Item label="Inativo" value="Inativo" />
                       
                    </Picker>
                </View>
            </View>

           
                <RectButton
                    style={styles.Button}
                    onPress={() => {
                        setSucess(true);
                        saveData().then(() => {
                            setTimeout(() => {
                                setSucess(false);
                                navigation.navigate("Projects")
                            }, 1500);
                        })
                    }}
                >
                    <Text style={styles.ButtonText}>Salvar Registro</Text>
                </RectButton>

               
            {/* <NewPacientes /> */}

        </View>
    );
}

export default NovoCliente;