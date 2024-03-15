import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome6 } from '@expo/vector-icons';
//screens
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import StackScreen from "./screens/StackScreen";
import CarritoScreen from "./screens/Carrito";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductsScreen from "./screens/Products";

import PedidosScreen from "./screens/PedidosScreen";
import EstadosScreen from "./screens/EstadosScreen";


const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="Feed"
        >
            <HomeStackNavigator.Screen
                name="Feed"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Products"
                component={ProductsScreen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            <HomeStackNavigator.Screen
                name="Pedidos"
                component={PedidosScreen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            
        </HomeStackNavigator.Navigator>
    );
}   


const Tab = createBottomTabNavigator();

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
            name="Carrito" 
            component={CarritoScreen}
            options={{
                tabBarLabel: 'Carrito',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="cart" color={color} size={30} />
                ),
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
        <Tab.Screen 
            name="Estados" 
            component={EstadosScreen}
            options={{
                tabBarLabel: 'Estados',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="check" color={color} size={30} />
                ),
            }}
        />
        
    </Tab.Navigator>
    );
}


export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}