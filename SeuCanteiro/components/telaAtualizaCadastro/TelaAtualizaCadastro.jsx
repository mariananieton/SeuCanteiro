import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput, Alert } from "react-native";

const TelaAtualizaCadastro = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleAtualizar = () => {
    if (!nome || !cpf || !dataNascimento || !telefone) {
      console.log("Por favor, preencha todos os campos.");
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
    } else if (nome.length < 3) {
      console.log("Erro: O nome precisa ter pelo menos 3 caracteres.");
      Alert.alert("Erro", "O nome precisa ter pelo menos 3 caracteres.");
    } else if (!validarDataNascimento(dataNascimento)) {
      console.log("Erro: Data de nascimento inválida. Utilize o formato yyyy-MM-dd.");
      Alert.alert("Erro", "Data de nascimento inválida. Utilize o formato yyyy-MM-dd.");
    } else if (!validarCPF(cpf)) {
      console.log("Erro: CPF inválido. Utilize o formato xxxxxxxxx-xx.");
      Alert.alert("Erro", "CPF inválido. Utilize o formato xxxxxxxxx-xx.");
    } else if (!validarTelefone(telefone)) {
      console.log("Erro: Telefone inválido. Deve ter 9 dígitos.");
      Alert.alert("Erro", "Telefone inválido. Deve ter 9 dígitos.");
    } else {
        navigation.navigate('Perfil');
    }
  };
  
  const validarDataNascimento = (data) => {
    return /^\d{4}-\d{2}-\d{2}$/.test(data);
  };
  
  const validarCPF = (cpf) => {
    return /^\d{9}-\d{2}$/.test(cpf);
  };
  
  const validarTelefone = (telefone) => {
    return /^\d{9}$/.test(telefone);
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
