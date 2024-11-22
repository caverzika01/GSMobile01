import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import DataItem from '../components/DataItem';

export default function ListDataScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, 'data'));
    const fetchedData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(fetchedData);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'data', id));
    fetchData();
  };

  const handleEdit = (item) => {
    navigation.navigate('EditData', { item });
  };

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DataItem item={item} onEdit={handleEdit} onDelete={handleDelete} />
          )}
        />
      ) : (
        <Text style={styles.emptyText}>Nenhum disposito listado</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#555',
  },
});
