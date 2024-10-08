import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import styles from './Styles';

const Music = (props) => {
    return(
        <View>
            <TouchableOpacity
            onPress ={()=>props.navigation.navigate("Music_Template", {Name:"Sitar"})}>
                <Text style={styles.textStyle}>Sitar</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress ={()=>props.navigation.navigate("Music_Template", {Name:"Veena"})}>
                <Text style={styles.textStyle}>Veena</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress ={()=>props.navigation.navigate("Music_Template", {Name:"Tabla"})}>
                <Text style={styles.textStyle}>Tabla</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress ={()=>props.navigation.navigate("Music_Template", {Name:"Bansuri"})}>
                <Text style={styles.textStyle}>Bansuri</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress ={()=>props.navigation.navigate("Music_Template", {Name:"Harmonium"})}>
                <Text style={styles.textStyle}>Harmonium</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress ={()=>props.navigation.navigate("Music_Template", {Name:"Hindustani Classical Music"})}>
                <Text style={styles.textStyle}>Hindustani Classical Music</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress ={()=>props.navigation.navigate("Music_Template", {Name:"Carnatic Classical Music"})}>
                <Text style={styles.textStyle}>Carnatic Classical Music</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Music;