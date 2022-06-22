import React, { Component } from "react";

// Import your audio file
import chapter1_1 from "./1_1.jpg";
import song from "../audio/gita-chapter-cut-p1.mp3";

class ChapterOne_PartOne extends Component {
  
  state = {

    audio: new Audio(song),

    isPlaying: false,
  };
  

  //audio = new Audio(song)

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
              Song is Playing
          </p>
          {/* Button to call our main function */}
          <button onClick={this.playPause}>
            Pause
          </button>
          <p></p>
          <img src = {chapter1_1}/>
        </div>
      );
    } else{
      return (
        <div>
          {/* Show state of song on website */}
          <p>
              Song is Paused
          </p>
          {/* Button to call our main function */}
          <button onClick={this.playPause}>
            Play
          </button>
          <p></p>
          <img src = {chapter1_1}/>
        </div>
      );
    }
    
  }
}
export default ChapterOne_PartOne;
