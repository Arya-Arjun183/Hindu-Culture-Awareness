import React from 'react';
import { Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import interfaithData from './interfaith/interfaith.json';
import TextToSpeech from './TextToSpeech';
import styles from './Styles';

class InterFaith_Template extends Component{
    factName = this.props.navigation.getParam('Name', 'Pluralism').toString();

    getInfo(){
        return interfaithData[this.factName];
    }

    render(){
        return(
            <ScrollView>
                <TextToSpeech text = {this.getInfo()}/>
                <Text style = {styles.mainText}> {this.getInfo()}</Text>
            </ScrollView>
        );
    }
}

export default InterFaith_Template;