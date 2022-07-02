import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';


const HomeScreen = (props) => {
  console.log(props);
  return (
  <View>
    <Text style={styles.textTitle}>Welcome to the app!</Text>
    <TouchableOpacity
    onPress={() => props.navigation.navigate("Gods_Godesses")}>
      <Text style={styles.textButton}>Gods and Godesses</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigation.navigate("Verses_Translations")}>
      <Text style={styles.textButton}>Verses and Translations</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigation.navigate("Festivals")}>
        <Text style={styles.textButton}>Festivals</Text>
      </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 50,
    fontFamily:'EB Garamond',
    textAlign:'center',
    margin :20,
  },
  textButton:{
    fontSize: 40,
    color: 'blue',
    fontFamily:'EB Garamond',
    textAlign:'center',
    margin :20,
  },
});

export default HomeScreen;