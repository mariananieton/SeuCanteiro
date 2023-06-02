import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import Menu from "../menu/Menu";

const Perfil = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../perfil/img/login_cadastro.png')} style={styles.backgroundImage}>
        <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Meu Perfil</Text>
          </View>
          <View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaAtualizaCadastro')}>
                <Text style={styles.buttonText}>Atualizar meus dados cadastrais</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaAtualizaLogin')}>
                <Text style={styles.buttonText }>Atualizar meus dados de login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Menu navigation={navigation}/>
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
    resizeMode: "cover",
    width: 430,
    height: 932,
  },
  contentContainer: {
    flex: 1,
    marginBottom: 50,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(255, 255, 255)",
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  button: {
    width: 250,
    height: 40,
    backgroundColor: "#A2FF82",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#9D9494',
    textAlign: 'center',
  },
  titleContainer: {
    marginBottom: 20,
  },
});

export default Perfil;
