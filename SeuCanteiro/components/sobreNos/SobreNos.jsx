import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import Menu from "../menu/Menu";

const SobreNos = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../sobreNos/img/superior.png')} style={styles.backgroundImage}>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Image source={require('../sobreNos/img/wifinoura.png')} style={styles.image} />
            <Text style={styles.title}>Sobre nós</Text>
          </View>
            <Text style={styles.textContent}>No Seu Canteiro, acreditamos que cada semente plantada é um ato de resistência contra a fome que assola nosso mundo. Somos uma equipe apaixonada por promover a autossuficiência alimentar e criar um futuro sustentável para todos. Nossa jornada começou com a constatação de que o sistema alimentar global é falho e desigual. Bilhões de pessoas enfrentam a realidade triste e injusta da fome todos os dias. Movidos por empatia e determinação, decidimos agir. Desenvolvemos um aplicativo revolucionário que permite cultivar alimentos em qualquer espaço, seja em um pequeno apartamento ou em uma casa com um jardim exuberante. Acreditamos que todos têm o direito de acessar alimentos frescos e saudáveis, independentemente de onde vivam ou de suas circunstâncias.</Text>
          <View style={styles.titleContainer}>
            <Image source={require('../sobreNos/img/wifinoura.png')} style={styles.image} />
            <Text style={styles.title}>Nossa missão</Text>
          </View>
            <Text style={styles.textContent}>Nossa missão vai além de fornecer as informações necessárias para o cultivo de alimentos em casa. Estamos comprometidos em tocar a alma das pessoas e despertar a consciência coletiva sobre a fome e suas causas subjacentes. Queremos inspirar uma revolução silenciosa em cada lar, onde a comida seja cultivada com amor e apreciada em sua forma mais pura.</Text>
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
    height: 932,
  },
  contentContainer: {
    flex: 1,
    marginTop: 70,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255)',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
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
    fontSize: 15, 
    color: '#544F4F',
    textAlign: 'justify',
    marginRight: 15,
  },
});

export default SobreNos;
