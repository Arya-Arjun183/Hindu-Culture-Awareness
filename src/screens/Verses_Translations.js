import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
const gita = require('./icons/gita-icon2.jpeg');

const Verses_Translations = (props) => {
    return (
    <View style = {{justifyContent:'center',alignItems: 'center'}}>
        <TouchableOpacity onPress={() => props.navigation.navigate("GitaHomePage")}>
            <Text style = {styles.mainStyle}>Gita Home Page</Text>
            <Image 
            style={{
            resizeMode: "stretch",
            flex: 1, 
            alignContent: 'center',
            height: 400,
            width: 550,
            borderWidth: 1,
            borderRadius: 0
            }}
          source={gita}
        />
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    mainStyle: {
        fontSize: 45,
        fontFamily: 'Georgia',
        textAlign:'center',
        color: 'blue',
    },
    imageStyle: {
        textAlign:'center',
    }
});

export default Verses_Translations;
