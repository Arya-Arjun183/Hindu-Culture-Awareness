import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const AboutUs = () =>{
    return (
        <View>
            <Text style = {styles.textStyle}>Hello! I am Arjun Arya, a senior at high school
                 who created this web application in order to help Hindus and non-Hindus alike, 
                 learn more about Hinduism and Indian culture. We are constantly adding new information 
                 to this application, so feel free to navigate to the feedback form to submit your requests 
                 and we will do our best to add or fix those features.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle:{
      fontSize:30,
      fontFamily: 'Helvetica',
      textAlign: 'center',
      color: '#007FFF',
    },
});

export default AboutUs;