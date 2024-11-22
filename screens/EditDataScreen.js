import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { db } from '../firebase/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

export default function EditDataScreen({ route, navigation }) {
  const { item } = route.params;
  const [newValue, setNewValue] = useState(item.value);

  const handleUpdate = async () => {
    const docRef = doc(db, 'data', item.id);
    await updateDoc(docRef, { value: newValue });
    alert('Dispositivo Atualizado!');
    navigation.navigate('ListData');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={newValue}
        onChangeText={setNewValue}
        placeholder="Editar Dispositivo"
      />
      <Button title="Salvar" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
