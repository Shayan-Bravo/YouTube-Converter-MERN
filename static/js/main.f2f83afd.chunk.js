(this.webpackJsonpsave4me=this.webpackJsonpsave4me||[]).push([[0],{18:function(e,s,t){},19:function(e,s,t){},20:function(e,s,t){},21:function(e,s,t){},45:function(e,s,t){},46:function(e,s,t){},47:function(e,s,t){},48:function(e,s,t){"use strict";t.r(s);var n=t(0),a=t.n(n),l=t(10),c=t.n(l),i=(t(18),t(19),t(5)),o=(t(20),t(12)),r=(t(21),t(1)),d=function(e){return Object(r.jsx)("div",{className:"DownloadButton",children:Object(r.jsx)("iframe",{id:"download-buttons",src:"https://api.vevioz.com/@api/button/".concat(e.type,"/").concat(e.id),scrolling:"no"})})},u=t(13),b=t(11),h=t.n(b),C=(t(45),function(e){return Object(r.jsx)("div",{className:"VideoPreviewer",children:Object(r.jsx)("div",{className:"video-container",children:Object(r.jsx)(h.a,{width:590,height:340,url:e.url})})})}),j=t(4),V=t.n(j);var p=function(){var e=Object(n.useState)(""),s=Object(i.a)(e,2),t=s[0],a=s[1],l=Object(n.useState)(""),c=Object(i.a)(l,2),b=c[0],h=c[1],j=Object(n.useState)(""),p=Object(i.a)(j,2),f=p[0],k=p[1],I=Object(n.useState)("mp3"),E=Object(i.a)(I,2),W=E[0],w=E[1],F=Object(n.useState)(!1),x=Object(i.a)(F,2),A=x[0],Z=x[1];return Object(n.useEffect)((function(){Z(!1);var e=document.getElementById("link-input");if(t.includes("https://www.youtube.com/watch?v=")){V()(e).removeClass("invalid-link"),V()(e).removeClass("regular-link"),V()(e).addClass("valid-link");var s=t.replace("https://www.youtube.com/watch?v=","");""===s&&s.includes(" ")||(h(s),console.log(s))}else""===t||t.includes("https://www.youtube.com/watch?v=")?""===t&&(V()(e).removeClass("invalid-link"),V()(e).removeClass("valid-link"),V()(e).addClass("regular-link"),k(""),h("")):(V()(e).removeClass("regular-link"),V()(e).removeClass("valid-link"),V()(e).addClass("invalid-link"),k(""),h(""),console.log("invalid"))}),[t]),Object(r.jsx)("div",{className:"Body",children:Object(r.jsxs)("div",{className:"body-container",children:[Object(r.jsxs)("form",{className:"input-form",onSubmit:function(e){return e.preventDefault()},children:[Object(r.jsx)("input",{value:t,onChange:function(e){return a(e.target.value)},type:"text",id:"link-input",placeholder:"Paste valid YouTube link here..."}),Object(r.jsx)("a",{id:"input-submit",onClick:function(e){""!==b?(console.log(A),k(b),Z(!0)):console.log("no video id")},children:Object(r.jsx)(o.a,{id:"download-logo"})}),Object(r.jsx)("div",{id:"type-selector",children:Object(r.jsx)(u.a,{fontSize:40,onChange:function(e){console.log(e),w(e)},options:[{label:"Audio",value:"mp3",selectedBackgroundColor:"#ffd700",selectedFontColor:"#005bbc"},{label:"Video",value:"videos",selectedBackgroundColor:"#ffd700",selectedFontColor:"#005bbc"}],backgroundColor:"#005bbc",fontColor:"white",optionBorderRadius:6,wrapperBorderRadius:6})})]}),A?Object(r.jsx)(C,{url:t}):null,Object(r.jsx)("div",{className:"downloadButton",children:A?Object(r.jsx)(d,{id:f,type:W}):null})]})})},f=(t(46),function(){return Object(r.jsx)("div",{className:"Navbar",children:Object(r.jsxs)("div",{className:"header-container",children:[Object(r.jsx)("img",{id:"header-brand",src:"data:image/png;base64,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"}),Object(r.jsxs)("div",{className:"header-menu",children:[Object(r.jsx)("a",{className:"header-button",id:"home",children:"Home"}),Object(r.jsx)("a",{className:"header-button",id:"faq",children:"FAQ"}),Object(r.jsx)("a",{className:"header-button",id:"contact",children:"Contact"})]})]})})}),k=(t(47),function(){return Object(r.jsx)("div",{className:"Footer",children:Object(r.jsx)("div",{className:"footer-container",children:Object(r.jsxs)("div",{className:"footer-menu",children:[Object(r.jsx)("a",{className:"footer-link",children:"Link 1"}),Object(r.jsx)("a",{className:"footer-link",children:"Link 2"}),Object(r.jsx)("a",{className:"footer-link",children:"Link 3"})]})})})});var I=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(f,{}),Object(r.jsx)(p,{}),Object(r.jsx)(k,{})]})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,49)).then((function(s){var t=s.getCLS,n=s.getFID,a=s.getFCP,l=s.getLCP,c=s.getTTFB;t(e),n(e),a(e),l(e),c(e)}))};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(I,{})}),document.getElementById("root")),E()}},[[48,1,2]]]);
//# sourceMappingURL=main.f2f83afd.chunk.js.map