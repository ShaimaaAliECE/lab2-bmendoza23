(this.webpackJsonpconnect4=this.webpackJsonpconnect4||[]).push([[0],{12:function(l,n,t){},14:function(l,n,t){"use strict";t.r(n);var e=t(1),r=t.n(e),a=t(7),u=t.n(a),s=t(3),o=t(4),c=t(6),i=t(5),d=(t(12),t(0)),b=function(l){Object(c.a)(t,l);var n=Object(i.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(d.jsx)("button",{disabled:this.props.disabled,style:this.props.style,onClick:this.props.onClick})}}]),t}(r.a.Component),h=function(l){Object(c.a)(t,l);var n=Object(i.a)(t);function t(l){var e;return Object(s.a)(this,t),(e=n.call(this,l)).state={player:"red",win:!1,boardFull:!1,displayMsg:"",gameBoard:[[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null]]},e}return Object(o.a)(t,[{key:"boardScan",value:function(){for(var l,n,t=this.state.gameBoard,e=0,r=this.state.player,a=0;a<6;a++)for(var u=0;u<7;u++)null===t[a][u]&&l++,42===l&&(this.state.boardFull=!0);for(var s=0;s<7;s++)for(var o=0;o<6;o++)null===t[o][s]?(e=0,r=null):t[o][s]===r?e++:(e=1,r=t[o][s]),e>=4&&(this.state.win=!0);for(var c=0;c<6;c++)for(var i=0;i<7;i++)null===t[c][i]?(n=0,r=null):t[c][i]===r?n++:(n=1,r=t[c][i]),n>=4&&(this.state.win=!0)}},{key:"renderButtons",value:function(){for(var l=this,n=[],t=function(t){for(var e=function(e){n.push(Object(d.jsx)(b,{disabled:l.state.boardFull||l.state.win,onClick:function(n){n.target.style.backgroundColor=l.state.player,n.target.disabled=!0;var r=l.state.gameBoard;r[t][e]=l.state.player,l.setState({gameBoard:r}),l.boardScan(),l.state.win&&alert("Game Over! "+l.state.player+" Wins!"),l.state.boardFull&&alert("Game Over! The there are no more free spaces :("),l.setState({player:"red"===l.state.player?"yellow":"red"})}},t+" "+e))},r=0;r<7;r++)e(r);n.push(Object(d.jsx)("br",{},t+"br"))},e=0;e<6;e++)t(e);return n}},{key:"render",value:function(){return Object(d.jsx)("div",{children:this.renderButtons()})}}]),t}(r.a.Component);u.a.render(Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Connect 4 by Brandon Mendoza"}),Object(d.jsx)("hr",{}),Object(d.jsx)(h,{})]}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2c2399bc.chunk.js.map