import React, { Component } from "react";

// Import your audio file

import song from "../audio/gita-chapter-cut-p1.mp3";
class ChapterOne_PartOne extends Component {

  state = {

    audio: new Audio(song),

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
    const {navigation} = this.props;
    
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
        </div>
      );
    }
    
  }
}
export default ChapterOne_PartOne;
