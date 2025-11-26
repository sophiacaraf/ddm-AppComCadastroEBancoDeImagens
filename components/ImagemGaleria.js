import {View, Text, Image} from 'react-native';
import Estilos from '../styles/estilos';
 
export default function ImagemGaleria(props){
  return(
    <View style={Estilos.containerImagemGaleria}>
      <Text
      styles={[
        Estilos.textoCor,
        Estilos.textoConteudo,
        Estilos.margemFundo10
      ]}
        >
        {props.nome}
      </Text>
      <Image source={props.caminho} style={[Estilos.raioBorda, Estilos.imagemGaleria]} />
    </View>
  );
}