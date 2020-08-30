import React from 'react';
import './index.css';

// First audio list
const fx1 = {
  qAudio: ['./audio/Heater-1.mp3','Heater 1'],
  wAudio: ['./audio/Heater-2.mp3','Heater 2'],
  eAudio: ['./audio/Heater-3.mp3','Heaterv3'],
  aAudio: ['./audio/Heater-4_1.mp3','Heater 4'],
  sAudio: ['./audio/Heater-6.mp3','Heater 6'],
  dAudio: ['./audio/Dsc_Oh.mp3', 'Dsc Oh'],
  zAudio: ['./audio/Kick_n_Hat.mp3','Kick n Hat'],
  xAudio: ['./audio/Chord_2.mp3','Chord 2'],
  cAudio: ['./audio/Chord_3.mp3','Chord 3']
};
// Second audio list
const fx2 = {
  qAudio: ['tracker.mp3','Futuristic Ray'],
  wAudio: ['TWINGY.mp3','Boing'],
  eAudio: ['UPPER.mp3','Quick Whistle'],
  aAudio: ['TINK.mp3','Quick Beep'],
  sAudio: ['PLINK.mp3','Plink'],
  dAudio: ['POP.mp3', 'Pop'],
  zAudio: ['swish.mp3','Swish'],
  xAudio: ['Give_us_a_light.mp3','Give us a light'],
  cAudio: ['Chord_1.mp3','Chord 1']
};


// Drum machine Button Component emplimenting the button functionality
class Buttons extends React.Component{
  constructor(props){
    super(props);
    this.state={
                fx:'1',
                qSrc:'./audio/Heater-1.mp3', wSrc:'./audio/Heater-2.mp3',
                eSrc: './audio/Heater-3.mp3', aSrc: './audio/Heater-4_1.mp3',
                sSrc: './audio/Heater-6.mp3', dSrc: './audio/Dsc_Oh.mp3',
                zSrc: './audio/Kick_n_Hat.mp3', xSrc: './audio/Chord_2.mp3',
                cSrc: './audio/Chord_3.mp3'


    };

    this.playAudio = this.playAudio.bind(this);
  }
  playAudio(event){
    var vic = document.getElementById(event.target.value);
    //vic.load();
    vic.play();
  }
  render(){

    return(
      <section id='drum_buttoms'>
        {/* Row 1 with button Q W E */}
        <button type='button' className='drum-pad'  onClick={this.playAudio} value='qButton'>
          <audio id='qButton'  >
          {/* // BUG: fix source */}
            <source src={this.state.qSrc} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          Q
        </button>
        <button type='button'  className='drum-pad'  onClick={this.playAudio} value='wButton'>
          <audio id='wButton'  >
            <source src={this.state.wSrc} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          W
        </button >
        <button type='button' className='drum-pad'  onClick={this.playAudio} value='eButton'>
          <audio id='eButton'>
            <source src={this.state.eSrc} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          E
        </button >
        {/* Row 2 with button A S D */}
        <button type='button' className='drum-pad'  onClick={this.playAudio} value='aButton'>
          <audio id='aButton' >
            <source src={this.state.aSrc} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          A
        </button >
        <button type='button' className='drum-pad'  onClick={this.playAudio} value='sButton'>
          <audio id='sButton'>
            <source src={this.state.sSrc} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          S
        </button >
        <button type='button' className='drum-pad'  onClick={this.playAudio} value='dButton'>
          <audio id='dButton'>
            <source src={this.state.dSrc} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          D
        </button >
        {/* Row 2 with button Z X C */}
        <button type='button' className='drum-pad'  onClick={this.playAudio} value='zButton'>
          <audio id='zButton'>
            <source src={this.state.zSrc} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          Z
        </button >
        <button type='button'  className='drum-pad'  onClick={this.playAudio} value='xButton'>
          <audio id='xButton'>
            <source src={this.state.xSrc} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          X
        </button >
        <button type='button' className='drum-pad'  onClick={this.playAudio} value='cButton'>
          <audio id='cButton'>
            <source src={this.state.cSrc} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
        C
        </button >
      </section>
    );
  }

}
// Volume slider with functionality
const Volume = (props)=>{
  return(
    <div id='volume'>
      <input type='range' min='0' max='1.0' step='0.1' name='scale' />
        <datalist id='scale'>
          <option value='0'/>
          <option value='0.5' />
          <option value='1.0' />
        </datalist>
      <div id='vText'>Volume</div>
    </div>
  );
}
// Power toggle switch for audio activation and deactivation
const Power = ()=>{
  return(
    <div id='power'>
      <input type='checkbox'/>
      <span ></span>
      <div> Power</div>
    </div>
  );
}
// Select type of audio
const Fx = ()=>{
  return(
    <div id='fx'>
      <input type='checkbox' id='fxSwitch'/>
      <label for='fxSwitch' >
        <span >On</span>
        <span >Off</span>
      </label>
      <div> Fx</div>
    </div>
  );
}

export class Drums extends React.Component{
  constructor(props){
    super(props);
    this.state={clipName:'Play'};
  }


  render(){

    return(
      <div className="player-container">{/* Container with player elemants */}
        <div id='logo'>{/* Header with logo */}
          <i class="fa fa-grav" aria-hidden="true"></i>
          eFonic
        </div>
        <div id='display'>{this.state.clipName}</div> {/* Audio description Display */}
        <Buttons /> {/* Button Component emplimenting the button functionality */}
        <Volume />{/* Volume slider with functionality */}
        <Power />{/* Power toggle switch for audio activation and deactivation */ }
        <Fx /> {/* Select type of audio */}
        <div id='credits'><a href='https://github.com/nhope123/drums' tabIndex='0'> by Nial</a></div>
      </div>);
  }
}
