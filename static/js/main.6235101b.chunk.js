(this["webpackJsonpportfolio-page"]=this["webpackJsonpportfolio-page"]||[]).push([[0],{151:function(e,n,t){},156:function(e,n){},157:function(e,n){},158:function(e,n){},159:function(e,n){},160:function(e,n){},161:function(e,n,t){"use strict";t.r(n);var a,i=t(0),o=t(34),c=t.n(o),r=t(52),s=t(22),l=t(23),u=t(17),b=t(15),d=t(9),j=d.b.div(a||(a=Object(b.a)(["\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  overflow-x: hidden;\n  height: 5vh;\n  width: 100%;\n  background-color: rgb(43, 129, 205);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 12px 23px -21px #004fa0;\n  box-shadow: 0px 10px 13px -7px #000000, 0px 12px 23px -21px #004fa0;\n\n  section.menu {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    width: 25%;\n  }\n\n  .logo {\n    height: 80%;\n    width: 15%;\n    background-color: transparent;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    img {\n      height: 80%;\n      width: 80%;\n    }\n  }\n\n  @media (min-width: 480px) {\n    height: 12vh;\n  }\n"]))),h=t.p+"static/media/logo_transparent_background.264f7191.png",p=t(16),m=t(196),x=t(192),g=t(194),f=t(2);var O=function(){var e=Object(i.useState)(null),n=Object(p.a)(e,2),t=n[0],a=n[1],o=Object(u.f)(),c=Boolean(t),r=function(e){o.push(e),a(null)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m.a,{sx:{color:"black"},id:"menuButton","aria-controls":"about-me-menu","aria-haspopup":"true","aria-expanded":c?"true":void 0,onClick:function(e){e.preventDefault(),a(e.currentTarget)},children:"about me"}),Object(f.jsxs)(x.a,{id:"about-me-menu",anchorEl:t,open:c,onClose:function(){a(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(f.jsx)(g.a,{onClick:function(){return r("/portfolio-page")},children:"Home"}),Object(f.jsx)(g.a,{disabled:!1,onClick:function(){return r("/cv")},children:"My CV"})]})]})};var v=function(){var e=Object(i.useState)(null),n=Object(p.a)(e,2),t=n[0],a=n[1],o=Object(u.f)(),c=Boolean(t),r=function(e){o.push(e),a(null)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m.a,{sx:{color:"black"},id:"menuButton","aria-controls":"examples-menu","aria-haspopup":"true","aria-expanded":c?"true":void 0,onClick:function(e){e.preventDefault(),a(e.currentTarget)},children:"examples"}),Object(f.jsxs)(x.a,{id:"examples-menu",anchorEl:t,open:c,onClose:function(){a(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(f.jsx)(g.a,{onClick:function(){return r("/books")},children:"Library Challenge"}),Object(f.jsx)(g.a,{disabled:!0,onClick:function(){return r("/")},children:"Starwars API"})]})]})};var w,y,k,A,N,C,I,T,P=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(j,{children:[Object(f.jsx)("section",{className:"logo",children:Object(f.jsx)("img",{src:h,alt:"mario marchiorello logo"})}),Object(f.jsxs)("section",{className:"menu",children:[Object(f.jsx)(O,{}),Object(f.jsx)(v,{})]})]})})},J=t(26),M=t.n(J),F=t(37),z=Object(d.a)(w||(w=Object(b.a)(['\n    *{\n      margin: 0;\n      padding: 0;\n      font-family: "roboto",sans-serif;\n    }']))),B=d.b.div(y||(y=Object(b.a)(["\n  min-height: 95vh;\n  max-width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(186, 179, 179, 0.5);\n\n  div.not-found-page {\n    background-color: deeppink;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    img {\n      margin-top: 5vh;\n    }\n    h3 {\n      margin-top: 1vh;\n    }\n  }\n"]))),E=d.b.div(k||(k=Object(b.a)(["\n  min-height: 40vh;\n  width: 85vw;\n  margin-top: 4%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n"]))),Q=d.b.button(A||(A=Object(b.a)(["\n  height: 45px;\n  width: 85px;\n  outline: transparent;\n  border: 2px solid rgba(28, 125, 226, 0.83);\n  border-radius: 5px;\n  position: fixed;\n  bottom: 45px;\n  right: 25px;\n  text-align: center;\n  background-color: white;\n  cursor: pointer;\n\n  transition: background-color 0.6s ease-in-out, color 0.6s ease-in-out;\n  :hover {\n    background-color: rgba(28, 125, 226, 0.83);\n    color: white;\n  }\n"]))),V=d.b.label(N||(N=Object(b.a)(["\n  margin: 1% 0 0 2%;\n  text-transform: capitalize;\n"]))),L=d.b.input(C||(C=Object(b.a)(["\n  height: 35px;\n  width: 85%;\n  border: none;\n  border-bottom: solid 3px gray;\n  margin: 1% 0 0 2%;\n  border-radius: 5px;\n  font-size: large;\n"]))),R=d.b.button(I||(I=Object(b.a)(["\n  height: 4rem;\n  min-width: 7rem;\n  padding: 1.5rem;\n  background-color: white;\n  border: transparent;\n  outline: none;\n  border-radius: 1rem;\n  font-weight: bold;\n  font-size: large;\n  cursor: pointer;\n  color: rgba(28, 125, 226, 0.83);\n  transition: color 0.6s linear, background-color 0.6s linear;\n  :hover {\n    color: white;\n    background-color: rgba(28, 125, 226, 0.83);\n  }\n"]))),D=d.b.div(T||(T=Object(b.a)(["\n  height: 40vh;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 1%;\n  margin-bottom: 1%;\n  padding-bottom: 2%;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgba(161, 184, 191, 0.67);\n  border-radius: 15px;\n\n  transition: background-color 0.3s linear;\n\n  :hover {\n    background-color: rgba(161, 184, 191, 0.1);\n  }\n\n  h2 {\n    margin: 2% 0 0 0;\n    color: #004fa0;\n  }\n\n  section {\n    margin-top: 2%;\n    margin-left: 3%;\n\n    .cover {\n      height: 25%;\n      width: 25%;\n      @media (min-width: 480px) {\n        width: 15%;\n      }\n    }\n  }\n\n  .info {\n    height: 55%;\n    width: 85%;\n\n    p.text {\n      text-transform: capitalize;\n      line-height: 1.5;\n    }\n  }\n\n  .actions {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    margin-bottom: 1%;\n    width: 80%;\n\n    button {\n      height: 30px;\n      width: 80px;\n      border: none;\n      outline: transparent;\n      border-radius: 10px;\n      font-weight: bolder;\n      cursor: pointer;\n\n      transition: background-color 0.5s, color 0.5s;\n\n      :hover {\n        background-color: rgba(28, 125, 226, 0.83);\n        color: white;\n      }\n    }\n  }\n"]))),G="data:image/png;base64,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";var S=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(l.b,{to:"/books",children:Object(f.jsx)(Q,{children:"Home"})})})},q=t(99),U=t.n(q),X=t(31),Y=U.a.create({baseURL:"https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1"}),W=function(){return Object(X.useQuery)("books",Object(F.a)(M.a.mark((function e(){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.get("books");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),{refetchInterval:1e4})},Z=t(38);var H,K=function(){var e=Object(X.useQueryClient)(),n=W(),t=n.data,a=n.isLoading,i=Object(X.useMutation)((function(e){return Y.delete("books/".concat(e))})).mutateAsync;return a?null:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Z.a,{}),Object(f.jsxs)(B,{children:[Object(f.jsx)(E,{children:t.map((function(n,t){return Object(f.jsxs)(D,{children:[Object(f.jsx)("section",{className:"cover",children:Object(f.jsx)("img",{src:G,alt:"placeholder for bookcover"})}),Object(f.jsxs)("section",{className:"info",children:[Object(f.jsxs)("p",{className:"text",children:["Titel: ",n?n.title:""]}),Object(f.jsxs)("p",{className:"text",children:["Author: ",n?n.author:""]}),Object(f.jsxs)("p",{className:"text",children:["Amount in Stock: ",n?n.total_amount:""]}),Object(f.jsxs)("p",{className:"text",children:["Number of pages: ",n?n.pages:""]}),Object(f.jsxs)("p",{className:"text",children:["Isbn: ",n?n.isbn:""]})]}),Object(f.jsxs)("section",{className:"actions",children:[Object(f.jsx)(l.b,{to:"/books/edit/".concat(n.id),children:Object(f.jsx)("button",{children:"Edit"})}),Object(f.jsx)("button",{onClick:(a=n.id,Object(F.a)(M.a.mark((function n(){return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i(a);case 2:return Object(Z.b)("deleting was successful",{duration:4e3,position:"top-center"}),n.next=5,e.refetchQueries("books");case 5:case"end":return n.stop()}}),n)})))),children:"Delete"})]})]},t);var a}))}),Object(f.jsx)(S,{})]})]})},_=t(8),$=t(44),ee=d.b.form(H||(H=Object(b.a)(["\n  color: white;\n  position: fixed;\n  top: 17vh;\n  height: 60vh;\n  width: 85vw;\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(100deg, #004d9f 0%, #0ec8c8 90%);\n\n  @media (min-width: 480px) {\n    height: 75vh;\n    top: 21vh;\n  }\n\n  .text {\n    height: 10%;\n    text-align: center;\n    line-height: 2;\n    margin-top: 2%;\n    font-size: large;\n  }\n\n  .form {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .button {\n    height: 10%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 5%;\n    @media (min-width: 480px) {\n    }\n\n    button {\n      height: 100%;\n      color: white;\n      border: none;\n      border-radius: 15px;\n      width: 50%;\n      outline: transparent;\n      background-color: rgba(0, 77, 159, 0.48);\n      cursor: pointer;\n      transition: background-color 0.5s linear;\n\n      :hover {\n        background-color: rgba(0, 77, 159, 0.89);\n        cursor: pointer;\n        text-decoration: none;\n      }\n    }\n  }\n"]))),ne={title:"",author:"",total_amount:0,pages:0,isbn:""},te=function(){var e=Object(u.g)().id,n=Object(u.f)(),t=function(e){return Object(X.useQuery)(["books",e],Object(F.a)(M.a.mark((function n(){var t,a;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Y.get("books/".concat(e));case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)}))))}(e),a=t.data,o=t.isLoading,c=function(e){return Object(X.useMutation)((function(n){return Y.put("books/".concat(e),n)}))}(e),r=c.mutateAsync,s=Object(i.useState)(ne),l=Object(p.a)(s,2),b=l[0],d=l[1];Object(i.useEffect)((function(){a&&d(a)}),[a]);var j=function(e){var n=e.target,t=n.value,a=n.name;d((function(e){return Object($.a)(Object($.a)({},e),{},Object(_.a)({},a,t))}))},h=function(){var e=Object(F.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,r(b);case 3:Object(Z.b)("update was successful",{duration:4e3,position:"top-center"}),n.push("/books");case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return o?null:Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(B,{children:[b?Object(f.jsxs)(ee,{id:"form",children:[Object(f.jsxs)("section",{className:"text",children:[" change ",b.title]}),Object(f.jsxs)("section",{className:"form",children:[Object(f.jsxs)(V,{htmlFor:"title",children:["Title: ",b.title]}),Object(f.jsx)(L,{required:!0,placeholder:"new Title",type:"text",name:"title",value:b.title,onChange:j}),Object(f.jsxs)(V,{htmlFor:"author",children:["Author: ",b.author]}),Object(f.jsx)(L,{required:!0,placeholder:"new Author",type:"text",name:"author",value:b.author,onChange:j}),Object(f.jsxs)(V,{htmlFor:"amount",children:["Amount in stock: ",b.amount]}),Object(f.jsx)(L,{required:!0,placeholder:"new amount",type:"number",name:"amount",value:b.amount,onChange:j}),Object(f.jsxs)(V,{htmlFor:"pages",children:["Number of pages: ",b.pages]}),Object(f.jsx)(L,{required:!0,placeholder:"new number of pages",type:"number",name:"pages",value:b.pages,onChange:j}),Object(f.jsxs)(V,{htmlFor:"isbn",children:["ISBN: ",b.isbn]}),Object(f.jsx)(L,{required:!0,placeholder:"new isbn number",type:"text",name:"isbn",value:b.isbn,onChange:j})]}),Object(f.jsxs)("section",{className:"button",children:[Object(f.jsx)("button",{onClick:function(e){e.preventDefault(),d(a)},children:"discard changes"}),Object(f.jsx)("button",{onClick:h,children:"save changes"})]})]}):null,Object(f.jsx)(S,{})]})})},ae={title:"",author:"",total_amount:0,pages:0,isbn:""};var ie=function(){var e=Object(X.useMutation)((function(e){return Y.post("books",e)})).mutateAsync,n=Object(i.useState)(ae),t=Object(p.a)(n,2),a=t[0],o=t[1],c=function(e){var n=e.target,t=n.value,a=n.name;o((function(e){return Object($.a)(Object($.a)({},e),{},Object(_.a)({},a,t))}))},r=Object(u.f)(),s=function(){var n=Object(F.a)(M.a.mark((function n(t){return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,e(a);case 3:Object(Z.b)("adding was successful",{duration:4e3,position:"top-center"}),r.push("/books");case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(B,{children:[Object(f.jsxs)(ee,{children:[Object(f.jsx)("section",{className:"text",children:"Fill in the information about the new book"}),Object(f.jsxs)("section",{className:"form",children:[Object(f.jsx)(V,{htmlFor:"title",children:"Title"}),Object(f.jsx)(L,{required:!0,type:"text",name:"title",value:a.title,onChange:c}),Object(f.jsx)(V,{htmlFor:"author",children:"Author"}),Object(f.jsx)(L,{required:!0,type:"text",name:"author",value:a.author,onChange:c}),Object(f.jsx)(V,{htmlFor:"total_amount",children:"Amount in stock"}),Object(f.jsx)(L,{required:!0,type:"number",name:"total_amount",value:a.total_amount,onChange:c}),Object(f.jsx)(V,{htmlFor:"pages",children:"Number of pages"}),Object(f.jsx)(L,{required:!0,type:"number",name:"pages",value:a.pages,onChange:c}),Object(f.jsx)(V,{htmlFor:"isbn",children:"ISBN"}),Object(f.jsx)(L,{required:!0,type:"number",name:"isbn",value:a.isbn,onChange:c})]}),Object(f.jsx)("section",{className:"button",children:Object(f.jsx)("button",{onClick:s,children:"Add to Library"})})]}),Object(f.jsx)(S,{})]})})};var oe,ce=function(){var e=W(),n=e.data;if(e.isLoading)return null;var t=n[n.length-1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(E,{children:Object(f.jsxs)(D,{children:[Object(f.jsx)("section",{className:"cover",children:Object(f.jsx)("img",{src:G,alt:"placeholder for bookcover"})}),Object(f.jsxs)("section",{className:"info",children:[Object(f.jsxs)("p",{className:"text",children:["Titel: ",t?t.title:""]}),Object(f.jsxs)("p",{className:"text",children:["Author: ",t?t.author:""]}),Object(f.jsxs)("p",{className:"text",children:["Amount in Stock: ",t?t.total_amount:""]}),Object(f.jsxs)("p",{className:"text",children:["Number of pages: ",t?t.pages:""]}),Object(f.jsxs)("p",{className:"text",children:["Isbn: ",t?t.isbn:""]})]})]})})})},re=d.b.div(oe||(oe=Object(b.a)(["\n  height: 6rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-top: 4rem;\n"])));function se(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(B,{className:"home",children:[Object(f.jsx)(ce,{}),Object(f.jsxs)(re,{children:[Object(f.jsx)(l.b,{to:"/books/all",children:Object(f.jsx)(R,{children:"Browse all books"})}),Object(f.jsx)(l.b,{to:"/books/add",children:Object(f.jsx)(R,{children:"Add a Book"})})]})]})})}var le,ue,be=t(71),de=t.n(be),je=(t(151),t.p+"static/media/mario_bike.304fa388.jpg"),he=t.p+"static/media/IMG-20170118-WA0002.92d624e5.jpg",pe=t.p+"static/media/IMG-20190829-WA0033 2.10c901ea.jpg",me=t.p+"static/media/IMG_4740.35bab0fa.JPG",xe=t.p+"static/media/IMG_4885.2fb06af5.JPG",ge=t.p+"static/media/IMG_5341.d501e709.JPG",fe=t.p+"static/media/IMG_7146.343d84ed.JPG",Oe=d.b.div(le||(le=Object(b.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  img.carouselImage {\n    max-height: 100%;\n    max-width: 100%;\n  }\n"]))),ve=Object(d.b)(B)(ue||(ue=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  align-items: flex-start;\n\n  section.pictures {\n    position: sticky;\n    top: 20vh;\n    height: 60vh;\n    width: 40vw;\n    margin-left: 2%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  section.text {\n    overflow-y: hidden;\n    position: sticky;\n    top: 20vh;\n    //min-height: 100%;\n    width: 60vw;\n    display: flex;\n    flex-direction: column;\n\n    h1 {\n      font-family: 'Great Vibes', cursive;\n      //margin-top: 20%;\n      margin-left: 2%;\n      font-size: 78px;\n      color: rgba(92, 225, 230, 0.79);\n    }\n\n    h3 {\n      font-family: 'Dancing Script', cursive;\n      margin-left: 2%;\n      color: rgba(92, 225, 230, 0.79);\n      font-size: 48px;\n    }\n  }\n"]))),we=t(104);var ye=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(ve,{children:[Object(f.jsx)("section",{className:"pictures",children:Object(f.jsxs)(we.a,{itemPosition:"center",style:{height:"100%",padding:"10px",justifyContent:"center",alignItems:"center"},itemsToShow:1,children:[Object(f.jsx)(Oe,{children:Object(f.jsx)("img",{className:"carouselImage",src:je,alt:"profile of Mario"})}),Object(f.jsx)(Oe,{children:Object(f.jsx)("img",{className:"carouselImage",src:he,alt:"profile of Mario"})}),Object(f.jsx)(Oe,{children:Object(f.jsx)("img",{className:"carouselImage",src:pe,alt:"profile of Mario"})}),Object(f.jsx)(Oe,{children:Object(f.jsx)("img",{className:"carouselImage",src:me,alt:"profile of Mario"})}),Object(f.jsx)(Oe,{children:Object(f.jsx)("img",{className:"carouselImage",src:xe,alt:"profile of Mario"})}),Object(f.jsx)(Oe,{children:Object(f.jsx)("img",{className:"carouselImage",src:ge,alt:"profile of Mario"})}),Object(f.jsx)(Oe,{children:Object(f.jsx)("img",{className:"carouselImage",src:fe,alt:"profile of Mario"})})]})}),Object(f.jsxs)("section",{className:"text",children:[Object(f.jsx)("h1",{children:"Hi and welcome to my website!"}),Object(f.jsx)("h3",{children:"This is who I am:"}),Object(f.jsx)(de.a,{text:"My name is Mario Marchiorello, I'm a young at heart web developer\nwith a with a non-linear past, a large portion of motivation, and a well-balanced mix of\nsoft and hard skills.\nI'm looking for a position as junior Front-End developer.\nIn April I successfully completed a Software Boot Camp\nat the Propulsion Academy in Zurich. As part of this intensive training, I pitched an original\nidea in a final project, convinced the course management to select it, and led an international team\nin the implementation. The result, a web app, allows a climate protection organization to annotate\nphotos, collect the resulting data in a relational database, and store it in an open-source format for scientific purposes.\nAs team leader, I was responsible for communicating with the GOES Foundation, ensuring a\nhigh-quality solution, and choosing appropriate technologies (react.js, NPM, Django, REST, etc.).\n",lines:4,id:"custom",moreText:"read more",className:"custom-class",innerElement:"span",lessText:"read less",ellipsis:"..."}),Object(f.jsx)("h3",{children:"This is my special sauce:"}),Object(f.jsx)(de.a,{text:"I have been interested in the field of web and application development for a long time and at the\nbeginning of 2021, with the move from the hospitality industry to software engineering, I decided\nto turn this passion into my profession. From my previous career I bring experience in customer\ncontact, motivation, energy, and flexibility.",lines:4,id:"custom",moreText:"read more",className:"custom-class",innerElement:"span",lessText:"read less",ellipsis:"..."})]})]})})},ke=t.p+"static/media/404_image.8c92d9d9.png";var Ae=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(B,{children:Object(f.jsxs)("div",{className:"not-found-page",children:[Object(f.jsx)("img",{src:ke,alt:"404 meme"}),Object(f.jsxs)("h3",{children:["Please follow ",Object(f.jsx)(l.b,{to:"/portfolio-page",children:" this link"})," to my website!"]})]})})})},Ne=t(72),Ce=t.p+"static/media/CV_EN.f29f0d77.pdf";var Ie=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(B,{children:Object(f.jsx)(Ne.a,{file:Ce,children:Object(f.jsx)(Ne.b,{pageNumber:1})})})})},Te=new X.QueryClient;r.a.initialize("UA-211973159-1"),Object(s.a)().listen((function(e){r.a.set({page:e.pathname}),r.a.pageview(e.pathname)}));var Pe=function(){return Object(i.useEffect)((function(){r.a.pageview(window.location.pathname)}),[]),Object(f.jsx)(X.QueryClientProvider,{client:Te,children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(P,{}),Object(f.jsx)(Z.a,{}),Object(f.jsxs)(u.c,{children:[Object(f.jsx)(u.a,{exact:!0,path:"/portfolio-page",component:ye}),Object(f.jsx)(u.a,{exact:!0,path:"/cv",component:Ie}),Object(f.jsx)(u.a,{exact:!0,path:"/books",component:se}),Object(f.jsx)(u.a,{exact:!0,path:"/books/all",component:K}),Object(f.jsx)(u.a,{exact:!0,path:"/books/add",component:ie}),Object(f.jsx)(u.a,{exact:!0,path:"/books/edit/:id",component:te}),Object(f.jsx)(u.a,{path:"*",component:Ae})]})]})})},Je=t(191);c.a.render(Object(f.jsxs)(Je.a,{injectFirst:!0,children:[Object(f.jsx)(z,{}),Object(f.jsx)(Pe,{})]}),document.getElementById("root"))},92:function(e,n){}},[[161,1,2]]]);
//# sourceMappingURL=main.6235101b.chunk.js.map