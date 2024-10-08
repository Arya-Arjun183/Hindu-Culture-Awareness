import React from 'react';
import { Text, ScrollView, TouchableOpacity, Image } from 'react-native';
const gita = require('./icons/gita-icon.jpeg')

import { logPageView } from '../analytics';
import styles from './Styles';

const handleClick = (props) => {
  logPageView('AppHome', 'Main Menu');

  props.navigation.navigate("Menu");
};

const AppHome = (props) => {

    return (
        <ScrollView>
          <Image style={styles.imageStyle}source={gita}/>
            <Text style = {styles.textInfo}>Welcome to Ananth, your ultimate gateway to the rich and vibrant world of Hindu culture. In Hinduism, the concept of dharma incorporates ethical principles and cosmic order, fostering a deep understanding of societal harmony and individual responsibility within a spiritual framework. Additionally, ancient Indian scientific contributions in fields such as mathematics, astronomy, and medicine have left a lasting legacy, demonstrating the culture's commitment to empirical observation and systematic inquiry.</Text>
            <TouchableOpacity
            onPress={() => handleClick(props)}>
                <Text style={styles.textButton}>Main Menu</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default AppHome;