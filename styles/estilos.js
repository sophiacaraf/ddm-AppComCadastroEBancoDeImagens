import{StyleSheet} from 'react-native';

export default StyleSheet.create({
  
  scrollViewContainer: {
   backgroundColor: '	pink'
 },


 containerTitulos: {
   alignItems: 'Center',
  padding: 20,
  
 },
  pessoaItemContainer: {
      backgroundColor: '#f2f2f2',
      padding: 12,
      borderRadius: 8,
      marginVertical: 6,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    pessoaItemNome: { fontSize: 16, fontWeight: 'bold' },
    pessoaItemEmail: { color: '#555' },
    pessoaItemBtnExcluirText: { color: 'red', fontWeight: 'bold' },
    safeAreaViewContainer: { flex: 1, backgroundColor: '#fff', padding: 20 },
    textoTitulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    camposCadastroContainer: { marginBottom: 20 },
    campoTexto: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10
    },

 
 
 
 textoCor: {
   color: 'pink'
 },
  containerInicial: {
    margin: 30,
    borderRadius: 'pink',
    alignItems: 'center',
    padding: 20,
    width: 300,
     height: 200,
    
  
 },

 divisor:{
   marginTop: 30,
   marginBottom: 30,
   backgroundColor: 'pink'
 }, 
 
 containerLista: {
   margin: 10

 }, 
 itemLista: {
   flexDirection: 'row',
   alignItems: 'center',
   marginTop:10,
   marginBottom: 10
 },

 textoLista: {
   color: 'purple',
   fontSize: 20,
   marginLeft: 5
 },
 imagem: {
   width: 190,
   height: 190,
   margin: 25,
   alignItems: 'center',
 },
 filtro: {
    color:'rgb(203, 81, 69)',
    backgroundColor: 'white',
    padding: 10,
    borderRadius:5,
    margin:10,
  },
 
  containerImagemGaleria:{
    width: 150,
    alignItems:'center'
  },
 
  raioBorda:{
    borderRadius: 8,
 
  },
  imagemGaleria:{
    width: '100%',
    height: 200
  },
 
 
  bt:{
    color: 'red',
    padding: 10,
    margin:15,
  },

  containerGaleria:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    gap:20,
    margin:10,
    flex:1,
    height:'100%',
  }
});
 

export const drawerStyles ={
 headerStyle: {
   backgroundColor: 'brown',
 },

headerTintColor: 'black',
 headerTitleStyle: {
   fontWeight: 'bold',
 },



 

 drawerStyle: {
   backgroundColor: '	#A52A2A',
   width: 240
   
 },
 drawerActiveTintColor: '#B22222',
 drawerInactiveTintColor: '',

 drawerLabelStyle: {
   fontSize: 16,
   fontWeight: 'bold'
 }
};