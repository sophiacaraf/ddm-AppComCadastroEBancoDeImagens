import { View, Text } from 'react-native';
import Estilos from '../styles/estilos';

export default function Perfil({ usuario }) {
  return (
    <View style={Estilos.safeAreaViewContainer}>
      <Text style={Estilos.textoTitulo}>Perfil</Text>

      <Text style={Estilos.pessoaItemNome}>
        {usuario?.nome}
      </Text>

      <Text style={Estilos.pessoaItemEmail}>
        {usuario?.email}
      </Text>
    </View>
  );
}
