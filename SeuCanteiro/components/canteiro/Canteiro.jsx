import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, FlatList, TouchableOpacity } from "react-native";
import Menu from "../menu/Menu";

const Canteiro = () => {
  const data = [
    { id: 1, name: "Brócolis", image: require('../canteiro/img/brocolis.png') },
    { id: 2, name: "Alface", image: require('../canteiro/img/alface.png') },
    { id: 3, name: "Cebola", image: require('../canteiro/img/cebola.png') },
    { id: 4, name: "Batata", image: require('../canteiro/img/batata.png') },
    { id: 5, name: "Tomate", image: require('../canteiro/img/tomate.png') },
    { id: 6, name: "Cenoura", image: require('../canteiro/img/cenoura.png') },
    { id: 7, name: "Coentro", image: require('../canteiro/img/coentro.png') },
    { id: 8, name: "Feijão", image: require('../canteiro/img/feijao.png') },
    { id: 9, name: "Mandioca", image: require('../canteiro/img/mandioquinha.png') },
    { id: 10, name: "Pimentão", image: require('../canteiro/img/pimentao.png') },
    { id: 11, name: "Rabanete", image: require('../canteiro/img/rabanete.png') },
    { id: 12, name: "Berinjela", image: require('../canteiro/img/beringela.png') },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.touchableOpacity} onPress={() => console.log('Menu')}>
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.imageItem} />
        <Text style={styles.texto}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../canteiro/img/superior.png')} style={styles.backgroundImage}>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Itens do Canteiro</Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.listContainer}
            contentContainerStyle={styles.listContentContainer}
          />
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
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255)',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 10,
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
  listContainer: {
    marginTop: 30,
  },
  listContentContainer: {
    alignItems: 'flex-start',
    flexGrow: 1,
  },
  touchableOpacity : {
    alignItems:'center',
    justifyContent:'center',
  },
});

export default Canteiro;
