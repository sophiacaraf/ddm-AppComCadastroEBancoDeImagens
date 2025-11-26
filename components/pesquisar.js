
import { View, Text, ScrollView, TextInput} from 'react-native';

import Estilos from '../styles/estilos';
import React from 'react';

import ImagemGaleria from './ImagemGaleria';
import { Divider} from 'react-native-paper';


const imagens = [
  {nome: "gatinho", caminho: require('../assets/gatinho.jpg')},
  {nome: "gg", caminho: require('../assets/gg.jpg')},
  {nome: "gy", caminho: require('../assets/gy.jpg')},
  {nome: "estrela", caminho: require('../assets/etrela.jpg')},
 
];
 
class Galeria extends React.Component{
  state = {
    filtro:''
  }
  render(){
    const imagensfiltradas=imagens.filter(item=>
    item.nome.toLowerCase().includes(this.state.filtro.toLowerCase())
    );
    return(
      <ScrollView style={Estilos.scrollViewContainer}>
        <View style={Estilos.containerTitulo}>
          <Text style={[Estilos.textoTitulo, Estilos.textoCor]}>Galeria de Imagens</Text>
        </View>
      <Divider style={Estilos.divisor}/>
      <TextInput style={Estilos.filtro}
        placeholder="Digite para filtar..."
        value={this.state.filtro}
        onChangeText={(text) => this.setState({filtro:text})}
        >
      </TextInput>
      <View style={Estilos.containerGaleria}>
      {
        imagensfiltradas.map(
          (item)=>(
            <ImagemGaleria
            nome={item.nome}
            caminho={item.caminho}
            />
          )
        )
      }
      </View>
      </ScrollView>
    );
  }
}
export default Galeria;