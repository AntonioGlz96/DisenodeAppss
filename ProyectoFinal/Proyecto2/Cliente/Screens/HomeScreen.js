import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >
                Feed
            </Text>

            <TouchableOpacity
                onPress={() => navigation.navigate("Products")}
                
                style={{
                    backgroundColor: "purple",
                    padding: 10,
                    marginTop: "20%",
                    width: "50%",
                    alignSelf: "center",
                    borderRadius: 10, // Corregido "borderRadious" a "borderRadius"
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        textAlign: "center",
                        color: "white",
                    }}
                >
                  Products
                </Text>
            </TouchableOpacity>

        {/* segundo boton */}

            <TouchableOpacity
                onPress={() => navigation.navigate("Pedidos")}
                
                style={{
                    backgroundColor: "purple",
                    padding: 10,
                    marginTop: "20%",
                    width: "50%",
                    alignSelf: "center",
                    borderRadius: 10, // Corregido "borderRadious" a "borderRadius"
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        textAlign: "center",
                        color: "white",
                    }}
                >
                 Pedidos
                </Text>
            </TouchableOpacity>


            
        </View>
    );
}

export default HomeScreen;
