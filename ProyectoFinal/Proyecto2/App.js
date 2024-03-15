import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import NavigationCliente from "./Cliente/NavigationCliente";
import NavigationAdmin1 from "./Administrador/Parte1/NavigationAdmin1";
import NavigationAdmin2 from "./Administrador/Parte2/NavigationAdmin2";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Cliente</Text>
      <NavigationCliente />
      <Text>Admin 1</Text>
      <NavigationAdmin1 />
      <Text>Admin 2</Text>
      <NavigationAdmin2 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
