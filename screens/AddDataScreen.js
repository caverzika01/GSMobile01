import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase/firebaseConfig';


export default function AddDataScreen({ navigation }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');

  const handleSave = async () => {
    if (!name || !description || !status || !date) {
      Alert.alert('Campos obrigatórios', 'Todos os campos são obrigatórios!');
      return;
    }
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      Alert.alert('Formato de data inválido', 'A data deve estar no formato YYYY-MM-DD.');
      return;
    }

    try {
      await addDoc(collection(db, 'data'), {
        name,
        description,
        status,
        date,
      });
      Alert.alert('Sucesso', 'Dados salvos com sucesso!');
      navigation.navigate('ListData');
    } catch (error) {
      console.error('Erro ao salvar dados: ', error);
      Alert.alert('Erro', 'Erro ao salvar dados. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Digite o nome"
        autoCapitalize="words"
      />

      <Text style={styles.label}>Descrição:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Digite uma descrição"
        multiline
      />

      <Text style={styles.label}>Status:</Text>
      <TextInput
        style={styles.input}
        value={status}
        onChangeText={setStatus}
        placeholder="Digite o status"
      />

      <Text style={styles.label}>Data de Aquisição:</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="YYYY-MM-DD"
        keyboardType="numeric"
      />

      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
