import React from 'react';
import { Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import gods from './god-data/gods.json'

class Gods_Template extends Component{
    godName = this.props.navigation.getParam('Name', 'Vishnu');
    image = "null";

    getQuote(name){
        return gods[name]["Quote"];
    }
    getSummary(name){
        return gods[name]["Summary"];
    }
    getAdditionalInfo(name){
        return gods[name]["Additional"];
    }
    getImage(name){
        return gods[name]["Image"];
    }

    render(){
        return(
            <ScrollView>
                <Text style = {styles.quote}>{this.getQuote(this.godName)}</Text>
                <Text style = {styles.mainText}> {this.getSummary(this.godName)}</Text>
                <Text style = {styles.mainText}>{this.getAdditionalInfo(this.godName)}</Text>
                <img src = {this.getImage(this.godName)}></img>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    quote:{
        fontSize: 25,
        fontStyle:'italic',
        fontFamily: 'Helvetica',
        color: 'blue',
        textAlign: 'center',
    },
    // title:{
    //     fontSize: 50,
    //     textAlign: 'center',
    //     fontWeight: 'bold',
    //     fontFamily: 'Helvetica',
    //     color: 'blue',
    // },
    mainText:{
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'Helvetica',
    }
})
export default Gods_Template;