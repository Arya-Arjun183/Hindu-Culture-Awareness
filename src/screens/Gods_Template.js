import React from 'react';
import { Text, StyleSheet, ScrollView, Button, TouchableOpacity, View } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import TextToSpeech from './TextToSpeech';
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
        var quote = this.getQuote(this.godName)
        var summary = this.getSummary(this.godName)
        var additionalInfo = this.getAdditionalInfo(this.godName)

        return(
            <ScrollView>
                <View>
                {quote ? (
                    <>
                    <TextToSpeech text = {quote}/>
                    <Text style = {styles.quote}>{quote}</Text>
                    </>
                ) : null}
                </View>
                <View>
                {summary ? (
                    <>
                    <TextToSpeech text = {summary}/>
                    <Text style = {styles.mainText}>{summary}</Text>
                    </>
                ) : null}
                </View>

                <View>
                {additionalInfo ? (
                    <>
                    <TextToSpeech text = {additionalInfo}/>
                    <Text style = {styles.mainText}>{additionalInfo}</Text>
                    </>
                ) : null}
                </View>
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
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'Helvetica',
        color:'#007FFF',
    }
})
export default Gods_Template;