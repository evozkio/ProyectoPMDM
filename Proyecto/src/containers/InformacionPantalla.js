import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/styles';

function InformacionPantalla() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.datos}> Esta App te permite conocer en más profundidad las personas </Text>
    </View >
  );
}

export default InformacionPantalla;