import React, { Component } from "react";

// Import your audio file
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

class Gita_Chapter_Template extends Component {
  
  url = this.props.navigation.getParam('url', 'https://drive.google.com/uc?id=1heYIXcA6ZAmnGhhhszNOr30VXZ0OkPqG&export=download');
  title = this.props.navigation.getParam('title', 'Error!');

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
    isPlaying: false,
    audio: new Audio(this.url),
  };
  

  // Main function to handle both play and pause operations
  playPause = () => {

    // Get state of song
    let isPlaying = this.state.isPlaying;
    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    if (this.state.isPlaying){
      return (
        <ScrollView>
          {/* Show state of song on website */}
          <Text>
            {this.title}
          </Text>
          {/* Button to call our main function */}
          <button onClick={this.playPause}>
            Pause
          </button>
          <p>(Playing)</p>
          <img src = {this.image1}/>
          <img src = {this.image2}/>
          <img src = {this.image3}/>
          <img src = {this.image4}/>
          <img src = {this.image5}/>
          <img src = {this.image6}/>
          <img src = {this.image7}/>
          <img src = {this.image8}/>
          <img src = {this.image9}/>
          <img src = {this.image10}/>
          <img src = {this.image11}/>
        </ScrollView>
      );
    } else{
      return (
        <ScrollView>
          {/* Show state of song on website */}
          <Text style = {{fontStyle:"Georgia"}}>
            {this.title}
          </Text>
          {/* Button to call our main function */}
          <button onClick={this.playPause}>
            Play
          </button>
          <p>(Paused)</p>
          <img src = {this.image1}/>
          <img src = {this.image2}/>
          <img src = {this.image3}/>
          <img src = {this.image4}/>
          <img src = {this.image5}/>
          <img src = {this.image6}/>
          <img src = {this.image7}/>
          <img src = {this.image8}/>
          <img src = {this.image9}/>
          <img src = {this.image10}/>
          <img src = {this.image11}/>
          <p ></p>
        </ScrollView>
      );
    }
  }
}

export default Gita_Chapter_Template;