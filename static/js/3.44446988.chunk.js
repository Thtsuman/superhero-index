(this["webpackJsonpsuperhero-react-v2"]=this["webpackJsonpsuperhero-react-v2"]||[]).push([[3],{78:function(e,n,t){"use strict";t.r(n);var i=t(9),c=t(19),s=t(0),a=t(24),l=t(7),r=t(47),o=t(20);var d,j,b,u,x,v,m,h,O,p=function(e,n){Object(s.useEffect)((function(){var t=function(t){e.current&&!e.current.contains(t.target)&&n(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),function(){document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[e,n])},g=t(2),f=function(){var e=Object(s.useState)(!1),n=Object(c.a)(e,2),t=n[0],i=n[1],l=Object(s.useState)(""),r=Object(c.a)(l,2),d=r[0],j=r[1],b=Object(s.useState)([]),u=Object(c.a)(b,2),x=u[0],v=u[1],m=Object(s.useState)(!1),h=Object(c.a)(m,2),O=h[0],f=h[1],E=Object(s.useState)(!1),F=Object(c.a)(E,2),z=F[0],P=F[1],I=Object(a.b)(),R=Object(a.c)((function(e){var n;return null===(n=e.hero)||void 0===n?void 0:n.searchList})),H=Object(s.useRef)(null);p(H,(function(){return B(!1)})),Object(s.useEffect)((function(){R.length>1||P(!0),v(R),f(!1)}),[R]);var B=function(){i(!1),j(""),P(!1),I(Object(o.b)())};return Object(g.jsx)(N,{children:t?Object(g.jsxs)(w,{ref:H,className:"glassmorphism-wrapper",children:[Object(g.jsx)(k,{onClick:B,className:"bx bx-x"}),Object(g.jsx)(y,{value:d,onChange:function(e){var n=e.target.value;f(!0),P(!1),(null===n||void 0===n?void 0:n.length)<1?(j([]),f(!0)):I(Object(o.f)(n)),j(n)},placeholder:"Search by name, publisher",type:"text"}),Object(g.jsxs)(S,{className:"glassmorphism-wrapper",children:[O?Object(g.jsx)("div",{style:{textAlign:"center",padding:"10px"},children:Object(g.jsx)("i",{className:"bx bx-glasses bx-burst"})}):Object(g.jsx)(g.Fragment,{children:x.length<1&&z?Object(g.jsx)("div",{style:{textAlign:"center",padding:"10px"},children:Object(g.jsxs)("div",{className:"",onClick:function(){window.open("https://www.google.com/search?q=".concat(d,"-hero"),"_blank")},children:[Object(g.jsx)("div",{className:"text-muted",children:"No results found"}),Object(g.jsx)("div",{className:"text-muted",children:"Wanna search on google"})]})}):Object(g.jsx)(g.Fragment,{})}),null===x||void 0===x?void 0:x.map((function(e,n){return Object(g.jsxs)(A,{onClick:function(){return n=e.id,I(Object(o.j)(!0)),I(Object(o.c)(n)),void B();var n},className:"d-flex align-items-center justify-content-between",children:[Object(g.jsx)("div",{className:"",children:null===e||void 0===e?void 0:e.name}),Object(g.jsxs)("div",{className:"d-flex align-items-center",children:[Object(g.jsx)("div",{className:"text-muted",children:"see details"}),Object(g.jsx)("i",{className:"bx bx-chevron-right"})]})]},n)}))]})]}):Object(g.jsx)(C,{children:Object(g.jsx)("div",{onClick:function(){f(!0),i(!0)},className:"icon-wrapper glassmorphism-wrapper",children:Object(g.jsx)(L,{className:"bx bx-search"})})})})},N=l.b.div(d||(d=Object(i.a)(["\n  position: absolute;\n  margin: 10px 10px;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 999;\n"]))),w=l.b.div(j||(j=Object(i.a)(["\n  transition: all 0.15s ease 0s;\n  z-index: 23;\n  position: relative;\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  padding: 3px 7px;\n  margin: 0px auto;\n  border-radius: 8px;\n  color: ",";\n"])),(function(e){return e.theme.colors.lightColor})),y=l.b.input(b||(b=Object(i.a)(["\n  box-shadow: none;\n  outline: none;\n  font-weight: 400;\n  order: 1;\n  color: ",";\n  font-size: 16px;\n  width: 100%;\n  margin: 0px 0px 0px 10px;\n  padding: 5px 0px;\n  border-radius: 2px;\n  border: 0px;\n  display: block;\n  background: transparent;\n\n  ::placeholder {\n    color: ",";\n    opacity: 0.3;\n  }\n"])),(function(e){return e.theme.colors.lightColor}),(function(e){return e.theme.colors.lightColor})),k=l.b.i(u||(u=Object(i.a)([""]))),C=l.b.div(x||(x=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  .icon-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 7px;\n  }\n"]))),L=l.b.i(v||(v=Object(i.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.lightColor})),S=l.b.div(m||(m=Object(i.a)(["\n  position: absolute;\n  padding: 10px;\n  border-radius: 10px;\n  background: ","dd;\n  left: 0;\n  right: 0;\n  width: 100%;\n  top: 40px;\n  z-index: 99999;\n  min-height: 60px;\n  max-height: 300px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  ::-webkit-scrollbar {\n    width: 0; /* Remove scrollbar space */\n    background: transparent; /* Optional: just make scrollbar invisible */\n  }\n  /* Optional: show position indicator in red */\n  ::-webkit-scrollbar-thumb {\n    background: #ff0000;\n  }\n"])),(function(e){return e.theme.colors.accentColor})),A=l.b.div(h||(h=Object(i.a)(["\n  position: relative;\n  color: ",";\n  padding: 7px;\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.colors.lightColor}),(function(e){return e.theme.colors.lightColor})),E=t(15),F=function(e){return Object(g.jsx)(z,Object(E.a)(Object(E.a)({},e),{},{className:"".concat(e.className),children:e.children}))},z=l.b.button(O||(O=Object(i.a)(["\n  margin: 5px 0px;\n  padding: 10px 20px;\n  border-radius: 7px;\n  width: 100%;\n  border: unset;\n  opacity: ",";\n  background-color: ",";\n  color: ",";\n  font-size: 0.8rem;\n\n  box-shadow: 0px 0px 19px 1px rgba(0, 0, 0, 0.57);\n  -webkit-box-shadow: 0px 0px 19px 1px rgba(0, 0, 0, 0.57);\n  -moz-box-shadow: 0px 0px 19px 1px rgba(0, 0, 0, 0.57);\n"])),(function(e){return e.disabled?.3:1}),(function(e){return"secondary"===e.variant?"transparent":e.theme.colors.accentColor}),(function(e){return e.theme.colors.lightColor})),P=t(33),I=t.n(P),R=function(e){var n=e.gender,t=e.isLoading;return Object(g.jsx)("div",{className:"text-capitalize",children:t?Object(g.jsx)(I.a,{height:"30px",width:"30px"}):"MALE"===(null===n||void 0===n?void 0:n.toUpperCase())?Object(g.jsx)("i",{className:"bx bx-male-sign bx-sm",style:{color:"#4F8AFF"}}):Object(g.jsx)("i",{className:"bx bx-female-sign bx-sm",style:{color:"#F99AFF "}})})};function H(e,n){if(null==e)return{};var t,i,c=function(e,n){if(null==e)return{};var t,i,c={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var B,T,q,D,G,J,M,W,_=function(e){var n=e.name,t=e.value,i=e.isLoading,c=e.multiple,s=void 0!==c&&c,a=H(e,["name","value","isLoading","multiple"]);return Object(g.jsxs)("div",Object(E.a)(Object(E.a)({},a),{},{children:[Object(g.jsx)("div",{className:"text-muted",children:n}),i?Object(g.jsx)(g.Fragment,{children:s?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(I.a,{}),Object(g.jsx)(I.a,{}),Object(g.jsx)(I.a,{})]}):Object(g.jsx)(I.a,{})}):Object(g.jsx)(g.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e,n){return Object(g.jsx)("div",{className:"text-capitalize",children:e},n)}))})]}))},U=function(e){var n,t,i=e.connections;return Object(g.jsxs)("div",{className:"my-2",children:[Object(g.jsx)("h6",{style:{textAlign:"end",margin:"5px 0px"},children:"CONNECTION"}),Object(g.jsx)(_,{className:"my-2",name:"Group Affiliation",value:null===i||void 0===i||null===(n=i.groupAffiliation)||void 0===n?void 0:n.split(",")}),Object(g.jsx)(_,{className:"my-2",name:"Relatives",value:null===i||void 0===i||null===(t=i.relatives)||void 0===t?void 0:t.split(",")})]})},K=function(e){var n=e.appearance,t=Object(s.useState)(0),i=Object(c.a)(t,2),a=i[0],l=i[1],r=Object(s.useState)(0),o=Object(c.a)(r,2),d=o[0],j=o[1];return Object(g.jsxs)("div",{className:"my-2",children:[Object(g.jsx)("h6",{style:{textAlign:"end",margin:"5px 0px"},children:"APPEARANCE"}),Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-around",style:{gap:"20px"},children:[Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-between w-50",children:[Object(g.jsx)("div",{className:"text-muted",children:"Race"}),Object(g.jsx)("div",{className:"",children:null===n||void 0===n?void 0:n.race})]}),Object(g.jsxs)("div",{onClick:function(){l(1===a?0:1)},className:"d-flex align-items-center justify-content-between w-50",children:[Object(g.jsx)("div",{className:"text-muted",children:"Height"}),Object(g.jsx)("div",{className:"",children:null===n||void 0===n?void 0:n.height[a]})]})]}),Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-around",style:{gap:"20px"},children:[Object(g.jsxs)("div",{onClick:function(){j(1===d?0:1)},className:"d-flex align-items-center justify-content-between w-50",children:[Object(g.jsx)("div",{className:"text-muted",children:"Weight"}),Object(g.jsx)("div",{className:"",children:null===n||void 0===n?void 0:n.weight[d]})]}),Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-between w-50",children:[Object(g.jsx)("div",{className:"text-muted",children:"Eye Color"}),Object(g.jsx)("div",{className:"",children:null===n||void 0===n?void 0:n.eyeColor})]})]}),Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-start",style:{gap:"20px"},children:[Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-between w-50",children:[Object(g.jsx)("div",{className:"text-muted",children:"Hair Color"}),Object(g.jsx)("div",{className:"",children:null===n||void 0===n?void 0:n.hairColor})]}),Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-between w-50",children:[Object(g.jsx)("div",{className:"text-muted",children:"Gender"}),Object(g.jsx)("div",{className:"",children:null===n||void 0===n?void 0:n.gender})]})]})]})},Q=function(e){var n=e.biography;return Object(g.jsxs)("div",{className:"my-2",children:[Object(g.jsx)("h6",{style:{margin:"5px 0px"},children:"BIO"}),Object(g.jsx)(_,{className:"my-2",name:"Full Name",value:[null===n||void 0===n?void 0:n.fullName]}),Object(g.jsx)(_,{className:"my-2",name:"Alter Egos",value:[null===n||void 0===n?void 0:n.alterEgos]}),Object(g.jsx)(_,{className:"my-2",name:"Place of Birth",value:[null===n||void 0===n?void 0:n.placeOfBirth]}),Object(g.jsx)(_,{className:"my-2",name:"First Appearance",value:[null===n||void 0===n?void 0:n.firstAppearance]}),Object(g.jsx)(_,{className:"my-2",name:"Publisher",value:[null===n||void 0===n?void 0:n.publisher]})]})},V=function(e){var n=e.data;return Object(g.jsxs)("div",{children:[Object(g.jsx)(K,{appearance:null===n||void 0===n?void 0:n.appearance}),Object(g.jsx)(Q,{biography:null===n||void 0===n?void 0:n.biography}),Object(g.jsx)(U,{connections:null===n||void 0===n?void 0:n.connections}),Object(g.jsx)(F,{onClick:function(){var e;window.open("https://www.google.com/search?q=".concat(null===n||void 0===n?void 0:n.name,"-").concat(null===n||void 0===n||null===(e=n.biography)||void 0===e?void 0:e.publisher),"_blank")},variant:"secondary",children:"Learn More"})]})},X=function(e){var n=e.stats,t=e.isLoading,i=Object(g.jsx)(I.a,{width:"30px",height:"20px"});return Object(g.jsxs)("div",{children:[Object(g.jsx)("h6",{style:{textAlign:"end",margin:"5px 0px"},children:"STATS"}),Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-around",style:{gap:"20px"},children:[Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-between w-50",children:[Object(g.jsx)("div",{className:"text-muted",children:"Intelligence"}),Object(g.jsx)("div",{className:"",children:t?i:null===n||void 0===n?void 0:n.intelligence})]}),Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-between w-50",children:[Object(g.jsx)("div",{className:"text-muted",children:"Strength"}),Object(g.jsx)("div",{className:"",children:t?i:null===n||void 0===n?void 0:n.intelligence})]})]}),Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-around",style:{gap:"20px"},children:[Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-between w-50",children:[Object(g.jsx)("div",{className:"text-muted",children:"Speed"}),Object(g.jsx)("div",{className:"",children:t?i:null===n||void 0===n?void 0:n.speed})]}),Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-between w-50",children:[Object(g.jsx)("div",{className:"text-muted",children:"Durability"}),Object(g.jsx)("div",{className:"",children:t?i:null===n||void 0===n?void 0:n.durability})]})]}),Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-around",style:{gap:"20px"},children:[Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-between w-50",children:[Object(g.jsx)("div",{className:"text-muted",children:"Power"}),Object(g.jsx)("div",{className:"",children:t?i:null===n||void 0===n?void 0:n.power})]}),Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-between w-50",children:[Object(g.jsx)("div",{className:"text-muted",children:"Combat"}),Object(g.jsx)("div",{className:"",children:t?i:null===n||void 0===n?void 0:n.combat})]})]})]})},Y=function(e){var n,t,i,a,l,r=e.data,o=e.isLoading,d=Object(s.useState)(!1),j=Object(c.a)(d,2),b=j[0],u=j[1];return Object(g.jsxs)(ee,{className:"container",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(Z,{children:o?Object(g.jsx)(I.a,{}):r.name}),Object(g.jsxs)($,{children:[Object(g.jsx)("div",{className:"my-2",children:Object(g.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(g.jsx)(_,{isLoading:o,name:"Publisher",value:[null===r||void 0===r||null===(n=r.biography)||void 0===n?void 0:n.publisher]}),Object(g.jsxs)("div",{className:"d-flex align-items-end",children:[Object(g.jsx)(_,{isLoading:o,className:"text-right mr-2",name:"Character",value:[null===r||void 0===r||null===(t=r.biography)||void 0===t?void 0:t.alignment]}),Object(g.jsx)("div",{className:"",children:Object(g.jsx)(R,{isLoading:o,gender:null===r||void 0===r||null===(i=r.appearance)||void 0===i?void 0:i.gender})})]})]})}),Object(g.jsx)(X,{isLoading:o,stats:null===r||void 0===r?void 0:r.powerstats}),Object(g.jsx)(_,{isLoading:o,multiple:!0,className:"my-2",name:"Occupation",value:null===r||void 0===r||null===(a=r.work)||void 0===a||null===(l=a.occupation)||void 0===l?void 0:l.split(";")})]}),b?Object(g.jsx)(V,{data:r}):Object(g.jsx)(g.Fragment,{})]}),Object(g.jsx)("div",{className:"d-flex",children:Object(g.jsxs)(F,{disabled:o,onClick:function(){return u(!b)},children:[b?"Hide":"See"," Details"]})})]})},Z=l.b.h1(B||(B=Object(i.a)([""]))),$=l.b.div(T||(T=Object(i.a)(["\n  margin: 15px 0px;\n  width: 100%;\n"]))),ee=l.b.div(q||(q=Object(i.a)(["\n  overflow-y: scroll;\n  overflow-x: hidden;\n  max-height: 100vh;\n\n  ::-webkit-scrollbar {\n    width: 0; /* Remove scrollbar space */\n    background: transparent; /* Optional: just make scrollbar invisible */\n  }\n  /* Optional: show position indicator in red */\n  ::-webkit-scrollbar-thumb {\n    background: #ff0000;\n  }\n"]))),ne=(n.default=function(e){var n,t=Object(a.b)(),i=Object(a.c)((function(e){var n;return null===(n=e.hero)||void 0===n?void 0:n.currentSuperHero})),l=Object(a.c)((function(e){var n;return null===(n=e.hero)||void 0===n?void 0:n.isLoading})),d=Object(s.useState)({}),j=Object(c.a)(d,2),b=j[0],u=j[1];return Object(s.useEffect)((function(){var n,i;t(Object(o.j)(!0));var c=null===(n=e.location)||void 0===n||null===(i=n.state)||void 0===i?void 0:i.id;t(c?Object(o.c)(c):Object(o.d)())}),[]),Object(s.useEffect)((function(){(null===i||void 0===i?void 0:i.id)&&(u(i),t(Object(o.j)(!1)))}),[i]),Object(g.jsxs)(ne,{children:[Object(g.jsx)(f,{}),Object(g.jsx)(ie,{id:"description-wrapper",className:"glassmorphism-wrapper",children:Object(g.jsx)(Y,{isLoading:l,data:b})}),Object(g.jsxs)(te,{children:[Object(g.jsx)(se,{className:"opacity-container"}),Object(g.jsx)(ce,{onError:function(){return r.a.defaultImg},src:l?r.a.defaultImg:(null===b||void 0===b||null===(n=b.images)||void 0===n?void 0:n.md)||r.a.defaultImg,alt:""})]})]})},l.b.div(D||(D=Object(i.a)(["\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  height: 100%;\n"])))),te=l.b.div(G||(G=Object(i.a)(["\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n"]))),ie=l.b.div(J||(J=Object(i.a)(["\n  position: relative;\n  width: 100%;\n  bottom: 0;\n  z-index: 99;\n  transition: opacity 0.3s ease-in-out;\n  // background: var(--light-color);\n  border-radius: 10px;\n  color: ",";\n}\n"])),(function(e){return e.theme.colors.lightColor})),ce=l.b.img(M||(M=Object(i.a)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n"]))),se=l.b.div(W||(W=Object(i.a)(["\n  background: rgb(2, 0, 36);\n  background: linear-gradient(\n    0deg,\n    rgba(2, 0, 36, 1) 31%,\n    rgba(0, 0, 0, 0) 100%\n  );\n"])))}}]);
//# sourceMappingURL=3.44446988.chunk.js.map