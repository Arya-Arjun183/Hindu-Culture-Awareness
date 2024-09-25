import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Styles';

const Festivals = (props) => {
    return (
      <View>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("Festivals_Template", {Name:"Diwali"})}>
          <Text style={styles.textStyle}>Diwali</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("Festivals_Template", {Name:"Holi"})}>
          <Text style={styles.textStyle}>Holi</Text>
        </TouchableOpacity>  
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("Festivals_Template", {Name:"Navaratri"})}>
          <Text style={styles.textStyle}>Navaratri</Text>
        </TouchableOpacity>  
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("Festivals_Template", {Name:"Maha Shivaratri"})}>
          <Text style={styles.textStyle}>Maha Shivaratri</Text>
        </TouchableOpacity>  
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("Festivals_Template", {Name:"Raksha Bandhan"})}>
          <Text style={styles.textStyle}>Raksha Bandhan</Text>
        </TouchableOpacity>  
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("Festivals_Template", {Name:"Dussehra"})}>
          <Text style={styles.textStyle}>Dussehra</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("Festivals_Template", {Name:"Makar Sankranti"})}>
          <Text style={styles.textStyle}>Makar Sankranti</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("Festivals_Template", {Name:"Pongal"})}>
          <Text style={styles.textStyle}>Pongal</Text>
        </TouchableOpacity>        
      </View>
    );
  };
  
  
  export default Festivals;
  