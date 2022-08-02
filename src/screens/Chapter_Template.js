import React, { Component } from "react";

// Import your audio file
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import play from './icons/play-icon.jpg';
import stop from './icons/stop-icon.jpg';
import jsonStuff from './gita-verses/chapter-1/gita_chapter_1_verse_1.json';
class Chapter_Template extends Component {

  audio1 = this.props.navigation.getParam('url1', 'https://drive.google.com/uc?id=1heYIXcA6ZAmnGhhhszNOr30VXZ0OkPqG&export=download');
  title = this.props.navigation.getParam('title', 'Error!');
  audio2 = this.props.navigation.getParam('url2','https://drive.google.com/uc?id=1heYIXcA6ZAmnGhhhszNOr30VXZ0OkPqG&export=download');
  image1 = this.props.navigation.getParam('image1', 'error');
  image2 = this.props.navigation.getParam('image2', 'error');
  image3 = this.props.navigation.getParam('image3', 'error');
  image4 = this.props.navigation.getParam('image4', 'error');
  image5 = this.props.navigation.getParam('image5', 'error');
  image6 = this.props.navigation.getParam('image6', 'error');
  image7 = this.props.navigation.getParam('image7', 'error');
  image8 = this.props.navigation.getParam('image8', 'error');
  image9 = this.props.navigation.getParam('image9', 'error');
  image10 = this.props.navigation.getParam('image10', 'error');
  image11 = this.props.navigation.getParam('image11', 'error');
  
  state = {
    isPlaying1: false,
    isPlaying2:false,
    audio1: new Audio(this.audio1),
    audio2:new Audio(this.audio2),
  };
  
  stopAudio1 = ()=>{
    this.state.audio1.pause();
    this.state.audio1.currentTime = 0;
    this.state.isPlaying1 = false;

  }
  stopAudio2 = ()=>{
    this.state.audio2.pause();
    this.state.audio2.currentTime = 0;
    this.state.isPlaying2 = false;

  }
  // Main function to handle both play and pause operations
  playPauseButton1 = () => {

    // Get state of song
    let isPlaying1 = this.state.isPlaying1;
    if (isPlaying1) {
      this.state.audio1.pause();
    } else {
      this.state.audio1.play();
    }
    // Change the state of song
    this.setState({ isPlaying1: !isPlaying1 });
  };
  playPauseButton2 = () => {

    // Get state of song
    let isPlaying2 = this.state.isPlaying2;
    if (isPlaying2) {
      this.state.audio2.pause();
    } else {
      this.state.audio2.play();
    }
    // Change the state of song
    this.setState({ isPlaying2: !isPlaying2 });
  };
  render() {
      return (
        <ScrollView>
          {/* Show state of song on website */}
          <Text style = {{fontStyle:"EB Garamond"}}>
            {this.title}
          </Text>
          {/* Button to call our main function */}
          <button>
            <img src={play} width={50} height={50} onClick={this.playPauseButton1}/>
            <img src={stop} width={50} height={50} onClick={this.stopAudio1}/>
          </button>
          <img src = {this.image1}/>
          <Text style = {styles.textStyle}>
            {jsonStuff.text}
          </Text>
          <img src = {this.image2}/>
          <img src = {this.image3}/>
          <img src = {this.image4}/>
          <img src = {this.image5}/>
          <button>
          <img src={play} width={50} height={50} onClick={this.playPauseButton2}/>
          <img src={stop} width={50} height={50} onClick={this.stopAudio2}/>
          </button>
          <img src = {this.image6}/>
          <img src = {this.image7}/>
          <img src = {this.image8}/>
          <img src = {this.image9}/>
          <img src = {this.image10}/>
          <img src = {this.image11}/>
        </ScrollView>
      );

  }
}
const styles = StyleSheet.create({
  textStyle:{
      fontSize:20,
      fontFamily: 'EB Garamond'
  }
});
export default Chapter_Template;