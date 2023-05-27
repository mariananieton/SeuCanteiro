import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import Menu from "../menu/Menu";

const TelaCadastroSementes = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../telaCadastroSementes/img/canteiro.png')} style={styles.backgroundImage}>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Image source={require('../telaCadastroSementes/img/wifinoura.png')} style={styles.image} />
            <Text style={styles.title}>Cadastro de Sementes</Text>
          </View>
          <View style={styles.content}>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => console.log('Menu')}>
                    <Text style={styles.texto}>Brócolis</Text>
                    <Image source={require('../telaCadastroSementes/img/brocolis.png')} style={styles.imageItem} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => console.log('Menu')}>
                    <Text style={styles.texto}>Alface</Text> 
                    <Image source={require('../telaCadastroSementes/img/alface.png')} style={styles.imageItem} /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => console.log('Menu')}>
                    <Text style={styles.texto}>Cebola</Text>
                    <Image source={require('../telaCadastroSementes/img/cebola.png')} style={styles.imageItem} /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity}  onPress={() => console.log('Menu')}>
                    <Text style={styles.texto}>Batata</Text>
                    <Image source={require('../telaCadastroSementes/img/batata.png')} style={styles.imageItem} />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => console.log('Menu')}>
                    <Text style={styles.texto}>Tomate</Text>
                    <Image source={require('../telaCadastroSementes/img/tomate.png')} style={styles.imageItem} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => console.log('Menu')}>
                    <Text style={styles.texto}>Cenoura</Text> 
                    <Image source={require('../telaCadastroSementes/img/cenoura.png')} style={styles.imageItem} /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => console.log('Menu')}>
                    <Text style={styles.texto}>Coentro</Text>
                    <Image source={require('../telaCadastroSementes/img/coentro.png')} style={styles.imageItem} /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity}  onPress={() => console.log('Menu')}>
                    <Text style={styles.texto}>Feijão</Text>
                    <Image source={require('../telaCadastroSementes/img/feijao.png')} style={styles.imageItem} />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => console.log('Menu')}>
                    <Text style={styles.texto}>Mandioca</Text>
                    <Image source={require('../telaCadastroSementes/img/mandioquinha.png')} style={styles.imageItem} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => console.log('Menu')}>
                    <Text style={styles.texto}>Pimentão</Text> 
                    <Image source={require('../telaCadastroSementes/img/pimentao.png')} style={styles.imageItem} /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => console.log('Menu')}>
                    <Text style={styles.texto}>Rabanete</Text>
                    <Image source={require('../telaCadastroSementes/img/rabanete.png')} style={styles.imageItem} /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity}  onPress={() => console.log('Menu')}>
                    <Text style={styles.texto}>Berinjela</Text>
                    <Image source={require('../telaCadastroSementes/img/beringela.png')} style={styles.imageItem} />
                </TouchableOpacity>
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
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255)',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    marginTop: 200,
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
  content: {
    flexDirection: 'row',
    marginTop: 30,
  },
  touchableOpacity : {
    alignItems:'center',
    justifyContent:'center',
  },
});

export default TelaCadastroSementes;
