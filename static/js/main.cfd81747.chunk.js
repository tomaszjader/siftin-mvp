(this["webpackJsonpsiftin-react"]=this["webpackJsonpsiftin-react"]||[]).push([[0],{65:function(e,t,c){},66:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(23),s=c.n(i),o=(c(65),c(3)),l=(c(66),c.p+"static/media/twitter.f963dcac.png"),r=c.p+"static/media/sito.9e667146.png",j=c.p+"static/media/sito-white.ab7387e1.png",h=c.p+"static/media/logo4-white.c693e7d4.png",b=c.p+"static/media/logo4.8d5ba7c6.png",d=c.p+"static/media/sun-warm.ee748d9f.svg",O=c.p+"static/media/moon-black.3faf560f.svg",x=c(53),u=c.n(x),f=c(59),m=c(37),p=c(9),g=c(84),I=c(82),v=c(85),S=c(83),k=c(58),N=c(1),C=function(e){var t=e.interval,c=e.onChangeInterval,n=e.onChangeIntervalNotification;return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{children:"Settings"}),Object(N.jsxs)("label",{className:"crypto-blox1",children:["Set the notification interval",Object(N.jsx)("input",{type:"number",step:1,min:0,max:60,value:t,onChange:c}),"(min)",Object(N.jsx)(k.a,{onClick:n,children:"Set"})]})]})},T=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)("p",{children:"My plan"}),Object(N.jsx)("p",{children:"Premium"}),Object(N.jsx)("p",{children:"My card"}),Object(N.jsx)("p",{children:"1234567890"})]})},y=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)((function(){var e=localStorage.getItem("name");return JSON.parse(e)||""})),x=Object(o.a)(s,2),k=(x[0],x[1],Object(n.useState)(!1)),y=Object(o.a)(k,2),B=y[0],w=y[1],D=Object(n.useState)([]),E=Object(o.a)(D,2),X=E[0],P=E[1],R=a.a.useState([!1,"BTC"]),A=Object(o.a)(R,2),L=A[0],M=A[1],U=a.a.useState([!1,"ETH"]),G=Object(o.a)(U,2),H=G[0],F=G[1],J=a.a.useState([!1,"XRP"]),q=Object(o.a)(J,2),z=q[0],Y=q[1],_=a.a.useState([!1,"DOT"]),W=Object(o.a)(_,2),K=W[0],Q=W[1],V=a.a.useState([!1,"ADA"]),Z=Object(o.a)(V,2),$=Z[0],ee=Z[1],te=a.a.useState([!1,"BNB"]),ce=Object(o.a)(te,2),ne=ce[0],ae=ce[1],ie=a.a.useState([!1,"DOGE"]),se=Object(o.a)(ie,2),oe=se[0],le=se[1],re=a.a.useState([!1,"XLM"]),je=Object(o.a)(re,2),he=je[0],be=je[1],de=a.a.useState([!1,"UNI"]),Oe=Object(o.a)(de,2),xe=Oe[0],ue=Oe[1],fe=a.a.useState([!1,"TRX"]),me=Object(o.a)(fe,2),pe=me[0],ge=me[1],Ie=Object(n.useState)(!0),ve=Object(o.a)(Ie,2),Se=ve[0],ke=ve[1],Ne=Object(n.useState)(1),Ce=Object(o.a)(Ne,2),Te=Ce[0],ye=Ce[1],Be=Object(n.useState)(1),we=Object(o.a)(Be,2),De=we[0],Ee=we[1];Object(n.useEffect)((function(){new Notification("To do list",{body:'HEY! Your task "" is now overdue.',icon:"/twitter.png"});var e=new XMLHttpRequest;e.open("GET","https://siftin.herokuapp.com/categories",!0),e.send(),e.onload=function(){if(200===e.status){var t=JSON.parse(e.responseText);console.log(t),i(t)}},fetch("https://siftin.herokuapp.com/crypto").then((function(e){return e.json()})).then((function(e){console.log(e),P(e)}))}),[]),Object(n.useEffect)((function(){setInterval(Xe,6e4*De)}),[]);var Xe=function(){console.log(De),fetch("https://siftin.herokuapp.com/categories").then((function(e){return e.json()})).then((function(e){console.log(e),i(e)})),fetch("https://siftin.herokuapp.com/crypto").then((function(e){return e.json()})).then((function(e){console.log(e),P(e)}))};Object(n.useEffect)((function(){for(var e=0,t=[L,H,z,K,$,ne,oe,he,xe,pe];e<t.length;e++){var c=t[e];JSON.parse(localStorage.getItem(c[1]))&&("BTC"===c[1]?M([localStorage.getItem(c[1]),"BTC"]):"UNI"===c[1]?ue([localStorage.getItem(c[1]),"UNI"]):"ETH"===c[1]?F([localStorage.getItem(c[1]),"ETH"]):"TRX"===c[1]?ge([localStorage.getItem(c[1]),"TRX"]):"XRP"===c[1]?Y([localStorage.getItem(c[1]),"XRP"]):"DOT"===c[1]?Q([localStorage.getItem(c[1]),"DOT"]):"ADA"===c[1]?ee([localStorage.getItem(c[1]),"ADA"]):"BNB"===c[1]?ae([localStorage.getItem(c[1]),"BNB"]):"DOGE"===c[1]?le([localStorage.getItem(c[1]),"DOGE"]):"XLM"===c[1]&&be([localStorage.getItem(c[1]),"XLM"]))}}),[]);return Object(N.jsxs)(m.a,{children:[Object(N.jsx)(g.a,{collapseOnSelect:!0,expand:"lg",bg:Se?"dark":"light",variant:Se?"dark":"light",children:Object(N.jsxs)(I.a,{children:[Object(N.jsxs)(g.a.Brand,{href:"#home",children:[" ",Object(N.jsxs)(m.b,{to:"/siftin-mvp",children:[Object(N.jsx)("img",{className:"logo-sifter",src:Se?h:b}),Object(N.jsx)("img",{className:"logo-sifter",src:Se?j:r})]})]}),Object(N.jsx)(g.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(N.jsx)(g.a.Collapse,{id:"responsive-navbar-nav",sticky:!0,children:Object(N.jsxs)(v.a,{className:"me-auto",children:[Object(N.jsxs)(S.a,{title:"crypto",id:"collasible-nav-dropdown",expanded:"expanded",show:B,onToggle:function(){w(!B)},autoClose:!1,children:[Object(N.jsx)(S.a.Item,{href:"#action/3.1",onClick:function(){M([!L[0],"BTC"]),localStorage.setItem(L[1],!L[0])},children:Object(N.jsxs)("label",{children:[Object(N.jsx)("input",{type:"checkbox",checked:L[0]}),"BTC"]})}),Object(N.jsx)(S.a.Item,{href:"#action/3.2",onClick:function(){F([!H[0],"ETH"]),localStorage.setItem(H[1],!H[0])},children:Object(N.jsxs)("label",{children:[Object(N.jsx)("input",{type:"checkbox",checked:H[0]}),"ETH"]})}),Object(N.jsx)(S.a.Item,{href:"#action/3.3",onClick:function(){Y([!z[0],"XRP"]),localStorage.setItem(z[1],!z[0])},children:Object(N.jsxs)("label",{children:[Object(N.jsx)("input",{type:"checkbox",checked:z[0]}),"XRP"]})}),Object(N.jsx)(S.a.Item,{href:"#action/3.4",onClick:function(){Q([!K[0],"DOT"]),localStorage.setItem(K[1],!K[0])},children:Object(N.jsxs)("label",{children:[Object(N.jsx)("input",{type:"checkbox",checked:K[0]}),"DOT"]})}),Object(N.jsx)(S.a.Item,{href:"#action/3.5",onClick:function(){ee([!$[0],"ADA"]),localStorage.setItem($[1],!$[0])},children:Object(N.jsxs)("label",{children:[Object(N.jsx)("input",{type:"checkbox",checked:$[0]}),"ADA","    "]})}),Object(N.jsx)(S.a.Item,{href:"#action/3.6",onClick:function(){ae([!ne[0],"BNB"]),localStorage.setItem(ne[1],!ne[0])},children:Object(N.jsxs)("label",{children:[Object(N.jsx)("input",{type:"checkbox",checked:ne[0]}),"BNB"]})}),Object(N.jsx)(S.a.Item,{href:"#action/3.7",onClick:function(){le([!oe[0],"DOGE"]),localStorage.setItem(oe[1],!oe[0])},children:Object(N.jsxs)("label",{children:[Object(N.jsx)("input",{type:"checkbox",checked:oe[0]}),"DOGE"]})}),Object(N.jsx)(S.a.Item,{href:"#action/3.8",onClick:function(){be([!he[0],"XLM"]),localStorage.setItem(he[1],!he[0])},children:Object(N.jsxs)("label",{children:[Object(N.jsx)("input",{type:"checkbox",checked:he[0]}),"XLM"]})}),Object(N.jsx)(S.a.Item,{href:"#action/3.9",onClick:function(){ue([!xe[0],"UNI"]),localStorage.setItem(xe[1],!xe[0])},children:Object(N.jsxs)("label",{children:[Object(N.jsx)("input",{type:"checkbox",checked:xe[0]}),"UNI"]})}),Object(N.jsx)(S.a.Item,{href:"#action/3.10",onClick:function(){ge([!pe[0],"TRX"]),localStorage.setItem(pe[1],!pe[0])},children:Object(N.jsxs)("label",{children:[Object(N.jsx)("input",{type:"checkbox",checked:pe[0]}),"TRX"]})})]}),Object(N.jsxs)(S.a,{title:"stock exchange",id:"collasible-nav-dropdown",children:[Object(N.jsx)(S.a.Item,{href:"#action/3.1",children:"WIG20"}),Object(N.jsx)(S.a.Item,{href:"#action/3.2",children:"FTSE 100"}),Object(N.jsx)(S.a.Item,{href:"#action/3.3",children:"Nasdaq Composite"}),Object(N.jsx)(S.a.Item,{href:"#action/3.4",children:"SSE Composite Index"}),Object(N.jsx)(S.a.Item,{href:"#action/3.4",children:"DAX"})]}),Object(N.jsxs)(S.a,{title:"forex",id:"collasible-nav-dropdown",children:[Object(N.jsx)(S.a.Item,{href:"#action/3.1",children:"USD"}),Object(N.jsx)(S.a.Item,{href:"#action/3.2",children:"GBP"}),Object(N.jsx)(S.a.Item,{href:"#action/3.3",children:"EURO"}),Object(N.jsx)(S.a.Item,{href:"#action/3.4",children:"CHF"}),Object(N.jsx)(S.a.Item,{href:"#action/3.5",children:"PLN"})]}),Object(N.jsx)("div",{className:"main--conteiner",onClick:function(){ke(!Se)},children:Object(N.jsx)("img",{src:Se?d:O,className:Se?"svg-white":"svg-black"})}),Object(N.jsx)(g.a.Brand,{href:"#home"}),Object(N.jsxs)(S.a,{title:Object(N.jsx)(u.a,{path:f.a,title:"User Profile",size:1,horizontal:!0,vertical:!0,rotate:180,color:Se?"white":"black"}),id:"collasible-nav-dropdown",children:[Object(N.jsx)(S.a.Item,{href:"#action/3.1",children:"Portfolio"}),Object(N.jsx)(S.a.Item,{href:"#action/3.3",children:"Currency: USD"}),Object(N.jsx)(m.b,{to:"/settings",children:Object(N.jsx)(S.a.Item,{href:"#action/3.4",children:"Settings"})}),Object(N.jsx)(m.b,{to:"/myaccount",children:Object(N.jsx)(S.a.Item,{href:"#action/3.5",children:"My account"})}),Object(N.jsx)(S.a.Item,{href:"#action/3.6",children:"Log out"})]})]})})]})}),Object(N.jsxs)(p.c,{children:[Object(N.jsx)(p.a,{exact:!0,path:"/siftin-mvp",children:Object(N.jsx)("div",{className:Se?"dark-mode":"light-mode",children:Object(N.jsxs)("div",{children:[Object(N.jsx)("header",{className:"main--conteiner",children:Object(N.jsx)("img",{className:"logo1",src:Se?h:b})}),Object(N.jsx)("div",{className:"crypto",children:X.filter((function(e){for(var t=0,c=[L,H,z,K,$,ne,oe,he,xe,pe];t<c.length;t++){var n=c[t];if(n[0]&&e.indices.includes(n[1]))return e}return null})).map((function(e){return Object(N.jsxs)("div",{className:"crypto-blox",children:[Object(N.jsx)("p",{children:e.name}),Object(N.jsx)("p",{children:e.price.slice(0,e.price.indexOf(".")+4||e.price.lenght)})]})}))}),Object(N.jsx)("div",{className:"inputcheckbox"}),c.filter((function(e){for(var t=0,c=[L,H,z,K,$,ne,oe,he,xe,pe];t<c.length;t++){var n=c[t];if(n[0]&&e.indices.includes(n[1]))return e}return null})).sort((function(e,t){return t.id-e.id})).filter((function(e,t,c){return c.findIndex((function(t){return t.content===e.content}))===t})).map((function(e,t){return Object(N.jsx)("div",{className:"finale-conteiner",children:Object(N.jsxs)("a",{href:e.twitter_link,target:"_blank",children:[Object(N.jsxs)("div",{className:"conteiner1",children:[Object(N.jsx)("img",{className:"logo",src:l}),Object(N.jsx)("p",{className:"main--top",children:"Twitter"},e.id),Object(N.jsxs)("p",{children:[" ",e.date.slice(11,16)]})]}),Object(N.jsxs)("div",{className:"conteiner",children:[Object(N.jsxs)("p",{className:"border1",children:[Object(N.jsx)("span",{className:"bold",children:e.sources}),": ",e.content.search("https://")?e.content.slice(0,e.content.search("https://")):e.content]}),Object(N.jsx)("p",{className:"main--top",children:e.indices})]})]})})}))]})})}),Object(N.jsx)(p.a,{path:"/settings",children:Object(N.jsx)(C,{interval:Te,onChangeInterval:function(e){console.log(e.target.value),console.log(e.target.type),ye(e.target.value)},onChangeIntervalNotification:function(){Ee(Te||60),console.log(De)}})}),Object(N.jsx)(p.a,{path:"/myaccount",children:Object(N.jsx)(T,{})})]})]})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,86)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};c(74);s.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(y,{})}),document.getElementById("root")),B()}},[[75,1,2]]]);
//# sourceMappingURL=main.cfd81747.chunk.js.map