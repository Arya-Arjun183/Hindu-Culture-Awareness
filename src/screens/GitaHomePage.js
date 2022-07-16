import React from 'react';
import { Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';

const GitaHomePage = (props) => {
  return (
  <ScrollView>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/1_1-5.mp3",  
      title: "Chapter One Verses 1-10",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1_1.jpeg",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.17.46%20PM.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.18.02%20PM.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.18.18%20PM.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.18.35%20PM.png",
      url2:"https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/1_6-10.mp3",
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
      url1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/1-31-35.mp3",  
      url2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/1-36-40.mp3",  
      title: "Chapter One - Verses 31-40",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/gita-1-31-40/1_31.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/gita-1-31-40/1_32.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/gita-1-31-40/1_33.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/gita-1-31-40/1_34.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/gita-1-31-40/1_35.png",
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
      url: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/2_51-55.mp3",
      url: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/2_56-61.mp3",  
      title: "Chapter Two - Verses 51-61",
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