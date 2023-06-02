import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, FlatList, TouchableOpacity } from "react-native";
import Menu from "../menu/Menu";

const Canteiro = ({ navigation }) => {
  const [plantas, setPlantas] = useState([]);

  const fetchPlantas = async () => {
    try {
      const response = await fetch('http://IP:8080/api/v1/canteiro/1');
      const data = await response.json();
      setPlantas(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPlantas();
  }, []);

  const navigateToAtualizaAlimentos = (nomePlanta, idPlanta) => {
    navigation.navigate("TelaAtualizaAlimento", {
      nomePlanta,
      idPlanta,
    });
  };

  useEffect(() => {
    const updateFetchPlantas = () => {
      navigation.setParams({
        fetchPlantas: fetchPlantas,
      });
    };

    navigation.addListener("focus", updateFetchPlantas);

    return () => {
      navigation.removeListener("focus", updateFetchPlantas);
    };
  }, [navigation]);

  console.log(plantas)

  const devolveImagem = (nomePlanta) => {
    const dados = [
      { name: "Brócolis", image: require('../canteiro/img/brocolis.png') },
      { name: "Alface", image: require('../canteiro/img/alface.png') },
      { name: "Cebola", image: require('../canteiro/img/cebola.png') },
      { name: "Batata", image: require('../canteiro/img/batata.png') },
      { name: "Tomate", image: require('../canteiro/img/tomate.png') },
      { name: "Cenoura", image: require('../canteiro/img/cenoura.png') },
      { name: "Coentro", image: require('../canteiro/img/coentro.png') },
      { name: "Feijão", image: require('../canteiro/img/feijao.png') },
      { name: "Mandioca", image: require('../canteiro/img/mandioquinha.png') },
      { name: "Pimentão", image: require('../canteiro/img/pimentao.png') },
      { name: "Rabanete", image: require('../canteiro/img/rabanete.png') },
      { name: "Berinjela", image: require('../canteiro/img/beringela.png') },
    ];

    const planta = dados.find((planta) => planta.name === nomePlanta);

    if (planta) {
      return planta.image;
    }
    return require('../canteiro/img/rabanete.png');
   };
   

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.touchableOpacity} onPress={() => navigateToAtualizaAlimentos(item.planta.nome, item.planta.id)}>
      <View style={styles.itemContainer}>
        <Image source={devolveImagem(item.planta.nome)} style={styles.imageItem} />
        <Text style={styles.texto}>{item.planta.nome}</Text>
        <Text style={styles.texto}>{item.plantio.dataPlantio}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../canteiro/img/superior.png')} style={styles.backgroundImage}>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Meu Canteiro</Text>
          </View>
          <FlatList
            data={plantas}
            renderItem={renderItem}
            keyExtractor={(item) => item.planta.id.toString()}
            style={styles.listContainer}
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
    marginTop: 150,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 10,
    marginBottom: 10,
    width: 430,
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
