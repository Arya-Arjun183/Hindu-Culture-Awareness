import React, { Component } from "react";

// Import your audio file

import song from "../audio/gita-chapter-cut-p1.mp3";
class ChapterOne extends Component {

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
    return (
      <div>
        {/* Show state of song on website */}
        <p>
          {this.state.isPlaying ? 
            "Song is Playing" : 
            "Song is Paused"}
        </p>

        {/* Button to call our main function */}
        <button onClick={this.playPause}>
          Play | Pause
        </button>
      </div>
    );
  }
}
export default ChapterOne;
