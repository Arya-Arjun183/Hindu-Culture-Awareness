import React, { Component } from "react";

// Import your audio file
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

class ChapterOne_PartOne extends Component {
  
  url = this.props.navigation.getParam('url', 'https://drive.google.com/uc?id=1heYIXcA6ZAmnGhhhszNOr30VXZ0OkPqG&export=download');
  title = this.props.navigation.getParam('title', 'Error!');
  images = this.props.navigation.getParam('images', 'error')


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
    console.log(this.images)
    if (this.state.isPlaying){
      return (
        <div>
          {/* Show state of song on website */}
          <p>
              {this.title}
          </p>
          {/* Button to call our main function */}
          <button onClick={this.playPause}>
            Pause
          </button>
          <p>(Playing)</p>
          <img src = {this.images} alt = "image"/>
        </div>
      );
    } else{
      return (
        <div>
          {/* Show state of song on website */}
          <p style = {{fontStyle:"Georgia"}}>
            {this.title}
          </p>
          {/* Button to call our main function */}
          <button onClick={this.playPause}>
            Play
          </button>
          <p>(Paused)</p>
          <img         
          src={this.images}
           alt = "image"/>
          <p ></p>
        </div>
      );
    }
  }
}

export default ChapterOne_PartOne;