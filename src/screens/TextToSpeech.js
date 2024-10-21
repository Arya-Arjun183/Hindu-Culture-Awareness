import React, { useState, useEffect, useRef } from 'react';

const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef(null);

  useEffect(() => {
    if (text) {
      utteranceRef.current = new SpeechSynthesisUtterance(text);
      utteranceRef.current.voice = synthRef.current.getVoices().find((voice) => voice.name === 'Google UK English Male');

      utteranceRef.current.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };
    }
  }, [text]);

  const handlePlay = () => {
    if (!utteranceRef.current || isSpeaking) return;

    setIsSpeaking(true);
    synthRef.current.speak(utteranceRef.current);
  };

  const handlePause = () => {
    if (isSpeaking && !isPaused) {
      synthRef.current.pause();
      setIsPaused(true);
    }
  };

  const handleResume = () => {
    if (isPaused) {
      synthRef.current.resume();
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    if (isSpeaking) {
      synthRef.current.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '5px' }}>
      <button style={{ marginRight: '5px' }} onClick={handlePlay} disabled={isSpeaking}>
        {isSpeaking ? 'Speaking...' : 'Play'}
      </button>
      <button style={{ marginRight: '5px' }} onClick={handlePause} disabled={!isSpeaking || isPaused}>
        Pause
      </button>
      <button style={{ marginRight: '5px' }} onClick={handleResume} disabled={!isPaused}>
        Resume
      </button>
      <button style={{ marginRight: '5px' }} onClick={handleStop}>
        Stop
      </button>
    </div>
  );
};

export default TextToSpeech;
