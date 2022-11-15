import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import SwipeableRow from '../SwipeableRow';
// import api from '../../services/api';
import { styles } from './styles';

interface DataProps {
    data: {
        id: string;
        nome: string;
        celular: string;
        email: string;
        endereco: string;
    }
}

const ProjectCard = ({ data }: DataProps) => {
    const navigation: any = useNavigation();

    async function excluir(nome:string, id:string) {
        Alert.alert('Sair', `Você tem certeza que deseja excluir o registro : ` + nome, [
            {
                text: 'Não',
                style: 'cancel',
            },
            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        // const response = await api.get(`clientes/excluir.php?id=${id}`);
                        navigation.push('Projects');
                    } catch (error) {
                        Alert.alert('Não foi possivel excluir, tente novamente!')
                    }
                }
            }
        ])
    }

    return (
        <>
            {data.id === undefined && data.nome === undefined && data.endereco === undefined && data.email === undefined ?
                <></>
                :
                <View style={styles.container}>
                    <SwipeableRow
                        onPressWhatsapp={async () => {
                            await Linking.openURL(`http://api.whatsapp.com/send?1=pt_BR&phone=55${data.celular}`)
                        }}

                        onPressEdit={async () => {
                            navigation.navigate('ProjectEdit', { id: data.id });
                        }}

                        onPressDelete={async () => {
                            excluir(data.nome, data.id);
                        }}
                    >
                        <TouchableOpacity
                            style={styles.box}
                        >
                            <Text style={styles.item_title}>{data.nome}</Text>
                            <Text style={styles.item_description}>{data.endereco}</Text>
                           
                        </TouchableOpacity>
                    </SwipeableRow>
                </View>
            }
        </>
    );
}

export default ProjectCard;