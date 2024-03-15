import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//screens
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import StackScreen from "./screens/StackScreen";
//lista de componentes que son opciones de menu
import VerPedidos from "./AdminScreens/VerPedidos";
import AsignarOr from "./AdminScreens/AsignarOr";
import VerOR from "./AdminScreens/VerOR";
import AsignarAct from "./AdminScreens/AsignarAct";
import RegistrarAdmins from "./AdminScreens/RegistrarAdmins";

import ActEstPed from "./AdminScreens/ActEstPed";
import AddComp from "./AdminScreens/AddComp";
import ActStockComp from "./AdminScreens/ActStockComp";
import CambEmplAct from "./AdminScreens/CambEmplAct";
import CambEstOr from "./AdminScreens/CambEstOr";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStackNavigator = createNativeStackNavigator();

//el homestack es lo que te conduce a la pagina
//primero importar el componenete del documento a añadir
//name debe ser el mismo nombre que le diste en la lista de opciones en HomeScreen
//el component tambien debe ser igual
//al añadir opcion  copias el ultimo y cambias name,component
function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            
             <HomeStackNavigator.Screen
                name="VerPedidos"
                component={VerPedidos}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
             <HomeStackNavigator.Screen
                name="AsignarOr"
                component={AsignarOr}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            <HomeStackNavigator.Screen
                name="VerOR"
                component={VerOR}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            <HomeStackNavigator.Screen
                name="AsignarAct"
                component={AsignarAct}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            <HomeStackNavigator.Screen
                name="RegistrarAdmins"
                component={RegistrarAdmins}
                options={{
                    headerBackTitleVisible: false,
                }}
            />


            <HomeStackNavigator.Screen
                name="ActualizarEstadoPedido"
                component={ActEstPed}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            <HomeStackNavigator.Screen
                name="AgregarComponentes"
                component={AddComp}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            <HomeStackNavigator.Screen
                name="ActualizarStock"
                component={ActStockComp}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            <HomeStackNavigator.Screen
                name="CambiarEmpleadoDeActividad"
                component={CambEmplAct}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            <HomeStackNavigator.Screen
                name="CambiarEstadoDeOrdenes"
                component={CambEstOr}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
        </HomeStackNavigator.Navigator>
    );
}   

const Tab  = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions= {{
              tabBarActiveTintColor: 'purple',
          }}
        >
          <Tab.Screen 
              name="Home" 
              component={MyStack} 
              options={{
                  tabBarLabel: 'Feed',
                  tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="home" color={color} size={30} />
                  ),
                  tabBarBadge: 10,
                  headerShown: false,
              }}
          />
          <Tab.Screen 
              name="Settings" 
              component={SettingScreen}
              options={{
                  tabBarLabel: 'Settings',
                  tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="brightness-5" color={color} size={30} />
                  ),
              }}
          />
      </Tab.Navigator>
      );
  }

export default function Navigation(){
    return(
        
        <NavigationContainer>
            
            <MyTabs/>
            
        </NavigationContainer>

    );
}