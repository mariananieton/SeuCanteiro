import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput, Alert } from "react-native";
import Menu from "../menu/Menu";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';


const TelaAtualizaAlimento = ({ route, navigation }) => {
  const { nomePlanta, idPlanta, fetchPlantas } = route.params;

  const [nomeCientifico, setNomeCientifico] = useState("");
  const [regacao, setRegacao] = useState("");
  const [apelido, setApelido] = useState("");
  const [quantidadePlantada, setQuantidadePlantada] = useState("");
  const [dataPlantio, setDataPlantio] = useState("");
  const [dataColheita, setDataColheita] = useState("");

  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      setToken(storedToken || '');
    };
  
    fetchToken();
  }, []);

  const decodeToken = () => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
      }
    }
  };

  useEffect(() => {
    decodeToken();
  }, [token]);

  const handleAtualizar = () => {
    if (nomePlanta.length < 3 || nomePlanta.length > 50 ) {
      Alert.alert("Erro", "O nome da planta deve ter entre 3 e 50 caracteres.");
    } else if (apelido && apelido.length < 3) {
      Alert.alert("Erro", "O apelido da planta deve ter pelo menos 3 caracteres se for preenchido.");
    } else if (isNaN(quantidadePlantada) || quantidadePlantada <= 0) {
      Alert.alert("Erro", "A quantidade de plantas deve ser um número maior que zero.");
    } else if (!validarData(dataPlantio)) {
      Alert.alert("Erro", "A data de plantio deve estar no formato yyyy-MM-dd.");
    } else if (dataColheita && !validarData(dataColheita)) {
      Alert.alert("Erro", "A data de colheita deve estar no formato yyyy-MM-dd.");
    } else {

      const planta = {
        nome: nomePlanta,
        regacao,
        nomeCientifico,
        apelido
      };
      const plantio = {
        quantidadePlantada,
        dataPlantio,
        dataColheita
      }
      fetch(`http://192.168.0.160:8080/api/v1/planta/${idPlanta}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
      },
      body: JSON.stringify({ planta, plantio }),
    })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      fetchPlantas(); 
      navigation.navigate("Canteiro");
    })
    .catch(error => {
      console.error(error);
    });
  };   
  };

  const validarData = (data) => {
    return /^\d{4}-\d{2}-\d{2}$/.test(data);
  };

  const handleExcluir = async () => {
    try {
      await fetch(`http://192.168.0.160:8080/api/v1/planta/${idPlanta}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      });
      fetchPlantas();
      navigation.navigate("Canteiro");
    } catch (error) {
      console.error(error);
    }
  };
  
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../telaCadastroAlimento/img/superior.png')} style={styles.backgroundImage}>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{nomePlanta}</Text>
          </View>
          <View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Nome da planta</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} value={nomePlanta} editable={false} />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Atualizar nome científico (Opcional): {}</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} value={nomeCientifico} onChangeText={setNomeCientifico} placeholder="Digite o nome científico da planta" />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Atualizar frequência de irrigação</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} value={regacao} onChangeText={setRegacao} placeholder="Digite a frequência de irrigação" />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}> Atualizar apelido da planta (Opcional)</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} value={apelido} onChangeText={setApelido} placeholder="Digite o apelido da planta" />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Atualizar quantidade</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} value={quantidadePlantada} onChangeText={setQuantidadePlantada} placeholder="Digite a quantidade de plantas" keyboardType="numeric" />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Atualizar data da plantação</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} value={dataPlantio} onChangeText={setDataPlantio} placeholder="Exemplo: 2023-05-25" />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Atualizar data da colheita (Opcional)</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} value={dataColheita} onChangeText={setDataColheita} placeholder="Exemplo: 2023-05-25" />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleAtualizar}>
                <Text style={styles.buttonText}>Atualizar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleExcluir}>
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Menu navigation={navigation} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: 430,
    height: 895,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#9D9494',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 5,
    alignItems: 'center',
  },
  input: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    borderColor: '#06980C',
    borderRadius: 30,
    marginTop: 5,
    paddingHorizontal: 10,
    textAlign: 'left',
  },
  button: {
    width:170,
    height:35,
    backgroundColor: '#A2FF82',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: "bold",
  },
  titleContainer: {
    marginTop: 40,
  },
  textInput: {
    color:'#6C6B6B',
  },
  label: {
    marginLeft: 60,
  },
});

export default TelaAtualizaAlimento;
