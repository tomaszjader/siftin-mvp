(this["webpackJsonpsiftin-react"]=this["webpackJsonpsiftin-react"]||[]).push([[0],{10:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),a=t(4),i=t.n(a),j=(t(9),t(2)),o=(t(10),t.p+"static/media/twitter.f963dcac.png"),b=(t.p,t.p+"static/media/logo4.974d85d7.png"),l=t(0),r=function(){var e=Object(n.useState)([]),c=Object(j.a)(e,2),t=c[0],a=c[1],i=s.a.useState([!1,"BTC"]),r=Object(j.a)(i,2),h=r[0],u=r[1],d=s.a.useState([!1,"ETH"]),O=Object(j.a)(d,2),x=O[0],p=O[1],f=s.a.useState([!1,"XRP"]),g=Object(j.a)(f,2),k=g[0],m=g[1],N=s.a.useState([!1,"DOT"]),T=Object(j.a)(N,2),C=T[0],S=T[1],v=s.a.useState([!1,"ADA"]),y=Object(j.a)(v,2),B=y[0],D=y[1],X=s.a.useState([!1,"BNB"]),E=Object(j.a)(X,2),R=E[0],A=E[1],L=s.a.useState([!1,"DOGE"]),w=Object(j.a)(L,2),I=w[0],M=w[1],P=s.a.useState([!1,"XLM"]),F=Object(j.a)(P,2),G=F[0],H=F[1],J=s.a.useState([!1,"UNI"]),U=Object(j.a)(J,2),q=U[0],z=U[1],K=s.a.useState([!1,"TRX"]),Q=Object(j.a)(K,2),V=Q[0],W=Q[1];Object(n.useEffect)((function(){var e=new XMLHttpRequest;e.open("GET","https://siftin.herokuapp.com/categories",!0),e.send(),e.onload=function(){if(200===e.status){var c=JSON.parse(e.responseText);console.log(c),a(c)}}}),[]);return Object(l.jsx)("div",{className:"main--conteiner",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("header",{className:"main--conteiner",children:Object(l.jsx)("img",{className:"logo1",src:b})}),Object(l.jsxs)("div",{className:"inputcheckbox",children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:h[0],onChange:function(){u([!h[0],"BTC"])}}),"BTC"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:x[0],onChange:function(){p([!x[0],"ETH"])}}),"ETH"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:k[0],onChange:function(){m([!k[0],"XRP"])}}),"XRP"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:C[0],onChange:function(){S([!C[0],"DOT"])}}),"DOT"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:B[0],onChange:function(){D([!B[0],"ADA"])}}),"ADA"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:R[0],onChange:function(){A([!R[0],"BNB"])}}),"BNB"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:I[0],onChange:function(){M([!I[0],"DOGE"])}}),"DOGE"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:G[0],onChange:function(){H([!G[0],"XLM"])}}),"XLM"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:q[0],onChange:function(){z([!q[0],"UNI"])}}),"UNI"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:V[0],onChange:function(){W([!V[0],"TRX"])}}),"TRX"]})]}),t.filter((function(e){for(var c=0,t=[h,x,k,C,B,R,I,G,q,V];c<t.length;c++){var n=t[c];if(n[0]&&e.indices.includes(n[1]))return e}return null})).sort((function(e,c){return c.id-e.id})).map((function(e,c){return Object(l.jsxs)("div",{className:"finale-conteiner",children:[Object(l.jsxs)("div",{className:"conteiner1",children:[Object(l.jsx)("img",{className:"logo",src:o}),Object(l.jsx)("p",{className:"main--top",children:"Twitter"},e.id),Object(l.jsxs)("p",{children:[" ",e.date.slice(11,16)]})]}),Object(l.jsxs)("div",{className:"conteiner",children:[Object(l.jsxs)("p",{className:"border",children:[e.sources,": ",e.content]}),Object(l.jsx)("p",{className:"main--top",children:e.indices})]})]})}))]})})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,a=c.getLCP,i=c.getTTFB;t(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(r,{})}),document.getElementById("root")),h()},9:function(e,c,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.e9d360d7.chunk.js.map