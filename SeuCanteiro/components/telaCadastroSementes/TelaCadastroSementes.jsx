import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, FlatList } from "react-native";
import Menu from "../menu/Menu";

const TelaCadastroSementes = ({navigation}) => {

  const data = [
    { id: 1, name: "Brócolis", image: require('../telaCadastroSementes/img/brocolis.png') },
    { id: 2, name: "Alface", image: require('../telaCadastroSementes/img/alface.png') },
    { id: 3, name: "Cebola", image: require('../telaCadastroSementes/img/cebola.png') },
    { id: 4, name: "Batata", image: require('../telaCadastroSementes/img/batata.png') },
    { id: 5, name: "Tomate", image: require('../telaCadastroSementes/img/tomate.png') },
    { id: 6, name: "Cenoura", image: require('../telaCadastroSementes/img/cenoura.png') },
    { id: 7, name: "Coentro", image: require('../telaCadastroSementes/img/coentro.png') },
    { id: 8, name: "Feijão", image: require('../telaCadastroSementes/img/feijao.png') },
    { id: 9, name: "Mandioca", image: require('../telaCadastroSementes/img/mandioquinha.png') },
    { id: 10, name: "Pimentão", image: require('../telaCadastroSementes/img/pimentao.png') },
    { id: 11, name: "Rabanete", image: require('../telaCadastroSementes/img/rabanete.png') },
    { id: 12, name: "Berinjela", image: require('../telaCadastroSementes/img/beringela.png') },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.touchableOpacity} onPress={() => navigation.navigate('TelaCadastroAlimento', { nomePlanta: item.name })}>
      <Text style={styles.texto}>{item.name}</Text>
      <Image source={item.image} style={styles.imageItem} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../telaCadastroSementes/img/canteiro.png')} style={styles.backgroundImage}>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Image source={require('../telaCadastroSementes/img/wifinoura.png')} style={styles.image} />
            <Text style={styles.title}>Cadastro de Sementes</Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            contentContainerStyle={styles.listContentContainer}
          />
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
    height: 895,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255)',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 250,
    marginBottom: 30,
    marginRight: 60,
  },
  image: {
    width: 70,
    height: 50,
    transform: [{ scale: 0.8 }],
    resizeMode: 'contain',
    marginBottom: 10,
  },
  imageItem: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#9D9494',
  },
  texto: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#7E3207',
    textAlign: 'center',
  },
  listContentContainer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  touchableOpacity : {
    alignItems:'center',
    justifyContent:'center',
    marginRight: 20,
    marginBottom: 10,
  },
});

export default TelaCadastroSementes;
