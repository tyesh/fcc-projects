import React, { useEffect, useState } from 'react';

const activeStyle = {
  backgroundColor: 'orange',
  boxShadow: '0 3px orange',
};

const inactiveStyle = {
  backgroundColor: 'grey',
  boxShadow: '3px 3px 5px black',
};

const DrumPad = ({
  clip,
  clipId,
  keyCode,
  keyTrigger,
  power = true,
  updateDisplay,
  volume = 0.5,
}) => {
  const [padStyle, setPadStyle] = useState(inactiveStyle);

  const playSound = () => {
    setPadStyle(activeStyle);
    setTimeout(() => setPadStyle(inactiveStyle), 100);
    if (power) {
      const sound = document.getElementById(keyTrigger);
      sound.currentTime = 0;
      sound.volume = volume;
      sound.play();
      updateDisplay(clipId.replace(/-/g, ' '));
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === keyCode) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [power, volume]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className='drum-pad text-center'
      id={clipId}
      onClick={playSound}
      style={padStyle}
    >
      <audio className='clip' id={keyTrigger} src={clip} />
      {keyTrigger}
    </div>
  );
};

export default DrumPad;
