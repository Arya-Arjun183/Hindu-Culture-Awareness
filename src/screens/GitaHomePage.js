import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const GitaHomePage = (props) => {
  return (
  <View>
    <TouchableOpacity 
    onPress={() => props.navigation.navigate("ChapterOne", {
      itemId: 36,
      url: '../audio/gita-chapter-cut-p1.mp3'
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