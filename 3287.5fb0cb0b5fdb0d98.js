(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3287],{63287:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var a=t(81333),o=t(32351),i=t(2784),c=function(e,n){var t=(0,i.useState)(void 0),a=t[0],o=t[1];return(0,i.useEffect)(function(){try{var t=window.localStorage.getItem(e);o(t?JSON.parse(t):n)}catch(e){console.log(e)}},[n,e]),(0,i.useEffect)(function(){if(void 0!==a)try{window.localStorage.setItem(e,"string"==typeof a?a:JSON.stringify(a))}catch(e){console.log(e)}},[e,a]),[a,o]},l=t(41085),r=t(95235),s=t(72779),d=t.n(s),p=t(79692),u=t(61837),f=t(7896),v=t(76854),m=t(59740),g=t(6277),A=t(60364),z=t(15459),P=t(66049),h=t(24514),T=t(54736),E=t(85974),N=t(97580),O=(0,t(59600).Z)(i.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");function x(e,n){var t;return null==e?e:Number((Math.round(e/n)*n).toFixed((t=n.toString().split(".")[1])?t.length:0))}function F(e){e.value;var n=(0,m.Z)(e,["value"]);return i.createElement("span",n)}var H=i.createElement(O,{fontSize:"inherit"});function J(e){return"".concat(e," Star").concat(1!==e?"s":"")}var b=i.forwardRef(function(e,n){var t=e.classes,a=e.className,o=e.defaultValue,c=e.disabled,l=void 0!==c&&c,r=e.emptyIcon,s=e.emptyLabelText,d=e.getLabelText,p=void 0===d?J:d,u=e.icon,z=void 0===u?H:u,O=e.IconContainerComponent,b=void 0===O?F:O,U=e.max,y=void 0===U?5:U,R=e.name,k=e.onChange,C=e.onChangeActive,X=e.onMouseLeave,M=e.onMouseMove,q=e.precision,S=void 0===q?1:q,Z=e.readOnly,B=void 0!==Z&&Z,D=e.size,Q=void 0===D?"medium":D,Y=e.value,j=(0,m.Z)(e,["classes","className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"]),K=(0,P.Z)(R),w=(0,h.Z)({controlled:Y,default:void 0===o?null:o,name:"Rating"}),I=(0,v.Z)(w,2),V=I[0],G=I[1],W=x(V,S),L=(0,A.Z)(),_=i.useState({hover:-1,focus:-1}),$=_[0],ee=$.hover,en=$.focus,et=_[1],ea=W;-1!==ee&&(ea=ee),-1!==en&&(ea=en);var eo=(0,T.Z)(),ei=eo.isFocusVisible,ec=eo.onBlurVisible,el=eo.ref,er=i.useState(!1),es=er[0],ed=er[1],ep=i.useRef(),eu=(0,E.Z)(el,ep),ef=(0,E.Z)(eu,n),ev=function(e){var n=parseFloat(e.target.value);G(n),k&&k(e,n)},em=function(e){(0!==e.clientX||0!==e.clientY)&&(et({hover:-1,focus:-1}),G(null),k&&parseFloat(e.target.value)===W&&k(e,null))},eg=function(e){ei(e)&&ed(!0);var n=parseFloat(e.target.value);et(function(e){return{hover:e.hover,focus:n}}),C&&en!==n&&C(e,n)},eA=function(e){-1===ee&&(!1!==es&&(ed(!1),ec()),et(function(e){return{hover:e.hover,focus:-1}}),C&&-1!==en&&C(e,-1))},ez=function(e,n){var a="".concat(K,"-").concat(String(e.value).replace(".","-")),o=i.createElement(b,{value:e.value,className:(0,g.Z)(t.icon,e.filled?t.iconFilled:t.iconEmpty,e.hover&&t.iconHover,e.focus&&t.iconFocus,e.active&&t.iconActive)},r&&!e.filled?r:z);return B?i.createElement("span",(0,f.Z)({key:e.value},n),o):i.createElement(i.Fragment,{key:e.value},i.createElement("label",(0,f.Z)({className:t.label,htmlFor:a},n),o,i.createElement("span",{className:t.visuallyhidden},p(e.value))),i.createElement("input",{onFocus:eg,onBlur:eA,onChange:ev,onClick:em,disabled:l,value:e.value,id:a,type:"radio",name:K,checked:e.checked,className:t.visuallyhidden}))};return i.createElement("span",(0,f.Z)({ref:ef,onMouseMove:function(e){M&&M(e);var n,t,a=ep.current,o=a.getBoundingClientRect(),i=o.right,c=o.left,l=a.firstChild.getBoundingClientRect().width;t="rtl"===L.direction?(i-e.clientX)/(l*y):(e.clientX-c)/(l*y);var r=x(y*t+S/2,S);r=(n=r)<S?S:n>y?y:n,et(function(e){return e.hover===r&&e.focus===r?e:{hover:r,focus:r}}),ed(!1),C&&ee!==r&&C(e,r)},onMouseLeave:function(e){X&&X(e),et({hover:-1,focus:-1}),C&&-1!==ee&&C(e,-1)},className:(0,g.Z)(t.root,a,"medium"!==Q&&t["size".concat((0,N.Z)(Q))],l&&t.disabled,es&&t.focusVisible,B&&t.readOnly),role:B?"img":null,"aria-label":B?p(ea):null},j),Array.from(Array(y)).map(function(e,n){var a=n+1;if(S<1){var o=Array.from(Array(1/S));return i.createElement("span",{key:a,className:(0,g.Z)(t.decimal,a===Math.ceil(ea)&&(-1!==ee||-1!==en)&&t.iconActive)},o.map(function(e,n){var t=x(a-1+(n+1)*S,S);return ez({value:t,filled:t<=ea,hover:t<=ee,focus:t<=en,checked:t===W},{style:o.length-1===n?{}:{width:t===ea?"".concat((n+1)*S*100,"%"):"0%",overflow:"hidden",zIndex:1,position:"absolute"}})}))}return ez({value:a,active:a===ea&&(-1!==ee||-1!==en),filled:a<=ea,hover:a<=ee,focus:a<=en,checked:a===W})}),!B&&!l&&null==W&&i.createElement(i.Fragment,null,i.createElement("input",{value:"",id:"".concat(K,"-empty"),type:"radio",name:K,defaultChecked:!0,className:t.visuallyhidden}),i.createElement("label",{className:t.pristine,htmlFor:"".concat(K,"-empty")},i.createElement("span",{className:t.visuallyhidden},void 0===s?"Empty":s))))}),U=(0,z.Z)(function(e){return{root:{display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#ffb400",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent","&$disabled":{opacity:.5,pointerEvents:"none"},"&$focusVisible $iconActive":{outline:"1px solid #999"}},sizeSmall:{fontSize:e.typography.pxToRem(18)},sizeLarge:{fontSize:e.typography.pxToRem(30)},readOnly:{pointerEvents:"none"},disabled:{},focusVisible:{},visuallyhidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,color:"#000",overflow:"hidden",padding:0,position:"absolute",top:20,width:1},pristine:{"input:focus + &":{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}},label:{cursor:"inherit"},icon:{display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},iconEmpty:{color:e.palette.action.disabled},iconFilled:{},iconHover:{},iconFocus:{},iconActive:{transform:"scale(1.2)"},decimal:{position:"relative"}}},{name:"MuiRating"})(b),y=t(87685),R=t(10933),k=t(20803),C=t(36475),X=t(78362),M=t(82677),q=t.n(M),S=t(79016),Z=t.n(S),B=t(44766),D=t.n(B),Q=t(52322),Y=(0,p.Z)(function(e){var n=e.breakpoints.down("sm");return{smartAppBanner:(0,r.Z)({display:"none",position:"relative",zIndex:1e3},n,{display:"block"}),buttonWrapper:{position:"fixed",bottom:e.spacing(0),left:0,width:"100%",textAlign:"center",backgroundColor:R.BRAND},logo:{maxWidth:56,display:"flex",alignItems:"center",color:"transparent",marginLeft:e.spacing(3),position:"relative"},appIcon:{width:"100%",boxShadow:"0 0 1rem 0 rgba(0, 0, 0, 0.15);",borderRadius:"20%"},stars:{color:R.WHITE,marginRight:e.spacing(2.5)},container:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:"90px"},center:{margin:e.spacing(0,3.5),display:"flex",flexDirection:"column",alignItems:"start",color:R.WHITE},rating:{display:"flex",flexDirection:"row",alignItems:"center"},downloads:{marginTop:e.spacing(.5)},downloadIcon:{position:"absolute",right:-5,bottom:-5},closeButton:{color:R.WHITE,padding:0,margin:e.spacing(0,3)},closeButtonIcon:{fontSize:20}}},{_uuid:"94f32b27"}),j=function(e){switch(e){case"pro":return{src:Z(),alt:"Kraken Pro Logo"};case"wallet":return{src:D(),alt:"Kraken Wallet Logo"};default:return{src:q(),alt:"Kraken App Logo"}}},K=function(e){var n=e.appType,t=e.title,a=e.ctaTitle,o=e.ctaUrl,c=e.ctaEvent,l=e.starRating,r=e.reviewCount,s=e.onClose,p=Y(),f=(0,k.h)();(0,i.useEffect)(function(){return f.moveUpWhenThisComponentIsRendered()},[f,f.moveUpWhenThisComponentIsRendered]);var v=(0,Q.jsx)(X.f,{to:o,text:a,tone:"inverted",emphasis:"high",size:"sm",event:c}),m=j((void 0===n?"consumer":n).toLowerCase());return(0,Q.jsx)("div",{className:p.smartAppBanner,children:(0,Q.jsx)("div",{className:p.buttonWrapper,children:(0,Q.jsxs)("div",{className:p.container,children:[(0,Q.jsx)("div",{className:d()(p.logo),children:(0,Q.jsx)("img",{className:p.appIcon,src:m.src,alt:m.alt})}),(0,Q.jsxs)("div",{className:p.center,children:[(0,Q.jsx)("div",{className:"title",children:(0,Q.jsx)(C.Z,{as:"div",type:"heading5",textAlign:"center",children:t})}),(0,Q.jsxs)("div",{className:p.rating,children:[l&&(0,Q.jsx)(U,{readOnly:!0,defaultValue:l,className:p.stars,size:"small"}),r]})]}),v,(0,Q.jsx)(u.Z,{"aria-label":"close",className:p.closeButton,onClick:s,size:"small",children:(0,Q.jsx)(y.Z,{className:p.closeButtonIcon})})]})})})},w=function(e){var n=e.data,t=(0,o.Z)().t,i=!(0,l.Z)("noappbanner"),r=c("show_banner",!0),s=(0,a.Z)(r,2),d=s[0],p=s[1],u=n.field_app_banner_icon,f=n.field_app_banner_cta;return i&&d&&f&&(0,Q.jsx)(K,{onClose:function(){return p(!1)},title:t("field_app_banner_title"),ctaTitle:t("field_app_banner_cta][title"),ctaUrl:f.url,ctaEvent:n.field_cta_event,appType:null==u?void 0:u.name,reviewCount:t("field_app_banner_review_count"),starRating:n.field_app_banner_star_rating})}},41085:function(e,n,t){"use strict";function a(e){return new URLSearchParams(window.location.search).get(e)}t.d(n,{Z:function(){return a}})},79016:function(e){e.exports="data:image/png;base64,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"},82677:function(e){e.exports="data:image/png;base64,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"},44766:function(e){e.exports="/_next/static/images/kraken-wallet-211214b3feca903a374eb833d822d7db.png"}}]);