import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { MenuItem } from "../MenuItems/MenuItem";
import { useNavigation } from "@react-navigation/native";

//todas las opciones del menu
//name= nombre de la opcion y el titulo
//icono de https://ionic.io/ionicons/v4
//nombre del archivo
export const menuItems = [
  {
    name: 'Ver todos los pedidos',
    icon: 'eye',
    component: 'VerPedidos',
  },
  {
    name: 'Asignar O.R a pedidos',
    icon: 'arrow-forward',
    component: 'AsignarOr',
  },
  {
    name: 'Ver todos las O.R',
    icon: 'eye',
    component: 'VerOR',
  },
  {
    name: 'Asignar actividades a empleados',
    icon: 'arrow-forward',
    component: 'AsignarAct',
  },
  {
    name: 'Registrar nuevos administradores',
    icon: 'person-add',
    component: 'RegistrarAdmins',
  },
];

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
      //view principal
      //scrollview en el contenedor del menu
      //touchable es el boton
      //no muevas mas, solo agrega tus opciones
        <View>
          
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >
            Menu administrador 
            </Text>
          
          <ScrollView>
            {
              menuItems.map(item => (
                <TouchableOpacity 
                  key={item.component}
                  onPress={() => navigation.navigate(item.component)}
                  style={styles.boton}
                >
                  <MenuItem key={item.component} {...item}/>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
    
      
        </View>
    );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F3F2F7",
  },
  globalMargin: {
    paddingHorizontal: 20,
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: "20%"
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  text:{
        fontSize: 15,
        textAlign: "center",
        color: "white",
  },
  boton:{
    backgroundColor: "purple",
    padding: 5,
    marginTop: "10%",
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
}
});

export default HomeScreen;
