import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import styles from './Styles';

const Science = (props) => {
    return (
      <View>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("Science_Template", {Name:"Namaskara"})}>
          <Text style={styles.textStyle}>Namaskara</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("Science_Template", {Name:"Sashtanga Namaskara"})}>
          <Text style={styles.textStyle}>Sashtanga Namaskara</Text>
        </TouchableOpacity> 
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("Science_Template", {Name:"Charan Sparsh"})}>
          <Text style={styles.textStyle}>Charan Sparsh</Text>
        </TouchableOpacity>   
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("Science_Template", {Name:"Hindu Food Etiquette"})}>
          <Text style={styles.textStyle}>Hindu Food Etiquette</Text>
        </TouchableOpacity>  
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("Science_Template", {Name:"Sitting on the Floor and Eating"})}>
          <Text style={styles.textStyle}>Sitting on the Floor and Eating</Text>
        </TouchableOpacity>  
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("Science_Template", {Name:"Surya Namaskar"})}>
          <Text style={styles.textStyle}>Surya Namaskar</Text>
        </TouchableOpacity>  
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("Science_Template", {Name:"Why Do We Fast"})}>
          <Text style={styles.textStyle}>Why Do We Fast</Text>
        </TouchableOpacity>    
      </View>
    );
  };
  
  export default Science;