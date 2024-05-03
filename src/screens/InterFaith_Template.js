import React from 'react';
import { Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import interfaithData from './interfaith/interfaith.json';

class InterFaith_Template extends Component{
    factName = this.props.navigation.getParam('Name', 'Pluralism').toString();

    getInfo(){
        return interfaithData[this.factName];
    }

    render(){
        return(
            <ScrollView>
                <Text style = {styles.mainText}> {this.getInfo()}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainText:{
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'Helvetica',
        color: 'blue',
    }
})

export default InterFaith_Template;