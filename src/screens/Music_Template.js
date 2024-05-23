import React from 'react';
import { Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import musicData from './music-data/music.json';


class Music_Template extends Component{
    musicName  = this.props.navigation.getParam('Name', 'Sitar').toString();;

    getInfo(){
        return musicData[this.musicName];
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

export default Music_Template;