"use strict";(self.webpackChunkimio_smartweb_core_webcomponents=self.webpackChunkimio_smartweb_core_webcomponents||[]).push([[804],{3991:function(e,t,r){r(8709);t.Z=r.p+"assets/location-active-bla.fe8acf1aaf227a942ff7feed87fa2d22.svg"},7518:function(e,t,r){r(8709);t.Z=r.p+"assets/location-bla.1423bcce16ddcb21141430cac1428dc1.svg"},7804:function(e,t,r){r.r(t),r.d(t,{default:function(){return $}});var n=r(8709),a=r(2707),l=r(5110),c=r(804);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var i=function(e){return n.createElement(c.ZP,o({speed:2,viewBox:"0 0 710.04 150",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",className:"skeleton"},e),n.createElement("rect",{className:"cls-1",width:"246",height:"150"}),n.createElement("rect",{className:"cls-1",x:"275.74",width:"225.04",height:"18.87"}),n.createElement("rect",{className:"cls-1",x:"275.74",y:"47.43",width:"434.3",height:"10.19"}),n.createElement("rect",{className:"cls-1",x:"275.74",y:"78.06",width:"434.3",height:"10.19"}))},u=r(7749),s=r(4844),m=r(6489);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function y(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===f(t)?t:String(t)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],c=!0,o=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){o=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(o)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var E=function(e){var t=(0,l.k6)(),a=r(1296),c=h((0,n.useState)(e.activeFilter),2),o=c[0],i=c[1],m=h((0,n.useState)(null),2),f=m[0],v=m[1],g=h((0,n.useState)(null),2),E=g[0],w=g[1],S=h((0,n.useState)(null),2),O=S[0],j=S[1],I=(0,s.Z)({method:"get",url:"",baseURL:e.url,headers:{Accept:"application/json"},params:o}),N=I.response;I.error,I.isLoading,(0,n.useEffect)((function(){if(null!==N){var e=N.topics&&N.topics.map((function(e){return{value:e.token,label:e.title}})),t=N.taxonomy_contact_category&&N.taxonomy_contact_category.map((function(e){return{value:e.token,label:e.title}})),r=N.facilities&&N.facilities.map((function(e){return{value:e.token,label:e.title}}));v(e),w(t),j(r)}}),[N]);var A=(0,n.useCallback)((function(e){var t=e.target,r=t.name,n=t.value;n?i((function(e){return d(d({},e),{},b({},r,n))}),[]):i((function(e){var t=d({},e);t[r];return p(t,[r].map(y))}))})),k=(0,n.useCallback)((function(e,t){var r=t.name;e?i((function(t){return d(d({},t),{},b({},r,e.value))}),[]):i((function(e){var t=d({},e);t[r];return p(t,[r].map(y))}))}));(0,n.useEffect)((function(){t.push({pathname:"",search:a.stringify(o)}),e.onChange(o)}),[o]);var x=f&&f.filter((function(t){return t.value===e.activeFilter.topics})),C=E&&E.filter((function(t){return t.value===e.activeFilter.taxonomy_contact_category})),U=O&&O.filter((function(t){return t.value===e.activeFilter.facilities}));return n.createElement(n.Fragment,null,n.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onChange(o)}},n.createElement("label",null,"Recherche",n.createElement("input",{name:"SearchableText",type:"text",value:o.SearchableText,onChange:A})),n.createElement("button",{type:"submit"},"Recherche")),n.createElement("div",{className:"r-filter topics-Filter"},n.createElement("span",null,"Thématiques"),n.createElement(u.ZP,{name:"topics",className:"select-custom-class library-topics",isClearable:!0,onChange:k,options:f&&f,placeholder:"Toutes",value:x&&x[0]})),n.createElement("div",{className:"r-filter  facilities-Filter"},n.createElement("span",null,"Catégories"),n.createElement(u.ZP,{name:"taxonomy_contact_category",className:"select-custom-class library-facilities",isClearable:!0,onChange:k,options:E&&E,placeholder:"Toutes",value:C&&C[0]})),n.createElement("div",{className:"r-filter  facilities-Filter"},n.createElement("span",null,"Facilité"),n.createElement(u.ZP,{name:"facilities",className:"select-custom-class library-facilities",isClearable:!0,onChange:k,options:O&&O,placeholder:"Toutes",value:U&&U[0]})))};function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],c=!0,o=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){o=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(o)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var O=function(e){var t=e.queryUrl,a=(e.contactArray,e.onChange),c=(0,l.k6)(),o=((0,l.UO)().id,r(1296).parse((0,m.Z)().toString())),i=w((0,n.useState)({}),2),u=i[0],f=i[1],p=w((0,n.useState)({}),2),y=p[0],v=p[1],d=(0,l.TH)(),b=d.pathname,h=(d.search,d.hash,(0,s.Z)({method:"get",url:"",baseURL:t,headers:{Accept:"application/json"},params:u})),g=h.response;h.error,h.isLoading;return(0,n.useEffect)((function(){null!==g&&v(g.items[0])}),[g]),(0,n.useEffect)((function(){f({UID:o.u,fullobjects:1})}),[]),n.createElement("div",{className:"contact-content"},n.createElement("p",null,"The search parameter is : ",b),n.createElement("button",{type:"button",onClick:function(){c.push("."),a(null)}},"Go home"),n.createElement("div",{className:"contactCard"},n.createElement("div",{className:"contactText"},n.createElement("div",{className:"contactTextTitle"},n.createElement("span",{className:"title"},y.title)),n.createElement("div",{className:"contactTextAll"},y.category?n.createElement("span",null,y.category):"",n.createElement("div",{className:"adresse"},y.number?n.createElement("span",null,y.number+" "):"",y.street?n.createElement("span",null,y.street+", "):"",y.complement?n.createElement("span",null,y.complement+", "):"",y.zipcode?n.createElement("span",null,y.zipcode+" "):"",y.city?n.createElement("span",null,y.city):""),n.createElement("div",{className:"itineraty"},y.street?n.createElement("a",{href:"https://www.google.com/maps/dir/?api=1&destination="+y.street+"+"+y.number+"+"+y.complement+"+"+y.zipcode+"+"+y.city+"+"+y.country},"Itinéraire"):""),n.createElement("div",{className:"phones"},y.phones?y.phones.map((function(e){return n.createElement("span",null,e.number)})):""),n.createElement("div",{className:"mails"},y.mails?y.mails.map((function(e){return n.createElement("span",null,e.mail_address)})):""),n.createElement("div",{className:"topics"},y.topics?y.topics.map((function(e){return n.createElement("span",null,e.title)})):"")))))},j=r(4570),I=function(e){var t=e.contactItem,r=t.title&&t.title,a=t.taxonomy_contact_category&&t.taxonomy_contact_category[0],l=t.number?t.number:"",c=t.street?t.street:"",o=t.complement?t.complement:"",i=t.zipcode?t.zipcode:"",u=t.city?t.city:"",s=t.country?t.country:"",m=t.phones?t.phones:"",f=t.mails?t.mails:"",p=t.topics?t.topics:"";return n.createElement("div",{className:"r-list-item"},n.createElement("div",{className:"r-item-img",style:{backgroundImage:t.image?"url("+t.image.scales.preview.download+")":"url("+j.Z+")"}}),n.createElement("div",{className:"r-item-text"},n.createElement("span",{className:"r-item-title"},r),a?n.createElement("span",{className:"r-item-categorie"},a.title):"",n.createElement("div",{className:"r-item-all"},n.createElement("div",{className:"r-item-adresse"},l?n.createElement("span",null,l+" "):"",c?n.createElement("span",null,c+", "):"",o?n.createElement("span",null,o+", "):"",n.createElement("br",null),i?n.createElement("span",null,i+" "):"",u?n.createElement("span",null,u):"",n.createElement("div",{className:"itineraty"},c?n.createElement("a",{href:"https://www.google.com/maps/dir/?api=1&destination="+c+"+"+l+"+"+o+"+"+i+"+"+u+"+"+s},"Itinéraire"):"")),n.createElement("div",{className:"r-item-contact"},n.createElement("div",{className:"phones"},m?m.map((function(e,t){return n.createElement("span",{key:t},e.number)})):""),n.createElement("div",{className:"mails"},f?f.map((function(e,t){return n.createElement("span",{key:t},e.mail_address)})):""),n.createElement("div",{className:"topics"},p?p.map((function(e,t){return n.createElement("span",{key:t},e.title)})):"")))))},N=function(e){var t=e.contactArray,r=e.onChange,l=e.onHover,c=e.parentCallback;function o(e){l(e)}return n.createElement(n.Fragment,null,n.createElement("ul",{className:"r-result-list annuaire-result-list"},t.map((function(e,t){return n.createElement("li",{key:t,className:"r-list-item-group",onMouseEnter:function(){return o(e.UID)},onMouseLeave:function(){return o(null)},onClick:function(){return t=e.UID,void r(t);var t}},n.createElement(a.rU,{className:"r-list-item-link",style:{textDecoration:"none"},to:{pathname:"".concat(e.title),search:"?u=".concat(e.UID),state:{idItem:e.UID}}}),n.createElement(I,{contactItem:e,key:e.created}))}))),n.createElement("button",{onClick:function(e){c()}},"Afficher plus"))},A=r(8458),k=r(5108),x=r(6683),C=r(2948),U=r(8818),P=r.n(U),_=r(7518),T=r(3991);function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],c=!0,o=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){o=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(o)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function L(e){var t=e.activeItem,r=e.arrayOfLatLngs,n=(0,A.Sx)();if(t){var a=[];a.push(t.geolocation.latitude),a.push(t.geolocation.longitude),n.setView(a,15)}else{var l=new(P().LatLngBounds)(r);n.fitBounds(l)}return null}var F=function(e){var t=D((0,n.useState)(null),2),r=t[0],a=t[1],l=D((0,n.useState)(null),2),c=(l[0],l[1]),o=D((0,n.useState)([]),2),i=o[0],u=o[1],s=D((0,n.useState)(null),2),m=s[0],f=s[1];function p(e){return new(P().Icon)({iconUrl:e,iconSize:[29,37]})}(0,n.useEffect)((function(){var t=e.items.filter((function(e){return e.is_geolocated}));u(t)}),[e]);var y=function(t){return t===e.clickId||t===e.hoverId?999:1};return(0,n.useEffect)((function(){if(null!==e.clickId){var t=i&&i.filter((function(t){return t.UID===e.clickId}));a(t[0])}else a(null)}),[e.clickId]),(0,n.useEffect)((function(){if(e.hoverId){var t=i&&i.filter((function(t){return t.UID===e.hoverId}));c(t[0])}else c(null)}),[e.hoverId]),(0,n.useEffect)((function(){if(i.length>0){var e=[];i.map((function(t,r){var n=t.geolocation.latitude,a=t.geolocation.longitude;e.push([n,a])})),f(e)}}),[i]),n.createElement("div",{className:"r-map annuaire-map"},n.createElement(k.h,{center:[50.85034,4.35171],zoom:15},n.createElement(x.I,{attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),null!=m?n.createElement(L,{activeItem:r,arrayOfLatLngs:m&&m}):"",i&&i.map((function(t,r){return n.createElement(C.J,{key:t.UID,icon:(l=t.UID,l===e.clickId||l===e.hoverId?p(T.Z):p(_.Z)),zIndexOffset:y(t.UID),position:[t.geolocation?t.geolocation.latitude:"",t.geolocation?t.geolocation.longitude:""],onClick:function(){a(t)}});var l})),";"))};function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){R(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],c=!0,o=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){o=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(o)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return H(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function $(e){return n.createElement(a.UT,null,n.createElement(B,{queryFilterUrl:e.queryFilterUrl,queryUrl:e.queryUrl}))}function B(e){var t=r(1296).parse((0,m.Z)().toString()),c=M((0,n.useState)([]),2),o=c[0],u=c[1],f=M((0,n.useState)(null),2),p=f[0],y=f[1],v=M((0,n.useState)(null),2),d=v[0],b=v[1],h=M((0,n.useState)({}),2),g=h[0],w=h[1],S=M((0,n.useState)(t),2),j=S[0],I=S[1],A=M((0,n.useState)(5),2),k=A[0],x=A[1],C=M((0,n.useState)(null),2),U=C[0],P=C[1],_=(0,s.Z)({method:"get",url:"",baseURL:e.queryUrl,headers:{Accept:"application/json"},params:g},[g]),T=_.response,D=(_.error,_.isLoading);(0,n.useEffect)((function(){null!==T&&u(T.items)}),[T]);var Z=function(e){y(e)};return(0,n.useEffect)((function(){w(z(z({},j),{},{b_size:k,fullobjects:1}))}),[j,k]),n.createElement(a.UT,null,n.createElement("div",{className:"ref",ref:function(e){e&&P(e.getBoundingClientRect().top+window.pageYOffse)},style:{height:"calc(100vh -  ".concat(U,"px)")}},n.createElement("div",{className:"r-wrapper r-annuaire-wrapper"},n.createElement("div",{className:"r-result r-annuaire-result"},n.createElement(l.rs,null,n.createElement(l.AW,{path:"/:name"},n.createElement(O,{queryUrl:e.queryUrl,onChange:Z})),n.createElement(l.AW,{exact:!0,path:"*"},n.createElement("div",{className:"r-result-filter annuaire-result-filter"},n.createElement(E,{url:e.queryFilterUrl,activeFilter:j,onChange:function(e){I(e)}})),D?n.createElement("div",null,n.createElement(i,null)," ",n.createElement(i,null)," ",n.createElement(i,null)):n.createElement(N,{onChange:Z,onHover:function(e){b(e)},contactArray:o,parentCallback:function(){x(k+5)}})))),n.createElement("div",{style:{maxHeight:"500px"}},n.createElement(F,{clickId:p,hoverId:d,items:o})))))}},4844:function(e,t,r){var n=r(8709),a=r(1806),l=r.n(a);function c(e,t,r,n,a,l,c){try{var o=e[l](c),i=o.value}catch(e){return void r(e)}o.done?t(i):Promise.resolve(i).then(n,a)}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],c=!0,o=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){o=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(o)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.Z=function(e){var t=o((0,n.useState)(null),2),r=t[0],a=t[1],i=o((0,n.useState)(""),2),u=i[0],s=i[1],m=o((0,n.useState)(!0),2),f=m[0],p=m[1],y=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,l().request(t);case 4:r=e.sent,a(r.data),s(null),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),s(e.t0);case 12:return e.prev=12,p(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var l=e.apply(t,r);function o(e){c(l,n,a,o,i,"next",e)}function i(e){c(l,n,a,o,i,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,n.useEffect)((function(){y(e)}),[e.params]),{response:r,error:u,isLoading:f}}},6489:function(e,t,r){r(8709);var n=r(5110);t.Z=function(){return new URLSearchParams((0,n.TH)().search)}},4570:function(e,t,r){t.Z=r.p+"assets/img-placeholder-bla.a2b8b384c46ce56c99f042dc4625d309.png"}}]);