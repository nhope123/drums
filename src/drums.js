import React from 'react';
import './index.css';

// Drum machine Button Component emplimenting the button functionality
class Buttons extends React.Component{
  constructor(props){
    super(props);
    this.state={
                fx:'1',
                qSrc:'./audio/Heater-1.mp3'

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
          <audio id='qButton' controls >
          {/* // BUG: fix source */}
            <source src={this.qSrc} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          Q
        </button>
        <button type='button'  className='drum-pad'  onClick={this.playAudio} value='wButton'>
          <audio id='wButton' controls >
            <source src='./audio/click.mp3' type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
          W
        </button >
        <button type='button' id='eButton' className='drum-pad'  onClick=''>
          <audio >
            <source src='' type='audio/wav' />
            Your browser does not support the audio element.
          </audio>
          E
        </button >
        {/* Row 2 with button A S D */}
        <button type='button' id='aButton' className='drum-pad'  onClick=''>
          <audio >
            <source src='' type='audio/wav' />
            Your browser does not support the audio element.
          </audio>
          A
        </button >
        <button type='button' id='sButton' className='drum-pad'  onClick=''>
          <audio >
            <source src='' type='audio/wav' />
            Your browser does not support the audio element.
          </audio>
          S
        </button >
        <button type='button' id='dButton' className='drum-pad'  onClick=''>
          <audio >
            <source src='' type='audio/wav' />
            Your browser does not support the audio element.
          </audio>
          D
        </button >
        {/* Row 2 with button Z X C */}
        <button type='button' id='zButton' className='drum-pad'  onClick=''>
          <audio >
            <source src='' type='audio/wav' />
            Your browser does not support the audio element.
          </audio>
          Z
        </button >
        <button type='button' id='xButton' className='drum-pad'  onClick=''>
          <audio >
            <source src='' type='audio/wav' />
            Your browser does not support the audio element.
          </audio>
          X
        </button >
        <button type='button' id='cButton' className='drum-pad'  onClick=''>
          <audio >
            <source src='' type='audio/wav' />
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
      <input type='checkbox'/>
      <span ></span>
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
