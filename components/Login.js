import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import Estilos from '../styles/estilos';
import { loginUsuario } from '../database';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin() {
    const usuario = await loginUsuario(email, senha);

    if (!usuario) {
      Alert.alert("Erro", "Email ou senha incorretos.");
      return;
    }

    navigation.replace("Drawer", { usuario }); 
  }

  return (
    <View style={Estilos.safeAreaViewContainer}>
      <Text style={Estilos.textoTitulo}>Login</Text>

      <TextInput
        placeholder="Email"
        style={Estilos.campoTexto}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={Estilos.campoTexto}
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Entrar" style={Estilos.bt} onPress={handleLogin} />
      <Button title="Criar Conta" onPress={() => navigation.navigate("Cadastro")} />
    </View>
  );
}
