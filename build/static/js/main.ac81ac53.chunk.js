(this.webpackJsonptrendsvn=this.webpackJsonptrendsvn||[]).push([[0],{165:function(e,t,a){},166:function(e,t,a){},171:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),s=(a(79),a(2)),o=a.n(s),i=a(4),m=a(5),u=a(9),p={GOOGLE_CLIENT_ID:"650068002981-iivventkbtgnqjfl1cso0vs2upvkkt9t.apps.googleusercontent.com",IMAGE_URL:"https://storage.googleapis.com/duy-bucket/",API_POST:"https://tinanime.com/api/news/",API_AUTH_CALLBACK:"/api/authentication",API_REFRESH_TOKEN:"api/refresh-token",API_POST_TEST:"/api/v1/posts",API_NEWS:"https://tinanime.com/api/news/",API_IMAGE:{LIST:"/api/v1/images"},API_SIZE:{LIST:"/api/v1/sizes"}},d="image/png, image/jpg, image/jpeg",E=3e6,f=a(43),v=a(3),h=a(63),b=a.n(h);a(81);function g(e){return N.apply(this,arguments)}function N(){return(N=Object(i.a)(o.a.mark((function e(t){var a,n,l,r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,n=!1,l=null,r=null,c=t.status,!((s=t.ok)&&c>=200&&c<300)){e.next=10;break}return e.next=9,t.json().catch((function(e){console.log(e),a=!0,l="error"}));case 9:r=e.sent;case 10:if(s||422!==c){e.next=15;break}return n=!0,e.next=14,t.json();case 14:l=e.sent;case 15:return s||404!==c||(a=!0,l=t.statusText),s||401!==c||(a=!0,l="Token Expired, Vui l\xf2ng \u0111\u0103ng nh\u1eadp l\u1ea1i"),s||500!==c||(a=!0,l=t.statusText),e.abrupt("return",{isError:a,isValidate:n,message:l,result:r,statusCode:c});case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:";";return Object.keys(JSON.parse(JSON.stringify(e))).map((function(a){return a+"".concat(t)+e[a]})).join(a)},O=function(e){return"undefined"===e||null===e||""===e};function w(){var e={"Content-Type":"application/json",Accept:"application/json"},t=localStorage.getItem("token");return O(t)||(e.Authorization="Bearer ".concat(JSON.parse(t))),e}var j=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:w()},e.next=3,fetch(t,a);case 3:return n=e.sent,e.abrupt("return",g(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,n,l,r,c,s,i=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:0,n=i.length>2&&void 0!==i[2]?i[2]:10,l=i.length>3&&void 0!==i[3]?i[3]:10,r={method:"GET",headers:w()},c=x(a>0?{page:a}:{limit:n,offset:l},"=","&"),e.next=7,fetch("".concat(t,"?").concat(c),r);case 7:return s=e.sent,e.abrupt("return",g(s));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function k(e){return S.apply(this,arguments)}function S(){return(S=Object(i.a)(o.a.mark((function e(t){var a,n,l,r,c=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:"GET",n=c.length>2?c[2]:void 0,l={method:a,headers:w()},"POST"!==a&&"PUT"!==a||(l.body=JSON.stringify(n)),e.next=6,fetch(t,l);case 6:return r=e.sent,e.abrupt("return",g(r));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t){return I.apply(this,arguments)}function I(){return(I=Object(i.a)(o.a.mark((function e(t,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("".concat(p.API_AUTH_CALLBACK,"/").concat(t),"POST",a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=function(){var e=Object(i.a)(o.a.mark((function e(t,a){var n,l,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={Accept:"application/x-www-form-urlencoded, multipart/form-data"},l=localStorage.getItem("token"),O(l)&&(n.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("token")))),e.next=5,fetch("".concat(t),{method:"POST",headers:n,body:a});case 5:return r=e.sent,e.abrupt("return",g(r));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();function C(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),s=Object(v.a)(c,2),m=s[0],u=s[1],d=Object(n.useState)(!1),E=Object(v.a)(d,2),h=E[0],g=E[1];Object(n.useEffect)((function(){var e=!0;function t(){return(t=Object(i.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(p.API_NEWS,0,10,m);case 2:a=t.sent,e&&(r((function(e){return[].concat(Object(f.a)(e),Object(f.a)(a.result))})),g(!1));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e=!1}}),[m]);var N=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(!0),u(m+8);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},a.map((function(e,t){return l.a.createElement("div",{className:"col-3",key:t},l.a.createElement("div",{className:"item",style:{position:"relative"}},l.a.createElement("div",{className:"item-thumbnail"},l.a.createElement("a",{href:e.slug},l.a.createElement("img",{src:e.thumbnail,alt:e.title}))),l.a.createElement("div",{className:"item-title"},l.a.createElement("a",{href:e.slug},e.title)),l.a.createElement("div",{className:"item-meta"},l.a.createElement("span",{className:"item-view"},e.views," l\u01b0\u1ee3t xem"),l.a.createElement("span",{className:"item-publish-date"},e.published_at)),l.a.createElement("div",{className:"item-desc"},l.a.createElement("p",null,e.description))))}))),l.a.createElement("div",{className:"mb-50"},l.a.createElement("button",{className:"btn-load-more",onClick:N},l.a.createElement("p",null,l.a.createElement("span",{className:"bg"}),l.a.createElement("span",{className:"base"}),l.a.createElement("span",{className:"text"}," ",h?l.a.createElement("img",{className:"spinner",src:b.a,alt:"loading icon"}):"Xem th\xeam"))))))}a(82);var _=a(64),T=a.n(_),L=a(70),P={isAuthenticated:!1,token:null,user:{}},G=l.a.createContext({state:P,dispatch:function(){return null}});function R(e,t){switch(t.type){case"LOGIN":return localStorage.setItem("user",JSON.stringify(t.payload.user)),localStorage.setItem("token",JSON.stringify(t.payload.token)),localStorage.setItem("isAuthenticated","true"),{isAuthenticated:!0,user:t.payload.user,token:t.payload.token};case"LOGOUT":return localStorage.clear(),Object(L.a)({},e,{isAuthenticated:!1,user:{}});default:return e}}var z=a(65);function U(){var e=Object(n.useContext)(G),t=e.state,a=e.dispatch,r=Boolean(localStorage.getItem("isAuthenticated")),c=JSON.parse(localStorage.getItem("user"));function s(){return(s=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q("google",{identity_token:t.accessToken});case 2:n=e.sent,a({type:"LOGIN",payload:n.result});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l.a.createElement("nav",{className:"navbar nav-tick"},l.a.createElement("div",{className:"container"},l.a.createElement("ul",{className:"nav-menu"},l.a.createElement("li",null,l.a.createElement(u.b,{to:"/",className:"item"},"Home")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/form",className:"item"},"Form")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/form-two",className:"item"},"Editor customize")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/form-three",className:"item"},"Editor normal")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/crop-image",className:"item"},"Crop image")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/tin-tuc-anime",className:"item"},"News")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/nhan-vat",className:"item"},"Characters")),t.isAuthenticated||r?l.a.createElement("li",{className:"login"},l.a.createElement("button",{onClick:function(){return a({type:"LOGOUT"})}},l.a.createElement("img",{src:c.profile_url,alt:""}))):l.a.createElement("li",{className:"login"},l.a.createElement(z.GoogleLogin,{clientId:p.GOOGLE_CLIENT_ID,render:function(e){return l.a.createElement("button",{onClick:e.onClick,disabled:e.disabled},l.a.createElement("img",{src:T.a,alt:""}))},onSuccess:function(e){return s.apply(this,arguments)},onFailure:function(e){console.log(e)},className:"loginBtn loginBtn--google",prompt:"select_account"})))))}function H(e){var t=e.children,a=Object(n.useReducer)(R,P),r=Object(v.a)(a,2),c=r[0],s=r[1];return l.a.createElement(G.Provider,{value:{state:c,dispatch:s}},l.a.createElement(U,null),t)}var B=a(13),F=a.n(B);window.jQuery=F.a,window.jquery=F.a,window.$=F.a;var M=a(66),D=a.n(M);a(87),a(88),a(89),a(90),a(91);function J(){return l.a.createElement("div",{className:"container"},l.a.createElement(D.a,{value:"Default value",options:{lang:"ru-RU",height:350,dialogsInBody:!0,toolbar:[["style",["style"]],["font",["bold","underline","clear"]],["fontname",["fontname"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link","picture","video"]],["view",["fullscreen","codeview"]]]},onChange:function(e){console.log("onChange",e)}}))}var V=a(31),W=a.n(V);a(58),a(165);function X(){console.log(111)}var K={toolbar:{container:"#toolbar",handlers:{undo:function(){this.quill.history.undo()},redo:function(){this.quill.history.redo()},images:X,remove:X,aleft:function(){this.quill.format("align","")},aright:function(){this.quill.format("align","right")},acenter:function(){this.quill.format("align","center")},ajustify:function(){this.quill.format("align","justify")}}},history:{delay:500,maxStack:100,userOnly:!0}},Z=function(){return l.a.createElement("div",{id:"toolbar",className:"custom-toolbar"},l.a.createElement("button",{className:"ql-header header-one",value:"1"}),l.a.createElement("button",{className:"ql-header header-two",value:"2"}),l.a.createElement("button",{className:"ql-header header-three",value:"3"}),l.a.createElement("select",{title:"Size",className:"ql-size"},l.a.createElement("option",{value:"10px"},"10px"),l.a.createElement("option",{value:"12px"},"12px"),l.a.createElement("option",{value:"14px",defaultValue:"14px"},"14px"),l.a.createElement("option",{value:"16px"},"16px")),l.a.createElement("button",{className:"ql-images"}),l.a.createElement("button",{className:"ql-video"}),l.a.createElement("button",{className:"ql-link"}),l.a.createElement("button",{className:"ql-remove"}),l.a.createElement("button",{className:"ql-undo"}),l.a.createElement("button",{className:"ql-redo"}),l.a.createElement("button",{className:"ql-bold"}),l.a.createElement("button",{className:"ql-italic"}),l.a.createElement("small",{style:{paddingLeft:"1em",paddingRight:"15px",color:"#999"}},"Octicon"),l.a.createElement("button",{className:"ql-underline"}),l.a.createElement("small",{style:{paddingLeft:"1em",paddingRight:"0",color:"#999"}},"FontAwesome"),l.a.createElement("span",{className:"ql-formats"},l.a.createElement("select",{className:"ql-color"}),l.a.createElement("select",{className:"ql-background"})),l.a.createElement("span",{className:"ql-formats"},l.a.createElement("button",{className:"ql-list ql-ordered",value:"ordered"}),l.a.createElement("button",{className:"ql-list ql-bullet",value:"bullet"}),l.a.createElement("button",{className:"ql-blockquote"})),l.a.createElement("button",{className:"ql-aleft",value:"left"}),l.a.createElement("button",{className:"ql-acenter",value:"center"}),l.a.createElement("button",{className:"ql-aright",value:"right"}),l.a.createElement("button",{className:"ql-ajustify",value:"justify"}),l.a.createElement("span",{className:"ql-formats"},l.a.createElement("button",{className:"ql-script ql-super",value:"super"}),l.a.createElement("button",{className:"ql-script ql-sub",value:"sub"}),l.a.createElement("button",{className:"ql-clean"})))};function Q(){var e=Object(n.useState)(""),t=Object(v.a)(e,1)[0];return l.a.createElement("div",{className:"container"},l.a.createElement(Z,null),l.a.createElement(W.a,{theme:"snow",value:t,onChange:function(e){},modules:K}))}a(166);var $=function(){return l.a.createElement("svg",{viewBox:"0 0 18 18"},l.a.createElement("polygon",{className:"ql-fill ql-stroke",points:"6 10 4 12 2 10 6 10"}),l.a.createElement("path",{className:"ql-stroke",d:"M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"}))},Y=function(){return l.a.createElement("svg",{viewBox:"0 0 18 18"},l.a.createElement("polygon",{className:"ql-fill ql-stroke",points:"12 10 14 12 16 10 12 10"}),l.a.createElement("path",{className:"ql-stroke",d:"M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"}))},ee=function(){return l.a.createElement("svg",{viewBox:"0 0 18 18"}," ",l.a.createElement("rect",{className:"ql-stroke",height:"10",width:"12",x:"3",y:"4"}),l.a.createElement("circle",{className:"ql-fill",cx:"6",cy:"7",r:"1"}),l.a.createElement("polyline",{className:"ql-even ql-fill",points:"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"}))};function te(){this.quill.history.undo()}function ae(){this.quill.history.redo()}var ne=function(){return l.a.createElement("div",{id:"toolbar"},l.a.createElement("span",{className:"ql-formats"},l.a.createElement("select",{className:"ql-font",defaultValue:"arial"},l.a.createElement("option",{value:"arial"},"Arial"),l.a.createElement("option",{value:"comic-sans"},"Comic Sans"),l.a.createElement("option",{value:"courier-new"},"Courier New"),l.a.createElement("option",{value:"georgia"},"Georgia"),l.a.createElement("option",{value:"helvetica"},"Helvetica"),l.a.createElement("option",{value:"lucida"},"Lucida")),l.a.createElement("select",{className:"ql-size",defaultValue:"12px"},l.a.createElement("option",{value:"12px"},"12 px"),l.a.createElement("option",{value:"13px"},"13 px"),l.a.createElement("option",{value:"14px"},"14 px"),l.a.createElement("option",{value:"15px"},"15 px"),l.a.createElement("option",{value:"16px"},"16 px"),l.a.createElement("option",{value:"17px"},"17 px"),l.a.createElement("option",{value:"18px"},"18 px"),l.a.createElement("option",{value:"19px"},"19 px"),l.a.createElement("option",{value:"20px"},"20 px")),l.a.createElement("select",{className:"ql-header",defaultValue:"1"},l.a.createElement("option",{value:"1"},"Heading"),l.a.createElement("option",{value:"2"},"Subheading"),l.a.createElement("option",{value:"3"},"Normal"))),l.a.createElement("span",{className:"ql-formats"},l.a.createElement("button",{className:"ql-bold"}),l.a.createElement("button",{className:"ql-italic"}),l.a.createElement("button",{className:"ql-underline"}),l.a.createElement("button",{className:"ql-strike"})),l.a.createElement("span",{className:"ql-formats"},l.a.createElement("button",{className:"ql-list",value:"ordered"}),l.a.createElement("button",{className:"ql-list",value:"bullet"}),l.a.createElement("button",{className:"ql-indent",value:"-1"}),l.a.createElement("button",{className:"ql-indent",value:"+1"})),l.a.createElement("span",{className:"ql-formats"},l.a.createElement("button",{className:"ql-script",value:"super"}),l.a.createElement("button",{className:"ql-script",value:"sub"}),l.a.createElement("button",{className:"ql-blockquote"}),l.a.createElement("button",{className:"ql-direction"})),l.a.createElement("span",{className:"ql-formats"},l.a.createElement("select",{className:"ql-color"}),l.a.createElement("select",{className:"ql-background"})),l.a.createElement("span",{className:"ql-formats"},l.a.createElement("button",{className:"ql-link"}),l.a.createElement("button",{className:"ql-images"},l.a.createElement(ee,null)),l.a.createElement("button",{className:"ql-video"})),l.a.createElement("span",{className:"ql-formats"},l.a.createElement("button",{className:"ql-formula"}),l.a.createElement("button",{className:"ql-code-block"}),l.a.createElement("button",{className:"ql-clean"})),l.a.createElement("span",{className:"ql-formats"},l.a.createElement("button",{className:"ql-undo"},l.a.createElement($,null)),l.a.createElement("button",{className:"ql-redo"},l.a.createElement(Y,null))))},le=a(14);a(171);function re(e){var t=e.totalItem,a=e.col,n=e.clsName,r=function(e,t){return l.a.createElement("div",{className:"col-".concat(t," item "),key:e},l.a.createElement("div",{className:"timeline-wrapper"},l.a.createElement("div",{className:"timeline-item"},l.a.createElement("div",{className:"animated-background"},l.a.createElement("div",{className:"background-masker header-image"}),l.a.createElement("div",{className:"background-masker content-top"}),l.a.createElement("div",{className:"background-masker content-second-line"}),l.a.createElement("div",{className:"background-masker content-second-end"}),l.a.createElement("div",{className:"background-masker content-third-line"}),l.a.createElement("div",{className:"background-masker desc-first-line"})))))};return l.a.createElement("div",{className:null!==n&&void 0!==n?n:"row"},function(){if("undefined"!==typeof t){for(var e=0,n=[];e<t;e++)n.push(r(e,a));return n}}())}var ce=a(190),se=a(18),oe=a(19);function ie(e){var t=e.items,a=e.clsName,n=e.prefixUrl,r=e.onChange;return t.length?l.a.createElement("div",{className:null!==a&&void 0!==a?a:"row"},t.map((function(e,t){return l.a.createElement("div",{className:"col-md-4",key:t},l.a.createElement("div",{className:"single-item inner-box"},l.a.createElement("figure",{className:"image-box"},l.a.createElement("picture",null,l.a.createElement("img",{className:"img-fluid",src:"".concat(n).concat(e.media_url),alt:""})),l.a.createElement("div",{className:"time"},l.a.createElement("span",null,"Ng\xe0y t\u1ea1o: "),l.a.createElement("span",null,e.created_at)),l.a.createElement("div",{className:"overlay-box"},l.a.createElement("div",{className:"overlay-inner"},l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"handle-action",onClick:function(t){return function(e,t){r&&r(t,e)}(t,e)}},l.a.createElement(se.a,{icon:oe.c,size:"lg",className:""})))))),l.a.createElement("div",{className:"lower-content"},l.a.createElement("div",{className:"text"},e.media_title))))}))):l.a.createElement("div",{className:a})}var me=a(32),ue=a(69),pe=a.n(ue);a(61),a(62);function de(e){var t,a,r=e.size,c=Object(n.useState)(window.innerHeight-230),s=Object(v.a)(c,1)[0],m=Object(n.useRef)(null),u=Object(n.useRef)(null),f=Object(n.useState)(!1),h=Object(v.a)(f,1)[0],b=Object(n.useState)({aspect:16/9,x:0,y:0,unit:"%",width:50,height:50}),g=Object(v.a)(b,2),N=g[0],x=g[1],O=Object(n.useState)({}),w=Object(v.a)(O,2),j=w[0],y=w[1],k=Object(n.useState)(r),S=Object(v.a)(k,1)[0],q=Object(n.useState)([]),I=Object(v.a)(q,2),C=I[0],_=I[1],T=Object(n.useState)([]),L=Object(v.a)(T,2),P=L[0],G=L[1],R=Object(n.useState)(!1),z=Object(v.a)(R,2),U=z[0],H=z[1],B=Object(n.useState)(0),F=Object(v.a)(B,1)[0],M=Object(n.useState)(""),D=Object(v.a)(M,2),J=D[0],V=D[1],W=Object(n.useState)([]),X=Object(v.a)(W,2),K=X[0],Z=X[1],Q=Object(n.useState)([]),$=Object(v.a)(Q,2),Y=$[0],ee=$[1],te=Object(n.useState)(""),ae=Object(v.a)(te,2),ne=ae[0],re=ae[1],ce=Object(n.useCallback)((function(e){m.current=e}),[]);function se(e){x(e)}return Object(n.useEffect)((function(){if(j&&u.current&&m.current){var e=m.current,t=u.current,a=j,n=e.naturalWidth/e.width,l=e.naturalHeight/e.height,r=t.getContext("2d");t.width=4*a.width,t.height=4*a.height,r.setTransform(4,0,0,4,0,0),r.imageSmoothingEnabled=!1,r.drawImage(e,a.x*n,a.y*l,a.width*n,a.height*l,0,0,a.width,a.height)}}),[j]),Object(n.useEffect)((function(){if(C.length>0&&S){var e=C[0],t=new FileReader;return t.addEventListener("load",(function(){return re(t.result)})),void t.readAsDataURL(e)}if(C.length>2)return console.log("Upload t\u1ed1i \u0111a 10 file 1 l\u1ea7n");var a=new FormData;function n(){return(n=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H(!0),e.next=3,A(p.API_IMAGE.LIST,a);case 3:if(t=e.sent,H(!1),!t.isError){e.next=7;break}return e.abrupt("return",V(t.message));case 7:if(!t.isValidate){e.next=9;break}return e.abrupt("return",Z(t.message));case 9:ee(t.result.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}C.map((function(e){return e.media_size=1,e.medial_title="aaaaa",a.append("files[]",e)})),a.append("media_size",F),C.length>0&&function(){n.apply(this,arguments)}()}),[C,F,S]),Object(n.useEffect)((function(){var e={aspect:16/9,x:0,y:0,unit:"px",width:null===r||void 0===r?void 0:r.width,height:null===r||void 0===r?void 0:r.height};void 0!==r&&Object.keys(r).length>0&&x(e)}),[r]),l.a.createElement(l.a.Fragment,null,U?l.a.createElement("div",{style:{width:"100%"}},l.a.createElement("div",{className:"loading"},l.a.createElement("div",{className:"lds-css"},l.a.createElement("div",{style:{width:"100%",height:"100%"},className:"lds-wedges"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null)),l.a.createElement("div",null,l.a.createElement("div",null)),l.a.createElement("div",null,l.a.createElement("div",null)),l.a.createElement("div",null,l.a.createElement("div",null))))))):ne.length?l.a.createElement(pe.a,{className:"custom-css-react-crop",style:{width:"50%",maxHeight:"400px"},src:ne,crop:N,onImageLoaded:ce,onChange:se,onComplete:function(e){return y(e)}}):l.a.createElement(me.a,{onDropAccepted:function(e){return _(e)},onDropRejected:function(e){return G(e)},accept:d,maxSize:E,multiple:h},(function(e){var t=e.getRootProps,a=e.getInputProps;return l.a.createElement("section",{className:"d-flex flex-wrap box-dropzone"},l.a.createElement("div",Object.assign({},t(),{className:"d-flex flex-wrap dropzone",style:{minHeight:"180px"}}),l.a.createElement("input",a()),l.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")))})),N&&l.a.createElement("div",{className:"preview-image-option"},l.a.createElement("div",{className:"option-block"},l.a.createElement("label",null,"X:"),l.a.createElement("span",null,N.x)),l.a.createElement("div",{className:"option-block"},l.a.createElement("label",null,"Y:"),l.a.createElement("span",null,N.y)),l.a.createElement("div",{className:"option-block"},l.a.createElement("label",null,"W:"),l.a.createElement("span",null,Math.round(N.width))),l.a.createElement("div",{className:"option-block"},l.a.createElement("label",null,"H:"),l.a.createElement("span",null,Math.round(N.height))),l.a.createElement("div",{className:"option-block"},l.a.createElement("label",null,"U:"),l.a.createElement("span",null,N.unit))),l.a.createElement("div",{className:"preview-image"},K.length>0&&l.a.createElement("div",{className:"preview-header"},K),J&&l.a.createElement("div",{className:"preview-header"},J),P.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"preview-header"},"Files upload error"),l.a.createElement("div",{className:"errors"},l.a.createElement(le.a,{noScrollX:!0,style:{height:s-350}},P.map((function(e,t){return l.a.createElement("div",{className:"d-flex flex-wrap error-line",key:t},l.a.createElement("div",{className:"col-7"},l.a.createElement("span",{className:"error"},e.file.name)),l.a.createElement("div",{className:"col-5"},e.errors.map((function(e){return l.a.createElement("span",{className:"error"},e.message)}))))}))))),Y.length>0&&l.a.createElement("div",{className:"box"},l.a.createElement(le.a,{noScrollX:!0,style:{height:s-300}},l.a.createElement(ie,{items:Y,prefixUrl:p.IMAGE_URL,clsName:"d-flex flex-wrap wrap-list"}))),u&&l.a.createElement("div",{className:"preview-header"},l.a.createElement("div",{className:"preview-canvas"},l.a.createElement(le.a,{noScrollX:!0,style:{height:s-450},className:"scroll-canvas"},l.a.createElement("canvas",{ref:u,style:{width:null!==(t=null===j||void 0===j?void 0:j.width)&&void 0!==t?t:0,height:null!==(a=null===j||void 0===j?void 0:j.height)&&void 0!==a?a:0}}))))))}function Ee(){var e=Object(n.useContext)(G).dispatch,t=Object(n.useState)(window.innerHeight-230),a=Object(v.a)(t,1)[0],r=Object(n.useState)(!1),c=Object(v.a)(r,1)[0],s=Object(n.useState)([]),m=Object(v.a)(s,2),u=m[0],f=m[1],h=Object(n.useState)([]),b=Object(v.a)(h,2),g=b[0],N=b[1],x=Object(n.useState)(!1),O=Object(v.a)(x,2),w=O[0],j=O[1],y=Object(n.useState)(""),k=Object(v.a)(y,2),S=k[0],q=k[1],I=Object(n.useState)([]),C=Object(v.a)(I,2),_=C[0],T=C[1],L=Object(n.useState)([]),P=Object(v.a)(L,2),R=P[0],z=P[1];return Object(n.useEffect)((function(){if(u.length>2)return console.log("Upload t\u1ed1i \u0111a 10 file 1 l\u1ea7n");var t=new FormData;function a(){return(a=Object(i.a)(o.a.mark((function a(){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return j(!0),a.next=3,A(p.API_IMAGE.LIST,t);case 3:if(n=a.sent,j(!1),!n.isError){a.next=8;break}return 401===n.statusCode&&e({type:"LOGOUT"}),a.abrupt("return",q(n.message));case 8:if(!n.isValidate){a.next=10;break}return a.abrupt("return",T(n.message));case 10:z(n.result.data);case 11:case"end":return a.stop()}}),a)})))).apply(this,arguments)}u.map((function(e){return t.append("files[]",e)})),u.length>0&&function(){a.apply(this,arguments)}()}),[u]),l.a.createElement(l.a.Fragment,null,w?l.a.createElement("div",{style:{width:"100%"}},l.a.createElement("div",{className:"loading"},l.a.createElement("div",{className:"lds-css"},l.a.createElement("div",{style:{width:"100%",height:"100%"},className:"lds-wedges"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null)),l.a.createElement("div",null,l.a.createElement("div",null)),l.a.createElement("div",null,l.a.createElement("div",null)),l.a.createElement("div",null,l.a.createElement("div",null))))))):l.a.createElement(me.a,{onDropAccepted:function(e){return f(e)},onDropRejected:function(e){return N(e)},accept:d,maxSize:E,multiple:c},(function(e){var t=e.getRootProps,a=e.getInputProps;return l.a.createElement("section",{className:"d-flex flex-wrap box-dropzone"},l.a.createElement("div",Object.assign({},t(),{className:"d-flex flex-wrap dropzone",style:{minHeight:"180px"}}),l.a.createElement("input",a()),l.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")))})),l.a.createElement("div",{className:"preview-image"},_.length>0&&l.a.createElement("div",{className:"preview-header"},_),S&&l.a.createElement("div",{className:"preview-header"},S),g.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"preview-header"},"Files upload error"),l.a.createElement("div",{className:"errors"},l.a.createElement(le.a,{noScrollX:!0,style:{height:a-350}},g.map((function(e,t){return l.a.createElement("div",{className:"d-flex flex-wrap error-line",key:t},l.a.createElement("div",{className:"col-7"},l.a.createElement("span",{className:"error"},e.file.name)),l.a.createElement("div",{className:"col-5"},e.errors.map((function(e){return l.a.createElement("span",{className:"error"},e.message)}))))}))))),R.length>0&&l.a.createElement("div",{className:"box"},l.a.createElement(le.a,{noScrollX:!0,style:{height:a-300}},l.a.createElement(ie,{items:R,prefixUrl:p.IMAGE_URL,clsName:"d-flex flex-wrap wrap-list"})))))}function fe(e){var t=e.onChange,a=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),c=Object(v.a)(r,2),s=c[0],m=c[1];return Object(n.useEffect)((function(){var e=!0;function t(){return(t=Object(i.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(p.API_SIZE.LIST);case 2:if(!(a=t.sent).isError){t.next=5;break}return t.abrupt("return",m(a.message));case 5:e&&l(a.result.data);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e=!1}}),[]),[a,l,s]}(),r=Object(v.a)(a,3),c=r[0],s=r[1],m=r[2];return l.a.createElement("div",{className:"d-flex flex-wrap size"},m&&l.a.createElement("div",null,m),c.map((function(e,a){return l.a.createElement("span",{key:a,onClick:function(a){return function(e,a){var n=c.filter((function(e){return e.id===a.id?e.selected=!0:e.selected=!1,e}));s(n),t&&t(a,e)}(a,e)},className:"item ".concat(!0===e.selected?"active":"")},e.title)})))}function ve(){var e=Object(n.useState)(window.innerHeight-300),t=Object(v.a)(e,1)[0],a=Object(n.useState)(""),r=Object(v.a)(a,2),c=r[0],s=r[1],m=Object(n.useState)(!1),u=Object(v.a)(m,2),d=u[0],E=u[1],f=Object(n.useState)(1),h=Object(v.a)(f,2),b=h[0],g=h[1],N=function(e,t){var a=Object(n.useState)([]),l=Object(v.a)(a,2),r=l[0],c=l[1],s=Object(n.useState)(!0),m=Object(v.a)(s,2),u=m[0],d=m[1],E=Object(n.useState)(1),f=Object(v.a)(E,2),h=f[0],b=f[1],g=Object(n.useState)(0),N=Object(v.a)(g,2),x=N[0],O=N[1];return Object(n.useEffect)((function(){function a(){return(a=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,y(p.API_IMAGE.LIST,x);case 3:t=e.sent,c(t.result.data),b(t.result.meta.total_pages),d(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e&&1===t&&function(){a.apply(this,arguments)}()}),[x,e,t]),[r,u,h,x,O]}(d,b),x=Object(v.a)(N,5),O=x[0],w=x[1],j=x[2],k=x[3],S=x[4],q=Object(n.useState)({}),I=Object(v.a)(q,2),A=I[0],C=I[1],_=Object(n.useRef)(null),T={toolbar:{container:"#toolbar",handlers:{undo:te,redo:ae,images:function(){return L.apply(this,arguments)}}},history:{delay:500,maxStack:100,userOnly:!0}};function L(){return(L=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(!0),_&&_.current&&(t=_.current,a=t.getEditor(),console.log(a.getSelection()));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){if(console.log(e),_&&_.current){var t=_.current.getEditor();console.log(t.getSelection()),t.insertEmbed(0,"image","https://storage.googleapis.com/duy-bucket/uploads-test/xBahjUcf1zJ9CQEMLENIgLiCNP5neqnxaVTArZBw.jpeg")}}function G(e){e!==b&&g(e)}return l.a.createElement("div",{className:"container"},l.a.createElement(ne,null),l.a.createElement(W.a,{ref:_,theme:"snow",value:c,onChange:function(e,t,a,n){s(n.getHTML())},placeholder:"Write something awesome...",modules:T}),d&&l.a.createElement("div",{className:"image-manager",style:{top:200}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"box"},l.a.createElement("header",{className:"header"},l.a.createElement("button",{className:"btn btn-list ".concat(1===b?"active":""),onClick:function(){return G(1)}},l.a.createElement(se.a,{icon:oe.d,size:"lg"})),l.a.createElement("button",{className:"btn btn-upload ".concat(2===b?"active":""),onClick:function(){return G(2)}},l.a.createElement(se.a,{icon:oe.a})),l.a.createElement("button",{className:"btn btn-drop ".concat(3===b?"active":""),onClick:function(){return G(3)}},l.a.createElement(se.a,{icon:oe.b})),l.a.createElement("div",{className:"arrow-action"},l.a.createElement("button",{className:"btn arrow arrow-close",onClick:function(){return E(!1)}}),l.a.createElement("button",{className:"btn arrow arrow-expand"}))),1===b&&l.a.createElement(le.a,{noScrollX:!0,style:{height:t}}," ",w?l.a.createElement(re,{totalItem:9,col:4,clsName:"d-flex flex-wrap wrap-list"}):l.a.createElement(ie,{items:O,onChange:P,prefixUrl:p.IMAGE_URL,clsName:"d-flex flex-wrap wrap-list"})),2===b&&l.a.createElement("div",{className:"image-crop-box",style:{height:t}}," ",l.a.createElement(Ee,null)),3===b&&l.a.createElement("div",{className:"image-crop-box",style:{height:t}},l.a.createElement(fe,{onChange:function(e){C({width:e.width,height:e.height})}}),l.a.createElement(de,{size:A})),l.a.createElement("footer",{className:"footer"},1===b&&l.a.createElement(ce.a,{count:j,page:k,boundaryCount:4,onChange:function(e,t){return S(t)},showFirstButton:!0,showLastButton:!0}))))),l.a.createElement("div",{style:{position:"fixed",top:200,right:100}},l.a.createElement("button",{onClick:function(){if(_&&_.current){var e=_.current.getEditor();console.log(e.getSelection())}}},"SHOW IMAGE")))}function he(){var e=Object(m.f)();return l.a.createElement("div",null,l.a.createElement("h3",null,"No match for ",l.a.createElement("code",null,e.pathname)))}function be(){function e(){return(e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(p.API_POST_TEST,8,0);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(p.API_REFRESH_TOKEN);case 2:(t=e.sent).isError||localStorage.setItem("token",JSON.stringify(t.result.token));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Home page"),l.a.createElement("button",{className:"btn-load-more",onClick:function(){return e.apply(this,arguments)}},l.a.createElement("p",null,l.a.createElement("span",{className:"bg"}),l.a.createElement("span",{className:"base"}),l.a.createElement("span",{className:"text"},"Check Token"))),l.a.createElement("button",{className:"btn-load-more",onClick:function(){return t.apply(this,arguments)}},l.a.createElement("p",null,l.a.createElement("span",{className:"bg"}),l.a.createElement("span",{className:"base"}),l.a.createElement("span",{className:"text"},"Refresh Token"))))}function ge(){return l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Nh\xe2n v\u1eadt"))}function Ne(){return l.a.createElement(u.a,null,l.a.createElement(H,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(be,null)),l.a.createElement(m.a,{exact:!0,path:"/form-one"},l.a.createElement(J,null)),l.a.createElement(m.a,{exact:!0,path:"/form-two"},l.a.createElement(Q,null)),l.a.createElement(m.a,{exact:!0,path:"/form-three"},l.a.createElement(ve,null)),l.a.createElement(m.a,{exact:!0,path:"/tin-tuc-anime"},l.a.createElement(C,null)),l.a.createElement(m.a,{exact:!0,path:"/nhan-vat"},l.a.createElement(ge,null)),l.a.createElement(m.a,null,l.a.createElement(he,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,t,a){},63:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},64:function(e,t,a){e.exports=a.p+"static/media/avatar.688f92e3.svg"},74:function(e,t,a){e.exports=a(175)},79:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){}},[[74,1,2]]]);