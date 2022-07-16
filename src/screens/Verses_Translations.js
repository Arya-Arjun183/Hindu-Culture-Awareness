import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import gita from './icons/gita-icon.jpeg';

const Verses_Translations = (props) => {
    return (
    <View>
        <TouchableOpacity onPress={() => props.navigation.navigate("GitaHomePage")}>
            <Text style = {styles.mainStyle}>Gita Home Page</Text>
            <img src={gita} width={300} height={180} alt='Large Pizza' />
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    mainStyle: {
        fontSize: 45,
        fontFamily: 'Georgia'
    },
});

export default Verses_Translations;
