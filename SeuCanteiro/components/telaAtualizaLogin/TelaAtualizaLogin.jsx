import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput, Alert } from "react-native";

const TelaAtualizaLogin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("")

  const handleAtualizar = () => {
    if (!email || !senha || !repetirSenha) {
      console.log("Por favor, preencha todos os campos.");
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
    } else if (!validarEmail(email)) {
      console.log("Erro: Digite um e-mail válido.");
      Alert.alert("Erro", "Digite um e-mail válido.");
    } else if (senha.length < 8 || senha.length > 16) {
      console.log("Erro: A senha precisa ter entre 8 e 16 caracteres.");
      Alert.alert("Erro", "A senha precisa ter entre 8 e 16 caracteres.");
    } else if (senha !== repetirSenha) {
      console.log("Erro: As senhas digitadas não coincidem.");
      Alert.alert("Erro", "As senhas digitadas não coincidem.");
    } else {
        navigation.navigate('Perfil');
    }
  }; 
  
  const validarEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@.]+$/.test(email);
  };
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../telaCadastro/img/login_cadastro.png')} style={styles.backgroundImage}>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Atualizar Dados de Login</Text>
          </View>
          <View>
            <View style={styles.label}>
              <Text style={styles.textInput}>E-mail</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Senha</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
              />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Repita a senha</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Digite a senha novamente"
                value={repetirSenha}
                onChangeText={setRepetirSenha}
                secureTextEntry
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

export default TelaAtualizaLogin;
