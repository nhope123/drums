(this.webpackJsonpdrums=this.webpackJsonpdrums||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(8),i=a.n(s),r=(a(7),a(2)),u=a(3),c=a(1),l=a(5),d=a(4),m=(a(14),{qAudio:["./audio/Heater-1.mp3","Heater 1"],wAudio:["./audio/Heater-2.mp3","Heater 2"],eAudio:["./audio/Heater-3.mp3","Heater 3"],aAudio:["./audio/Heater-4_1.mp3","Heater 4"],sAudio:["./audio/Heater-6.mp3","Heater 6"],dAudio:["./audio/Dsc_Oh.mp3","Dsc Oh"],zAudio:["./audio/Kick_n_Hat.mp3","Kick n Hat"],xAudio:["./audio/Chord_2.mp3","Chord 2"],cAudio:["./audio/Chord_3.mp3","Chord 3"]}),p={qAudio:["./audio/TRACKER.mp3","Futuristic Ray"],wAudio:["./audio/TWINGY.mp3","Boing"],eAudio:["./audio/UPPER.mp3","Quick Whistle"],aAudio:["./audio/TINK.mp3","Quick Beep"],sAudio:["./audio/PLINK.mp3","Plink"],dAudio:["./audio/POP.mp3","Pop"],zAudio:["./audio/SWISH__1.mp3","Swish"],xAudio:["./audio/Give_us_a_light.mp3","Give us a light"],cAudio:["./audio/Chord_1.mp3","Chord 1"]},h=["qButton","wButton","eButton","aButton","sButton","dButton","zButton","xButton","cButton"],b=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).state={qSrc:m.qAudio,wSrc:m.wAudio,eSrc:m.eAudio,aSrc:m.aAudio,sSrc:m.sAudio,dSrc:m.dAudio,zSrc:m.zAudio,xSrc:m.xAudio,cSrc:m.cAudio,loop:!1},o.playAudio=o.playAudio.bind(Object(c.a)(o)),o.setTracks=o.setTracks.bind(Object(c.a)(o)),o.muteAudio=o.muteAudio.bind(Object(c.a)(o)),o.setVolume=o.setVolume.bind(Object(c.a)(o)),o.setLoop=o.setLoop.bind(Object(c.a)(o)),o}return Object(u.a)(a,[{key:"setLoop",value:function(e){var t=document.getElementById(e.target.value);!1===t.hasAttribute("loop")?(t.setAttribute("loop","true"),e.currentTarget.classList.add("active-loop")):(t.removeAttribute("loop"),e.currentTarget.classList.remove("active-loop"))}},{key:"setTracks",value:function(e){this.setState({qSrc:e.qAudio,wSrc:e.wAudio,eSrc:e.eAudio,aSrc:e.aAudio,sSrc:e.sAudio,dSrc:e.dAudio,zSrc:e.zAudio,xSrc:e.xAudio,cSrc:e.cAudio}),h.map((function(e){return document.getElementById(e).load(),1}))}},{key:"setVolume",value:function(e){h.map((function(t){return document.getElementById(t).volume=e,1}))}},{key:"muteAudio",value:function(e){!0===e?h.map((function(e){return document.getElementById(e).muted=!0,1})):h.map((function(e){return document.getElementById(e).muted=!1,1}))}},{key:"playAudio",value:function(e){var t;if("click"===e.type&&(t=e.target.value),"keypress"===e.type)switch(e.charCode){case 113:t=h[0];break;case 119:t=h[1];break;case 101:t=h[2];break;case 97:t=h[3];break;case 115:t=h[4];break;case 100:t=h[5];break;case 122:t=h[6];break;case 120:t=h[7];break;case 99:t=h[8];break;default:t="error"}if("error"!==t)switch(t){case h[0]:this.props.setDisplay(this.state.qSrc[1]),document.getElementById(t).play();break;case h[1]:this.props.setDisplay(this.state.wSrc[1]),document.getElementById(t).play();break;case h[2]:this.props.setDisplay(this.state.eSrc[1]),document.getElementById(t).play();break;case h[3]:this.props.setDisplay(this.state.aSrc[1]),document.getElementById(t).play();break;case h[4]:this.props.setDisplay(this.state.sSrc[1]),document.getElementById(t).play();break;case h[5]:this.props.setDisplay(this.state.dSrc[1]),document.getElementById(t).play();break;case h[6]:this.props.setDisplay(this.state.zSrc[1]),document.getElementById(t).play();break;case h[7]:this.props.setDisplay(this.state.xSrc[1]),document.getElementById(t).play();break;case h[8]:this.props.setDisplay(this.state.cSrc[1]),document.getElementById(t).play()}}},{key:"render",value:function(){return window.addEventListener("keypress",this.playAudio),n.a.createElement("section",{id:"drum_buttoms"},n.a.createElement("div",{id:"qCon"},n.a.createElement("button",{type:"button",className:"drum-pad",onClick:this.playAudio,value:h[0],onKeyPress:this.playAudio},n.a.createElement("audio",{id:h[0]},n.a.createElement("source",{src:this.state.qSrc[0]}),"Your browser does not support the audio element."),"Q"),n.a.createElement("button",{type:"button",className:"left loop",onClick:this.setLoop,value:h[0]},"loop ")),n.a.createElement("div",{id:"wCon"},n.a.createElement("button",{type:"button",className:"drum-pad",onClick:this.playAudio,value:h[1]},n.a.createElement("audio",{id:h[1]},n.a.createElement("source",{src:this.state.wSrc[0]}),"Your browser does not support the audio element."),"W"),n.a.createElement("button",{type:"button",className:"center loop",onClick:this.setLoop,value:h[1]},"loop ")),n.a.createElement("div",{id:"eCon"},n.a.createElement("button",{type:"button",className:"drum-pad",onClick:this.playAudio,value:h[2]},n.a.createElement("audio",{id:h[2]},n.a.createElement("source",{src:this.state.eSrc[0]}),"Your browser does not support the audio element."),"E"),n.a.createElement("button",{type:"button",className:"right loop",onClick:this.setLoop,value:h[2]},"loop ")),n.a.createElement("div",{id:"aCon"},n.a.createElement("button",{type:"button",className:"drum-pad",onClick:this.playAudio,value:h[3]},n.a.createElement("audio",{id:h[3]},n.a.createElement("source",{src:this.state.aSrc[0]}),"Your browser does not support the audio element."),"A"),n.a.createElement("button",{type:"button",className:"left loop",onClick:this.setLoop,value:h[3]},"loop ")),n.a.createElement("div",{id:"sCon"},n.a.createElement("button",{type:"button",className:"drum-pad",onClick:this.playAudio,value:h[4]},n.a.createElement("audio",{id:h[4]},n.a.createElement("source",{src:this.state.sSrc[0]}),"Your browser does not support the audio element."),"S"),n.a.createElement("button",{type:"button",className:"center loop",onClick:this.setLoop,value:h[4]},"loop ")),n.a.createElement("div",{id:"dCon"},n.a.createElement("button",{type:"button",className:"drum-pad",onClick:this.playAudio,value:h[5]},n.a.createElement("audio",{id:h[5]},n.a.createElement("source",{src:this.state.dSrc[0]}),"Your browser does not support the audio element."),"D"),n.a.createElement("button",{type:"button",className:"right loop",onClick:this.setLoop,value:h[5]},"loop ")),n.a.createElement("div",{id:"zCon"},n.a.createElement("button",{type:"button",className:"drum-pad",onClick:this.playAudio,value:h[6]},n.a.createElement("audio",{id:h[6]},n.a.createElement("source",{src:this.state.zSrc[0]}),"Your browser does not support the audio element."),"Z"),n.a.createElement("button",{type:"button",className:"left loop",onClick:this.setLoop,value:h[6]},"loop ")),n.a.createElement("div",{id:"xCon"},n.a.createElement("button",{type:"button",className:"drum-pad",onClick:this.playAudio,value:h[7]},n.a.createElement("audio",{id:h[7]},n.a.createElement("source",{src:this.state.xSrc[0]}),"Your browser does not support the audio element."),"X"),n.a.createElement("button",{type:"button",className:"center loop",onClick:this.setLoop,value:h[7]},"loop ")),n.a.createElement("div",{id:"cCon"},n.a.createElement("button",{type:"button",className:"drum-pad",onClick:this.playAudio,value:h[8]},n.a.createElement("audio",{id:h[8]},n.a.createElement("source",{src:this.state.cSrc[0]}),"Your browser does not support the audio element."),"C"),n.a.createElement("button",{type:"button",className:"right loop",onClick:this.setLoop,value:h[8]},"loop ")))}}]),a}(n.a.Component),y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).getVolume=o.getVolume.bind(Object(c.a)(o)),o}return Object(u.a)(a,[{key:"getVolume",value:function(e){this.props.passVolume(e.target.value)}},{key:"render",value:function(){return n.a.createElement("div",{id:"volume"},n.a.createElement("input",{type:"range",min:"0",max:"1.0",step:"0.1",name:"scale",onChange:this.getVolume,list:"levels",style:{backgroundColor:"red",color:"black"}}),n.a.createElement("datalist",{id:"levels"},n.a.createElement("option",{value:"0"}),n.a.createElement("option",{value:"0.5"}),n.a.createElement("option",{value:"1"})),n.a.createElement("div",{id:"vText"},"Volume"))}}]),a}(n.a.Component),E=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).switchPower=o.switchPower.bind(Object(c.a)(o)),o}return Object(u.a)(a,[{key:"switchPower",value:function(e){document.getElementById("mute").checked?this.props.setMute(!1):this.props.setMute(!0)}},{key:"render",value:function(){return n.a.createElement("div",{id:"power"},n.a.createElement("label",{className:"switch",for:"mute"},n.a.createElement("input",{type:"checkbox",id:"mute"}),n.a.createElement("span",{className:"slider round",onClick:this.switchPower})),n.a.createElement("div",null," Mute"))}}]),a}(n.a.Component),v=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).switching=o.switching.bind(Object(c.a)(o)),o}return Object(u.a)(a,[{key:"switching",value:function(){document.getElementById("fxSwitch").checked?this.props.setFx(m):this.props.setFx(p)}},{key:"render",value:function(){return n.a.createElement("div",{id:"fx"},n.a.createElement("label",{for:"fxSwitch",className:"switch"},n.a.createElement("input",{type:"checkbox",id:"fxSwitch"}),n.a.createElement("span",{className:"slider round on",onClick:this.switching},"On")),n.a.createElement("div",null," Fx"))}}]),a}(n.a.Component),k=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).state={trackTitle:""},o.setDisplay=o.setDisplay.bind(Object(c.a)(o)),o.setFx=o.setFx.bind(Object(c.a)(o)),o.setMute=o.setMute.bind(Object(c.a)(o)),o.passVolume=o.passVolume.bind(Object(c.a)(o)),o.buttonRef=n.a.createRef(),o}return Object(u.a)(a,[{key:"setDisplay",value:function(e){this.setState({trackTitle:e})}},{key:"setFx",value:function(e){this.buttonRef.current.setTracks(e)}},{key:"setMute",value:function(e){this.buttonRef.current.muteAudio(e)}},{key:"passVolume",value:function(e){this.buttonRef.current.setVolume(e)}},{key:"render",value:function(){var e={setDisplay:this.setDisplay};return n.a.createElement("div",{className:"player-container"},n.a.createElement("div",{id:"logo"},n.a.createElement("i",{class:"fa fa-grav","aria-hidden":"true"}),n.a.createElement("a",{href:"https://github.com/nhope123/drums",tabIndex:"0",target:"_blank",rel:"noopener noreferrer",title:"Github Repository"},"eFonic")),n.a.createElement("div",{id:"display"},this.state.trackTitle)," ",n.a.createElement(b,Object.assign({},e,{ref:this.buttonRef}))," ",n.a.createElement(y,{passVolume:this.passVolume}),n.a.createElement("div",{id:"switches"},n.a.createElement(E,{setMute:this.setMute}),n.a.createElement(v,{setFx:this.setFx})," "))}}]),a}(n.a.Component);i.a.render(n.a.createElement(k,null),document.getElementById("drum-machine"))},7:function(e,t,a){},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.b3f1dcf7.chunk.js.map