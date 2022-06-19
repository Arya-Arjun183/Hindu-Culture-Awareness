import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';

const Gods_Godesses = (props) =>{
    return (
        <View>
            <TouchableOpacity
            onPress={() => props.navigation.navigate("Vishnu")}>
                <Text style={styles.textStyle}>Vishnu</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => props.navigation.navigate("Shiva")}>
                <Text style = {styles.textStyle}></Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:50,
        fontFamily: 'Georgia'
    }
});

export default Gods_Godesses;