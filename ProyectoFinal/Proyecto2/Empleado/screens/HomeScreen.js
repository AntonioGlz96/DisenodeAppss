import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleVerActividades = () => {
    navigation.navigate('VerActividades');
  };

  const handleCambiarEstadoActividad = () => {
    navigation.navigate('CambiarEstadoActividad');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Empleados</Text>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={handleVerActividades}>
          <MaterialCommunityIcons name="format-list-checkbox" size={24} color="purple" />
          <Text style={styles.menuText}>Ver Actividades</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleCambiarEstadoActividad}>
          <MaterialCommunityIcons name="format-list-bulleted" size={24} color="purple" />
          <Text style={styles.menuText}>Cambiar Estado Actividad</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0%", 
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    color: "purple"
  },
  menu: {
    backgroundColor: "lavender",
    padding: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 18,
    marginLeft: 10
  }
});

export default HomeScreen;
