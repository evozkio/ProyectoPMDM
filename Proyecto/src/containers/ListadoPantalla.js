import React from 'react';
import { Text, View, SafeAreaView, FlatList} from 'react-native';
import styles from '../styles/styles';

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
      <View style = {styles.vista}>
        <Text style={styles.letra} 
        onPress={() => navigation.navigate('Detalles', { nombre: item.nombre, edad: item.edad, sexo: item.sexo })}> 
          {item.nombre}
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

export default ListadoPantalla;