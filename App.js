import { SafeAreaView, StatusBar } from 'react-native';
import Estilos from './styles/estilos';

import Perfil from './components/Pessoa';
import Pesquisar from './components/pesquisar';
import Inicio from './components/inicio';

import Login from './components/Login';
import Cadastro from './components/Cadastro';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { drawerStyles } from './styles/estilos';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={drawerStyles} initialRouteName='Inicio'>
      <Drawer.Screen
        name='Inicio' component={Inicio}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='home-outline' color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen
        name='Perfil' component={Perfil}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='person-circle-outline' color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen
        name='Pesquisar' component={Pesquisar}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='fast-food-outline' color={color} size={size} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#fff' />
      <SafeAreaView style={Estilos.safeAreaViewContainer}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Drawer" component={DrawerRoutes} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
