(this["webpackJsonpsiftin-react"]=this["webpackJsonpsiftin-react"]||[]).push([[0],{52:function(e,t,c){},53:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(16),i=c.n(s),o=(c(52),c(3)),r=(c(53),c.p+"static/media/twitter.f963dcac.png"),l=c.p+"static/media/sito.9e667146.png",j=c.p+"static/media/logo4.8d5ba7c6.png",h=c(69),b=c(67),d=c(70),O=c(68),x=c(1),u=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)((function(){var e=localStorage.getItem("name");return JSON.parse(e)||""})),u=Object(o.a)(i,2),m=(u[0],u[1],Object(n.useState)([])),f=Object(o.a)(m,2),g=f[0],p=f[1],I=a.a.useState([!1,"BTC"]),S=Object(o.a)(I,2),k=S[0],v=S[1],N=a.a.useState([!1,"ETH"]),T=Object(o.a)(N,2),C=T[0],D=T[1],y=a.a.useState([!1,"XRP"]),B=Object(o.a)(y,2),E=B[0],X=B[1],w=a.a.useState([!1,"DOT"]),R=Object(o.a)(w,2),A=R[0],L=R[1],P=a.a.useState([!1,"ADA"]),G=Object(o.a)(P,2),H=G[0],M=G[1],U=a.a.useState([!1,"BNB"]),F=Object(o.a)(U,2),J=F[0],q=F[1],Y=a.a.useState([!1,"DOGE"]),_=Object(o.a)(Y,2),W=_[0],z=_[1],K=a.a.useState([!1,"XLM"]),Q=Object(o.a)(K,2),V=Q[0],Z=Q[1],$=a.a.useState([!1,"UNI"]),ee=Object(o.a)($,2),te=ee[0],ce=ee[1],ne=a.a.useState([!1,"TRX"]),ae=Object(o.a)(ne,2),se=ae[0],ie=ae[1],oe=Object(n.useState)(!0),re=Object(o.a)(oe,2),le=re[0],je=re[1];Object(n.useEffect)((function(){new Notification("To do list",{body:'HEY! Your task "" is now overdue.',icon:"/twitter.png"});var e=new XMLHttpRequest;e.open("GET","https://siftin.herokuapp.com/categories",!0),e.send(),e.onload=function(){if(200===e.status){var t=JSON.parse(e.responseText);console.log(t),s(t)}},fetch("https://siftin.herokuapp.com/crypto").then((function(e){return e.json()})).then((function(e){console.log(e),p(e)}))}),[]),Object(n.useEffect)((function(){setInterval(he,6e4)}),[]);var he=function(){fetch("https://siftin.herokuapp.com/categories").then((function(e){return e.json()})).then((function(e){console.log(e),s(e)}))};Object(n.useEffect)((function(){for(var e=0,t=[k,C,E,A,H,J,W,V,te,se];e<t.length;e++){var c=t[e];JSON.parse(localStorage.getItem(c[1]))&&("BTC"===c[1]?v([localStorage.getItem(c[1]),"BTC"]):"UNI"===c[1]?ce([localStorage.getItem(c[1]),"UNI"]):"ETH"===c[1]?D([localStorage.getItem(c[1]),"ETH"]):"TRX"===c[1]?ie([localStorage.getItem(c[1]),"TRX"]):"XRP"===c[1]?X([localStorage.getItem(c[1]),"XRP"]):"DOT"===c[1]?L([localStorage.getItem(c[1]),"DOT"]):"ADA"===c[1]?M([localStorage.getItem(c[1]),"ADA"]):"BNB"===c[1]?q([localStorage.getItem(c[1]),"BNB"]):"DOGE"===c[1]?z([localStorage.getItem(c[1]),"DOGE"]):"XLM"===c[1]&&Z([localStorage.getItem(c[1]),"XLM"]))}}),[]);return Object(x.jsxs)("div",{className:le?"dark-mode":"light-mode",children:[Object(x.jsx)(h.a,{collapseOnSelect:!0,expand:"lg",bg:le?"dark":"light",variant:le?"dark":"light",children:Object(x.jsxs)(b.a,{children:[Object(x.jsxs)(h.a.Brand,{href:"#home",children:[" ",Object(x.jsx)("img",{className:"logo-sifter",src:l})]}),Object(x.jsx)(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(x.jsx)(h.a.Collapse,{id:"responsive-navbar-nav",children:Object(x.jsxs)(d.a,{className:"me-auto",children:[Object(x.jsxs)(O.a,{title:"crypto",id:"collasible-nav-dropdown",children:[Object(x.jsxs)(O.a.Item,{href:"#action/3.1",children:[" ",Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",checked:k[0],onChange:function(){v([!k[0],"BTC"]),localStorage.setItem(k[1],!k[0])}}),"BTC"]})]}),Object(x.jsx)(O.a.Item,{href:"#action/3.2",children:Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",checked:C[0],onChange:function(){D([!C[0],"ETH"]),localStorage.setItem(C[1],!C[0])}}),"ETH"]})}),Object(x.jsx)(O.a.Item,{href:"#action/3.3",children:Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",checked:E[0],onChange:function(){X([!E[0],"XRP"]),localStorage.setItem(E[1],!E[0])}}),"XRP"]})}),Object(x.jsx)(O.a.Item,{href:"#action/3.4",children:Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",checked:A[0],onChange:function(){L([!A[0],"DOT"]),localStorage.setItem(A[1],!A[0])}}),"DOT"]})}),Object(x.jsx)(O.a.Item,{href:"#action/3.5",children:Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",checked:H[0],onChange:function(){M([!H[0],"ADA"]),localStorage.setItem(H[1],!H[0])}}),"ADA"]})}),Object(x.jsx)(O.a.Item,{href:"#action/3.6",children:Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",checked:J[0],onChange:function(){q([!J[0],"BNB"]),localStorage.setItem(J[1],!J[0])}}),"BNB"]})}),Object(x.jsx)(O.a.Item,{href:"#action/3.7",children:Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",checked:W[0],onChange:function(){z([!W[0],"DOGE"]),localStorage.setItem(W[1],!W[0])}}),"DOGE"]})}),Object(x.jsx)(O.a.Item,{href:"#action/3.8",children:Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",checked:V[0],onChange:function(){Z([!V[0],"XLM"]),localStorage.setItem(V[1],!V[0])}}),"XLM"]})}),Object(x.jsx)(O.a.Item,{href:"#action/3.9",children:Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",checked:te[0],onChange:function(){ce([!te[0],"UNI"]),localStorage.setItem(te[1],!te[0])}}),"UNI"]})}),Object(x.jsx)(O.a.Item,{href:"#action/3.10",children:Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",checked:se[0],onChange:function(){ie([!se[0],"TRX"]),localStorage.setItem(se[1],!se[0])}}),"TRX"]})})]}),Object(x.jsxs)(O.a,{title:"stock exchange",id:"collasible-nav-dropdown",children:[Object(x.jsx)(O.a.Item,{href:"#action/3.1",children:"WIG20"}),Object(x.jsx)(O.a.Item,{href:"#action/3.2",children:"FTSE 100"}),Object(x.jsx)(O.a.Item,{href:"#action/3.3",children:"Nasdaq Composite"}),Object(x.jsx)(O.a.Item,{href:"#action/3.4",children:"SSE Composite Index"}),Object(x.jsx)(O.a.Item,{href:"#action/3.4",children:"DAX"})]}),Object(x.jsxs)(O.a,{title:"forex",id:"collasible-nav-dropdown",children:[Object(x.jsx)(O.a.Item,{href:"#action/3.1",children:"USD"}),Object(x.jsx)(O.a.Item,{href:"#action/3.2",children:"GBP"}),Object(x.jsx)(O.a.Item,{href:"#action/3.3",children:"EURO"}),Object(x.jsx)(O.a.Item,{href:"#action/3.4",children:"CHF"}),Object(x.jsx)(O.a.Item,{href:"#action/3.5",children:"PLN"})]}),Object(x.jsx)("div",{className:"main--conteiner",children:Object(x.jsx)("input",{type:"checkbox",checked:le,onChange:function(){je(!le)}})}),Object(x.jsxs)(O.a,{title:"user",id:"collasible-nav-dropdown",children:[Object(x.jsx)(O.a.Item,{href:"#action/3.1",children:"Portfolio"}),Object(x.jsx)(O.a.Item,{href:"#action/3.2",children:"Dark mode"}),Object(x.jsx)(O.a.Item,{href:"#action/3.3",children:"Currency: USD"}),Object(x.jsx)(O.a.Item,{href:"#action/3.4",children:"Settings"}),Object(x.jsx)(O.a.Item,{href:"#action/3.5",children:"My account"}),Object(x.jsx)(O.a.Item,{href:"#action/3.6",children:"Log out"})]})]})})]})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("header",{className:"main--conteiner",children:Object(x.jsx)("img",{className:"logo1",src:j})}),Object(x.jsx)("div",{className:"crypto",children:g.map((function(e){return Object(x.jsxs)("div",{className:"crypto-blox",children:[Object(x.jsx)("p",{children:e.name}),Object(x.jsx)("p",{children:e.price.slice(0,e.price.indexOf(".")+3||e.price.lenght)})]})}))}),Object(x.jsx)("div",{className:"inputcheckbox"}),c.filter((function(e){for(var t=0,c=[k,C,E,A,H,J,W,V,te,se];t<c.length;t++){var n=c[t];if(n[0]&&e.indices.includes(n[1]))return e}return null})).sort((function(e,t){return t.id-e.id})).filter((function(e,t,c){return c.findIndex((function(t){return t.content===e.content}))===t})).map((function(e,t){return Object(x.jsx)("div",{className:"finale-conteiner",children:Object(x.jsxs)("a",{href:e.twitter_link,target:"_blank",children:[Object(x.jsxs)("div",{className:"conteiner1",children:[Object(x.jsx)("img",{className:"logo",src:r}),Object(x.jsx)("p",{className:"main--top",children:"Twitter"},e.id),Object(x.jsxs)("p",{children:[" ",e.date.slice(11,16)]})]}),Object(x.jsxs)("div",{className:"conteiner",children:[Object(x.jsxs)("p",{className:"border1",children:[Object(x.jsx)("span",{className:"bold",children:e.sources}),": ",e.content.search("https://")?e.content.slice(0,e.content.search("https://")):e.content]}),Object(x.jsx)("p",{className:"main--top",children:e.indices})]})]})})}))]})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};c(59);i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(u,{})}),document.getElementById("root")),m()}},[[60,1,2]]]);
//# sourceMappingURL=main.0d95417f.chunk.js.map