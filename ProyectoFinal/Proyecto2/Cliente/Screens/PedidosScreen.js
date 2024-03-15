import React from "react";
import {View, Text, StyleSheet, TouchableOPacity} from "react-native";

const PedidosScreen = () => {
    return(
        <View>
            <Text
             style = {{
                fontSize: 30,
                textAlign: "center",
                marginTop: "20%"
             }}   
            >
                Pedidos
            </Text>
        </View>
    );
}

export default PedidosScreen;