import React from 'react';
import { Text, StyleSheet, ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import TextToSpeech from './TextToSpeech';
import { Component } from 'react/cjs/react.production.min';
import festivalData from './festival-data/festivals.json';
import festivalDatesData from './festival-data/dates.json'

class Festivals_Template extends Component{
    festivalName = this.props.navigation.getParam('Name', 'Diwali').toString();

    getInfo(){
        return festivalData[this.festivalName]["Text"];
    }
    getName(){
        return this.festivalName;
    }
    getDate(){
        return festivalDatesData[this.festivalName];
    }
    getImage(){
        return festivalData[this.festivalName]["Image"];
    }

    render(){
        return(
            <ScrollView>
                <Text style = {styles.dateText}>{this.getDate()}</Text>
                <TextToSpeech text = {this.getInfo()}/>
                <Text style = {styles.mainText}>{this.getInfo()}</Text>
                <Image
                    style={{
                        resizeMode: "stretch",
                        flex: 1, 
                        alignSelf: 'center',
                        height: 400,
                        width: 550,
                        borderWidth: 1,
                        borderRadius: 0
                        }}
                        source={this.getImage()}/>
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