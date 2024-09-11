import React from 'react';
import { Text, StyleSheet, ScrollView, Image, View } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import TextToSpeech from './TextToSpeech';
import musicData from './music-data/music.json';


class Music_Template extends Component{
    musicName  = this.props.navigation.getParam('Name', 'Sitar').toString();;

    getInfo(){
        return musicData[this.musicName]["Text"];
    }
    getImage(){
        return musicData[this.musicName]["Image"];
    }

    render(){
        var image = this.getImage()

        return(
            <ScrollView>
                <View>
                    <TextToSpeech text = {this.getInfo()}/>
                    <Text style = {styles.mainText}> {this.getInfo()}</Text>
                </View>
                <View>
                    {image ? (
                        <>
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
                            source={image}/>
                        </>
                    ) : null}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainText:{
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'Helvetica',
        color:'#007FFF',
    }
})

export default Music_Template;