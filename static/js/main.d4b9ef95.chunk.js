(this["webpackJsonpmonte-hall"]=this["webpackJsonpmonte-hall"]||[]).push([[0],{2:function(e,t,n){e.exports={main:"Door_main__RLcZi",doorField:"Door_doorField__3k3G1",doorButton:"Door_doorButton__CrHEq",door:"Door_door__28fVU",door_chosen:"Door_door_chosen__197yw",door_opened_good:"Door_door_opened_good__3Da-J",door_opened_bad:"Door_door_opened_bad__3BA-H",hover:"Door_hover__2UYbk"}},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n(1),r=n.n(s),i=n(10),c=n.n(i),a=(n(23),n(4)),u=n(11),l=n(12),d=n(15),h=n(14),j=n(2),p=n.n(j);var f=function(e){var t=Object(s.useState)(p.a.door),n=Object(a.a)(t,2),r=n[0],i=n[1];return Object(s.useEffect)((function(){i(r=function(){r=!0===e.isChosen&&"none"===e.gameResult?p.a.door_chosen:!0===e.isChosen&&"none"!==e.gameResult?e.isTrue?p.a.door_opened_good:p.a.door_opened_bad:"open"===e.isOpened&&e.isTrue?p.a.door_opened_good:"open"!==e.isOpened||e.isTrue?p.a.door:p.a.door_opened_bad;return r}())}),[[e.isChosen,e.isOpened]]),Object(o.jsxs)("div",{className:r,onClick:e.onClick,children:["Door ",e.id+1]})},b=n(16),_=n(6),O=n.n(_),m=n(13);function x(e){for(var t,n,o=e.length;o;t=parseInt(Math.random()*o),n=e[--o],e[o]=e[t],e[t]=n);return e.map((function(e){return!e}))}function C(e){var t,n=0,o=0,s=Object(m.a)(e);try{for(s.s();!(t=s.n()).done;){"win"===t.value?n=++o>n?o:n:(n=o>n?o:n,o=0)}}catch(r){s.e(r)}finally{s.f()}return{current:o,max:n}}var v=function(e){var t=Object(b.a)(e.result).slice(0),n=t.filter((function(e){return"win"===e})).length,r=t.filter((function(e){return"lose"===e})).length,i=Math.round(100*(n/t.length).toFixed(2)),c=C(t).max,a=C(t).current;function u(e){for(var t=[],n=0;n<e.length;n++){var s=[];"none"===e[n]?s[n]=O.a.neutral:"win"===e[n]?s[n]=O.a.win:s[n]=O.a.lose,t.unshift(Object(o.jsx)("li",{className:s[n],children:"Round ".concat(n+1,": ").concat("none"===e[n]?"skipped":e[n])},n))}return t}return Object(s.useEffect)((function(){u(t)}),[t]),Object(o.jsxs)("div",{className:O.a.wrapper,children:[Object(o.jsx)("h3",{style:{width:"250px"},children:"Statistics"}),Object(o.jsxs)("p",{children:["Rounds played: ",Object(o.jsx)("span",{children:t.length})]}),Object(o.jsxs)("p",{children:["Win: ",Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("p",{children:["Lose: ",Object(o.jsx)("span",{children:r})]}),Object(o.jsxs)("p",{children:["Winrate: ",Object(o.jsx)("span",{children:isNaN(i)?"0%":"".concat(i,"%")})]}),Object(o.jsxs)("p",{children:["Maximum winstreak: ",Object(o.jsx)("span",{children:c})]}),Object(o.jsxs)("p",{children:["Current winstreak: ",Object(o.jsx)("span",{children:a})]}),Object(o.jsx)("ul",{children:u(t)})]})},k=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).state={isChosen:[!1,!1,!1],trueArr:x([0,1,2]),moveConfirmed:!1,isOpened:[!1,!1,!1],openCount:0,roundResult:"none",resultsCount:[]},o}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){this.state.openCount!==t.openCount&&this.checkWinner()}},{key:"handleClick",value:function(e){var t=this.state.isChosen.slice().fill(!1);t[e]=!this.state.isChosen[e];this.setState({isChosen:t,moveConfirmed:t.includes(!0)})}},{key:"confirmActionOnKey",value:function(e){" "===e.key&&this.confirmAction()}},{key:"confirmAction",value:function(){if("none"===this.state.roundResult){var e=this.state.isChosen.slice();this.setState({isChosen:e,moveConfirmed:e.includes(!0)}),this.openFalseDoor()}else this.clearRound()}},{key:"openFalseDoor",value:function(){if(this.state.moveConfirmed){var e=this.state.isOpened.slice(),t=0;if(e.includes("open"))for(var n in e)!this.state.isChosen[n]&&t<2&&(e[n]="open",t++);else for(var o in e)if(!this.state.isChosen[o]&&!this.state.trueArr[o]&&t<2){e[o]="open",t++;break}this.setState({isOpened:e,openCount:t})}}},{key:"checkWinner",value:function(){var e=this.state.trueArr.slice(),t=this.state.isOpened.slice(),n=this.state.openCount,o=this.state.isChosen.slice(),s=this.state.roundResult;for(var r in t){if("open"===t[r]&&!0===e[r]){s="lose";break}n>1&&(s="win",o=Array(3).fill(!1))}n>1&&(t=Array(3).fill("open")),this.setState({roundResult:s,isOpened:t,isChosen:o})}},{key:"clearRound",value:function(){var e=this.state.roundResult,t=this.state.resultsCount;t.push(e),this.setState({isChosen:[!1,!1,!1],trueArr:x([0,1,2]),moveConfirmed:!1,isOpened:[!1,!1,!1],openCount:0,roundResult:"none",resultsCount:t})}},{key:"resetState",value:function(){this.setState({isChosen:[!1,!1,!1],trueArr:x([0,1,2]),moveConfirmed:!1,isOpened:[!1,!1,!1],openCount:0,roundResult:"none",resultsCount:[],choiceIsChanged:!1})}},{key:"renderDoor",value:function(e){var t=this;return Object(o.jsx)(f,{id:e,isTrue:this.state.trueArr[e],isChosen:this.state.isChosen[e],onClick:function(){return t.handleClick(e)},isOpened:this.state.isOpened[e],gameResult:this.state.roundResult})}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{tabIndex:"-1",onKeyDown:function(t){return e.confirmActionOnKey(t)},children:[Object(o.jsxs)("h1",{align:"center",children:["Round ",this.state.resultsCount.length+1," ","none"===this.state.roundResult?"":this.state.roundResult.toUpperCase()]}),Object(o.jsxs)("section",{className:p.a.main,children:[Object(o.jsxs)("div",{className:p.a.doorField,children:[Object(o.jsx)(v,{result:this.state.resultsCount}),this.renderDoor(0),this.renderDoor(1),this.renderDoor(2),Object(o.jsx)("button",{className:p.a.doorButton,onClick:function(){return e.confirmAction()},children:"none"!==this.state.roundResult?"Next round":"Continue"}),Object(o.jsx)("button",{onClick:function(){return e.clearRound()},children:"Skip round"}),Object(o.jsx)("button",{onClick:function(){return e.resetState()},children:"Clear game"})]}),Object(o.jsx)("div",{style:{margin:"20px",textAlign:"center"},children:' Make your choice and Press the "Continue" button (or "Space" instead).'})]})]})}}]),n}(r.a.Component),y=n(17),w=n(3),g=n.n(w);function D(e){var t=Object(y.a)({},e),n=t.name,s=t.onClick,r=t.autoFocus,i=t.className;return Object(o.jsx)("button",{autoFocus:r,className:i,onClick:s,children:n})}function R(e){var t=Object(s.useState)({closed:!1,style:g.a.frame}),n=Object(a.a)(t,2),r=n[0],i=n[1];function c(){i(r={closed:!r.closed,style:r.closed?g.a.frame:g.a.frame_closed})}return Object(o.jsxs)("div",{children:[Object(o.jsx)(D,{name:"HowToPlay",className:g.a.button_open,onClick:c}),Object(o.jsx)("div",{tabIndex:"-1",className:r.style,onKeyDown:function(e){return function(e){"Escape"===e.key&&c()}(e)},children:Object(o.jsxs)("div",{className:g.a.wrapper,children:[Object(o.jsx)("h1",{children:"Monty-Hall door's game"}),Object(o.jsx)("h3",{children:"How to play"}),Object(o.jsx)(D,{name:"Esc",className:g.a.button_close,autoFocus:"autoFocus",onClick:c}),Object(o.jsxs)("p",{children:["There is one ",Object(o.jsx)("em",{children:"Treasure map"})," behind one of this doors! Another two contains bags, full of trash.",Object(o.jsx)("br",{}),"You should find this map."]}),Object(o.jsx)("div",{className:g.a.map}),Object(o.jsx)("h3",{children:"Order of moves "}),Object(o.jsxs)("ol",{className:g.a.moveList,children:[Object(o.jsx)("li",{children:"Choose one of the doors and press 'Continue'"}),Object(o.jsx)("li",{children:"Your opponent(computer) make his choice by opening one of the doors with a trash."}),Object(o.jsx)("li",{children:"Now you could choose again. Pick the same door or another."})]})]})})]})}var S=function(){var e=Object(s.useState)(0),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(R,{}),Object(o.jsx)(k,{resultCounter:function(){r(n++)}})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),s(e),r(e),i(e)}))};c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root")),N()},3:function(e,t,n){e.exports={wrapper:"HowToPlay_wrapper__25x0a",moveList:"HowToPlay_moveList__NkNV7",map:"HowToPlay_map__3D52x",frame:"HowToPlay_frame__8A0dt",frame_closed:"HowToPlay_frame_closed__1vGTH",button_close:"HowToPlay_button_close__DIxCy",button_open:"HowToPlay_button_open__29uwq"}},6:function(e,t,n){e.exports={wrapper:"Statistics_wrapper__1Den4",neutral:"Statistics_neutral__14Vko",win:"Statistics_win__1VerY",lose:"Statistics_lose__1gEMT","count-title":"Statistics_count-title__XkPuj"}}},[[24,1,2]]]);
//# sourceMappingURL=main.d4b9ef95.chunk.js.map