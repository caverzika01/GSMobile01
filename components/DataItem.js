import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DataItem({ item, onEdit, onDelete }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.value}</Text>
      <View style={styles.buttons}>
        <Button title="Editar" onPress={() => onEdit(item)} />
        <Button title="Deletar" onPress={() => onDelete(item.id)} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
