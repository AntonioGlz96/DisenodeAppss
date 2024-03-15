import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: String;
  icon: String;
  component: String;
  // todo:
}

export const MenuItem = ({ name, icon, component }: Props) => {
  return (
    <Pressable
      onPress={() => console.log('click')}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#DDDDDD" : "white"
        },
        styles.container
      ]}
    >
      <View style={styles.content}>
        <Icon name={icon} size={25} style={{ marginRight: 10 }} color="#5856D6" />
        <Text style={{ color: "black"}}>{name}</Text>
        
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderRadius:10
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    
  }
});
