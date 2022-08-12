import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import gita from './icons/gita-icon.jpeg';
const Verses_Translations = (props) => {
    return (
    <View style = {{justifyContent:'center'}}>
        <TouchableOpacity onPress={() => props.navigation.navigate("GitaHomePage")}>
            <Text style = {styles.mainStyle}>Gita Home Page</Text>
            <img src={gita} width={300} height={180}></img>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    mainStyle: {
        fontSize: 45,
        fontFamily: 'Georgia',
    },
    imageStyle: {
        textAlign:'center',
    }
});

export default Verses_Translations;
