(window.webpackJsonpaboutfood=window.webpackJsonpaboutfood||[]).push([[0],Array(18).concat([function(e,t,a){e.exports=a(48)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/1.43d1fe9f.jpg"},function(e,t,a){e.exports=a.p+"static/media/1.76d8349c.webp"},function(e,t,a){e.exports=a.p+"static/media/2.556af8c8.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.257d3df9.webp"},function(e,t,a){e.exports=a.p+"static/media/3.9da8eb38.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.7ae33e38.webp"},function(e,t,a){e.exports=a.p+"static/media/4.75f9f72f.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.aeb4f69d.webp"},function(e,t,a){e.exports=a.p+"static/media/7.5afda243.jpg"},function(e,t,a){e.exports=a.p+"static/media/7.dd13c0b3.webp"},function(e,t,a){e.exports=a.p+"static/media/6.f6f47f6c.jpg"},function(e,t,a){e.exports=a.p+"static/media/6.3a96b63c.webp"},function(e,t,a){e.exports=a.p+"static/media/5.1fcdaaa1.jpg"},function(e,t,a){e.exports=a.p+"static/media/5.8b2bb48e.webp"},function(e,t,a){e.exports=a.p+"static/media/8.4dfcd1c2.jpg"},function(e,t,a){e.exports=a.p+"static/media/8.c46aa65c.webp"},function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),r=a(5),i=a.n(r),s=a(6),m=a(4),c=a(16),u={tags:[]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return"CHANGE_TAG"===t.type?e.tags.includes(t.tag)?{tags:e.tags.filter((function(e){return t.tag!==e}))}:{tags:[].concat(Object(c.a)(e.tags),[t.tag])}:e},d=(a(26),a(27),a(3)),p=a.n(d),g=n.a.memo((function(e){return n.a.createElement("header",{className:"header",style:{margin:e.margin}},n.a.createElement("div",{className:"header__logo"},"about",n.a.createElement("span",null,"food")),n.a.createElement("nav",{role:"navigation"},n.a.createElement("input",{type:"checkbox"}),n.a.createElement("span",{className:"header__menu-line"}),n.a.createElement("span",{className:"header__menu-line"}),n.a.createElement("span",{className:"header__menu-line"}),n.a.createElement("ul",{className:"header__nav"},n.a.createElement("li",{className:"header__nav--active"},"Home"),n.a.createElement("li",null,"About"),n.a.createElement("li",null,"Meat"),n.a.createElement("li",null,"Vegetables"),n.a.createElement("li",null,"Fruit"),n.a.createElement("li",null,"Contact"))))}));g.propTypes={margin:p.a.string};var b=g,f=a(7),v=(a(28),a(15)),y=a.n(v),k=(a(29),n.a.memo((function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card__image"},n.a.createElement(y.a,{src:e.imageSrc,webp:e.imageWebpSrc,alt:e.title})),n.a.createElement("div",{className:"card__content"},n.a.createElement("div",{className:"card__headline"},n.a.createElement("h2",null,e.title),n.a.createElement("span",{className:"card__tag card__tag--".concat(e.tag.toLowerCase())},e.tag)),n.a.createElement("div",{className:"card__description"},e.about),n.a.createElement("div",{className:"card__more"},n.a.createElement("span",{className:"card__more--".concat(e.tag.toLowerCase())},"\xbb")," More info")))}))),h=(a(30),a(17)),E=(a(31),n.a.memo((function(e){var t=Object(o.useState)(0),a=Object(h.a)(t,2),r=a[0],i=a[1];return n.a.createElement("label",{htmlFor:e.name,className:"filter",style:{backgroundColor:e.color}},n.a.createElement("input",{"aria-label":e.name,type:"checkbox",id:e.name,name:e.name,checked:r,onChange:function(){i(!r),e.onChange(e.name)}}),e.name)}))),S=n.a.memo((function(e){var t=Object(m.c)((function(e){return{tags:e.tags}})).tags,a=Object(m.b)(),r=Object(o.useCallback)((function(e){return a(function(e){return{type:"CHANGE_TAG",tag:e}}(e))}),[a]);return n.a.createElement(o.Fragment,null,n.a.createElement("span",{className:"filters__label"},"Filter:"),e.options.map((function(e){return n.a.createElement(E,{key:e.key.toString(),name:e.name,checked:t.includes(e.name),color:e.color,onChange:r})})))})),w=[{id:1,tag:"Fruit",imageSrc:a(32),imageWebpSrc:a(33),title:"Apple",about:"Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua.",description:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{id:2,tag:"Vegetables",imageSrc:a(34),imageWebpSrc:a(35),title:"Aubergine",about:"Consetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua.",description:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet."},{id:3,tag:"Fruit",imageSrc:a(36),imageWebpSrc:a(37),title:"Banana",about:"Stet clita kasd gubergrenconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua.",description:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet."},{id:4,tag:"Vegetables",imageSrc:a(38),imageWebpSrc:a(39),title:"Broccoli",about:"Dolor sit ametconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua.",description:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet."},{id:7,tag:"Meat",imageSrc:a(40),imageWebpSrc:a(41),title:"Beef",about:"Lorem ipsum dolor sit ametconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua.",description:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet."},{id:6,tag:"Fruit",imageSrc:a(42),imageWebpSrc:a(43),title:"Orange",about:"Sit consetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua.",description:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet."},{id:5,tag:"Meat",imageSrc:a(44),imageWebpSrc:a(45),title:"Chicken",about:"Amet consetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua.",description:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet."},{id:8,tag:"Vegetables",imageSrc:a(46),imageWebpSrc:a(47),title:"Zucchini",about:"Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua.",description:"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametconsetetur sadipscing elitrsed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergrenno sea takimata sanctus est Lorem ipsum dolor sit amet."}],_=n.a.memo((function(){var e=Object(m.c)((function(e){return{tags:e.tags}})).tags,t=w.filter((function(t){return e.includes(t.tag)}));return Object(o.useEffect)((function(){return f.b.staggerFromTo(".card",.4,{opacity:0,y:100,scale:.8},{opacity:1,y:0,scale:1,ease:f.a.easeOut},.05),function(){return f.b.set(".card",{opacity:0})}}),[e]),n.a.createElement("main",{className:"main"},n.a.createElement("div",{className:"main__filters"},n.a.createElement(S,{options:[{name:"Meat",color:"#e73c01",key:"1"},{name:"Vegetables",color:"#2b9030",key:"2"},{name:"Fruit",color:"#f39200",key:"3"}]})),n.a.createElement("section",null,n.a.createElement("div",{className:"main__cards"},(e.length?t:w).map((function(e){return n.a.createElement(k,{key:e.id,tag:e.tag,imageSrc:e.imageSrc,imageWebpSrc:e.imageWebpSrc,title:e.title,about:e.about,description:e.description})})))))})),j=function(){return n.a.createElement(o.Fragment,null,n.a.createElement(b,null),n.a.createElement(_,null))},A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N=Object(s.b)(l);i.a.render(n.a.createElement(m.a,{store:N},n.a.createElement(j,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");A?(!function(e,t){fetch(e).then((function(a){var o=a.headers.get("content-type");404===a.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()}]),[[18,1,2]]]);
//# sourceMappingURL=main.af7f743e.chunk.js.map