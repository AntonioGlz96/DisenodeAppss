import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

const CarritoScreen = () => {
    // Simulación de datos de productos
    const products = [
        { id: 1, name: "Mouse luz led", description: "Description of Product 1", image: require("../img/product1.jpg") },
        { id: 2, name: "Teclado luz led", description: "Description of Product 2", image: require("../img/product2.jpg") },
        // Agrega más productos según sea necesario
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {products.map(product => (
                <View key={product.id} style={styles.productContainer}>
                    <Image source={product.image} style={styles.productImage} />
                    <View style={styles.productInfo}>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productDescription}>{product.description}</Text>
                    </View>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonLabel}>Agregar</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    productContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
    },
    productImage: {
        width: 80,
        height: 80,
        marginRight: 10,
        resizeMode: "cover",
        borderRadius: 5,
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    productDescription: {
        fontSize: 14,
        color: "#666",
    },
    addButton: {
        backgroundColor: "#007bff",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    addButtonLabel: {
        color: "#fff",
        fontWeight: "bold",
    },
});

export default CarritoScreen;


