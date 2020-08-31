import React from 'react';
import 'regenerator-runtime/runtime'
import './index.css';

// First audio list
const fx1 = {
  qAudio: ['./audio/Heater-1.mp3','Heater 1'],
  wAudio: ['./audio/Heater-2.mp3','Heater 2'],
  eAudio: ['./audio/Heater-3.mp3','Heater 3'],
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
                qSrc: this.props.tracks.qAudio, wSrc:this.props.tracks.wAudio,
                eSrc: this.props.tracks.eAudio, aSrc: this.props.tracks.aAudio,
                sSrc: this.props.tracks.sAudio, dSrc: this.props.tracks.dAudio,
                zSrc: this.props.tracks.zAudio, xSrc: this.props.tracks.xAudio,
                cSrc: this.props.tracks.cAudio
    };
    this.playAudio = this.playAudio.bind(this);
  }

  // playAudio function plays selected audio and pass the track title for display
  playAudio(event){
    var eventValue; // Value from the button pressed
    // Button selected by clicking
    if (event.type === 'click') {
      eventValue= event.target.value;
    }
    // Button selected by keyboard
    if (event.type === 'keypress') {
      switch (event.charCode) {
        case 113:   // key Q
          eventValue= 'qButton';
          break;
        case 119:   // key W
          eventValue= 'wButton';
          break;
        case 101:   // key E
          eventValue= 'eButton';
          break;
        case 97:    // key A
          eventValue= 'aButton';
          break;
        case 115:   // key S
          eventValue= 'sButton';
          break;
        case 100:   // key D
          eventValue= 'dButton';
          break;
        case 122:   // key Z
          eventValue= 'zButton';
          break;
        case 120:   // key X
          eventValue= 'xButton';
          break;
        case 99:   // key C
          eventValue= 'cButton';
          break;
        default:  // If other key press do nothing
          eventValue='error';
      }
    }

    // Assign track title text for display when track is played
    if (eventValue !== 'error') {
      switch (eventValue) {
        case "qButton":
          this.props.setDisplay(this.state.qSrc[1]);
          break;
        case "wButton":
          this.props.setDisplay(this.state.wSrc[1]);
          break;
        case "eButton":
          this.props.setDisplay(this.state.eSrc[1]);
          break;
        case "aButton":
          this.props.setDisplay(this.state.aSrc[1]);
          break;
        case "sButton":
          this.props.setDisplay(this.state.sSrc[1]);
          break;
        case "dButton":
          this.props.setDisplay(this.state.dSrc[1]);
          break;
        case "zButton":
          this.props.setDisplay(this.state.zSrc[1]);
          break;
        case "xButton":
          this.props.setDisplay(this.state.xSrc[1]);
          break;
        case "cButton":
          this.props.setDisplay(this.state.cSrc[1]);
          break;
        default:
          break;
      }
      document.getElementById(eventValue).play(); // Play audio for that button
    }
  }
  render(){
    window.addEventListener('keypress', this.playAudio);




    return(
      <section id='drum_buttoms'>
        {/* Row 1 with button Q W E */}
        <button type='button' className='drum-pad'  onClick={this.playAudio} value='qButton'  onKeyPress={this.playAudio}>
          <audio id='qButton'  >
          {/* // BUG: fix source */}
            <source src={this.state.qSrc[0]} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          Q
        </button>
        <button type='button'  className='drum-pad'  onClick={this.playAudio} value='wButton'>
          <audio id='wButton'  >
            <source src={this.state.wSrc[0]} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          W
        </button >
        <button type='button' className='drum-pad'  onClick={this.playAudio} value='eButton'>
          <audio id='eButton'>
            <source src={this.state.eSrc[0]} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          E
        </button >
        {/* Row 2 with button A S D */}
        <button type='button' className='drum-pad'  onClick={this.playAudio} value='aButton'>
          <audio id='aButton' >
            <source src={this.state.aSrc[0]} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          A
        </button >
        <button type='button' className='drum-pad'  onClick={this.playAudio} value='sButton'>
          <audio id='sButton'>
            <source src={this.state.sSrc[0]} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          S
        </button >
        <button type='button' className='drum-pad'  onClick={this.playAudio} value='dButton'>
          <audio id='dButton'>
            <source src={this.state.dSrc[0]} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          D
        </button >
        {/* Row 2 with button Z X C */}
        <button type='button' className='drum-pad'  onClick={this.playAudio} value='zButton'>
          <audio id='zButton'>
            <source src={this.state.zSrc[0]} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          Z
        </button >
        <button type='button'  className='drum-pad'  onClick={this.playAudio} value='xButton'>
          <audio id='xButton'>
            <source src={this.state.xSrc[0]} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          X
        </button >
        <button type='button' className='drum-pad'  onClick={this.playAudio} value='cButton'>
          <audio id='cButton'>
            <source src={this.state.cSrc[0]} type='audio/mp3' />
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
      <label className='switch' for='mute' >
        <input type='checkbox' id='mute'/>
        <span className='slider round' ></span>
      </label>
      <div> Power</div>
    </div>
  );
}
// Select type of audio
class Fx extends React.Component{
  constructor(props){
    super(props);
    this.switching = this.switching.bind(this);
  }
  switching(){
    var fxChoice = document.getElementById('fxSwitch');
    fxChoice.addEventListener('change',()=>{
      if (fxChoice.checked) {
        this.props.setFx(fx2);
        console.log('Checked stuff');
        //console.log(fx2);
      }
    else{
      console.log('notChecked stuff');
      //console.log(fx1);
      this.props.setFx(fx1);
    }
  });
  }
  render(){

    document.addEventListener('change', this.switching );
    return(
      <div id='fx'>
        <label for='fxSwitch' className='switch'  >
          <input type='checkbox' id='fxSwitch'  />
          <span className='slider round on'>On</span>
          {/* <span className='slider round off'>Off</span> */}
        </label>
        <div> Fx</div>
      </div>
    );
  }
}

export class Drums extends React.Component{
  constructor(props){
    super(props);
    this.state={
                trackTitle:'',
                fxBatch: fx1
              };
    this.setDisplay = this.setDisplay.bind(this);
    this.setFx = this.setFx.bind(this);
  }
  // Sets tack title display value
  setDisplay(val){
    this.setState({trackTitle: val}); // this.props.title
  }
  // Sets the batch of sound to be played
  setFx(val){
    this.setState({fxBatch: val});
  }

  render(){
    console.log(this.state.fxBatch);
    var buttonProps = {setDisplay: this.setDisplay, tracks: {...this.state.fxBatch}};
    return(
      <div className="player-container">{/* Container with player elemants */}
        <div id='logo'>{/* Header with logo */}
          <i class="fa fa-grav" aria-hidden="true"></i>
          eFonic
        </div>
        <div id='display'>{this.state.trackTitle}</div> {/* Audio description Display */}
        <Buttons {...buttonProps}/> {/* Button Component emplimenting the button functionality */}
        <Volume />{/* Volume slider with functionality */}
        <Power />{/* Power toggle switch for audio activation and deactivation */ }
        <Fx setFx={this.setFx}/> {/* Select type of audio */}
        <div id='credits'><a href='https://github.com/nhope123/drums' tabIndex='0'> by Nial</a></div>
      </div>);
  }
}
