import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native';


const Verses_Translations = (props) => {
    return (
    <View>
        <TouchableOpacity onPress={() => props.navigation.navigate("GitaHomePage")}>
            <Text style = {styles.mainStyle}>Gita Home Page</Text>
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