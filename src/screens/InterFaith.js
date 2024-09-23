import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Styles';

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

export default InterFaith;