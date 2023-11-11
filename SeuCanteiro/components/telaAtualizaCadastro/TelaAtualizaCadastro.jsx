import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

const TelaAtualizaCadastro = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      setToken(storedToken || '');
      decodeToken(); 
    };
  
    fetchToken();
  }, []);

  const decodeToken = () => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        const userId = decodedToken.id;
        setUserId(userId); 
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
      }
    }
  };

  useEffect(() => {
    decodeToken();
  }, [token]);

  const validarDataNascimento = (data) => {
    return /^\d{4}-\d{2}-\d{2}$/.test(data);
  };

  const validarCPF = (cpf) => {
    return /^\d{9}-\d{2}$/.test(cpf);
  };

  const validarTelefone = (telefone) => {
    return /^\d{9}$/.test(telefone);
  };

  const handleAtualizar = () => {
    if (!nome || !cpf || !dataNascimento || !telefone) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
    } else if (nome.length < 3 || nome.length > 50) {
      Alert.alert("Erro", "O nome precisa ter entre 3 e 50 caracteres.");
    } else if (!validarDataNascimento(dataNascimento)) {
      Alert.alert("Erro", "Data de nascimento inválida. Utilize o formato yyyy-MM-dd.");
    } else if (!validarCPF(cpf)) {
      Alert.alert("Erro", "CPF inválido. Utilize o formato xxxxxxxxx-xx.");
    } else if (!validarTelefone(telefone)) {
      Alert.alert("Erro", "Telefone inválido. Deve ter 9 dígitos.");
    } else {
      const usuario = {
        nome,
        cpf,
        dataNascimento,
        telefone,
      };
  
      fetch(`http://192.168.0.160:8080/api/v1/usuario/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        body: JSON.stringify(usuario),
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          navigation.navigate('Perfil');
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  const handleExcluir = async () => {
    try {
      await fetch(`http://192.168.0.160:8080/api/v1/usuario/${userId}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      });
      logout();
      navigation.navigate("TelaInicial");
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../telaCadastro/img/login_cadastro.png')} style={styles.backgroundImage}>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Atualizar Dados Cadastrais</Text>
          </View>
          <View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Nome completo</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={setNome}
              />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>CPF</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Digite seu CPF"
                value={cpf}
                onChangeText={setCpf}
              />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Data de Nascimento</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Digite sua data de nascimento"
                value={dataNascimento}
                onChangeText={setDataNascimento}
              />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Telefone</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Digite seu telefone"
                value={telefone}
                onChangeText={setTelefone}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleAtualizar}>
                <Text style={styles.buttonText}>Atualizar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleExcluir}>
                <Text style={styles.buttonText}>Excluir Conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
    height: 932,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#9D9494',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
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
    width: 170,
    height: 35,
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
    marginBottom: 20,
  },
  textInput: {
    color: '#6C6B6B',
  },
  label: {
    marginLeft: 60,
  },
});

export default TelaAtualizaCadastro;
