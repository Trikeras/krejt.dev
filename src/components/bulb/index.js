import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import './styles.css';
import lightSwitchSound from '../../assets/light-pull2.mp3'

const audioLightSwitchSound = new Audio(lightSwitchSound);
audioLightSwitchSound.load();

const Bulb = (props) => {

  const [isOn, setIsOn] = useState(false);
  const [finalClassName, setFinalClassName] = useState('off');
  const [pullCordPosition, setPullCordPosition] = useState();


  const swipeHandlers = useSwipeable({
    onSwipedDown: () => toggleLight(),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

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
    <div className='pull-cord-container' onClick={toggleLight} {...swipeHandlers}>

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
