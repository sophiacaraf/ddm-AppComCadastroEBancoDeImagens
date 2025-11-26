import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import Estilos from '../styles/estilos';
import { cadastrarUsuario } from '../database';
import { TouchableOpacity } from 'react-native';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleCadastro() {
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    try {
      await cadastrarUsuario(nome, email, senha);
      Alert.alert("Sucesso", "Conta criada!");

      navigation.navigate("Login"); 
      
    } catch {
      Alert.alert("Erro", "Este email já está cadastrado");
    }
  }

  return (
    <View style={Estilos.safeAreaViewContainer}>
      <Text style={Estilos.textoTitulo}>Criar Conta</Text>

      <TextInput
        placeholder="Nome"
        style={Estilos.campoTexto}
        value={nome}
        onChangeText={setNome}
      />

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

     <Button title="Cadastrar" onPress={handleCadastro} />

    </View>
  );
}
