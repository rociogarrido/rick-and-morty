(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{12:function(e,t,c){},23:function(e,t,c){},25:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(17),n=c.n(s),i=c(7),r=(c(23),c(15)),l=c(2),d=(c(12),function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,image:e.image,name:e.name,specie:e.species,planet:e.origin.name,episodes:e.episode,status:e.status,type:e.type}}))}))}),j=c.p+"static/media/logo.de13d484.png",o=c(1),u=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("img",{className:"logo",src:j,alt:"Rick and Morty logo"})})},m=function(e){return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(o.jsx)("label",{className:"label",htmlFor:"name",children:"Busca un personaje:"}),Object(o.jsx)("input",{className:"input",type:"text",id:"name",value:e.nameFilter,onChange:function(t){e.handleFilter(t.target.value)}})]})},h=(c(25),function(e){return Object(o.jsx)("li",{className:"card",children:Object(o.jsxs)(i.b,{className:"link",to:"/character-detail/".concat(e.character.id),children:[Object(o.jsx)("img",{className:"card__img",src:e.character.image,alt:"Imagen de ".concat(e.character.name)}),Object(o.jsx)("h3",{className:"card__title",children:e.character.name}),Object(o.jsx)("p",{className:"card__description",children:e.character.specie})]})})}),b=(c(31),c.p+"static/media/no_results2.6ddd7d90.png"),p=function(e){if(0===e.characters.length)return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"no-results",children:"No se encuentran resultados"}),Object(o.jsx)("img",{className:"no-results__img",src:b,alt:"No hay resultados",title:"No hay resultados"})]});var t=e.characters.map((function(e){return Object(o.jsx)(h,{character:e,name:e.name,species:e.species,image:e.image},e.id)}));return Object(o.jsx)("div",{className:"list-container",children:Object(o.jsx)("ul",{className:"card-list",children:t})})},O=(c(32),function(e){return Object(o.jsxs)("div",{className:"detail",children:[Object(o.jsx)("div",{className:"detail__btncontainer",children:Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("button",{className:"detail__btn",children:"Volver"})})}),Object(o.jsxs)("div",{className:"detail__imgcontainer",children:[Object(o.jsx)("img",{className:"detail__imgcontainer--img",src:e.image,alt:e.name,title:"Imagen de ".concat(e.name)}),Object(o.jsxs)("div",{className:"detail__text",children:[Object(o.jsx)("h2",{className:"detail__name",children:e.name}),Object(o.jsxs)("ul",{className:"detail__description",children:[Object(o.jsxs)("li",{children:["Especie: ",e.species,"."]}),Object(o.jsxs)("li",{children:["Planeta de origen: ",e.origin,"."]}),Object(o.jsxs)("li",{children:["Aparece en: ",e.episodes," episodios."]}),Object(o.jsxs)("li",{children:["Estatus: ",e.status,". ",function(){if("Dead"===e.status)return"\ud83d\udc80"}()]})]})]})]})]},e.id)}),x=c.p+"static/media/404error.d97eab6a.jpeg",f=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),i=Object(r.a)(n,2),j=i[0],h=i[1];Object(a.useEffect)((function(){d().then((function(e){s(e)}))}),[]);var b=c.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())}));return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(u,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsxs)(l.a,{exact:!0,path:"/",children:[Object(o.jsx)(m,{handleFilter:function(e){h(e)},nameFilter:j}),Object(o.jsx)(p,{characters:b})]}),Object(o.jsx)(l.a,{path:"/character-detail/:characterId",render:function(e){var t=parseInt(e.match.params.characterId),a=c.find((function(e){return e.id===t}));return a?Object(o.jsx)(O,{image:a.image,name:a.name,status:a.status,species:a.specie,origin:a.planet,episodes:a.episodes.length}):Object(o.jsxs)("div",{className:"notFound",children:[Object(o.jsx)("h2",{children:"El personaje que buscas no existe."}),Object(o.jsx)("img",{className:"imgnofound",src:x,alt:"not found"})]})}})]})]})};n.a.render(Object(o.jsx)(i.a,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.a245bf74.chunk.js.map