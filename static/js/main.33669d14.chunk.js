(this.webpackJsonpdrums=this.webpackJsonpdrums||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),s=a(8),n=a.n(s),r=(a(7),a(1)),u=a(2),c=a(3),d=a(5),l=a(4),p=(a(14),{qAudio:["./audio/Heater-1.mp3","Heater 1"],wAudio:["./audio/Heater-2.mp3","Heater 2"],eAudio:["./audio/Heater-3.mp3","Heater 3"],aAudio:["./audio/Heater-4_1.mp3","Heater 4"],sAudio:["./audio/Heater-6.mp3","Heater 6"],dAudio:["./audio/Dsc_Oh.mp3","Dsc Oh"],zAudio:["./audio/Kick_n_Hat.mp3","Kick n Hat"],xAudio:["./audio/Chord_2.mp3","Chord 2"],cAudio:["./audio/Chord_3.mp3","Chord 3"]}),m={qAudio:["./audio/TRACKER.mp3","Futuristic Ray"],wAudio:["./audio/TWINGY.mp3","Boing"],eAudio:["./audio/UPPER.mp3","Quick Whistle"],aAudio:["./audio/TINK.mp3","Quick Beep"],sAudio:["./audio/PLINK.mp3","Plink"],dAudio:["./audio/POP.mp3","Pop"],zAudio:["./audio/SWISH__1.mp3","Swish"],xAudio:["./audio/Give_us_a_light.mp3","Give us a light"],cAudio:["./audio/Chord_1.mp3","Chord 1"]},b=["Q","W","E","A","S","D","Z","X","C"],h=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:this.props.containerId},o.a.createElement("button",{id:this.props.buttonId,type:"button",className:"drum-pad",onClick:this.props.audio.playAudio,value:this.props.audioId,onKeyPress:this.props.audio.playAudio},o.a.createElement("audio",{id:this.props.audioId,className:"clip"},o.a.createElement("source",{src:this.props.audioSrc}),"Your browser does not support the audio element."),this.props.audioId),o.a.createElement("button",{type:"button",className:"left loop",onClick:this.props.audio.setLoop,value:this.props.audioId},"loop "))}}]),a}(o.a.Component),y=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(u.a)(this,a),(i=t.call(this,e)).state={qSrc:p.qAudio,wSrc:p.wAudio,eSrc:p.eAudio,aSrc:p.aAudio,sSrc:p.sAudio,dSrc:p.dAudio,zSrc:p.zAudio,xSrc:p.xAudio,cSrc:p.cAudio,loop:!1},i.playAudio=i.playAudio.bind(Object(r.a)(i)),i.setTracks=i.setTracks.bind(Object(r.a)(i)),i.muteAudio=i.muteAudio.bind(Object(r.a)(i)),i.setVolume=i.setVolume.bind(Object(r.a)(i)),i.setLoop=i.setLoop.bind(Object(r.a)(i)),i}return Object(c.a)(a,[{key:"setLoop",value:function(e){var t=document.getElementById(e.target.value);!1===t.hasAttribute("loop")?(t.setAttribute("loop","true"),e.currentTarget.classList.add("active-loop")):(t.removeAttribute("loop"),e.currentTarget.classList.remove("active-loop"))}},{key:"setTracks",value:function(e){this.setState({qSrc:e.qAudio,wSrc:e.wAudio,eSrc:e.eAudio,aSrc:e.aAudio,sSrc:e.sAudio,dSrc:e.dAudio,zSrc:e.zAudio,xSrc:e.xAudio,cSrc:e.cAudio}),b.map((function(e){return document.getElementById(e).load(),1}))}},{key:"setVolume",value:function(e){b.map((function(t){return document.getElementById(t).volume=e,1}))}},{key:"muteAudio",value:function(e){!0===e?b.map((function(e){return document.getElementById(e).muted=!0,1})):b.map((function(e){return document.getElementById(e).muted=!1,1}))}},{key:"playAudio",value:function(e){var t;if("click"===e.type&&(t=e.target.value),"keypress"===e.type)switch(e.charCode){case 113:t=b[0];break;case 119:t=b[1];break;case 101:t=b[2];break;case 97:t=b[3];break;case 115:t=b[4];break;case 100:t=b[5];break;case 122:t=b[6];break;case 120:t=b[7];break;case 99:t=b[8];break;default:t="error"}if("error"!==t)switch(t){case b[0]:this.props.setDisplay(this.state.qSrc[1]),document.getElementById(t).play();break;case b[1]:this.props.setDisplay(this.state.wSrc[1]),document.getElementById(t).play();break;case b[2]:this.props.setDisplay(this.state.eSrc[1]),document.getElementById(t).play();break;case b[3]:this.props.setDisplay(this.state.aSrc[1]),document.getElementById(t).play();break;case b[4]:this.props.setDisplay(this.state.sSrc[1]),document.getElementById(t).play();break;case b[5]:this.props.setDisplay(this.state.dSrc[1]),document.getElementById(t).play();break;case b[6]:this.props.setDisplay(this.state.zSrc[1]),document.getElementById(t).play();break;case b[7]:this.props.setDisplay(this.state.xSrc[1]),document.getElementById(t).play();break;case b[8]:this.props.setDisplay(this.state.cSrc[1]),document.getElementById(t).play()}}},{key:"render",value:function(){window.addEventListener("keypress",this.playAudio);var e={playAudio:this.playAudio,setLoop:this.setLoop};return o.a.createElement("section",{id:"drum_buttoms"},o.a.createElement(h,Object.assign({audio:e},{audioId:b[0],displayValue:"Q",audioSrc:this.state.qSrc[0],containerId:"qCon",buttonId:"buttonQ"})),o.a.createElement(h,Object.assign({audio:e},{audioId:b[1],displayValue:"W",audioSrc:this.state.wSrc[0],containerId:"wCon",buttonId:"buttonW"})),o.a.createElement(h,Object.assign({audio:e},{audioId:b[2],displayValue:"E",audioSrc:this.state.eSrc[0],containerId:"eCon",buttonId:"buttonE"})),o.a.createElement(h,Object.assign({audio:e},{audioId:b[3],displayValue:"A",audioSrc:this.state.aSrc[0],containerId:"aCon",buttonId:"buttonA"})),o.a.createElement(h,Object.assign({audio:e},{audioId:b[4],displayValue:"S",audioSrc:this.state.sSrc[0],containerId:"sCon",buttonId:"buttonS"})),o.a.createElement(h,Object.assign({audio:e},{audioId:b[5],displayValue:"D",audioSrc:this.state.dSrc[0],containerId:"dCon",buttonId:"buttonD"})),o.a.createElement(h,Object.assign({audio:e},{audioId:b[6],displayValue:"Z",audioSrc:this.state.zSrc[0],containerId:"zCon",buttonId:"buttonZ"})),o.a.createElement(h,Object.assign({audio:e},{audioId:b[7],displayValue:"X",audioSrc:this.state.xSrc[0],containerId:"xCon",buttonId:"buttonX"})),o.a.createElement(h,Object.assign({audio:e},{audioId:b[8],displayValue:"C",audioSrc:this.state.cSrc[0],containerId:"cCon",buttonId:"buttonC"})))}}]),a}(o.a.Component),v=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(u.a)(this,a),(i=t.call(this,e)).getVolume=i.getVolume.bind(Object(r.a)(i)),i}return Object(c.a)(a,[{key:"getVolume",value:function(e){this.props.passVolume(e.target.value)}},{key:"render",value:function(){return o.a.createElement("div",{id:"volume"},o.a.createElement("input",{type:"range",min:"0",max:"1.0",step:"0.1",name:"scale",onChange:this.getVolume,list:"levels",style:{backgroundColor:"red",color:"black"}}),o.a.createElement("datalist",{id:"levels"},o.a.createElement("option",{value:"0"}),o.a.createElement("option",{value:"0.5"}),o.a.createElement("option",{value:"1"})),o.a.createElement("div",{id:"vText"},"Volume"))}}]),a}(o.a.Component),E=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(u.a)(this,a),(i=t.call(this,e)).switchPower=i.switchPower.bind(Object(r.a)(i)),i}return Object(c.a)(a,[{key:"switchPower",value:function(e){document.getElementById("mute").checked?this.props.setMute(!1):this.props.setMute(!0)}},{key:"render",value:function(){return o.a.createElement("div",{id:"power"},o.a.createElement("label",{className:"switch",for:"mute"},o.a.createElement("input",{type:"checkbox",id:"mute"}),o.a.createElement("span",{className:"slider round",onClick:this.switchPower})),o.a.createElement("div",null," Mute"))}}]),a}(o.a.Component),k=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(u.a)(this,a),(i=t.call(this,e)).switching=i.switching.bind(Object(r.a)(i)),i}return Object(c.a)(a,[{key:"switching",value:function(){document.getElementById("fxSwitch").checked?this.props.setFx(p):this.props.setFx(m)}},{key:"render",value:function(){return o.a.createElement("div",{id:"fx"},o.a.createElement("label",{for:"fxSwitch",className:"switch"},o.a.createElement("input",{type:"checkbox",id:"fxSwitch"}),o.a.createElement("span",{className:"slider round on",onClick:this.switching},"On")),o.a.createElement("div",null," Fx"))}}]),a}(o.a.Component),f=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(u.a)(this,a),(i=t.call(this,e)).state={trackTitle:""},i.setDisplay=i.setDisplay.bind(Object(r.a)(i)),i.setFx=i.setFx.bind(Object(r.a)(i)),i.setMute=i.setMute.bind(Object(r.a)(i)),i.passVolume=i.passVolume.bind(Object(r.a)(i)),i.buttonRef=o.a.createRef(),i}return Object(c.a)(a,[{key:"setDisplay",value:function(e){this.setState({trackTitle:e})}},{key:"setFx",value:function(e){this.buttonRef.current.setTracks(e)}},{key:"setMute",value:function(e){this.buttonRef.current.muteAudio(e)}},{key:"passVolume",value:function(e){this.buttonRef.current.setVolume(e)}},{key:"render",value:function(){var e={setDisplay:this.setDisplay};return o.a.createElement("div",{className:"player-container"},o.a.createElement("div",{id:"logo"},o.a.createElement("i",{class:"fa fa-grav","aria-hidden":"true"}),o.a.createElement("a",{href:"https://github.com/nhope123/drums",tabIndex:"0",target:"_blank",rel:"noopener noreferrer",title:"Github Repository"},"eFonic")),o.a.createElement("div",{id:"display"},this.state.trackTitle)," ",o.a.createElement(y,Object.assign({},e,{ref:this.buttonRef}))," ",o.a.createElement(v,{passVolume:this.passVolume}),o.a.createElement("div",{id:"switches"},o.a.createElement(E,{setMute:this.setMute}),o.a.createElement(k,{setFx:this.setFx})," "))}}]),a}(o.a.Component);n.a.render(o.a.createElement(f,null),document.getElementById("drum-machine"))},7:function(e,t,a){},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.33669d14.chunk.js.map