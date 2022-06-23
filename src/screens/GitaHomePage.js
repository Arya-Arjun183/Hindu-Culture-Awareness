import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const GitaHomePage = (props) => {
  return (
  <View>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("ChapterOne",{
      url: "https://drive.google.com/uc?id=1heYIXcA6ZAmnGhhhszNOr30VXZ0OkPqG&export=download",  
      title: "Chapter One Verses 1-9",
      images: "https://github.com/Arya-Arjun183/Hindu-Culture-Awareness/raw/arjun-first-branch/src/screens/Gita-Chapters/1_1.jpg",
      })}>
        <Text styles={styles.textButton}>Chapter One</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 50,
  },
  textButton:{
    fontSize: 60,
    color: 'blue',
  },
});

export default GitaHomePage;