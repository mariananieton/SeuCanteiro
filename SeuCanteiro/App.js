import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TelaInicial from './components/telaInicial/TelaInicial';
import TelaLogin from './components/TelaLogin/TelaLogin';
import TelaCadastro from './components/telaCadastro/TelaCadastro';
import Menu from './components/menu/Menu';
import SobreNos from './components/sobreNos/SobreNos';

export default function App() {
  return (
    <View style={styles.container}>
      <SobreNos/>
      <StatusBar style="auto" />
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
