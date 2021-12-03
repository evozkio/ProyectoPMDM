import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InformacionPantalla from './src/containers/InformacionPantalla';
import ListadoStackScreen from './src/navigation/ListadoStackScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (

    <NavigationContainer>

      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Informacion') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Listado') {
              iconName = focused ? 'ios-filter' : 'ios-filter-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
        })}
      >
        
        
      <Tab.Screen options={{ headerShown: false }} name="Listado" component={ListadoStackScreen}/>
      <Tab.Screen options={{ headerShown: false }} name="Informacion" component={InformacionPantalla}
          
          options={{
            title: 'Información',
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
      }} />


      </Tab.Navigator>
    </NavigationContainer>


  )
}
export default App;