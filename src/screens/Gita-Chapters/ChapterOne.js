// import React, { Component } from "react";
// import song from "/Users/arjunarya/Desktop/ReactJSProjects/Hindu-Culture-Awareness/src/screens/audio/gita-chapter-01.mp3";
// import Audio from 'react';

// class ChapterOne extends Component{
//   state = {
//      audio: new Audio(song)

//     isPlaying: false,
//   }

//   playPause = () =>{

//     let isPlaying = this.state.isPlaying;

//     if (isPlaying){
//       this.state.audio.pause();
//     } else {
//       this.state.audio.play;
//     }
//     this.setState({ isPlaying: !isPlaying });
//   };

//   render() {
//     return(
//       <div>
//         {}
//         <p>
//           {this.state.isPlaying?
//             "Song is Playing":
//             "Song is Paused"}
//         </p>
//         <button onClick = {this.playPause}>
//             Play|Pause
//         </button>
//       </div>
//     );
//   }
// }

// export default ChapterOne;
import React, { Component } from 'react';

import chap_one_part_one from '/Users/arjunarya/Desktop/ReactJSProjects/Hindu-Culture-Awareness/src/screens/audio/gita-chapter-cut-p1.mp3';

class ChapterOne extends React.Component {
    constructor(props) {
    super(props);
    this.state = {

      play: false,
      pause: true

    };

    this.url = chap_one_part_one;
    this.audio = new Audio(this.url);

  }

  play(){
    this.setState({
      play: true,
      pause: false
    });

    this.audio.play();
  }
  
  pause(){
  this.setState({ play: false, pause: true });
    this.audio.pause();
  }
  
  render() {
    
  return (
    <div>
      <button onClick={this.play}>Play</button>
      <button onClick={this.pause}>Pause</button>
    </div>
    );
  }
}


export default ChapterOne;