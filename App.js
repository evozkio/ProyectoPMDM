import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const styles = StyleSheet.create(
  {
    letraBold: {
      fontSize: 21,
      fontWeight: 'bold'
    },
    letra: {
      fontSize: 21,
      color: 'black',
    },
    vista: {
      padding: 12,
    },
    datos: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 21,
      padding: 12,
      color: 'black',
    }
  }
)

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

function InformacionPantalla() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.datos}> Esta App te permite conocer en más profundidad las personas </Text>
    </View >
  );
}

function DetalleUsuarioPantalla({ route }) {
  const { nombre, edad, sexo } = route.params;
  return (
    <View style={styles.vista}>
      <Text style={styles.letra}><Text style={styles.letraBold}>Nombre: </Text>{nombre}</Text>
      <Text style={styles.letra}><Text style={styles.letraBold}>Edad: </Text>{edad}</Text>
      <Text style={styles.letra}><Text style={styles.letraBold}>Sexo: </Text>{sexo}</Text>
    </View>
  );
}

const DATA = [
  {
    id: 1,
    nombre: 'Antonio Morlanes', 
    edad: 34, 
    sexo: 'Varón', 
  },
  {
     id: 2,
     nombre: 'Margarita Fuentes', 
     edad: 32, 
     sexo: 'Mujer'
  },
  {
    id: 3,
    nombre: 'Manuel Machado', 
    edad: 28, 
    sexo: 'Varón' 
  },
  {
    id: 4,
    nombre: 'Ivan Mejias', 
    edad: 20, 
    sexo: 'Varón' 
  },
  {
    id: 5,
    nombre: 'Clara de la Cruz', 
    edad: 21, 
    sexo: 'Mujer' 
  },
];


function ListadoPantalla({ navigation }) {
  
    const renderItem = ({ item }) => (
      <View >
        <Text style={styles.letra} 
        onPress={() => navigation.navigate('Detalles', { nombre: item.nombre, edad: item.edad, sexo: item.sexo })}> 
          {nombre}
        </Text>
      </View>
    );
  
    return (
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
}

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