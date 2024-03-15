// import {useState, useEffect} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import ApiBtc from './components/ApiBtc';
import Post from './components/Post';
import Pokedex from './components/Pokedex';

// const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
// const url2 = "https://jsonplaceholder.typicode.com/posts"
// const url3 = '';

export default function App() {

  return (
    <View style={styles.container}>

      {/* {getContent()} */}
      {/* <ApiBtc  /> */}
      {/* <Post /> */}
      <Pokedex />
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
