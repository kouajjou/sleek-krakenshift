"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3021],{23021:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(95235),a=n(79692),i=n(2784),o=n(38127),l=n(26549);function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var u=n(52322),s=function(t){var e,n=t.animationName,i=t.direction;return(0,a.Z)((e={},(0,r.Z)(e,"@keyframes ".concat(n),{from:{transform:"leftToRight"===i?"translateX(var(--distance-to-the-start))":"translateX(var(--distance-to-the-end))",opacity:1},to:{transform:"leftToRight"===i?"translateX(var(--distance-to-the-end))":"translateX(var(--distance-to-the-start))",opacity:1}}),(0,r.Z)(e,"row",function(t){var e=t.data;return{width:"max-content",overflow:"hidden",display:"flex",flexDirection:"row",flexWrap:"nowrap",columnGap:e.field_column_spacing?e.field_column_spacing:void 0,paddingLeft:Number(e.field_column_spacing)||void 0}}),(0,r.Z)(e,"animatedItem",{animationName:"$".concat(n),animationDuration:"var(--animation-duration)",animationFillMode:"both",animationIterationCount:"infinite",animationTimingFunction:"linear"}),e),{_uuid:"baacefea"})};function d(t){var e=t.data,n=t.rowIndex,r=t.pauseAnimation,a=t.setRowData,d=(0,i.useMemo)(function(){return s({animationName:"scroller_row_animation_".concat(n),direction:e.field_scroll_direction})},[e.field_scroll_direction,n]),f=(0,i.useState)(void 0),m=f[0],p=f[1],v=d({data:e}),y=(0,i.useRef)([]),h=(0,i.useRef)(null),w=e.field_children;return(0,o.Z)(h,function(){var t=h.current;if(t){0===n&&r();var i=function(t){var e=t.row,n=t.cells,r=t.duration,a=t.offset,i=e.getBoundingClientRect().width;e.style.removeProperty("--animation-duration"),e.style.setProperty("--animation-duration","".concat(r,"s"));var o,l=0,u=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}}(t))){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){l=!0,i=t},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw i}}}}(n);try{for(u.s();!(o=u.n()).done;){var s=o.value;if(s){s.style.removeProperty("--distance-to-the-start"),s.style.removeProperty("--distance-to-the-end"),s.style.removeProperty("--element-position"),s.style.removeProperty("animation-delay"),l=s.offsetWidth>l?s.offsetWidth:l;var d=function(t){var e=t.row,n=t.cell,r=t.offset,a=e.getBoundingClientRect(),i=n.getBoundingClientRect(),o=a.x,l=i.x-o+(r||0),c=i.x-o+i.width,u=a.width-c;return{toStart:c,toEnd:u,position:l}}({row:e,cell:s,offset:a});s.style.setProperty("--distance-to-the-start","-".concat(d.toStart,"px")),s.style.setProperty("--distance-to-the-end","".concat(d.toEnd,"px")),s.style.setProperty("--element-position","-".concat(d.position,"px")),s.style.setProperty("animation-delay","".concat(-((i-d.position)/i*r),"s"))}}}catch(t){u.e(t)}finally{u.f()}return{rowWidth:i,maxCellWidth:l}}({row:t,cells:y.current,duration:e.field_animation_duration,offset:e.field_scroller_row_offset});a({rowIndex:n,rowWidth:i.rowWidth,maxRowCellWidth:i.maxCellWidth})}}),(0,i.useEffect)(function(){var t=setTimeout(function(){p(v.animatedItem)},1e3);return function(){return clearTimeout(t)}},[]),(0,u.jsx)("div",{className:v.row,ref:h,children:w.map(function(t,e){return(0,u.jsx)("div",{ref:function(t){return y.current[e]=t},className:m,children:(0,u.jsx)(l.Z,{data:t,skipWrapperDiv:!0})},t._key)})})}var f=(0,a.Z)(function(t){var e;return{scroller:(e={display:"flex",flexDirection:"column",rowGap:function(t){return t.data.field_row_gap||void 0},maxWidth:"100%",alignItems:"flex-start",overflow:"hidden",margin:"0 auto"},(0,r.Z)(e,t.breakpoints.up("md"),{maskImage:"linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)"}),(0,r.Z)(e,".visual-regression & > * > *",{animationPlayState:"paused"}),e),animationPause:{"& > * > *":{animationPlayState:"paused"}}}},{_uuid:"2432a6f6"});function m(t){var e=t.data,n=f({data:e}),r=e.field_children,a=(0,i.useRef)(null),o=(0,i.useRef)(0),l=(0,i.useCallback)(function(){a.current&&a.current.classList.add(n.animationPause)},[n.animationPause]),c=(0,i.useCallback)(function(){a.current&&a.current.classList.remove(n.animationPause)},[n.animationPause]);(0,i.useEffect)(function(){l()},[]);var s=(0,i.useCallback)(function(t){var e=t.rowIndex,n=t.rowWidth,i=t.maxRowCellWidth;0===e&&(o.current=0),o.current<i&&(o.current=i),e===r.length-1&&(a.current&&(a.current.style.width="".concat(n-o.current,"px")),c())},[JSON.stringify(r)]);return(0,u.jsx)("div",{className:n.scroller,ref:a,onMouseEnter:l,onMouseLeave:c,children:null==r?void 0:r.map(function(t,e){return(0,u.jsx)(d,{data:t,rowIndex:e,setRowData:s,pauseAnimation:l},t._key)})})}}}]);