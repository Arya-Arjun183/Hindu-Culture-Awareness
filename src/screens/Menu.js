import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
const om = require('./icons/om.png');
const verses = require('./icons/verses.jpeg');
const festivals = require('./icons/festivals.jpeg');
const scienceImg = require('./icons/iron-pillar.jpeg');
const interfaith = require('./icons/interfaith.png');
const music = require('./icons/music.jpeg');
import styles from './Styles';

import { logPageView } from '../analytics';

const handleClick = (props, menu) => {
  logPageView('AppHome', props);

  props.navigation.navigate(menu);
};

const Menu = (props) => {

  return (
  <View>
    <TouchableOpacity onPress={()=> handleClick(props,"Science")}>
        <Text style = {styles.textButton}>The Science Behind Hinduism</Text>
    </TouchableOpacity>
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
            source = {scienceImg}
        ></Image>
    <TouchableOpacity onPress={()=> handleClick(props,"InterFaith")}>
        <Text style = {styles.textButton}>Interfaith Structures in Hinduism</Text>
    </TouchableOpacity>
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
            source = {interfaith}
        ></Image>
    <TouchableOpacity onPress={() => handleClick(props,"GitaHomePage")}>
      <Text style={styles.textButton}>Gita Verses and Translations</Text>
    </TouchableOpacity>
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
    <TouchableOpacity onPress={() => handleClick(props,"Music")}>
      <Text style={styles.textButton}>Music</Text>
    </TouchableOpacity>
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
        source = {music}
      >
      </Image>
    <TouchableOpacity
    onPress={() => handleClick(props,"Gods_Godesses")}>
      <Text style={styles.textButton}>Gods and Godesses</Text>
    </TouchableOpacity>
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
    <TouchableOpacity onPress={() => handleClick(props,"Festivals")}>
        <Text style={styles.textButton}>Festivals</Text>
    </TouchableOpacity>
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
      <TouchableOpacity onPress={()=>handleClick(props,"AboutUs")}>
        <Text style={styles.textButton}>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleClick(props,"Feedback")}>
        <Text style={styles.textButton}>Feedback</Text>
      </TouchableOpacity>
  </View>
  );
};

export default Menu;