// VerActividadesScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const activities = [
  { id: 1, name: 'Actividad 1', description: 'Descripción de la actividad 1' },
  { id: 2, name: 'Actividad 2', description: 'Descripción de la actividad 2' },
  { id: 3, name: 'Actividad 3', description: 'Descripción de la actividad 3' },
  // Agrega más actividades si es necesario
];

const VerActividadesScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
  },
});

export default VerActividadesScreen;
