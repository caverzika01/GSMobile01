import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Adicionar Disposito" onPress={() => navigation.navigate('AddData')} />
      <Button title="Listar Dispositivos" onPress={() => navigation.navigate('ListData')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
