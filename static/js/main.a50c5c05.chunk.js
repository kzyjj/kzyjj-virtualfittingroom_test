(this["webpackJsonpdressing-room"]=this["webpackJsonpdressing-room"]||[]).push([[0],{65:function(e,t,i){},66:function(e,t,i){},77:function(e,t,i){},78:function(e,t,i){"use strict";i.r(t);i(0);var s=i(17),c=i.n(s),a=(i(65),i(66),i(89)),o=i(88),n=i(84),l=i(90),r=i(87),g=(i(24),i(1));function m(){var e=i(68),t=function(e){var t=e.target.files[0],i=new FileReader;i.readAsDataURL(t),i.onload=function(e){var t=e.target.result;console.log(t),s(t)}},s=function(e){var t=new Image;t.src=e,t.onload=function(){c(t)}},c=function(t){var i=document.createElement("canvas"),s=i.getContext("2d"),c=t.width,a=t.height;i.width=c,i.height=a,s.drawImage(t,0,0,500,500);var o=i.toDataURL("image/jpeg",.8);e.writeFile("public/images/upload.png",o),i.toBlob((function(e){}),"image/webp",.8)};return Object(g.jsxs)(a.a,{className:"text-center",style:{color:"#000"},children:[Object(g.jsx)(a.a.Img,{variant:"top",src:"images/D2.gif"}),Object(g.jsx)(o.a,{bg:"light",expand:"lg",children:Object(g.jsxs)(n.a,{children:[Object(g.jsx)(o.a.Brand,{href:"#home",children:"Virtual DressingRoom"}),Object(g.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsxs)(o.a.Collapse,{id:"basic-navbar-nav",children:[Object(g.jsx)(l.a,{className:"me-auto",children:Object(g.jsx)(l.a.Link,{href:"https://kzyjj.github.io/backgroundrm_test/",target:"_blank",children:"\u53bb\u80cc\u76f8\u7247"})}),Object(g.jsxs)(r.a,{title:"\u4e0a\u50b3\u4f60\u7684\u8863\u670d",id:"basic-nav-dropdown",children:[Object(g.jsxs)(r.a.Item,{href:"#action/3.1",children:["\u4e0a\u50b3\u4e0a\u3001\u4e0b\u8eab :",Object(g.jsx)("div",{className:"input",children:Object(g.jsx)("input",{type:"file",onClick:function(e){return e.stopPropagation()},accept:".jpg, .png",id:"imageUpLoad",name:"imageUpLoad",onChange:t})})]}),Object(g.jsxs)(r.a.Item,{href:"#action/3.2",children:["\u4e0a\u50b3\u978b\u5b50\u3001\u5305\u5305 :",Object(g.jsx)("div",{className:"input",children:Object(g.jsx)("input",{type:"file",onClick:function(e){return e.stopPropagation()},accept:".jpg, .png",id:"imageUpLoad",name:"imageUpLoad",onChange:t})})]})]})]})]})})]})}var d=i(16);function h(e){var t=Object(d.c)((function(e){return e.NavTabReducer.navPills}));return Object(g.jsx)("div",{children:Object(g.jsx)(l.a.Item,{as:"ul",className:"nav nav-tabs justify-content-center",children:t.map((function(e,t){return Object(g.jsx)(l.a.Item,{as:"li",children:Object(g.jsx)(l.a.Link,{as:"a","btn-default":!0,"data-toggle":"tab",href:"#".concat(e.tabName),children:e.showName})},t)}))})})}var p="CHOOSE_CLOTHES",b=i(57);function j(e){var t=e.item,i=Object(d.b)();return Object(g.jsxs)(a.a,{children:[Object(g.jsx)("img",{src:t.imgSrc_jpg,alt:"123"}),Object(g.jsx)(b.a,{variant:"secondary",size:"sm",onClick:function(){i({type:p,clothes:t})},children:"\u8a66\u8863"})]})}var u=i(85);function O(){var e=Object(d.c)((function(e){return e.ProductListReducer})),t=e.topcloth,i=e.botcloth,s=e.shoes,c=e.handbags;return Object(g.jsx)(u.a,{className:"well",children:Object(g.jsxs)("div",{className:"tab-content",children:[Object(g.jsx)("div",{className:"tab-pane container active",id:"tabTopClothes",children:Object(g.jsx)("div",{className:"row w-100",children:t.map((function(e,t){return Object(g.jsx)(u.a,{className:"col-3",children:Object(g.jsx)(j,{item:e})},t)}))})}),Object(g.jsx)("div",{className:"tab-pane container fade",id:"tabBotClothes",children:Object(g.jsx)("div",{className:"row w-100",children:i.map((function(e,t){return Object(g.jsx)(u.a,{className:"col-3",children:Object(g.jsx)(j,{item:e})},t)}))})}),Object(g.jsx)("div",{className:"tab-pane container fade",id:"tabShoes",children:Object(g.jsx)("div",{className:"row w-100",children:s.map((function(e,t){return Object(g.jsx)(u.a,{className:"col-3",children:Object(g.jsx)(j,{item:e})},t)}))})}),Object(g.jsx)("div",{className:"tab-pane container fade",id:"tabHandBags",children:Object(g.jsx)("div",{className:"row w-100",children:c.map((function(e,t){return Object(g.jsx)(u.a,{className:"col-3",children:Object(g.jsx)(j,{item:e})},t)}))})})]})})}var x=i(86);function _(){return Object(g.jsx)(x.a,{children:Object(g.jsx)("div",{className:"row",style:{padding:"10px"},children:Object(g.jsx)(h,{})})})}function f(){var e=Object(d.c)((function(e){return e.ModelReducer}));return Object(g.jsx)(n.a,{children:Object(g.jsx)(x.a,{children:Object(g.jsxs)("div",{className:"contain",children:[Object(g.jsx)("div",{className:"bikinitop",style:{width:500,height:500,background:'url("'.concat(e.topclothes,'")'),backgroundRepeat:"no-repeat",position:"absolute",top:"3%",left:"-5%",zIndex:3,transform:"scale(0.5)"}}),Object(g.jsx)("div",{className:"bikinibottom",style:{width:500,height:500,background:'url("'.concat(e.botclothes,'")'),backgroundRepeat:"no-repeat",position:"absolute",top:"35%",left:"-5%",zIndex:2,transform:"scale(0.5)"}}),Object(g.jsx)("div",{className:"handbag",style:{width:300,height:300,background:'url("'.concat(e.handbags,'")'),backgroundRepeat:"no-repeat",position:"absolute",bottom:"15%",right:"30%",transform:"scale(0.5)",zIndex:4}}),Object(g.jsx)("div",{className:"feet",style:{width:300,height:300,background:'url("'.concat(e.shoes,'")'),backgroundRepeat:"no-repeat",position:"absolute",top:"60%",right:"30%",transform:"scale(0.5)",zIndex:1}})]})})})}i(77);function v(){return Object(g.jsxs)(n.a,{children:[Object(g.jsx)(x.a,{children:Object(g.jsx)(m,{})}),Object(g.jsxs)(x.a,{children:[Object(g.jsx)(f,{}),Object(g.jsx)(_,{}),Object(g.jsx)("div",{className:"row",style:{padding:"10px 10px"},children:Object(g.jsx)(O,{})})]})]})}var S=i(7),y=i(39);function N(){return Object(g.jsxs)(n.a,{children:[Object(g.jsx)(o.a,{bg:"light",expand:"lg",children:Object(g.jsxs)(n.a,{children:[Object(g.jsx)(o.a.Brand,{href:"#home",children:"Virtual DressingRoom"}),Object(g.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsx)(l.a,{className:"me-auto",children:Object(g.jsx)(l.a.Link,{as:y.b,to:"/DressingRoom",children:"\u9032\u5165\u8a66\u8863\u9593"})})})]})}),Object(g.jsxs)(x.a,{children:[Object(g.jsx)("div",{class:"frame",children:Object(g.jsx)("img",{src:"images/firstpage.gif",alt:"123"})}),Object(g.jsx)("div",{class:"frame",children:Object(g.jsx)("img",{src:"images/222.gif"})}),Object(g.jsx)("div",{class:"frame",children:Object(g.jsx)("img",{src:"images/333.gif"})}),Object(g.jsx)("div",{class:"frame",children:Object(g.jsx)("img",{src:"images/444.gif"})}),Object(g.jsx)("div",{class:"frame",children:Object(g.jsx)("img",{src:"images/555.gif"})})]})]})}function L(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(S.c,{children:Object(g.jsx)(S.a,{path:"/",element:Object(g.jsx)(N,{})})}),Object(g.jsx)(S.c,{children:Object(g.jsx)(S.a,{path:"/DressingRoom",element:Object(g.jsx)(v,{})})})]})}var w=function(){return Object(g.jsx)(y.a,{children:Object(g.jsx)(L,{})})},A=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,91)).then((function(t){var i=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;i(e),s(e),c(e),a(e),o(e)}))},q=i(52),k=i(2),C={topclothes:"",botclothes:"",shoes:"",handbags:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return e[t.clothes.type]=t.clothes.imgSrc_png,Object(k.a)({},e);default:return Object(k.a)({},e)}},I={navPills:[{tabName:"tabTopClothes",showName:"\u4e0a\u8eab",type:"topclothes"},{tabName:"tabBotClothes",showName:"\u4e0b\u8eab",type:"botclothes"},{tabName:"tabShoes",showName:"\u978b\u5b50",type:"shoes"},{tabName:"tabHandBags",showName:"\u5305\u5305",type:"handbags"},{tabName:"tabHandBags",showName:"\u6211\u7684\u8863\u6ac3-\u4e0a\u3001\u4e0b\u8eab",type:"handbags"},{tabName:"tabHandBags",showName:"\u6211\u7684\u8863\u6ac3-\u978b\u5b50\u3001\u5305\u5305",type:"handbags"}]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;return Object(k.a)({},e)},T={topcloth:[{id:"topcloth_1",type:"topclothes",name:"\u4e0a\u88631",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/topcloth1.png",imgSrc_png:"./images/clothes/topcloth1.png"},{id:"topcloth_2",type:"topclothes",name:"\u4e0a\u88632",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/topcloth2.png",imgSrc_png:"./images/clothes/topcloth2.png"},{id:"topcloth_3",type:"topclothes",name:"\u4e0a\u88633",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/topcloth3.png",imgSrc_png:"./images/clothes/topcloth3.png"},{id:"topcloth_4",type:"topclothes",name:"\u4e0a\u88634",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/topcloth4.png",imgSrc_png:"./images/clothes/topcloth4.png"},{id:"topcloth_5",type:"topclothes",name:"\u4e0a\u88635",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/topcloth5.png",imgSrc_png:"./images/clothes/topcloth5.png"},{id:"topcloth_6",type:"topclothes",name:"\u4e0a\u88636 ",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/topcloth6.png",imgSrc_png:"./images/clothes/topcloth6.png"}],botcloth:[{id:"botcloth_1",type:"botclothes",name:"\u4e0b\u8eab1",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth1.png",imgSrc_png:"./images/clothes/botcloth1.png"},{id:"botcloth_2",type:"botclothes",name:"\u4e0b\u8eab2",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth2.png",imgSrc_png:"./images/clothes/botcloth2.png"},{id:"botcloth_3",type:"botclothes",name:"\u4e0b\u8eab3",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth3.png",imgSrc_png:"./images/clothes/botcloth3.png"},{id:"botcloth_4",type:"botclothes",name:"\u4e0b\u8eab4",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth4.png",imgSrc_png:"./images/clothes/botcloth4.png"},{id:"botcloth_5",type:"botclothes",name:"\u4e0b\u8eab5",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth5.png",imgSrc_png:"./images/clothes/botcloth5.png"},{id:"botcloth_6",type:"botclothes",name:"\u4e0b\u8eab6",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth6.png",imgSrc_png:"./images/clothes/botcloth6.png"},{id:"botcloth_6",type:"botclothes",name:"\u4e0b\u8eab6",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth7.png",imgSrc_png:"./images/clothes/botcloth7.png"},{id:"botcloth_6",type:"botclothes",name:"\u4e0b\u8eab6",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth8.png",imgSrc_png:"./images/clothes/botcloth8.png"},{id:"botcloth_6",type:"botclothes",name:"\u4e0b\u8eab6",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth9.png",imgSrc_png:"./images/clothes/botcloth9.png"},{id:"botcloth_6",type:"botclothes",name:"\u4e0b\u8eab6",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth10.png",imgSrc_png:"./images/clothes/botcloth10.png"},{id:"botcloth_6",type:"botclothes",name:"\u4e0b\u8eab6",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth11.png",imgSrc_png:"./images/clothes/botcloth11.png"},{id:"botcloth_6",type:"botclothes",name:"\u4e0b\u8eab6",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth12.png",imgSrc_png:"./images/clothes/botcloth12.png"},{id:"botcloth_6",type:"botclothes",name:"\u4e0b\u8eab6",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/clothes/botcloth13.png",imgSrc_png:"./images/clothes/botcloth13.png"}],shoes:[{id:"shoes_1",type:"shoes",name:"\u978b\u5b501",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/shoes/shoes1.png",imgSrc_png:"./images/shoes/shoes1.png"},{id:"shoes_2",type:"shoes",name:"\u978b\u5b502",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/shoes/shoes2.png",imgSrc_png:"./images/shoes/shoes2.png"},{id:"shoes_3",type:"shoes",name:"\u978b\u5b503",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/shoes/shoes3.png",imgSrc_png:"./images/shoes/shoes3.png"},{id:"shoes_4",type:"shoes",name:"\u978b\u5b504",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/shoes/shoes4.png",imgSrc_png:"./images/shoes/shoes4.png"},{id:"shoes_5",type:"shoes",name:"\u978b\u5b505",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/shoes/shoes5.png",imgSrc_png:"./images/shoes/shoes5.png"}],handbags:[{id:"handbag_1",type:"handbags",name:"\u5305\u53051",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/handbags/handbag1.png",imgSrc_png:"./images/handbags/handbag1.png"},{id:"handbag_2",type:"handbags",name:"\u5305\u53052",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/handbags/handbag2.png",imgSrc_png:"./images/handbags/handbag2.png"},{id:"handbag_3",type:"handbags",name:"\u5305\u53053",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",imgSrc_jpg:"./images/handbags/handbag3.png",imgSrc_png:"./images/handbags/handbag3.png"}]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;return Object(k.a)({},e)},P=Object(q.a)({NavTabReducer:B,ProductListReducer:D,ModelReducer:R}),z=Object(q.b)(P);c.a.render(Object(g.jsx)(d.a,{store:z,children:Object(g.jsx)(w,{})}),document.getElementById("root")),A()}},[[78,1,2]]]);
//# sourceMappingURL=main.a50c5c05.chunk.js.map