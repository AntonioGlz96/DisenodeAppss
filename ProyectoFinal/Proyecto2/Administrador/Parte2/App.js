import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import Navigation from './Navigation';

export const menuItems = [
  {
  name:'Ver todos los pedidos',
  icon: 'eye',
  component: 'VerPedidos',
 },
 {
  name:'Asignar O.R a pedidos',
  icon: 'arrow-forward',
  component: 'AsignarOR',
},
{
  name:'Ver todos las O.R',
    icon: 'eye',
    component: 'VerOR',
},
{
  name:'Asignar actividades a empleados',
  icon: 'arrow.forward',
  component: 'AsignarAct',
},
{
  name:'Registrar nuevos administradores',
  icon: 'person-add',
  component: 'RegistrarAdmins',
},

{
  name:'Actualizar estados de los pedidos asignados',
  icon: 'filing',
  component: 'ActEstPed',
 },
 {
  name:'Agregar componentes en stock',
  icon: 'download',
  component: 'AddComp',
 },
 {
  name:'Actualizar el Stock de componentes',
  icon: 'list-box',
  component: 'ActStockComp',
 },
 {
  name:'Cambiar a un empleado de actividad',
  icon: 'swap',
  component: 'CambEmplAct',
 },
 {
  name:'Cambiar estado de las ordenes de trabajo',
  icon: 'paper',
  component: 'CambEstOr',
 },

 
]
export default function App() {
  return (
    <Navigation />
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },

  mainContainer: {
    flex: 1,
    backgroundColor: "#F3F2F7",
  },
  globalMargin: {
    paddingHorizontal: 20,
    flex: 1,
  },

  btnPrimary: {
    backgroundColor: "#5856D6",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  btnPrimaryText: {
    color: "black",
    fontSize: 16,
  },
});

