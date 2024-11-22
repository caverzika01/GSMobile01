import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';  

export default function AddDataScreen({ navigation }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');

  const handleSave = async () => {
    if (!name || !description || !status || !date) {
      alert('Todos os campos são obrigatórios!');
      return;
    }

    try {
      const dataCollection = collection(db, 'data');

      await addDoc(dataCollection, {
        name,
        description,
        status,
        date,
      });

      alert('Dados salvos com sucesso!');
      navigation.navigate('ListData');
    } catch (error) {
      console.error('Erro ao salvar dados: ', error);
      alert('Erro ao salvar dados. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Descrição:</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />

      <Text style={styles.label}>Status:</Text>
      <TextInput style={styles.input} value={status} onChangeText={setStatus} />

      <Text style={styles.label}>Data de Aquisição:</Text>
      <TextInput style={styles.input} value={date} onChangeText={setDate} placeholder="YYYY-MM-DD" />

      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 16, marginVertical: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
});
