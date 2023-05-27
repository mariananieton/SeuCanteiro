import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput } from "react-native";
import Menu from "../menu/Menu";

const TelaCadastroAlimento = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../telaCadastroAlimento/img/superior.png')} style={styles.backgroundImage}>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Cadastro de Alimento</Text>
          </View>
          <View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Nome da planta</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Digite o nome da planta" />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Nome científico</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Digite o nome científico da planta" />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Frequência de irrigação</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Digite a frequência de irrigação" />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Apelido da planta</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Digite o apelido da planta" />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Quantidade</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Digite a quantidade de plantas" />
            </View>
            <View style={styles.label}>
              <Text style={styles.textInput}>Data da plantação</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="25/05/2023" />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Menu/>
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
    marginTop: 50,
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
    marginTop: 40,
    marginBottom: 50,
  },
  textInput: {
    color:'#6C6B6B',
  },
  label: {
    marginLeft: 60,
  },
});

export default TelaCadastroAlimento;
