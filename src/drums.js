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
  qAudio: ['./audio/TRACKER.mp3','Futuristic Ray'],
  wAudio: ['./audio/TWINGY.mp3','Boing'],
  eAudio: ['./audio/UPPER.mp3','Quick Whistle'],
  aAudio: ['./audio/TINK.mp3','Quick Beep'],
  sAudio: ['./audio/PLINK.mp3','Plink'],
  dAudio: ['./audio/POP.mp3', 'Pop'],
  zAudio: ['./audio/SWISH__1.mp3','Swish'],
  xAudio: ['./audio/Give_us_a_light.mp3','Give us a light'],
  cAudio: ['./audio/Chord_1.mp3','Chord 1']
};
// List of Button audio element ids
const idList = ["qButton","wButton","eButton",
                "aButton","sButton","dButton",
                "zButton","xButton","cButton"];

// Drum machine Button Component emplimenting the button functionality
class Buttons extends React.Component{
  constructor(props){
    super(props);
    this.state={
                qSrc: fx1.qAudio, wSrc: fx1.wAudio, eSrc: fx1.eAudio,
                aSrc: fx1.aAudio, sSrc: fx1.sAudio, dSrc: fx1.dAudio,
                zSrc: fx1.zAudio, xSrc: fx1.xAudio, cSrc: fx1.cAudio,
                loop: false
    };
    this.playAudio = this.playAudio.bind(this);
    this.setTracks = this.setTracks.bind(this);
    this.muteAudio = this.muteAudio.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.setLoop = this.setLoop.bind(this);
  }
  // Set the values for the audio elements loop attribute
  setLoop(event){
    var element = document.getElementById(event.target.value);
    if (element.hasAttribute('loop') === false) {
      element.setAttribute('loop','true');
      event.currentTarget.classList.add('active-loop');
    } else {
      element.removeAttribute('loop');
      event.currentTarget.classList.remove('active-loop');
    }
  }
  // Set the values for the button tracks
  setTracks(val){
    this.setState({
                    qSrc: val.qAudio, wSrc: val.wAudio, eSrc: val.eAudio,
                    aSrc: val.aAudio, sSrc: val.sAudio, dSrc: val.dAudio,
                    zSrc: val.zAudio, xSrc: val.xAudio, cSrc: val.cAudio
    });
    // Reload all audio buttons when new track are loaded
    //idList.map((item) => { document.getElementById(item).load().catch(err => {}); return 1;});
  }
  // set the volume of all audio elements
  setVolume(val){
    // Set volumeof all audio elements to val
    idList.map((item) => { document.getElementById(item).volume = val; return 1;});
  }
  // muteAudio function toogle the muted attribute for all audio elements
  muteAudio(val){
    if (val === true) {
      idList.map((item) => {
        document.getElementById(item).muted = true;
        return 1;
      });
    } else {
      idList.map((item) => {
        document.getElementById(item).muted = false;
        return 1;
      });
    }
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
          eventValue= idList[0];
          break;
        case 119:   // key W
          eventValue=  idList[1] ;
          break;
        case 101:   // key E
          eventValue= idList[2] ;
          break;
        case 97:    // key A
          eventValue= idList[3] ;
          break;
        case 115:   // key S
          eventValue= idList[4] ;
          break;
        case 100:   // key D
          eventValue= idList[5] ;
          break;
        case 122:   // key Z
          eventValue= idList[6] ;
          break;
        case 120:   // key X
          eventValue= idList[7] ;
          break;
        case 99:   // key C
          eventValue= idList[8];
          break;
        default:  // If other key press do nothing
          eventValue='error';
      }
    }

    // Assign track title text for display when track is played
    if (eventValue !== 'error') {
      switch (eventValue) {
        case  idList[0] :
          this.props.setDisplay(this.state.qSrc[1]);
          document.getElementById(eventValue).play();
          break;
        case  idList[1] :
          this.props.setDisplay(this.state.wSrc[1]);
          document.getElementById(eventValue).play();
          break;
        case  idList[2] :
          this.props.setDisplay(this.state.eSrc[1]);
          document.getElementById(eventValue).play();
          break;
        case idList[3] :
          this.props.setDisplay(this.state.aSrc[1]);
          document.getElementById(eventValue).play();
          break;
        case idList[4] :
          this.props.setDisplay(this.state.sSrc[1]);
          document.getElementById(eventValue).play();
          break;
        case idList[5] :
          this.props.setDisplay(this.state.dSrc[1]);
          document.getElementById(eventValue).play();
          break;
        case idList[6] :
          this.props.setDisplay(this.state.zSrc[1]);
          document.getElementById(eventValue).play();
          break;
        case idList[7] :
          this.props.setDisplay(this.state.xSrc[1]);
          document.getElementById(eventValue).play();
          break;
        case idList[8]:
          this.props.setDisplay(this.state.cSrc[1]);
          document.getElementById(eventValue).play();
          break;
        default:
          break;
      }
       // Play audio for that button
    }
  }
  render(){
    window.addEventListener('keypress', this.playAudio);

    return(
      <section id='drum_buttoms'>
        {/* Row 1 with button Q W E */}
        <div id='qCon'>
          {/* Q button */}
          <button type='button' className='drum-pad'  onClick={this.playAudio} value={ idList[0] }  onKeyPress={this.playAudio}>
            <audio  id={ idList[0] } >
            {/* // BUG: fix source */}
              <source src={this.state.qSrc[0]} type='audio/mp3' />
              Your browser does not support the audio element.
            </audio>
            Q
          </button>
          <button type='button' className='left loop' onClick={this.setLoop} value={ idList[0] } >loop </button>
        </div>
        <div id='wCon'>
          {/* W button */}
          <button type='button'  className='drum-pad'  onClick={this.playAudio} value={idList[1]} >
            <audio  id={idList[1]}   >
              <source src={this.state.wSrc[0]} type='audio/mp3' />
              Your browser does not support the audio element.
            </audio>
            W
          </button >
          <button type='button' className='center loop' onClick={this.setLoop} value={idList[1]} >loop </button>
        </div>
        <div id='eCon'>
          {/* E button */}
          <button type='button' className='drum-pad'  onClick={this.playAudio} value={idList[2] }>
            <audio  id={idList[2] }>
              <source src={this.state.eSrc[0]} type='audio/mp3' />
              Your browser does not support the audio element.
            </audio>
            E
          </button >
          <button type='button' className='right loop' onClick={this.setLoop} value={idList[2] } >loop </button>
        </div>
        {/* Row 2 with button A S D */}
        <div id='aCon'>
          {/* A button */}
          <button type='button' className='drum-pad'  onClick={this.playAudio} value={idList[3] }>
            <audio  id={idList[3] } >
              <source src={this.state.aSrc[0]} type='audio/mp3' />
              Your browser does not support the audio element.
            </audio>
            A
          </button >
          <button type='button' className='left loop' onClick={this.setLoop} value={idList[3] } >loop </button>
        </div>
        <div id='sCon'>
          {/* S button */}
          <button type='button' className='drum-pad'  onClick={this.playAudio} value={idList[4] }>
            <audio  id={idList[4] }>
              <source src={this.state.sSrc[0]} type='audio/mp3' />
              Your browser does not support the audio element.
            </audio>
            S
          </button >
          <button type='button' className='center loop' onClick={this.setLoop} value={idList[4] } >loop </button>
        </div>
        <div id='dCon'>
          {/* D button */}
          <button type='button' className='drum-pad'  onClick={this.playAudio} value={ idList[5] } >
            <audio  id={ idList[5] } >
              <source src={this.state.dSrc[0]} type='audio/mp3' />
              Your browser does not support the audio element.
            </audio>
            D
          </button >
          <button type='button' className='right loop' onClick={this.setLoop} value={ idList[5] } >loop </button>
        </div>
        {/* Row 2 with button Z X C */}
        <div id='zCon'>
          {/* Z button */}
          <button type='button' className='drum-pad'  onClick={this.playAudio} value={ idList[6] } >
            <audio  id={ idList[6] } >
              <source src={this.state.zSrc[0]} type='audio/mp3' />
              Your browser does not support the audio element.
            </audio>
            Z
          </button >
          <button type='button' className='left loop' onClick={this.setLoop}  value={ idList[6] } >loop </button>
        </div>
        <div id='xCon'>
          {/* X button */}
          <button type='button'  className='drum-pad'  onClick={this.playAudio} value={ idList[7] }>
            <audio  id={ idList[7] }>
              <source src={this.state.xSrc[0]} type='audio/mp3' />
              Your browser does not support the audio element.
            </audio>
            X
          </button >
          <button type='button' className='center loop' onClick={this.setLoop}  value={ idList[7] } >loop </button>
        </div>
        <div id='cCon'>
          {/* C button */}
          <button type='button' className='drum-pad'  onClick={this.playAudio} value={ idList[8] }>
            <audio  id={ idList[8] }>
              <source src={this.state.cSrc[0]} type='audio/mp3' />
              Your browser does not support the audio element.
            </audio>
          C
          </button >
          <button type='button' className='right loop' onClick={this.setLoop} value={ idList[8] } >loop </button>
        </div>
      </section>
    );
  }

}
// Volume slider with functionality
class Volume extends React.Component{
  constructor(props){
    super(props);
    this.getVolume = this.getVolume.bind(this);
  }
  // Collect volume value from slider
  getVolume(event){
    this.props.passVolume(event.target.value);
  }
  render(){
    return(
      <div id='volume'>
        <input type='range' min='0' max='1.0' step='0.1' name='scale' onChange={this.getVolume} list='levels' style={{
          backgroundColor: 'red', color: 'black'
        }}/>
        <datalist id='levels'>
          <option value='0' />
          <option value='0.5' />
          <option value='1' />
        </datalist>
        <div id='vText'>Volume</div>
      </div>
    );
  }
}
// Power toggle switch for audio activation and deactivation
class Power extends React.Component{
  constructor(props){
    super(props);
    this.switchPower = this.switchPower.bind(this);
  }
  // Toogle the mute switch on/off
  switchPower(){
    var powerChoice = document.getElementById('mute');
      // Power switch is checked mute all audio
      if (powerChoice.checked) {
         this.props.setMute(false);

       }
      // Power switch unchecked unmute all audio
      else{ this.props.setMute(true); }
  }
  render(){
    return(
      <div id='power'>
        <label className='switch' for='mute' >
          <input type='checkbox' id='mute'/>
          <span className='slider round' onClick={this.switchPower} >Off</span>
        </label>
        <div>Mute</div>
      </div>
    );
  }
}
// Select type of audio
class Fx extends React.Component{
  constructor(props){
    super(props);
    this.switching = this.switching.bind(this);
  }
  // Toogle the Audio track list
  switching(){
    var fxChoice = document.getElementById('fxSwitch');
      // FX switch is checked load first sound list
      if (fxChoice.checked) { this.props.setFx(fx1); }
      // FX switch is unchecked load second sound list
      else{ this.props.setFx(fx2); }
  }
  render(){
    return(
      <div id='fx'>
        <label for='fxSwitch' className='switch'  >
          <input type='checkbox' id='fxSwitch'  />
          <span className='slider round on' onClick={this.switching}>On</span>
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
                trackTitle:''
              };
    this.setDisplay = this.setDisplay.bind(this);
    this.setFx = this.setFx.bind(this);
    this.setMute = this.setMute.bind(this);
    this.passVolume = this.passVolume.bind(this);
    this.buttonRef = React.createRef();
  }
  // Sets tack title display value
  setDisplay(val){
    this.setState({trackTitle: val}); // this.props.title
  }
  // Sets the batch of sound to be played
  setFx(val){
    this.buttonRef.current.setTracks(val); // Passing track value to Button Component
  }
  // Set the muted value for all audio elements
  setMute(val){
    this.buttonRef.current.muteAudio(val); // Passing mute value to Button Component
  }
  passVolume(val){
    this.buttonRef.current.setVolume(val);
  }

  render(){
    //console.log(this.state.fxBatch);
    var buttonProps = {setDisplay: this.setDisplay };
    return(
      <div className="player-container">{/* Container with player elements */}
        <div id='logo'>{/* Header with logo */}
          <i class="fa fa-grav" aria-hidden="true"></i>
          <a href='https://github.com/nhope123/drums' tabIndex='0' target='_blank' rel="noopener noreferrer" title='Github Repository'>eFonic</a>
        </div>
        <div id='display'>{this.state.trackTitle}</div> {/* Audio description Display */}
        <Buttons {...buttonProps} ref={this.buttonRef}/> {/* Button Component emplimenting the button functionality */}
        <Volume passVolume={this.passVolume} />{/* Volume slider with functionality */}
        <div id='switches' >
          <Power setMute={this.setMute}/>{/* Power toggle switch for audio activation and deactivation */ }
          <Fx setFx={this.setFx}/> {/* Select type of audio */}
        </div>
      </div>);
  }
}
