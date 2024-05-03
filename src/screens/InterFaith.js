import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const InterFaith = (props) =>{
    return (
        <View>
            <TouchableOpacity 
            onPress={()=>props.navigation.navigate("InterFaith_Template", {Name:"Pluralism"})}>
                <Text style={styles.textStyle}>Pluralism</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>props.navigation.navigate("InterFaith_Template", {Name:"RespectForDiversity"})}>
                <Text style={styles.textStyle}>Respect For Diversity</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>props.navigation.navigate("InterFaith_Template", {Name:"InterfaithDialogue"})}>
                <Text style={styles.textStyle}>Interfaith Dialogue</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>props.navigation.navigate("InterFaith_Template", {Name:"Dharma"})}>
                <Text style={styles.textStyle}>Dharma</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      fontFamily: 'Georgia',
      textAlign: 'center',
      color: 'blue',
    },
    textStyle:{
      fontSize:50,
      fontFamily: 'EB Garamond',
      textAlign: 'center',
      color: '#ff8c04',
  },
  });

  export default InterFaith;