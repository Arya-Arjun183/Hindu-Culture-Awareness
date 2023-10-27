import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from 'react-native';
const gita = require('./icons/gita-icon.jpeg')

const AppHome = (props) => {
    return (
        <View>
            <Text style={styles.textTitle}>Welcome to Ananth!</Text>
            <Image 
            style={{
            resizeMode: "stretch",
            flex: 1, 
            alignSelf: 'center',
            height: 400,
            width: 550,
            borderWidth: 1,
            borderRadius: 0
            }}
          source={gita}
        />
            <Text style = {styles.textInfo}>Welcome to Ananth, your ultimate gateway to the rich and vibrant world of Hindi culture. At Ananth, our mission is to immerse you in the depths of this ancient and profound culture, offering you a treasure trove of knowledge and insights. Discover the divine with information about various goddesses, explore the wisdom of the Bhagavad Gita with verses and their translations, and get acquainted with the tapestry of Hindu religious festivals. Ananth is more than just an app; it's your companion in the journey to understand and appreciate the beauty of Hindi culture. Join us in this exploration and let the colors, sounds, and spirituality of Hindu traditions enrich your life.</Text>
            <TouchableOpacity
            onPress={() => props.navigation.navigate("Menu")}>
                <Text style={styles.textButton}>Main Menu</Text>
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
      color: 'blue',
      fontFamily:'EB Garamond',
      textAlign:'center',
      margin: 20,
    },
  });

export default AppHome;