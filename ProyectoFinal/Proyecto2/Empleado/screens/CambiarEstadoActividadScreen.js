import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CambiarEstadoActividadScreen = () => {
  const [activityId, setActivityId] = useState('');
  const [newStatus, setNewStatus] = useState('');

  const handleSubmit = () => {
    // Aquí podrías enviar los datos a tu servidor para cambiar el estado de la actividad
    console.log('Actividad:', activityId);
    console.log('Nuevo estado:', newStatus);
    // Aquí podrías realizar cualquier otra acción necesaria, como mostrar un mensaje de éxito o error
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cambiar Estado de la Actividad</Text>
      <TextInput
        style={styles.input}
        placeholder="ID de la Actividad"
        value={activityId}
        onChangeText={setActivityId}
      />
      <TextInput
        style={styles.input}
        placeholder="Nuevo Estado"
        value={newStatus}
        onChangeText={setNewStatus}
      />
      <Button title="Guardar Cambios" onPress={handleSubmit} color="purple" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'purple',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default CambiarEstadoActividadScreen;
