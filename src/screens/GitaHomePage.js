import React from 'react';
import { Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';

const GitaHomePage = (props) => {
  return (
  <ScrollView>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:1,
      verse:1,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/1_1-5.mp3",  
      title: "Chapter One Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1_1.jpeg",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.17.46%20PM.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.18.02%20PM.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.18.18%20PM.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.18.35%20PM.png",
      url2:   "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/1_6-10.mp3",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.18.53%20PM.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.19.06%20PM.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.19.20%20PM.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.19.33%20PM.png",
      image10: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.01.47%20PM.png",
      })}>
        <Text style={styles.textButton}>Chapter One - Verses 1-10</Text>
      </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:1,
      verse:11,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/1_11-15.mp3",  
      title: "Chapter One Verses 11-20",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.02.07%20PM.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.02.22%20PM.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.02.34%20PM.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.02.54%20PM.png",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/1_16-20.mp3",  
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.03.10%20PM.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.03.31%20PM.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.04.03%20PM.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.04.43%20PM.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.05.12%20PM.png",
      image10: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.05.28%20PM.png",
      })}>
        <Text style={styles.textButton}>Chapter One - Verses 11-20</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:1,
      verse:21,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/1_21-25.mp3",  
      title: "Chapter One Verses 21-30",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.37.00%20PM.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.37.10%20PM.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.37.24%20PM.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.38.20%20PM.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.38.32%20PM.png",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/1_26-30.mp3", 
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.38.44%20PM.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.38.56%20PM.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.39.07%20PM.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.39.19%20PM.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.39.32%20PM.png",
      })}>
        <Text style={styles.textButton}>Chapter One - Verses 21-30</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:1,
      verse:31,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/1_31-35.mp3",  
      title: "Chapter One - Verses 31-40",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/gita-1-31-40/1_31.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/gita-1-31-40/1_32.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/gita-1-31-40/1_33.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/gita-1-31-40/1_34.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/gita-1-31-40/1_35.png",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/1_36-40.mp3",  
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/gita-1-31-40/1_36.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/gita-1-31-40/1_37.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/gita-1-31-40/1_38.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/gita-1-31-40/1_39.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/gita-1-31-40/1_40.png",
      })}>
        <Text style={styles.textButton}>Chapter One - Verses 31-40</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/1_41-45.mp3",  
      chapter:1,
      verse:41,
      title: "Chapter One - Verses 41-47",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-41-47/1_41.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-41-47/1_42.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-41-47/1_43.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-41-47/1_44.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-41-47/1_45.png",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/1_46-47.mp3",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-41-47/1_46.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-41-47/1_47.png",
      })}>
        <Text style={styles.textButton}>Chapter One - Verses 41-47</Text>
    </TouchableOpacity>

    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/2_1-5.mp3",  
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/2_6-10.mp3",
      chapter:2,
      verse:1,
      title: "Chapter Two - Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_1.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_2.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_3.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_4.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_5.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_6.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_7.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_8.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_9.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_10.png",
      })}>
        <Text style={styles.textButton}>Chapter Two - Verses 1-10</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/2_11-15.mp3", 
      chapter:2,
      verse:11,
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/2_16-20.mp3",  
      title: "Chapter Two - Verses 11-20",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_11.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_12.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_13.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_14.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_15.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_16.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_17.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_18.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_19.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_20.png",
      })}>
        <Text style={styles.textButton}>Chapter Two - Verses 11-20</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/2_21-25.mp3",  
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/2_26-30.mp3",  
      title: "Chapter Two - Verses 21-30",
      chapter:2,
      verse:21,
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_21.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_22.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_23.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_24.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_25.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_26.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_27.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_28.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_29.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_30.png",
      })}>
        <Text style={styles.textButton}>Chapter Two - Verses 21-30</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/2_31-35.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/2_36-40.mp3",  
      title: "Chapter Two - Verses 31-40",
      chapter:2,
      verse:31,
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_31.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_32.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_33.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_34.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_35.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_36.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_37.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_38.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_39.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_40.png",
      })}>
        <Text style={styles.textButton}>Chapter Two - Verses 31-40</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/2_41-45.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/2_46-50.mp3",  
      title: "Chapter Two - Verses 41-50",
      chapter:2,
      verse:41,
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_41.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_42.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_43.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_44.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_45.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_46.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_47.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_48.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_49.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_50.png",
      })}>
        <Text style={styles.textButton}>Chapter Two - Verses 41-50</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:2,
      verse:51,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/2_51-55.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/2_56-61.mp3",  
      title: "Chapter Two - Verses 51-61",
      chapter:2,
      verse:51,
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_51.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_52.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_53.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_54.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_55.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_56.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_57.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_58.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_59.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_60.png",
      image11:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_61.png",
      })}>
        <Text style={styles.textButton}>Chapter Two - Verses 51-61</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/2_62-66.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/2_67-72.mp3",  
      title: "Chapter Two - Verses 62-72",
      chapter:2,
      verse:62,
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_62.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_63.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_64.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_65.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_66.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_67.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_68.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_69.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_70.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_71.png",
      image11:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter2/2_72.png",
      })}>
        <Text style={styles.textButton}>Chapter Two - Verses 62-72</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:3,
      verse:1,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/3_1-5.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/3_6-10.mp3",  
      title: "Chapter Three - Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_1.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_2.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_3.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_4.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_5.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_6.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_7.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_8.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_9.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_10.png",
      })}>
        <Text style={styles.textButton}>Chapter Three - Verses 1-10</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:3,
      verse:11,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/3_11-15.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/3_16-21.mp3",  
      title: "Chapter Three - Verses 11-21",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_11.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_12.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_13.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_14.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_15.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_16.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_17.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_18.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_19.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_20.png",
      image11:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_21.png",
      })}>
        <Text style={styles.textButton}>Chapter Three - Verses 11-21</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:3,
      verse:22,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/3_22-26.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/3_27-32.mp3",  
      title: "Chapter Three - Verses 22-32",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_22.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_23.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_24.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_25.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_26.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_27.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_28.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_29.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_30.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_31.png",
      image11: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_32.png",
      })}>
        <Text style={styles.textButton}>Chapter Three - Verses 22-32</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:3,
      verse:33,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/3_33-37.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/3_38-43.mp3",  
      title: "Chapter Three - Verses 33-43",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_33.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_34.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_35.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_36.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_37.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_38.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_39.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_40.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_41.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_42.png",
      image11: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter3/3_43.png",
      })}>
        <Text style={styles.textButton}>Chapter Three - Verses 33-43</Text>
    </TouchableOpacity>

    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:4,
      verse:1,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/4_1-5.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/4_6-10.mp3",  
      title: "Chapter Four - Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_1.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_2.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_3.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_4.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_5.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_6.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_7.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_8.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_9.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_10.png",
      })}>
        <Text style={styles.textButton}>Chapter Four - Verses 1-10</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:4,
      verse:11,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/4_11-15.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/4_16-21.mp3",  
      title: "Chapter Four - Verses 11-21",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_11.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_12.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_13.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_14.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_15.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_16.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_17.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_18.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_19.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_20.png",
      image11: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_21.png",
      })}>
        <Text style={styles.textButton}>Chapter Four - Verses 11-21</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:4,
      verse:22,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/4_22-26.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/4_27-32.mp3",  
      title: "Chapter Four - Verses 22-32",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_22.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_23.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_24.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_25.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_26.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_27.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_28.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_29.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_30.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_31.png",
      image11:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_32.png",
      })}>
        <Text style={styles.textButton}>Chapter Four - Verses 22-32</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:4,
      verse:33,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/4_33-37.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/4_38-43.mp3",  
      title: "Chapter Four - Verses 33-43",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_33.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_34.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_35.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_36.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_37.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_38.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_39.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_40.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_41.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_42.png",
      image11:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter4/4_43.png",
      })}>
        <Text style={styles.textButton}>Chapter Four - Verses 33-43</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:5,
      verse:1,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/5_1-5.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/5_6-10.mp3",  
      title: "Chapter Five - Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_1.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_2.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_3.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_4.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_5.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_6.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_7.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_8.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_9.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_10.png",
      })}>
        <Text style={styles.textButton}>Chapter Five - Verses 1-10</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:5,
      verse:11,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/5_11-15.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/5_16-20.mp3",  
      title: "Chapter Five - Verses 11-20",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_11.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_12.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_13.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_14.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_15.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_16.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_17.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_18.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_19.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_20.png",
      })}>
        <Text style={styles.textButton}>Chapter Five - Verses 11-20</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:5,
      verse:21,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/5_21-25.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/5_26-29.mp3",  
      title: "Chapter Five - Verses 21-29",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_21.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_22.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_23.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_24.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_25.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_26.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_27.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_28.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter5/5_29.png",
      })}>
        <Text style={styles.textButton}>Chapter Five - Verses 21-29</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:6,
      verse:1,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/6_1-5.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/6_6-10.mp3",  
      title: "Chapter Six - Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_1.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_2.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_3.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_4.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_5.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_6.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_7.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_8.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_9.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_10.png",
      })}>
        <Text style={styles.textButton}>Chapter Six - Verses 1-10</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:6,
      verse:11,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/6_11-15.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/6_16-20.mp3",  
      title: "Chapter Six - Verses 11-20",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_11.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_12.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_13.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_14.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_15.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_16.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_17.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_18.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_19.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_20.png",
      })}>
        <Text style={styles.textButton}>Chapter Six - Verses 11-20</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:6,
      verse:21,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/6_21-25.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/6_26-30.mp3",  
      title: "Chapter Six - Verses 21-30",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_21.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_22.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_23.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_24.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_25.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_26.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_27.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_28.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_29.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_30.png",
      })}>
        <Text style={styles.textButton}>Chapter Six - Verses 21-30</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:6,
      verse:31,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/6_31-35.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/6_36-40.mp3",  
      title: "Chapter Six - Verses 31-40",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_31.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_32.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_33.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_34.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_35.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_36.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_37.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_38.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_39.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_40.png",
      })}>
        <Text style={styles.textButton}>Chapter Six - Verses 31-40</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:6,
      verse:41,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/6_41-45.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/6_46-47.mp3",  
      title: "Chapter Six - Verses 41-47",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_41.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_42.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_43.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_44.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_45.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_46.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter6/6_47.png",
      })}>
        <Text style={styles.textButton}>Chapter Six - Verses 41-47</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:7,
      verse:1,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/7_1-5.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/7_6-10.mp3",  
      title: "Chapter Seven - Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_1.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_2.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_3.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_4.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_5.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_6.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_7.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_8.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_9.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_10.png",
      })}>
        <Text style={styles.textButton}>Chapter Seven - Verses 1-10</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
    chapter:7,
      verse:11,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/7_11-15.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/7_16-20.mp3",  
      title: "Chapter Seven - Verses 11-20",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_11.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_12.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_13.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_14.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_15.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_16.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_17.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_18.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_19.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_20.png",
      })}>
        <Text style={styles.textButton}>Chapter Seven - Verses 11-20</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:7,
      verse:21,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/7_21-25.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/7_26-30.mp3",  
      title: "Chapter Seven - Verses 21-30",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_21.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_22.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_23.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_24.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_25.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_26.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_27.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_28.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_29.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter7/7_30.png",
      })}>
        <Text style={styles.textButton}>Chapter Seven - Verses 21-30</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:8,
      verse:1,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/8_1-5.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/8_6-10.mp3",  
      title: "Chapter Eight - Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_1.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_2.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_3.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_4.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_5.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_6.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_7.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_8.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_9.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_10.png",
      })}>
        <Text style={styles.textButton}>Chapter Eight - Verses 1-10</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
    chapter:8,
      verse:11,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/8_11-15.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/8_16-20.mp3",  
      title: "Chapter Eight - Verses 11-20",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_11.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_12.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_13.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_14.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_15.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_16.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_17.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_18.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_19.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_20.png",
      })}>
        <Text style={styles.textButton}>Chapter Eight - Verses 11-20</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:8,
      verse:21,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/8_21-25.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/8_26-28.mp3",  
      title: "Chapter Eight - Verses 21-28",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_21.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_22.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_23.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_24.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_25.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_26.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_27.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter8/8_28.png",
      })}>
        <Text style={styles.textButton}>Chapter Eight - Verses 21-28</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:9,
      verse:1,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/9_1-5.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/9_6-10.mp3",  
      title: "Chapter Nine - Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_1.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_2.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_3.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_4.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_5.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_6.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_7.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_8.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_9.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_10.png",
      })}>
        <Text style={styles.textButton}>Chapter Nine - Verses 1-10</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
    chapter:9,
      verse:11,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/9_11-15.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/9_16-20.mp3",  
      title: "Chapter Nine - Verses 11-20",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_11.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_12.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_13.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_14.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_15.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_16.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_17.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_18.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_19.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_20.png",
      })}>
        <Text style={styles.textButton}>Chapter Nine - Verses 11-20</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:9,
      verse:21,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/9_21-25.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/9_26-30.mp3",  
      title: "Chapter Nine - Verses 21-30",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_21.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_22.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_23.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_24.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_25.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_26.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_27.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_28.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_29.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_30.png",
      })}>
        <Text style={styles.textButton}>Chapter Nine - Verses 21-30</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:9,
      verse:21,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/9_31-34.mp3",  
      title: "Chapter Nine - Verses 31-34",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_31.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_32.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_33.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter9/9_34.png",
      })}>
        <Text style={styles.textButton}>Chapter Nine - Verses 31-34</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:10,
      verse:1,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/10_1-5.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/10_6-10.mp3",  
      title: "Chapter Ten - Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_1.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_2.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_3.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_4.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_5.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_6.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_7.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_8.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_9.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_10.png",
      })}>
        <Text style={styles.textButton}>Chapter Ten - Verses 1-10</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:10,
      verse:11,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/10_11-15.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/10_16-20.mp3",  
      title: "Chapter Ten - Verses 11-20",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_11.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_12.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_13.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_14.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_15.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_16.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_17.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_18.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_19.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_20.png",
      })}>
        <Text style={styles.textButton}>Chapter Ten - Verses 11-20</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:10,
      verse:21,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/10_21-25.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/10_26-30.mp3",  
      title: "Chapter Ten - Verses 21-30",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_21.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_22.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_23.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_24.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_25.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_26.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_27.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_28.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_29.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_30.png",
      })}>
        <Text style={styles.textButton}>Chapter Ten - Verses 21-30</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:10,
      verse:31,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/10_31-35.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/10_36-40.mp3",  
      title: "Chapter Ten - Verses 31-40",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_31.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_32.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_33.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_34.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_35.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_36.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_37.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_38.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_39.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_40.png",
      })}>
        <Text style={styles.textButton}>Chapter Ten - Verses 31-40</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:10,
      verse:41,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/10_41-42.mp3",
      title: "Chapter Ten - Verses 41-42",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_41.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter10/10_42.png",
      })}>
        <Text style={styles.textButton}>Chapter Ten - Verses 41-42</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:11,
      verse:1,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/11_1-5.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/11_6-10.mp3",  
      title: "Chapter Eleven - Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_1.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_2.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_3.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_4.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_5.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_6.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_7.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_8.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_9.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_10.png",
      })}>
        <Text style={styles.textButton}>Chapter Eleven - Verses 1-10</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:11,
      verse:11,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/11_11-15.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/11_16-20.mp3",  
      title: "Chapter Eleven - Verses 11-20",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_11.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_12.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_13.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_14.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_15.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_16.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_17.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_18.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_19.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_20.png",
      })}>
        <Text style={styles.textButton}>Chapter Eleven - Verses 11-20</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:11,
      verse:21,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/11_21-25.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/11_26-30.mp3",  
      title: "Chapter Eleven - Verses 21-30",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_21.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_22.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_23.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_24.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_25.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_26.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_27.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_28.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_29.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_30.png",
      })}>
        <Text style={styles.textButton}>Chapter Eleven - Verses 21-30</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:11,
      verse:31,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/11_31-35.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/11_36-40.mp3",  
      title: "Chapter Eleven - Verses 31-40",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_31.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_32.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_33.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_34.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_35.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_36.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_37.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_38.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_39.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_40.png",
      })}>
        <Text style={styles.textButton}>Chapter Eleven - Verses 31-40</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:11,
      verse:41,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/11_41-45.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/11_46-50.mp3",  
      title: "Chapter Eleven - Verses 41-50",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_41.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_42.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_43.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_44.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_45.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_46.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_47.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_48.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_49.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_50.png",
      })}>
        <Text style={styles.textButton}>Chapter Eleven - Verses 41-50</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:11,
      verse:51,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/11_51-55.mp3",  
      title: "Chapter Eleven - Verses 51-55",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_51.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_52.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_53.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_54.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter11/11_55.png",
      })}>
        <Text style={styles.textButton}>Chapter Eleven - Verses 51-55</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:12,
      verse:1,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/12_1-5.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/12_6-10.mp3",  
      title: "Chapter Twelve - Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_1.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_2.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_3.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_4.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_5.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_6.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_7.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_8.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_9.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_10.png",
      })}>
        <Text style={styles.textButton}>Chapter Twelve - Verses 1-10</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:12,
      verse:11,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/12_11-15.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/12_16-20.mp3",  
      title: "Chapter Twelve - Verses 11-20",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_11.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_12.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_13.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_14.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_15.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_16.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_17.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_18.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_19.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter12/12_20.png",
      })}>
        <Text style={styles.textButton}>Chapter Twelve - Verses 11-20</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:13,
      verse:1,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/13_1-5.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/13_6-10.mp3",  
      title: "Chapter Thirteen - Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_1.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_2.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_3.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_4.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_5.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_6.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_7.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_8.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_9.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_10.png",
      })}>
        <Text style={styles.textButton}>Chapter Thirteen - Verses 1-10</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:13,
      verse:11,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/13_11-15.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/13_16-20.mp3",  
      title: "Chapter Thirteen - Verses 11-20",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_11.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_12.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_13.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_14.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_15.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_16.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_17.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_18.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_19.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_20.png",
      })}>
        <Text style={styles.textButton}>Chapter Thirteen - Verses 11-20</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:13,
      verse:21,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/13_21-25.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/13_26-30.mp3",  
      title: "Chapter Thirteen - Verses 21-30",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_21.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_22.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_23.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_24.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_25.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_26.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_27.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_28.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_29.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_30.png",
      })}>
        <Text style={styles.textButton}>Chapter Thirteen - Verses 21-30</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:13,
      verse:31,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/13_31-35.mp3",
      title: "Chapter Thirteen - Verses 31-35",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_31.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_32.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_33.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_34.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter13/13_35.png",
      })}>
        <Text style={styles.textButton}>Chapter Thirteen - Verses 31-35</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:14,
      verse:1,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/14_1-5.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/14_6-10.mp3",  
      title: "Chapter Fourteen - Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_1.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_2.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_3.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_4.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_5.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_6.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_7.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_8.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_9.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_10.png",
      })}>
        <Text style={styles.textButton}>Chapter Fourteen - Verses 1-10</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:14,
      verse:11,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/14_11-15.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/14_16-20.mp3",  
      title: "Chapter Fourteen - Verses 11-20",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_11.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_12.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_13.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_14.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_15.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_16.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_17.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_18.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_19.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_20.png",
      })}>
        <Text style={styles.textButton}>Chapter Fourteen - Verses 11-20</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:14,
      verse:21,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/14_21-25.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/14_26-27.mp3",  
      title: "Chapter Fourteen - Verses 21-27",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_21.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_22.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_23.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_24.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_25.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_26.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_27.png",
      })}>
        <Text style={styles.textButton}>Chapter Fourteen - Verses 21-27</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:15,
      verse:1,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/15_1-5.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/15_6-10.mp3",  
      title: "Chapter Fifteen - Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_1.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_2.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_3.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_4.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_5.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_6.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_7.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_8.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_9.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_10.png",
      })}>
        <Text style={styles.textButton}>Chapter Fifteen - Verses 1-10</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:15,
      verse:11,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/15_11-15.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/15_16-19.mp3",  
      title: "Chapter Fifteen - Verses 11-29",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_11.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_12.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_13.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_14.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_15.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_16.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_17.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_18.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter15/15_19.png",
      })}>
        <Text style={styles.textButton}>Chapter Fifteen - Verses 11-19</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:16,
      verse:1,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/16_1-5.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/16_6-10.mp3",  
      title: "Chapter Sixteen - Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_1.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_2.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_3.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_4.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_5.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_6.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_7.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_8.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_9.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter14/14_10.png",
      })}>
        <Text style={styles.textButton}>Chapter Sixteen - Verses 1-10</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:16,
      verse:11,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/16_11-15.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/16_16-20.mp3",  
      title: "Chapter Sixteen - Verses 11-20",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter16/16_11.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter16/16_12.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter16/16_13.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter16/16_14.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter16/16_15.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter16/16_16.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter16/16_17.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter16/16_18.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter16/16_19.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter16/16_20.png",
      })}>
        <Text style={styles.textButton}>Chapter Sixteen - Verses 11-20</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:16,
      verse:21,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/16_21-24.mp3",
      title: "Chapter Fourteen - Verses 21-24",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter16/16_21.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter16/16_22.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter16/16_23.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter16/16_24.png",
      })}>
        <Text style={styles.textButton}>Chapter Sixteen - Verses 21-24</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:17,
      verse:1,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/17_1-5.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/17_6-10.mp3",  
      title: "Chapter Seventeen - Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_1.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_2.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_3.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_4.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_5.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_6.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_7.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_8.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_9.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_10.png",
      })}>
        <Text style={styles.textButton}>Chapter Seventeen - Verses 1-10</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:17,
      verse:11,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/17_11-15.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/17_16-20.mp3",  
      title: "Chapter Seventeen - Verses 11-20",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_11.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_12.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_13.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_14.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_15.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_16.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_17.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_18.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_19.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_20.png",
      })}>
        <Text style={styles.textButton}>Chapter Seventeen - Verses 11-20</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:17,
      verse:21,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/17_21-25.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/17_26-28.mp3",  
      title: "Chapter Seventeen - Verses 21-28",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_21.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_22.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_23.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_24.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_25.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_26.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_27.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_28.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter17/17_29.png",
      })}>
        <Text style={styles.textButton}>Chapter Seventeen - Verses 21-28</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:18,
      verse:1,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/18_1-5.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/18_6-10.mp3",  
      title: "Chapter Eighteen - Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_1.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_2.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_3.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_4.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_5.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_6.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_7.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_8.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_9.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_10.png",
      })}>
        <Text style={styles.textButton}>Chapter Eighteen - Verses 1-10</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:18,
      verse:11,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/18_11-15.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/18_16-20.mp3",  
      title: "Chapter Eighteen - Verses 11-20",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_11.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_12.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_13.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_14.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_15.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_16.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_17.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_18.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_19.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_20.png",
      })}>
        <Text style={styles.textButton}>Chapter Eighteen - Verses 11-20</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:18,
      verse:21,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/18_21-25.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/18_26-30.mp3",  
      title: "Chapter Eighteen - Verses 21-30",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_21.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_22.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_23.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_24.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_25.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_26.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_27.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_28.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_29.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_30.png",
      })}>
        <Text style={styles.textButton}>Chapter Eighteen - Verses 21-30</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:18,
      verse:31,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/18_31-35.mp3",
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/18_36-40.mp3",
      title: "Chapter Eighteen - Verses 31-40",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_31.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_32.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_33.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_34.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_35.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_36.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_37.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_38.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_39.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_40.png",
      })}>
        <Text style={styles.textButton}>Chapter Eighteen - Verses 31-40</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:18,
      verse:41,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/18_41-45.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/18_46-50.mp3",  
      title: "Chapter Eighteen - Verses 41-50",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_41.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_42.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_43.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_44.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_45.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_46.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_47.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_48.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_49.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_50.png",
      })}>
        <Text style={styles.textButton}>Chapter Eighteen - Verses 41-50</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:18,
      verse:51,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/18_51-55.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/18_56-60.mp3",  
      title: "Chapter Eighteen - Verses 51-60",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_51.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_52.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_53.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_54.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_55.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_56.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_57.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_58.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_59.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_60.png",
      })}>
        <Text style={styles.textButton}>Chapter Eighteen - Verses 51-60</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:18,
      verse:61,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/18_61-65.mp3",
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/18_66-70.mp3",  
      title: "Chapter Eighteen - Verses 61-70",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_61.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_62.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_63.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_64.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_65.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_66.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_67.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_68.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_69.png",
      image10:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_70.png",
      })}>
        <Text style={styles.textButton}>Chapter Eighteen - Verses 61-70</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      chapter:18,
      verse:71,
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/18_71-75.mp3",
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/18_76-78.mp3",
      title: "Chapter Eighteen - Verses 71-78",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_71.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_72.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_73.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_74.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_75.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_76.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_77.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter18/18_78.png",
      })}>
        <Text style={styles.textButton}>Chapter Eighteen - Verses 71-78</Text>
    </TouchableOpacity>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 50,
  },
  textButton:{
    fontSize: 40,
    color: 'blue',
    margin: 15,
    textAlign:'center',
    fontFamily:'EB Garamond',
  },
});

export default GitaHomePage;