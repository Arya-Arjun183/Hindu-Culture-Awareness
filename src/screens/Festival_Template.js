import React from 'react';
import { Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import festivalData from './festival-data/festivals.json';
import festivalDatesData from './festival-data/dates.json'

class Festivals_Template extends Component{
    festivalName = this.props.navigation.getParam('Name', 'Diwali').toString();

    getInfo(){
        return festivalData[this.festivalName];
    }
    getName(){
        return this.festivalName;
    }
    getDate(){
        return festivalDatesData[this.festivalName];
    }

    render(){
        return(
            <ScrollView>
                <Text style = {styles.dateText}>{this.getDate()}</Text>
                <Text style = {styles.mainText}>{this.getInfo()}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    dateText:{
        fontSize: 35,
        textAlign: 'center',
        fontStyle:'italic',
        fontFamily: 'Helvetica',
    },
    mainText:{
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'Helvetica',
    }
})

export default Festivals_Template;