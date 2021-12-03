import React from 'react';
import DetalleUsuarioPantalla from '../containers/DetalleUsuarioPantalla';
import ListadoPantalla from '../containers/ListadoPantalla';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

function ListadoStackScreen() { 
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Listado" component={ListadoPantalla}
        options={{
          title: 'Listado de usuarios',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }} />
      <HomeStack.Screen name="Detalles" component={DetalleUsuarioPantalla} 
        options={{
          title: 'Detalle de usuario',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }} />
    </HomeStack.Navigator>
  );
}

export default ListadoStackScreen;