import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";


class Menu extends React.Component {
  render() {
    return (
      <View style={styles.container} >
          <TouchableOpacity style={styles.touchableOpacity} onPress={() => console.log('Menu')}>
            <Text style={styles.texto}>HOME</Text>
            <Image source={require('../menu/img/home_icon.png')} style={styles.image} />
          </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => console.log('Menu')}>
            <Text style={styles.texto}>SOBRE NÓS</Text> 
            <Image source={require('../menu/img/equipe.png')} style={styles.image} /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => console.log('Menu')}>
            <Text style={styles.texto}>CHAT</Text>
            <Image source={require('../menu/img/balao.png')} style={styles.image} /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}  onPress={() => console.log('Menu')}>
            <Text style={styles.texto}>CANTEIRO</Text>
            <Image source={require('../menu/img/broto.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
touchableOpacity : {
  alignItems:'center',
  justifyContent:'center',
},
image: {
  width: 48,
   height: 48,
},
});

export default Menu;