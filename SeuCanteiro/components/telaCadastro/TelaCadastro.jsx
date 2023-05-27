import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput } from "react-native";

const TelaCadastro = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../telaCadastro/img/login_cadastro.png')} style={styles.backgroundImage}>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Cadastro</Text>
          </View>
          <View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Nome completo</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Digite seu nome" />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>CPF</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Digite seu CPF" />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Data de Nascimento</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Digite sua data de nascimento" />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Telefone</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Digite seu telefone" />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>E-mail</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Digite seu e-mail" />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Senha</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Digite sua senha" />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Repita a senha</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Digite a senha novamente" />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>
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
    placeholderTextColor: '#ccc',
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
    marginBottom: 20,
  },
  textInput: {
    color:'#6C6B6B',
  },
  label: {
    marginLeft: 60,
  },
});

export default TelaCadastro;
