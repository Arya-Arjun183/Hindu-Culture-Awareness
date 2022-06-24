import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const GitaHomePage = (props) => {
  return (
  <View>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      url: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/slokhs1_1-9.mp3",  
      title: "Chapter One Verses 1-9",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1_1.jpeg",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.17.46%20PM.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.18.02%20PM.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.18.18%20PM.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.18.35%20PM.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.18.53%20PM.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.19.06%20PM.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.19.20%20PM.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/Screen%20Shot%202022-06-24%20at%205.19.33%20PM.png",
      })}>
        <Text style={styles.textButton}>Chapter One - Verses 1-9</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      url: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/gita-chapter-1-10-20.mp3",  
      title: "Chapter One Verses 10-20",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.01.47%20PM.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.02.07%20PM.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.02.22%20PM.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.02.34%20PM.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.02.54%20PM.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.03.10%20PM.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.03.31%20PM.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.04.03%20PM.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.04.43%20PM.png",
      image10: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.05.12%20PM.png",
      image11: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.05.28%20PM.png",
      })}>
        <Text style={styles.textButton}>Chapter One - Verses 10-20</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("Chapter_Template",{
      url: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Audio/slokhs_1_20-30.mp3",  
      title: "Chapter One Verses 20-30",
      image1: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.37.00%20PM.png",
      image2: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.37.10%20PM.png",
      image3: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.37.24%20PM.png",
      image4: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.38.20%20PM.png",
      image5: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.38.32%20PM.png",
      image6: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.38.44%20PM.png",
      image7: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-10-20/Screen%20Shot%202022-06-24%20at%206.03.31%20PM.png",
      image8: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.38.56%20PM.png",
      image9: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.39.07%20PM.png",
      image10: "https://github.com/Arya-Arjun183/Resources/raw/main/Gita-Slokhas/Pictures/Chapter1/1-20-30/Screen%20Shot%202022-06-24%20at%207.39.19%20PM.png",
      })}>
        <Text style={styles.textButton}>Chapter One - Verses 20-30</Text>
    </TouchableOpacity>
  </View>
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
    fontFamily:'Georgia',
  },
});

export default GitaHomePage;