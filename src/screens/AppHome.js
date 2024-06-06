import React,{ useRef, useEffect, useState } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Image, Animated } from 'react-native';
const gita = require('./icons/gita-icon.jpeg')

import { logEvent } from '../analytics';


const handleClick = (props) => {
  logEvent('User', 'Clicked the main menu');
  props.navigation.navigate("Menu");
};

const AppHome = (props) => {
    return (
        <View>
            <Text style = {styles.textTitle}>Welcome to Ananth!</Text>
            <Image 
            style={styles.imageStyle}
          source={gita}
        />
            <Text style = {styles.textInfo}>Welcome to Ananth, your ultimate gateway to the rich and vibrant world of Hindu culture. In Hinduism, the concept of dharma incorporates ethical principles and cosmic order, fostering a deep understanding of societal harmony and individual responsibility within a spiritual framework. Additionally, ancient Indian scientific contributions in fields such as mathematics, astronomy, and medicine have left a lasting legacy, demonstrating the culture's commitment to empirical observation and systematic inquiry.</Text>
            <TouchableOpacity
            onPress={() => handleClick(props)}>
                <Text style={styles.textButton}>Main Menu</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    background:{
      color:'#007FFF',
    },
    imageStyle: {
      resizeMode: "stretch",
      flex: 1, 
      alignSelf: 'center',
      height: 400,
      width: 550,
      borderWidth: 1,
      borderRadius: 0
    },
    textTitle: {
      fontSize: 50,
      fontFamily: 'EB Garamond',
      color:'#007FFF',
      textAlign:'center',
      margin: 20,
    },
    textInfo: {
      fontSize: 35,
      fontFamily: 'cursive',
      color:'#007FFF',
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

export default AppHome;