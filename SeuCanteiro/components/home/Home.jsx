import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image,TouchableOpacity } from "react-native";
import Menu from "../menu/Menu";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../home/img/home.png')} style={styles.backgroundImage}>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Image source={require('../home/img/wifinoura.png')} style={styles.image} />
            <Text style={styles.title}>Home</Text>
          </View>
            <View>
                <Text style={styles.textContent}>Clique no botão e</Text>
                <Text style={styles.textContent}>comece a mudar o mundo</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaCadastroSementes')}>
                <Text style={styles.buttonText}>VAMOS PLANTAR</Text>
              </TouchableOpacity>
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
    resizeMode: 'cover',
    width: 430,
    height: 700,
  },
  contentContainer: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255)',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 60,
  },
  image: {
    width: 70,
    height: 50,
    transform: [{ scale: 0.8 }],
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9D9494',
  },
  textContent: {
    fontSize: 16, 
    color: '#797676',
    textAlign: 'center',
    marginRight: 5,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 100,
    alignItems: "center",
    marginBottom: 200,
  },
  button: {
    width: 200,
    height: 35,
    backgroundColor: "#F3F1ED",
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
    color: "#7E3207",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Home;
