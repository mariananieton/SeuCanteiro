import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";


class Menu extends React.Component {
  render() {
    return (
      <View style={estilos.container} >
          <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={() => console.log('Menu')}>
            <Text style={estilos.texto}>HOME</Text>
            <Image source={require('../menu/img/home_icon.png')} style={{ width: 48, height: 48 }} />
          </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={() => console.log('Menu')}>
            <Text style={estilos.texto}>SOBRE NÓS</Text> 
            <Image source={require('../menu/img/equipe.png')} style={{ width: 48, height: 48}} /> 
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={() => console.log('Menu')}>
            <Text style={estilos.texto}>CHAT</Text>
            <Image source={require('../menu/img/balao.png')} style={{ width: 48, height: 48 }} /> 
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}  onPress={() => console.log('Menu')}>
            <Text style={estilos.texto}>CANTEIRO</Text>
            <Image source={require('../menu/img/broto.png')} style={{ width: 48, height: 48 }} />
        </TouchableOpacity>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
container: {   
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
     backgroundColor: '#DBD4D4',
     width: '430px',
     height: '104px',
},
texto: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 10,
},
});

export default Menu;