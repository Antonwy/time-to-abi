(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),l=n.n(r),o=(n(16),n(1)),s=n(2),c=n(4),u=n(3),m=n(5),h=(n(17),n(9)),d=n(8).a.h1({middle:{y:0,transition:{duration:400}},top:{y:"-105%"},fastBottom:{y:"105px",transition:{duration:0}},bottom:{y:"105%"}}),p=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={defNumber:0,number:0,animation:"middle"},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){var e=this,t=this.state,n=this.props;t.defNumber!==n.number&&(this.setState({defNumber:n.number,animation:"top"}),setTimeout(function(){e.setState({animation:"fastBottom"},function(){setTimeout(function(){e.setState({animation:"middle",number:n.number})},50)})},450))}},{key:"render",value:function(){var e=this.state.animation,t=this.props.height;return i.a.createElement("div",{className:"flipContainer"},i.a.createElement(d,{pose:e,style:{fontSize:t}},this.state.number))}}]),t}(a.Component),v=function(e){var t=e.number,n=e.text,a=e.height;return i.a.createElement("div",{className:"numberContainer"},i.a.createElement("div",null,String(t).split("").map(function(e,t){return i.a.createElement(p,{height:a,key:t,number:e})})),i.a.createElement("p",null,n))},f=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={days:0,hours:0,min:0,sec:0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){var t=e.calculateCountdown(e.props.date);t?e.setState(t):e.stop()},1e3)}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"calculateCountdown",value:function(e){var t=(Date.parse(new Date(e))-Date.parse(new Date))/1e3;if(t<=0)return!1;var n={years:0,days:0,hours:0,min:0,sec:0};return t>=31557600&&(n.years=Math.floor(t/31557600),t-=365.25*n.years*86400),t>=86400&&(n.days=Math.floor(t/86400),t-=86400*n.days),t>=3600&&(n.hours=Math.floor(t/3600),t-=3600*n.hours),t>=60&&(n.min=Math.floor(t/60),t-=60*n.min),n.sec=t,n.days=this.addLeadingZeros(n.days),n.hours=this.addLeadingZeros(n.hours),n.min=this.addLeadingZeros(n.min),n.sec=this.addLeadingZeros(n.sec),n}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"addLeadingZeros",value:function(e){for(e=String(e);e.length<2;)e="0"+e;return e}},{key:"render",value:function(){var e=this.state,t=e.days,n=e.hours,a=e.min,r=e.sec,l=this.props,o=l.width,s=l.height,c=l.className,u=l.style,m=l.titleElement;return i.a.createElement("div",{className:"timerContainer ".concat(c),style:Object(h.a)({width:o},u)},i.a.createElement("div",null,m),i.a.createElement("div",{className:"timeContainer"},i.a.createElement(v,{height:s,number:t,text:"Tage"}),i.a.createElement("div",{style:{fontSize:s},className:"doublePoints"},":"),i.a.createElement(v,{height:s,number:n,text:"Stunden"}),i.a.createElement("div",{style:{fontSize:s},className:"doublePoints"},":"),i.a.createElement(v,{height:s,number:a,text:"Minuten"}),i.a.createElement("div",{style:{fontSize:s},className:"doublePoints"},":"),i.a.createElement(v,{height:s,number:r,text:"Sekunden"})))}}]),t}(a.Component);f.defaultProps={date:"".concat(function(){var e=new Date;return 11===e.getMonth()&&e.getDate()>23?e.getFullYear()+1:e.getFullYear()}(),"-05-03T00:00:00"),height:"100px",width:"",className:"",style:{},titleElement:i.a.createElement("div",null)};var E=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=new Date,t=11===e.getMonth()&&e.getDate()>23?e.getFullYear()+1:e.getFullYear();return i.a.createElement("div",{className:"mainContainer"},i.a.createElement(f,{date:"".concat(t,"-04-30T00:00:00"),width:"90vw",titleElement:i.a.createElement("h1",null,"Deutsch LK")}),i.a.createElement(f,{date:"".concat(t,"-05-03T00:00:00"),width:"50vw",height:40,style:{marginTop:50},titleElement:i.a.createElement("h3",null,"Mathe LK")}),i.a.createElement(f,{date:"".concat(t,"-05-06T00:00:00"),height:40,width:"50vw",style:{marginTop:20},titleElement:i.a.createElement("h3",null,"Geschichte")}),i.a.createElement(f,{date:"".concat(t,"-05-08T00:00:00"),height:40,width:"50vw",style:{marginTop:20},titleElement:i.a.createElement("h3",null,"Englisch LK")}),i.a.createElement(f,{date:"".concat(t,"-05-09T00:00:00"),height:40,width:"50vw",style:{marginTop:20},titleElement:i.a.createElement("h3",null,"Kunst LK")}),i.a.createElement(f,{date:"".concat(t,"-05-10T00:00:00"),height:40,width:"50vw",style:{marginTop:20},titleElement:i.a.createElement("h3",null,"Franz\xf6sisch LK")}),i.a.createElement(f,{date:"".concat(t,"-05-15T00:00:00"),height:40,width:"50vw",style:{marginTop:20},titleElement:i.a.createElement("h3",null,"Geografie")}))}}]),t}(a.Component);l.a.render(i.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.2f44b6cb.chunk.js.map