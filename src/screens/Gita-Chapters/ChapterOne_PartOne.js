import React, { Component } from "react";

// Import your audio file
import chapter1_1 from "./1_1.jpg";
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

class ChapterOne_PartOne extends Component {
  
  state = {

    audio: new Audio("https://drive.google.com/uc?id=1heYIXcA6ZAmnGhhhszNOr30VXZ0OkPqG&export=download"),

    isPlaying: false,
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
        <div>
          {/* Show state of song on website */}
          <p>
              Chapter 1, Verses 1-9
          </p>
          {/* Button to call our main function */}
          <button onClick={this.playPause}>
            Pause
          </button>
          <p>(Paused)</p>
          <img src = {chapter1_1}/>
        </div>
      );
    } else{
      return (
        <div>
          {/* Show state of song on website */}
          <p style = {{fontStyle:"Georgia"}}>
            Chapter 1, Verses 1-9
          </p>
          {/* Button to call our main function */}
          <button onClick={this.playPause}>
            Play
          </button>
          <p>(Playing)</p>
          <img src = {chapter1_1}/>
          <p>Chapter 1, Verses 1-9</p>
          <p ></p>
        </div>
      );
    }
  }
}

export default ChapterOne_PartOne;