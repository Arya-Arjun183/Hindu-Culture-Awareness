import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from 'react-native';
const icon = require('./icons/favicon.png');
const gita = require('./icons/gita-icon.jpeg');
const om = require('./icons/om.png');
const verses = require('./icons/verses.jpeg');
const festivals = require('./icons/festivals.jpeg');
const science = require('./icons/science.jpeg');

const Menu = (props) => {

  return (
  <View>
    <TouchableOpacity
    onPress={() => props.navigation.navigate("Gods_Godesses")}>
      <Text style={styles.textButton}>Gods and Godesses</Text>
      <Image
      style={{
        resizeMode: "stretch",
        flex: 1, 
        alignSelf: 'center',
        height: 200,
        width: 200,
        borderWidth: 0,
        borderRadius: 0
        }}
        source = {om}
      >
      </Image>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigation.navigate("Verses_Translations")}>
      <Text style={styles.textButton}>Verses and Translations</Text>
      <Image
      style={{
        resizeMode: "stretch",
        flex: 1, 
        alignSelf: 'center',
        height: 200,
        width: 400,
        borderWidth: 0,
        borderRadius: 0
        }}
        source = {verses}
      >
      </Image>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigation.navigate("Festivals")}>
        <Text style={styles.textButton}>Festivals</Text>
        <Image
      style={{
        resizeMode: "stretch",
        flex: 1, 
        alignSelf: 'center',
        height: 200,
        width: 320,
        borderWidth: 0,
        borderRadius: 0
        }}
        source = {festivals}
      >
      </Image>
      <TouchableOpacity onPress={()=> props.navigation.navigate("Science")}>
        <Text style = {styles.textButton}>Science</Text>
        <Image
      style={{
        resizeMode: "stretch",
        flex: 1, 
        alignSelf: 'center',
        height: 200,
        width: 320,
        borderWidth: 0,
        borderRadius: 0
        }}
        source = {science}
      ></Image>
      </TouchableOpacity>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 50,
    fontFamily: 'EB Garamond',
    textAlign:'center',
    margin: 20,
  },
  textInfo: {
    fontSize: 35,
    fontFamily: 'cursive',
    textAlign: 'center',
    margin: 20
  },
  textButton:{
    fontSize: 40,
    color: '#ff8c04',
    fontFamily:'EB Garamond',
    textAlign:'center',
    margin: 20,
  },
});

export default Menu;