import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
const Festivals = (props) => {
    console.log(props);
    return (
    <View>
      <Text style={styles.text}>Festivals!</Text>  
    </View>
    );
  };
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      fontFamily: 'Georgia'
    },
  });
  
  export default Festivals;
  