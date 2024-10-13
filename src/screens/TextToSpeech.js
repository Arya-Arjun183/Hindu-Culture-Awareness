import React, { useState, useEffect } from "react";

const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;
  
    if (isPaused) {
      // Check if the utterance is already speaking or paused
      if (synth.paused) {
        synth.resume();
      } else {
        synth.speak(utterance);
      }
    } else {
      synth.speak(utterance);
    }
  
    setIsPaused(false);
  };
  

  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '5px'}}>
      <button style={{ marginRight: '5px'}} onClick={handlePlay}>{isPaused ? "Resume" : "Play"}</button>
      <button style={{ marginRight: '5px'}} onClick={handlePause}>Pause</button>
      <button style={{ marginRight: '5px'}} onClick={handleStop}>Stop</button>
    </div>
  );
};

export default TextToSpeech;