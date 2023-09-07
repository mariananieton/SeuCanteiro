import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaLogin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => { 
    fetch('http://IP:8080/api/v1/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        senha,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Falha ao fazer login");
        }
        return response.json();
      })
      .then(async (data) => { 
        const { token, type, prefix } = data;
        const bearerToken = prefix + token;
        await AsyncStorage.setItem('token', bearerToken); 
        navigation.navigate('Home');
        console.log("Token de acesso:", bearerToken);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../telaLogin/img/login_cadastro.png')} style={styles.backgroundImage}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Login</Text>
          <View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Seu e-mail</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="exemplo@exemplo.com.br"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Sua senha</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="*************"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
              />
            </View>
            <View style={styles.forgotPasswordContainer}>
              <TouchableOpacity style={styles.forgotPasswordLink}>
                <Text style={styles.textInput}>Esqueci a senha</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
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
    marginTop: 20,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#9D9494',
    marginBottom: 150,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  forgotPasswordContainer: {
    alignItems: 'center',
  },
  textInput: {
    color: '#6C6B6B',
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
  forgotPasswordLink: {
    marginBottom: 10,
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
  label: {
    marginLeft: 60,
  },
});

export default TelaLogin;
