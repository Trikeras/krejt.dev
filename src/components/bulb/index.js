import React, { useState, useRef, useEffect, memo, CSSProperties } from 'react';

import './styles.css';
import lightSwitchSound from '../../assets/light-pull2.mp3'

const audioLightSwitchSound = new Audio(lightSwitchSound);
audioLightSwitchSound.load();

const Bulb = (props) => {

  const [isOn, setIsOn] = useState(false);
  const [finalClassName, setFinalClassName] = useState('off');
  const [pullCordPosition, setPullCordPosition] = useState();

  const toggleLight = () => {

    const newOnState = !isOn;
    props.onToggle(newOnState);

    audioLightSwitchSound.pause();
    audioLightSwitchSound.currentTime = 0;
    audioLightSwitchSound.play();

    const finalClassNameValue = newOnState ? '' : 'off';
    setFinalClassName(finalClassNameValue);

    const pullCordPositionValue = newOnState ? 'low' : 'high';
    setPullCordPosition(pullCordPositionValue);

    setIsOn(newOnState);
  }

  return (<div>
    <div className='pull-cord-container' onClick={toggleLight}>

      <div className={`pull-cord ${pullCordPosition}`} />
      <div className='gullumuxhi'></div>
    </div>
    <div className='container'>
      <div className={`bulb ${finalClassName}`}>
        <div className={`filaments ${finalClassName}`}></div>
      </div>
    </div>
  </div>);
}

export default React.memo(Bulb, () => true)
