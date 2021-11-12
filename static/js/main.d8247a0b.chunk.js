(this["webpackJsonpportfolio-page"]=this["webpackJsonpportfolio-page"]||[]).push([[0],{169:function(n,e){},170:function(n,e){},171:function(n,e){},172:function(n,e){},173:function(n,e){},174:function(n,e,t){"use strict";t.r(e);var i,a=t(0),o=t(31),r=t.n(o),c=t(53),s=t(22),l=t(23),d=t(17),b=t(15),u=t(9),h=u.b.div(i||(i=Object(b.a)(["\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  overflow-x: hidden;\n  height: 6vh;\n  width: 100%;\n  background-color: rgb(43, 129, 205);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 12px 23px -21px #004fa0;\n  box-shadow: 0px 10px 13px -7px #000000, 0px 12px 23px -21px #004fa0;\n  @media (max-width: 480px) {\n    flex-direction: row;\n  }\n\n  section.menu {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    width: auto;\n    button {\n      @media (max-width: 480px) {\n        font-size: medium;\n        width: auto;\n        white-space: nowrap;\n        text-align: center;\n        margin-right: 2%;\n      }\n    }\n  }\n\n  .logo {\n    height: 80%;\n    width: 15%;\n    background-color: transparent;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    @media (max-width: 480px) {\n      width: 25%;\n    }\n    img {\n      height: 80%;\n      width: 80%;\n    }\n  }\n  @media (min-width: 480px) {\n    height: 12vh;\n  }\n"]))),j=t.p+"static/media/logo_transparent_background.264f7191.png",p=t(16),m=t(209),x=t(205),g=t(207),f=t(2);var O=function(){var n=Object(a.useState)(null),e=Object(p.a)(n,2),t=e[0],i=e[1],o=Object(d.f)(),r=Boolean(t),c=function(n){o.push(n),i(null)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m.a,{sx:{color:"black",fontSize:"large"},id:"menuButton","aria-controls":"about-me-menu","aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:function(n){n.preventDefault(),i(n.currentTarget)},children:"about me"}),Object(f.jsxs)(x.a,{id:"about-me-menu",anchorEl:t,open:r,onClose:function(){i(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(f.jsx)(g.a,{onClick:function(){return c("/portfolio-page")},children:"Home"}),Object(f.jsx)(g.a,{disabled:!1,onClick:function(){return c("/cv")},children:"My CV"})]})]})};var w=function(){var n=Object(a.useState)(null),e=Object(p.a)(n,2),t=e[0],i=e[1],o=Object(d.f)(),r=Boolean(t),c=function(n){o.push(n),i(null)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m.a,{sx:{color:"black",fontSize:"large"},id:"menuButton","aria-controls":"examples-menu","aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:function(n){n.preventDefault(),i(n.currentTarget)},children:"examples"}),Object(f.jsxs)(x.a,{id:"examples-menu",anchorEl:t,open:r,onClose:function(){i(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(f.jsx)(g.a,{onClick:function(){return c("/books")},children:"Library Challenge"}),Object(f.jsx)(g.a,{disabled:!0,onClick:function(){return c("/")},children:"Starwars API"})]})]})};var v,y,k,A,N,C,I,T,z=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(h,{children:[Object(f.jsx)("section",{className:"logo",children:Object(f.jsx)("img",{src:j,alt:"mario marchiorello logo"})}),Object(f.jsxs)("section",{className:"menu",children:[Object(f.jsx)(O,{}),Object(f.jsx)(w,{})]})]})})},P=t(26),J=t.n(P),M=t(37),F=Object(u.a)(v||(v=Object(b.a)(['\n    *{\n      margin: 0;\n      padding: 0;\n      font-family: "roboto",sans-serif;\n    }']))),E=u.b.div(y||(y=Object(b.a)(["\n  min-height: 95vh;\n  max-width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(186, 179, 179, 0.5);\n\n  div.not-found-page {\n    background-color: deeppink;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    img {\n      margin-top: 5vh;\n    }\n    h3 {\n      margin-top: 1vh;\n    }\n  }\n"]))),B=u.b.div(k||(k=Object(b.a)(["\n  min-height: 40vh;\n  width: 85vw;\n  margin-top: 4%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n  img {\n    height: 60px;\n    width: 60px;\n  }\n"]))),Q=u.b.button(A||(A=Object(b.a)(["\n  height: 45px;\n  width: 85px;\n  outline: transparent;\n  border: 2px solid rgba(28, 125, 226, 0.83);\n  border-radius: 5px;\n  position: fixed;\n  bottom: 45px;\n  right: 25px;\n  text-align: center;\n  background-color: white;\n  cursor: pointer;\n\n  transition: background-color 0.6s ease-in-out, color 0.6s ease-in-out;\n  :hover {\n    background-color: rgba(28, 125, 226, 0.83);\n    color: white;\n  }\n"]))),V=u.b.label(N||(N=Object(b.a)(["\n  margin: 1% 0 0 2%;\n  text-transform: capitalize;\n"]))),R=u.b.input(C||(C=Object(b.a)(["\n  height: 35px;\n  width: 85%;\n  border: none;\n  border-bottom: solid 3px gray;\n  margin: 1% 0 0 2%;\n  border-radius: 5px;\n  font-size: large;\n"]))),L=u.b.button(I||(I=Object(b.a)(["\n  height: 4rem;\n  min-width: 7rem;\n  padding: 1.5rem;\n  background-color: white;\n  border: transparent;\n  outline: none;\n  border-radius: 1rem;\n  font-weight: bold;\n  font-size: large;\n  cursor: pointer;\n  color: rgba(28, 125, 226, 0.83);\n  transition: color 0.6s linear, background-color 0.6s linear;\n  :hover {\n    color: white;\n    background-color: rgba(28, 125, 226, 0.83);\n  }\n"]))),S=u.b.div(T||(T=Object(b.a)(["\n  height: 40vh;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 1%;\n  margin-bottom: 1%;\n  padding-bottom: 2%;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgba(161, 184, 191, 0.67);\n  border-radius: 15px;\n  transition: background-color 0.3s linear;\n  :hover {\n    background-color: rgba(161, 184, 191, 0.1);\n  }\n\n  h2 {\n    margin: 2% 0 0 0;\n    color: #004fa0;\n  }\n\n  section {\n    margin-top: 2%;\n    margin-left: 3%;\n    .cover {\n      height: 25%;\n      width: 25%;\n      @media (min-width: 480px) {\n        width: 15%;\n      }\n    }\n  }\n\n  .info {\n    height: 55%;\n    width: 85%;\n\n    p.text {\n      text-transform: capitalize;\n      line-height: 1.5;\n    }\n  }\n\n  .actions {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    margin-bottom: 1%;\n    width: 80%;\n\n    button {\n      height: 30px;\n      width: 80px;\n      border: none;\n      outline: transparent;\n      border-radius: 10px;\n      font-weight: bolder;\n      cursor: pointer;\n\n      transition: background-color 0.5s, color 0.5s;\n\n      :hover {\n        background-color: rgba(28, 125, 226, 0.83);\n        color: white;\n      }\n    }\n  }\n"]))),D="data:image/png;base64,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";var G=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(l.b,{to:"/books",children:Object(f.jsx)(Q,{children:"Home"})})})},q=t(103),U=t.n(q),X=t(32),Y=U.a.create({baseURL:"https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1"}),W=function(){return Object(X.useQuery)("books",Object(M.a)(J.a.mark((function n(){var e;return J.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Y.get("books");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)}))),{refetchInterval:1e4})},Z=t(40);var H,K=function(){var n=Object(X.useQueryClient)(),e=W(),t=e.data,i=e.isLoading,a=Object(X.useMutation)((function(n){return Y.delete("books/".concat(n))})).mutateAsync;return i?null:Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(E,{children:[Object(f.jsx)(B,{children:t.map((function(e,t){return Object(f.jsxs)(S,{children:[Object(f.jsx)("section",{className:"cover",children:Object(f.jsx)("img",{src:D,alt:"placeholder for bookcover"})}),Object(f.jsxs)("section",{className:"info",children:[Object(f.jsxs)("p",{className:"text",children:["Titel: ",e?e.title:""]}),Object(f.jsxs)("p",{className:"text",children:["Author: ",e?e.author:""]}),Object(f.jsxs)("p",{className:"text",children:["Amount in Stock: ",e?e.total_amount:""]}),Object(f.jsxs)("p",{className:"text",children:["Number of pages: ",e?e.pages:""]}),Object(f.jsxs)("p",{className:"text",children:["Isbn: ",e?e.isbn:""]})]}),Object(f.jsxs)("section",{className:"actions",children:[Object(f.jsx)(l.b,{to:"/books/edit/".concat(e.id),children:Object(f.jsx)("button",{children:"Edit"})}),Object(f.jsx)("button",{onClick:(i=e.id,Object(M.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(i);case 2:return Object(Z.b)("deleting was successful",{duration:4e3,position:"top-center"}),e.next=5,n.refetchQueries("books");case 5:case"end":return e.stop()}}),e)})))),children:"Delete"})]})]},t);var i}))}),Object(f.jsx)(G,{})]})})},_=t(8),$=t(45),nn=u.b.form(H||(H=Object(b.a)(["\n  color: white;\n  position: fixed;\n  top: 17vh;\n  height: 60vh;\n  width: 85vw;\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(100deg, #004d9f 0%, #0ec8c8 90%);\n\n  @media (min-width: 480px) {\n    height: 75vh;\n    top: 21vh;\n  }\n\n  .text {\n    height: 10%;\n    text-align: center;\n    line-height: 2;\n    margin-top: 2%;\n    font-size: large;\n  }\n\n  .form {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .button {\n    height: 10%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 5%;\n    @media (min-width: 480px) {\n    }\n\n    button {\n      height: 100%;\n      color: white;\n      border: none;\n      border-radius: 15px;\n      width: 50%;\n      outline: transparent;\n      background-color: rgba(0, 77, 159, 0.48);\n      cursor: pointer;\n      transition: background-color 0.5s linear;\n\n      :hover {\n        background-color: rgba(0, 77, 159, 0.89);\n        cursor: pointer;\n        text-decoration: none;\n      }\n    }\n  }\n"]))),en={title:"",author:"",total_amount:0,pages:0,isbn:""},tn=function(){var n=Object(d.g)().id,e=Object(d.f)(),t=function(n){return Object(X.useQuery)(["books",n],Object(M.a)(J.a.mark((function e(){var t,i;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.get("books/".concat(n));case 2:return t=e.sent,i=t.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)}))))}(n),i=t.data,o=t.isLoading,r=function(n){return Object(X.useMutation)((function(e){return Y.put("books/".concat(n),e)}))}(n),c=r.mutateAsync,s=Object(a.useState)(en),l=Object(p.a)(s,2),b=l[0],u=l[1];Object(a.useEffect)((function(){i&&u(i)}),[i]);var h=function(n){var e=n.target,t=e.value,i=e.name;u((function(n){return Object($.a)(Object($.a)({},n),{},Object(_.a)({},i,t))}))},j=function(){var n=Object(M.a)(J.a.mark((function n(t){return J.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,c(b);case 3:Object(Z.b)("update was successful",{duration:4e3,position:"top-center"}),e.push("/books");case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return o?null:Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(E,{children:[b?Object(f.jsxs)(nn,{id:"form",children:[Object(f.jsxs)("section",{className:"text",children:[" change ",b.title]}),Object(f.jsxs)("section",{className:"form",children:[Object(f.jsxs)(V,{htmlFor:"title",children:["Title: ",b.title]}),Object(f.jsx)(R,{required:!0,placeholder:"new Title",type:"text",name:"title",value:b.title,onChange:h}),Object(f.jsxs)(V,{htmlFor:"author",children:["Author: ",b.author]}),Object(f.jsx)(R,{required:!0,placeholder:"new Author",type:"text",name:"author",value:b.author,onChange:h}),Object(f.jsxs)(V,{htmlFor:"amount",children:["Amount in stock: ",b.amount]}),Object(f.jsx)(R,{required:!0,placeholder:"new amount",type:"number",name:"amount",value:b.amount,onChange:h}),Object(f.jsxs)(V,{htmlFor:"pages",children:["Number of pages: ",b.pages]}),Object(f.jsx)(R,{required:!0,placeholder:"new number of pages",type:"number",name:"pages",value:b.pages,onChange:h}),Object(f.jsxs)(V,{htmlFor:"isbn",children:["ISBN: ",b.isbn]}),Object(f.jsx)(R,{required:!0,placeholder:"new isbn number",type:"text",name:"isbn",value:b.isbn,onChange:h})]}),Object(f.jsxs)("section",{className:"button",children:[Object(f.jsx)("button",{onClick:function(n){n.preventDefault(),u(i)},children:"discard changes"}),Object(f.jsx)("button",{onClick:j,children:"save changes"})]})]}):null,Object(f.jsx)(G,{})]})})},an={title:"",author:"",total_amount:0,pages:0,isbn:""};var on=function(){var n=Object(X.useMutation)((function(n){return Y.post("books",n)})).mutateAsync,e=Object(a.useState)(an),t=Object(p.a)(e,2),i=t[0],o=t[1],r=function(n){var e=n.target,t=e.value,i=e.name;o((function(n){return Object($.a)(Object($.a)({},n),{},Object(_.a)({},i,t))}))},c=Object(d.f)(),s=function(){var e=Object(M.a)(J.a.mark((function e(t){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,n(i);case 3:Object(Z.b)("adding was successful",{duration:4e3,position:"top-center"}),c.push("/books");case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(E,{children:[Object(f.jsxs)(nn,{children:[Object(f.jsx)("section",{className:"text",children:"Fill in the information about the new book"}),Object(f.jsxs)("section",{className:"form",children:[Object(f.jsx)(V,{htmlFor:"title",children:"Title"}),Object(f.jsx)(R,{required:!0,type:"text",name:"title",value:i.title,onChange:r}),Object(f.jsx)(V,{htmlFor:"author",children:"Author"}),Object(f.jsx)(R,{required:!0,type:"text",name:"author",value:i.author,onChange:r}),Object(f.jsx)(V,{htmlFor:"total_amount",children:"Amount in stock"}),Object(f.jsx)(R,{required:!0,type:"number",name:"total_amount",value:i.total_amount,onChange:r}),Object(f.jsx)(V,{htmlFor:"pages",children:"Number of pages"}),Object(f.jsx)(R,{required:!0,type:"number",name:"pages",value:i.pages,onChange:r}),Object(f.jsx)(V,{htmlFor:"isbn",children:"ISBN"}),Object(f.jsx)(R,{required:!0,type:"number",name:"isbn",value:i.isbn,onChange:r})]}),Object(f.jsx)("section",{className:"button",children:Object(f.jsx)("button",{onClick:s,children:"Add to Library"})})]}),Object(f.jsx)(G,{})]})})};var rn,cn=function(){var n=W(),e=n.data;if(n.isLoading)return null;var t=e[e.length-1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(B,{children:Object(f.jsxs)(S,{children:[Object(f.jsx)("section",{className:"cover",children:Object(f.jsx)("img",{src:D,alt:"placeholder for bookcover"})}),Object(f.jsxs)("section",{className:"info",children:[Object(f.jsxs)("p",{className:"text",children:["Titel: ",t?t.title:""]}),Object(f.jsxs)("p",{className:"text",children:["Author: ",t?t.author:""]}),Object(f.jsxs)("p",{className:"text",children:["Amount in Stock: ",t?t.total_amount:""]}),Object(f.jsxs)("p",{className:"text",children:["Number of pages: ",t?t.pages:""]}),Object(f.jsxs)("p",{className:"text",children:["Isbn: ",t?t.isbn:""]})]})]})})})},sn=u.b.div(rn||(rn=Object(b.a)(["\n  height: 6rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-top: 4rem;\n"]))),ln=t(104),dn=t.n(ln),bn=t.p+"static/media/Chalenge_description.24166179.pdf",un=t(42),hn={content:{marginTop:"5%",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"},overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)",zIndex:25}};function jn(){var n=Object(a.useState)(!0),e=Object(p.a)(n,2),t=e[0],i=e[1];return Object(a.useEffect)((function(){window.innerWidth<900?i(!1):i(!0)}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(dn.a,{isOpen:t,onRequestClose:function(){i(!1)},style:hn,children:Object(f.jsx)(un.a,{file:bn,children:Object(f.jsx)(un.b,{width:600,pageNumber:1})})}),Object(f.jsxs)(E,{className:"home",children:[Object(f.jsx)(cn,{}),Object(f.jsxs)(sn,{children:[Object(f.jsx)(l.b,{to:"/books/all",children:Object(f.jsx)(L,{children:"Browse all books"})}),Object(f.jsx)(l.b,{to:"/books/add",children:Object(f.jsx)(L,{children:"Add a Book"})})]})]})]})}var pn,mn,xn=t(73),gn=t.n(xn),fn=t.p+"static/media/mario_bike.304fa388.jpg",On=t.p+"static/media/IMG-20170118-WA0002.92d624e5.jpg",wn=t.p+"static/media/IMG-20190829-WA0033 2.10c901ea.jpg",vn=t.p+"static/media/IMG_4740.35bab0fa.JPG",yn=t.p+"static/media/IMG_4885.2fb06af5.JPG",kn=t.p+"static/media/IMG_5341.d501e709.JPG",An=t.p+"static/media/IMG_7146.343d84ed.JPG",Nn=u.b.div(pn||(pn=Object(b.a)(["\n  height: auto;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  img.carouselImage {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100%;\n    max-width: 100%;\n  }\n"]))),Cn=Object(u.b)(E)(mn||(mn=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  align-items: flex-start;\n  @media (max-width: 480px) {\n    flex-direction: column;\n    overflow: hidden;\n  }\n\n  section.pictures {\n    position: sticky;\n    top: 20vh;\n    height: 60vh;\n    width: 40vw;\n    margin-left: 2%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    @media (max-width: 480px) {\n      position: relative;\n      width: 100vw;\n      top: 7vh;\n      height: auto;\n    }\n  }\n\n  section.text {\n    overflow-y: hidden;\n    position: sticky;\n    top: 20vh;\n    width: 60vw;\n    display: flex;\n    flex-direction: column;\n    .clamp-lines > span {\n      display: flow;\n      width: 60%;\n      margin-left: 2%;\n      line-height: 1.4;\n      font-size: 20px;\n      @media (max-width: 480px) {\n        width: 90%;\n        font-size: 12px;\n        height: 25%;\n      }\n    }\n    .clamp-lines.custom-class .clamp-lines__button {\n      height: 35px;\n      width: 85px;\n      background: white;\n      outline: transparent;\n      border: 2px solid rgba(28, 125, 226, 0.83);\n      border-radius: 10px;\n      margin-top: 2%;\n      margin-left: 2%;\n      text-align: center;\n      transition: background-color 0.6s ease-in-out, color 0.6s ease-in-out;\n      margin-bottom: 2%;\n      @media (max-width: 480px) {\n        font-size: 12px;\n        height: auto;\n        width: auto;\n        padding: 5px;\n      }\n    }\n    .clamp-lines.custom-class .clamp-lines__button:hover {\n      background: rgba(28, 125, 226, 0.83);\n      color: white;\n    }\n    h1 {\n      font-family: 'Great Vibes', cursive;\n      margin-left: 2%;\n      font-size: 78px;\n      color: rgba(92, 225, 230, 0.79);\n    }\n\n    h3 {\n      font-family: 'Dancing Script', cursive;\n      margin-left: 2%;\n      color: rgba(92, 225, 230, 0.79);\n      font-size: 48px;\n    }\n    @media (max-width: 480px) {\n      position: relative;\n      top: 0;\n      margin-top: 15%;\n      width: 100%;\n      h1 {\n        font-size: 48px;\n      }\n      h3 {\n        font-size: 22px;\n      }\n    }\n  }\n"]))),In=t(109);var Tn=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(Cn,{children:[Object(f.jsx)("section",{className:"pictures",children:Object(f.jsxs)(In.a,{itemPosition:"CENTER",style:{height:"100%",padding:"10px",justifyContent:"center",alignItems:"center"},itemsToShow:1,children:[Object(f.jsx)(Nn,{children:Object(f.jsx)("img",{className:"carouselImage",src:fn,alt:"profile of Mario"})}),Object(f.jsx)(Nn,{children:Object(f.jsx)("img",{className:"carouselImage",src:On,alt:"profile of Mario"})}),Object(f.jsx)(Nn,{children:Object(f.jsx)("img",{className:"carouselImage",src:wn,alt:"profile of Mario"})}),Object(f.jsx)(Nn,{children:Object(f.jsx)("img",{className:"carouselImage",src:vn,alt:"profile of Mario"})}),Object(f.jsx)(Nn,{children:Object(f.jsx)("img",{className:"carouselImage",src:yn,alt:"profile of Mario"})}),Object(f.jsx)(Nn,{children:Object(f.jsx)("img",{className:"carouselImage",src:kn,alt:"profile of Mario"})}),Object(f.jsx)(Nn,{children:Object(f.jsx)("img",{className:"carouselImage",src:An,alt:"profile of Mario"})})]})}),Object(f.jsxs)("section",{className:"text",children:[Object(f.jsx)("h1",{children:"Hi and welcome to my website!"}),Object(f.jsx)("h3",{children:"This is who I am:"}),Object(f.jsx)(gn.a,{text:"My name is Mario Marchiorello, I'm a young at heart web developer\nwith a non-linear past, a large portion of motivation, and a well-balanced mix of\nsoft and hard skills.\nI'm looking for a position as junior Front-End developer\nIn April I successfully completed a Software Boot Camp\nat the Propulsion Academy in Zurich. As part of this intensive training, I pitched an original\nidea for the final project, convinced the course management to select it, and led an international team\nin the implementation. The result, a web app, allows a climate protection organization to annotate\nphotos, collect the resulting data in a relational database, and store it in an open-source format for scientific purposes.\nAs team leader, I was responsible for communicating with the GOES Foundation, ensuring a\nhigh-quality solution, and choosing appropriate technologies (react.js, NPM, Django, REST, etc.).\n",lines:4,id:"custom",moreText:"read more",className:"custom-class",innerElement:"span",lessText:"read less",ellipsis:"..."}),Object(f.jsx)("h3",{children:"This is my special sauce:"}),Object(f.jsx)(gn.a,{text:"I have been interested in the field of web and application development for a long time and at the\nbeginning of 2021, with the move from the hospitality industry to software engineering, I decided\nto turn this passion into my profession. From my previous career I bring experience in customer\ncontact, motivation, energy, and flexibility.",lines:4,id:"custom",moreText:"read more",className:"custom-class",innerElement:"span",lessText:"read less",ellipsis:"..."})]})]})})},zn=t.p+"static/media/404_image.8c92d9d9.png";var Pn,Jn=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(E,{children:Object(f.jsxs)("div",{className:"not-found-page",children:[Object(f.jsx)("img",{src:zn,alt:"404 meme"}),Object(f.jsxs)("h3",{children:["Please follow ",Object(f.jsx)(l.b,{to:"/portfolio-page",children:" this link"})," to my website!"]})]})})})},Mn=t.p+"static/media/CV_EN.f29f0d77.pdf",Fn=Object(u.b)(E)(Pn||(Pn=Object(b.a)(["\n  .container {\n    -webkit-box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.79);\n    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.79);\n    margin-top: 2%;\n    margin-bottom: 2%;\n    border-radius: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1%;\n    @media (max-width: 480px) {\n      overflow: hidden;\n      max-width: 95%;\n    }\n  }\n"])));var En=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(Fn,{children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(un.a,{file:Mn,children:window.innerWidth<=480?Object(f.jsx)(un.b,{scale:.8,width:500,pageNumber:1}):Object(f.jsx)(un.b,{scale:.8,width:900,pageNumber:1})})})})})},Bn=new X.QueryClient;c.a.initialize("UA-211973159-1"),Object(s.a)().listen((function(n){c.a.set({page:n.pathname}),c.a.pageview(n.pathname)}));var Qn=function(){return Object(a.useEffect)((function(){c.a.pageview(window.location.pathname)}),[]),Object(f.jsx)(X.QueryClientProvider,{client:Bn,children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(z,{}),Object(f.jsx)(Z.a,{}),Object(f.jsxs)(d.c,{children:[Object(f.jsx)(d.a,{exact:!0,path:"/portfolio-page",component:Tn}),Object(f.jsx)(d.a,{exact:!0,path:"/cv",component:En}),Object(f.jsx)(d.a,{exact:!0,path:"/books",component:jn}),Object(f.jsx)(d.a,{exact:!0,path:"/books/all",component:K}),Object(f.jsx)(d.a,{exact:!0,path:"/books/add",component:on}),Object(f.jsx)(d.a,{exact:!0,path:"/books/edit/:id",component:tn}),Object(f.jsx)(d.a,{path:"*",component:Jn})]})]})})},Vn=t(204);r.a.render(Object(f.jsxs)(Vn.a,{injectFirst:!0,children:[Object(f.jsx)(F,{}),Object(f.jsx)(Qn,{})]}),document.getElementById("root"))},96:function(n,e){}},[[174,1,2]]]);
//# sourceMappingURL=main.d8247a0b.chunk.js.map