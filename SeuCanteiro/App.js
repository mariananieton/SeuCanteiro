import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaCadastroSementes from "./components/telaCadastroSementes/TelaCadastroSementes";
import TelaCadastroAlimento from "./components/telaCadastroAlimento/TelaCadastroAlimento";
import TelaInicial from "./components/telaInicial/TelaInicial";
import TelaLogin from "./components/telaLogin/TelaLogin"
import TelaCadastro from "./components/telaCadastro/TelaCadastro"
import Home from "./components/home/Home";
import SobreNos from "./components/sobreNos/SobreNos"
import Canteiro from "./components/canteiro/Canteiro";
import TelaAtualizaAlimento from "./components/telaAtualizaAlimento/TelaAtualizaAlimento"
import Perfil from "./components/perfil/Perfil";
import TelaAtualizaCadastro from "./components/telaAtualizaCadastro/TelaAtualizaCadastro"
import TelaAtualizaLogin from "./components/telaAtualizaLogin/TelaAtualizaLogin"
import Chat from "./components/chat/Chat";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen
          name="TelaCadastroSementes"
          component={TelaCadastroSementes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaCadastroAlimento"
          component={TelaCadastroAlimento}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaLogin"
          component={TelaLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaCadastro"
          component={TelaCadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SobreNos"
          component={SobreNos}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Canteiro"
          component={Canteiro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaAtualizaAlimento"
          component={TelaAtualizaAlimento}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaAtualizaCadastro"
          component={TelaAtualizaCadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaAtualizaLogin"
          component={TelaAtualizaLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
