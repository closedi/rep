(this["webpackJsonpmonte-hall"]=this["webpackJsonpmonte-hall"]||[]).push([[0],{1:function(e,n,t){e.exports={main:"Door_main__2HeNI",doorField:"Door_doorField__3cfX-",door_button:"Door_door_button__3tWMD",door:"Door_door__1gTSz",door_chosen:"Door_door_chosen__Y6psW",door_opened_good:"Door_door_opened_good__1zuNt",door_opened_bad:"Door_door_opened_bad__32PF0",hover:"Door_hover__1z167"}},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t(2),s=t.n(i),r=t(4),a=t.n(r),c=(t(15),t(5)),d=t(6),u=t(9),h=t(7),l=t(1),f=t.n(l),p=t(8);var _=function(e){var n=Object(i.useState)(f.a.door),t=Object(p.a)(n,2),s=t[0],r=t[1];return Object(i.useEffect)((function(){r(s=function(){s=!0===e.isChosen?f.a.door_chosen:"open"===e.isOpened&&e.isTrue?f.a.door_opened_good:"open"!==e.isOpened||e.isTrue?f.a.door:f.a.door_opened_bad;return s}())}),[[e.isChosen,e.isOpened]]),Object(o.jsxs)("div",{className:s,onClick:e.onClick,children:["\u0414\u0432\u0435\u0440\u044c ",e.id+1]})};function m(e){for(var n,t,o=e.length;o;n=parseInt(Math.random()*o),t=e[--o],e[o]=e[n],e[n]=t);return e.map((function(e){return!e}))}var v=function(e){Object(u.a)(t,e);var n=Object(h.a)(t);function t(e){var o;return Object(c.a)(this,t),(o=n.call(this,e)).state={isChosen:[!1,!1,!1],trueArr:m([0,1,2]),moveConfirmed:!1,isOpened:[!1,!1,!1],openCount:0,gameResult:"none"},o}return Object(d.a)(t,[{key:"componentDidUpdate",value:function(e,n,t){this.state.openCount!==n.openCount&&this.checkWinner()}},{key:"handleClick",value:function(e){var n=this.state.isChosen.slice().fill(!1);n[e]=!this.state.isChosen[e];this.setState({isChosen:n,moveConfirmed:n.includes(!0)})}},{key:"confirmActionOnKey",value:function(e){" "===e.key&&this.confirmAction()}},{key:"confirmAction",value:function(){var e=this.state.isChosen.slice();this.setState({isChosen:e,moveConfirmed:e.includes(!0)}),this.openFalseDoor()}},{key:"openFalseDoor",value:function(){if(this.state.moveConfirmed){var e=this.state.isOpened.slice(),n=0;if(e.includes("open"))for(var t in e)this.state.isChosen[t]||(e[t]="open",n++);else for(var o in e)if(!this.state.isChosen[o]&&!this.state.trueArr[o]){e[o]="open",n++;break}this.setState({isOpened:e,openCount:n})}}},{key:"checkWinner",value:function(){var e=this.state.trueArr.slice(),n=this.state.isOpened.slice(),t=this.state.openCount,o=(this.state.isChosen.slice(),this.state.gameResult);for(var i in n){if("open"===n[i]&&!0===e[i]){o="lose";break}t>1&&(o="win",n[i]="open")}this.setState({gameResult:o,isOpened:n})}},{key:"clearGame",value:function(){this.setState({isChosen:[!1,!1,!1],trueArr:m([0,1,2]),moveConfirmed:!1,isOpened:[!1,!1,!1],openCount:0,gameResult:"none"})}},{key:"renderDoor",value:function(e){var n=this;return Object(o.jsx)(_,{id:e,isTrue:this.state.trueArr[e],isChosen:this.state.isChosen[e],onClick:function(){return n.handleClick(e)},isOpened:this.state.isOpened[e]})}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{tabIndex:"0",onKeyDown:function(n){return e.confirmActionOnKey(n)},children:[Object(o.jsx)("h1",{align:"center",children:"Greetings, stranger. Nice to see you in the Monty Hall door's game."}),Object(o.jsxs)("section",{className:f.a.main,children:[Object(o.jsxs)("div",{className:f.a.doorField,children:[this.renderDoor(0),this.renderDoor(1),this.renderDoor(2),Object(o.jsx)("button",{className:f.a.door_button,onClick:function(){return e.confirmAction()},children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"}),Object(o.jsx)("button",{onClick:function(){return e.clearGame()},children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"})]}),Object(o.jsx)("div",{style:{marginTop:"20px"},children:'Make your choice and Press the "Continue" button (or Space instead).'})]})]})}}]),t}(s.a.Component),C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,o=n.getFID,i=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),o(e),i(e),s(e),r(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),C()}},[[16,1,2]]]);
//# sourceMappingURL=main.da20e7ec.chunk.js.map