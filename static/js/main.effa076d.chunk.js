(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(48)},42:function(e,t,n){},44:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(22),n(15)),c=n.n(o),i=n(10),s=n(8),l=n(19),u=(n(42),n(3)),h=n(4),d=n(6),p=n(5),f=n(7),g=function(e){var t=e.name,n=e.email,a=e.city,o=e.photo,c=e.age,i=e.phone;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?size=100x100")}),r.a.createElement("div",null,r.a.createElement("h4",null,"Name: ",t),r.a.createElement("p",null," ",n),r.a.createElement("p",null," Tel: ",i),r.a.createElement("p",null,"Country: ",a),r.a.createElement("p",null,"Age: ",c),r.a.createElement("img",{style:{width:"220px",height:"auto"},alt:"women",src:"".concat(o)})))},m=function(e){var t=e.users.map(function(e,t){return r.a.createElement(g,{key:t,name:e.name,email:e.email,city:e.region,age:e.age,photo:e.photo,phone:e.phone})});return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignContent:"center"}},t)},E=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search robots",className:"pa2 ba b--green bg-lightest-blue",placeholder:"search robots",onChange:t}))},b=(n(44),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",height:"490px"}},e.children)}),v=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null," oops.That is not good"):this.props.children}}]),t}(a.Component),w=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={count:0},n.updateCount=function(){n.setState(function(e){return{count:e.count+1}})},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return r.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(a.Component),O=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"f2"}," Robofriends "),r.a.createElement(w,{color:"red"}))}}]),t}(a.Component),y=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestUsers()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.users,o=e.isPending,c=a.filter(function(e){return e.name.toLowerCase().includes(t.toLocaleLowerCase())});return o?r.a.createElement("h1",{className:"f1 tc"}," Loading "):r.a.createElement("div",{className:"tc"},r.a.createElement(O,null),r.a.createElement(E,{searchChange:n}),r.a.createElement(b,null,r.a.createElement(v,null,r.a.createElement(m,{users:c}))))}}]),t}(a.Component),j=Object(i.b)(function(e){return{searchField:e.search.searchField,users:e.request.users,isPending:e.request.isPending,error:e.request.error}},function(e){return{onSearchChange:function(t){e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestUsers:function(){e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://uinames.com/api/?ext&amount=55&region=poland&gender=female").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(y),C=(n(46),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function S(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var k={searchField:""},R={isPending:!1,users:[],error:""},T=Object(s.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{users:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}});var _=Object(s.d)(T,Object(s.a)(l.a));c.a.render(r.a.createElement(i.a,{store:_},r.a.createElement(j,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa-robo-react-redax-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/pwa-robo-react-redax-app","/service-worker.js");C?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):S(t,e)})}}()}},[[20,2,1]]]);
//# sourceMappingURL=main.effa076d.chunk.js.map