import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaInicial from './components/telaInicial/TelaInicial';
import TelaLogin from './components/loginScreen/TelaLogin';
import TelaCadastro from './components/telaCadastro/TelaCadastro';

export default function App() {
  return (
    <View style={styles.container}>
      <TelaCadastro/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
