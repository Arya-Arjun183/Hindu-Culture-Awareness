import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';

const Gods_Godesses = (props) =>{
    return (
        <View style={styles.textStyleHeader}>
            <TouchableOpacity 
                onPress={() => props.navigation.navigate("Gods_Template",{Name: "Vishnu",})}>
                <Text style={styles.textStyle}>Vishnu</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => props.navigation.navigate("Gods_Template", {Name: "Shiva"})}>
                <Text style = {styles.textStyle}>Shiva</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => props.navigation.navigate("Gods_Template", {Name: "Brahma"})}>
                <Text style = {styles.textStyle}>Brahma</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => props.navigation.navigate("Gods_Template", {Name: "Laxmi"})}>
                <Text style = {styles.textStyle}>Laxmi</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => props.navigation.navigate("Gods_Template", {Name: "Parvati"})}>
                <Text style = {styles.textStyle}>Parvati</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => props.navigation.navigate("Gods_Template", {Name: "Saraswati"})}>
                <Text style = {styles.textStyle}>Saraswati</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => props.navigation.navigate("Gods_Template", {Name: "Ganapati"})}>
                <Text style = {styles.textStyle}>Ganapati</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => props.navigation.navigate("Gods_Template", {Name: "Krishna"})}>
                <Text style = {styles.textStyle}>Krishna</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => props.navigation.navigate("Gods_Template", {Name: "Rama"})}>
                <Text style = {styles.textStyle}>Rama</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => props.navigation.navigate("Gods_Template", {Name: "Hanuman"})}>
                <Text style = {styles.textStyle}>Hanuman</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => props.navigation.navigate("Gods_Template", {Name: "Shakti"})}>
                <Text style = {styles.textStyle}>Shakti</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => props.navigation.navigate("Gods_Template", {Name: "Shakti"})}>
                <Text style = {styles.textStyle}>Kartikeya</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    textStyle:{
        fontSize:50,
        fontFamily: 'EB Garamond',
        textAlign: 'center',
        color: 'blue',
    }, textStyleHeader:{
        textAlign: 'center',
        fontFamily: 'EB Garamond',
      }
});

export default Gods_Godesses;