import React from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";

const VerPedidos = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.title}>Detalles del Pedido</Text>
            <View style={styles.orderContainer}>
                <Text style={styles.componentTitle}>Cliente</Text>
                <Text style={styles.component}>- Nombre: Juan Pérez</Text>
                <Text style={styles.component}>- Dirección de Envío: Calle Principal 123, Ciudad, País</Text>
                <Text style={styles.component}>- Teléfono: +123456789</Text>
                <Text style={styles.component}>- Correo Electrónico: ejemplo@email.com</Text>

                <Text style={styles.componentTitle}>Memoria RAM</Text>
                <Text style={styles.component}>- Producto: Kuesuny Memoria RAM DDR3L-1600 de 8 GB, PC3L-12800/PC3L-12800s, 204 Pines, 1.35 V/1.5 V, CL11, sin ECC, sin búfer, 2RX8, Doble Rango para computadora portátil </Text>
                <Text style={styles.component}>- Cantidad: 2</Text>
                <Text style={styles.component}>- Precio Unitario: $20.00 USD</Text>
                <Text style={styles.component}>- SKU: CAM123</Text>
                <Text style={styles.component}>- Descripción: Memoria ram</Text>

                <Text style={styles.componentTitle}>Costos</Text>
                <Text style={styles.component}>- Subtotal del Pedido: $40.00 USD</Text>
                <Text style={styles.component}>- Impuestos: $4.00 USD</Text>
                <Text style={styles.component}>- Gastos de Envío: $5.00 USD</Text>
                <Text style={styles.component}>- Descuentos Aplicados: $0.00 USD</Text>
                <Text style={styles.component}>- Total del Pedido: $49.00 USD</Text>

                
                
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        marginTop: "20%",
    },
    orderContainer: {
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        width: "90%",
    },
    componentTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 5,
    },
    component: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default VerPedidos;
