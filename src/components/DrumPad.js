import React, { useEffect, useState } from 'react';

const padStyleDefault = {
  //height: 77,
  //marginTop: 13,
  backgroundColor: 'grey',
  boxShadow: '0 3px grey',
};

const activeStyle = {
  backgroundColor: 'orange',
  boxShadow: '0 3px orange',
  //height: 77,
  //marginTop: 13,
};

const inactiveStyle = {
  backgroundColor: 'grey',
  //marginTop: 10,
  boxShadow: '3px 3px 5px black',
};

const DrumPad = ({
  clip,
  clipId,
  keyCode,
  keyTrigger,
  power,
  updateDisplay,
}) => {
  const [padStyle, setPadStyle] = useState(inactiveStyle);

  const activatePad = () => {
    if (power) {
      if (padStyle.backgroundColor === 'orange') {
        setPadStyle(inactiveStyle);
      } else {
        setPadStyle(activeStyle);
      }
    } else if (padStyle.backgroundColor === 'orange') {
      setPadStyle(inactiveStyle);
    } else {
      setPadStyle(padStyleDefault);
    }
  };

  const playSound = () => {
    const sound = document.getElementById(keyTrigger);
    sound.currentTime = 0;
    sound.play();
    activatePad();
    setTimeout(() => activatePad(), 100);
    updateDisplay(clipId.replace(/-/g, ' '));
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
  }, [handleKeyPress]);

  return (
    <div className='drum-pad' id={clipId} onClick={playSound} style={padStyle}>
      <audio className='clip' id={keyTrigger} src={clip} />
      {keyTrigger}
    </div>
  );
};

export default DrumPad;
