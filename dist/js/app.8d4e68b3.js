(function(t){function e(e){for(var s,n,r=e[0],c=e[1],l=e[2],v=0,p=[];v<r.length;v++)n=r[v],i[n]&&p.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0656":function(t,e,a){},"428c":function(t,e,a){t.exports=a.p+"img/logo_white.889e239a.png"},"4c65":function(t,e,a){"use strict";var s=a("6c45"),i=a.n(s);i.a},"544e":function(t,e,a){t.exports=a.p+"img/dash.6e912032.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},o=[],n={name:"app",components:{}},r=n,c=a("2877"),l=Object(c["a"])(r,i,o,!1,null,null,null),d=l.exports,v=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Nav",{staticStyle:{"margin-top":"60px"}}),a("About"),a("Project"),a("Footer")],1)},u=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",[a("div",{staticStyle:{"padding-left":"50px","padding-right":"50px"}},[a("b-navbar",{staticStyle:{"background-color":"#efe9e9"},attrs:{toggleable:"lg",type:"light",fixed:"top"}},[a("b-navbar-brand",{attrs:{href:"/"}},[t._v("Eva Huang")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{right:"",href:"/resume"}},[t._v("Resume")]),a("b-nav-item-dropdown",{attrs:{right:""}},[a("template",{slot:"button-content"},[a("em",[t._v("Portfolio")])]),a("b-dropdown-item",{attrs:{href:"/ohbot-website"}},[t._v("Website rennovation")]),a("b-dropdown-item",{attrs:{href:"/ohbot-ecommerce"}},[t._v("E-commerce Module")]),a("b-dropdown-item",{attrs:{href:"/ohbot-dashboard"}},[t._v("Logistics Dashboard")])],2),a("b-nav-item",{attrs:{right:"",href:"#contact"}},[t._v("Contact")]),a("b-nav-item",{attrs:{right:"",href:"https://github.com/ehuang42",target:"_blank"}},[t._v("Github")])],1)],1)],1)],1)])])},b=[],f={name:"nav",props:{}},h=f,g=(a("69eb"),Object(c["a"])(h,m,b,!1,null,"28ddff7d",null)),_=g.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"colorlib-about"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row text-center"},[s("h2",{staticClass:"bold"},[t._v("About")])]),s("div",{staticClass:"row row-padded-bottom"},[s("div",{staticClass:"col-md-5 animate-box",staticStyle:{"text-align":"center"}},[s("img",{staticClass:"img-responsive about-img",staticStyle:{height:"auto",width:"200px","box-shadow":"9px 15px 5px 0px rgba(214,214,214,1)"},attrs:{src:a("a46c"),alt:"html5 bootstrap template by colorlib.com"}})]),s("div",{staticClass:"col-md-6 col-md-push-1 animate-box"},[s("div",{staticClass:"about-desc"},[s("h2",[s("span",[t._v("Eva")]),s("span",[t._v("Huang")])]),s("div",{staticClass:"desc"},[s("div",{staticClass:"rotate"},[s("h2",{staticClass:"heading"},[t._v("About")])]),s("ul",[s("li",[t._v("I'm a "),s("mark",{staticStyle:{"font-weight":"700"}},[t._v("front end")]),t._v(" developer "),s("br"),t._v("(aspiring full stack dev).")]),s("li",[t._v(" I'm an international student from Taiwan.")]),s("li",[t._v(" I major in Computer Science (3rd) year at Georgia Tech. ")])]),s("p",[s("a",{staticClass:"btn btn-primary btn-outline",attrs:{href:"#project"}},[t._v("View My Works")])]),s("p",[s("a",{staticClass:"btn btn-primary btn-outline",staticStyle:{"background-color":"transparent"},attrs:{href:"#contact"}},[t._v("Contact me")])])])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 animate-box"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("p",{staticStyle:{"font-size":"20px",color:"#685454","text-align":"center"}},[t._v("Language & tools")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("ul",[s("li",[s("mark",[t._v("VueJS")])]),s("li",[t._v("ReactJS")]),s("li",[s("mark",[t._v("Java")])]),s("li",[t._v("Python")])])]),s("div",{staticClass:"col"},[s("ul",[s("li",[t._v("ElementUI")]),s("li",[t._v("CoreUI")]),s("li",[t._v("Mongo")]),s("li",[t._v("Postman")])])])]),s("p",{staticStyle:{"text-align":"center"}},[s("a",{staticClass:"btn btn-primary btn-outline",staticStyle:{"background-color":"transparent"},attrs:{role:"button",href:"/resume"}},[t._v("More")])])])])]),s("div",{staticClass:"col-md-4 animate-box"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("p",{staticStyle:{"font-size":"20px",color:"#685454","text-align":"center"}},[t._v("What's new ?")]),s("p",{staticStyle:{"text-align":"center"}},[s("ul",[s("li",[t._v("Minoring in Sustainable Cities ")]),s("li",[t._v("Finding an internship ")]),s("li",[t._v("Current President of Taiwanese American Student Association @GT")])])])])])]),s("div",{staticClass:"col-md-4 animate-box"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("p",{staticStyle:{"font-size":"20px",color:"#685454","text-align":"center"}},[t._v("Interests")]),s("p",{staticStyle:{"text-align":"center"}},[s("ul",[s("li",[t._v("Ballroom Dancing")]),s("li",[t._v("Student Radio")]),s("li",[t._v("Writing")])])]),s("p",{staticStyle:{"text-align":"center"}},[s("a",{staticClass:"btn btn-primary btn-outline",staticStyle:{"background-color":"transparent"},attrs:{role:"button",href:"https://medium.com/@eva8712940180"}},[t._v("Medium")])])])])])])])])}],x={name:"About",props:{}},w=x,S=Object(c["a"])(w,C,y,!1,null,null,null),k=S.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"project"}},[a("div",{attrs:{id:"colorlib-blog"}},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-md-offset-0 text-center animate-box intro-heading"},[a("span",[t._v("Projects")]),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Web dev <3"}},[t._v("What I'm passionate about. . .")])],1)]),t._m(1),t._m(2)])])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-center"},[a("h2",{staticClass:"bold"},[t._v("Projects")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"rotate"},[a("h2",{staticClass:"heading"},[t._v("Projects")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"article animate-box"},[s("a",{staticClass:"blog-img",attrs:{href:"/ohbot-website"}},[s("img",{staticClass:"img-responsive",attrs:{src:a("7b55"),alt:"html5 bootstrap by colorlib.com"}}),s("div",{staticClass:"overlay"}),s("div",{staticClass:"link"},[s("span",{staticClass:"read"},[t._v("More")])])]),s("div",{staticClass:"desc"},[s("span",{staticClass:"meta"},[t._v("July, 2019")]),s("p",{staticStyle:{"font-size":"32px"}},[s("a",{staticStyle:{color:"black"},attrs:{href:"/ohbot-website"}},[t._v("Official Website Renovation")])]),s("p",[t._v("This summer I owned the project of renovating my company's public-facing website ! ")])])])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"article animate-box"},[s("a",{staticClass:"blog-img",attrs:{href:"/ohbot-dashboard"}},[s("img",{staticClass:"img-responsive",attrs:{src:a("cbbf"),alt:"html5 bootstrap by colorlib.com"}}),s("div",{staticClass:"overlay"}),s("div",{staticClass:"link"},[s("span",{staticClass:"read"},[t._v("More")])])]),s("div",{staticClass:"desc"},[s("span",{staticClass:"meta"},[t._v("Aug, 2019")]),s("p",{staticStyle:{"font-size":"32px"}},[s("a",{staticStyle:{color:"black"},attrs:{href:"/ohbot-dashboard"}},[t._v("E-Commerce Platform")])]),s("p",[t._v("First time doing solo web development. I built a e-commerce web module to support customized client needs.")])])])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"article animate-box"},[s("a",{staticClass:"blog-img",attrs:{href:"/ohbot-ecommerce"}},[s("img",{staticClass:"img-responsive",attrs:{src:a("544e"),alt:"html5 bootstrap by colorlib.com"}}),s("div",{staticClass:"overlay"}),s("div",{staticClass:"link"},[s("span",{staticClass:"read"},[t._v("More")])])]),s("div",{staticClass:"desc"},[s("span",{staticClass:"meta"},[t._v("June - Aug., 2019")]),s("p",{staticStyle:{"font-size":"32px"}},[s("a",{staticStyle:{color:"black"},attrs:{href:"/ohbot-ecommerce"}},[t._v("Logistics Dashboard")])]),s("p",[t._v("I took part building the dynamic business logistics dashboard for our clients during the majority of my internship in Taiwan.")])])])])])}],E={name:"Project",props:{}},O=E,I=Object(c["a"])(O,j,P,!1,null,"209549f7",null),A=I.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{attrs:{id:"contact"}},[a("footer",[a("div",{staticStyle:{"background-color":"#efe9e9"},attrs:{id:"footer"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-center"},[a("p",{staticStyle:{"font-size":"36px"}},[t._v(" Get In Touch! ")]),a("p",[a("ul",{staticClass:"social-icons"},[a("li",[a("a",{staticClass:"linkedin",attrs:{href:"https://www.linkedin.com/in/ehuang42/"}},[a("i",{staticClass:"fa fa-linkedin"})])]),a("li",[a("a",{staticClass:"github",attrs:{href:"https://github.com/ehuang42"}},[a("i",{staticClass:"fa fa-github"})])]),a("li",[a("a",{staticClass:"dribbble",attrs:{href:"mailto:ehuang42@gatech.edu"}},[a("i",{staticClass:"fa fa-envelope"})])])])]),a("p",[t._v("\n\t\t\t\t\t\t\t\tContent ©, with "),a("i",{staticClass:"icon-heart4",attrs:{"aria-hidden":"true"}}),t._v(" by Eva\n\t\t\t\t\t\t\t")])])])])])])])])}],T={name:"Footer"},F=T,J=(a("760c"),Object(c["a"])(F,M,$,!1,null,null,null)),N=J.exports,z={name:"Home",props:{msg:String},components:{Nav:_,About:k,Project:A,Footer:N}},D=z,W=Object(c["a"])(D,p,u,!1,null,null,null),R=W.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Nav"),t._m(0),a("Footer")],1)},H=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"colorlib-services"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row text-center"},[s("h2",{staticClass:"bold"},[t._v("Resume")])]),s("div",{staticClass:"services-flex"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-md-offset-0 animate-box intro-heading"},[s("span",[t._v("Resume")]),s("p",[s("a",{staticClass:"btn btn-primary btn-outline",attrs:{href:"https://drive.google.com/file/d/1SEJ9sJq64Fr5P6tG7zGqlJjVyiKKpGYo/view?usp=sharing",target:"_blank"}},[t._v("Download PDF")])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"services animate-box",staticStyle:{"font-size":"18px"}},[s("div",{staticClass:"col-md"},[s("p",[t._v("Education : "),s("b",[t._v("Georgia")]),t._v(" Institute of "),s("b",[t._v("Tech")]),t._v("nology")])]),s("div",{staticClass:"col-md"},[s("ul",[s("li",[t._v("Graduate Date: Spring 2021")]),s("li",[t._v("Bachelor of Science in Computer Science")]),s("li",[t._v("GPA: 3.7")])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"services animate-box",staticStyle:{"font-size":"18px",padding:"40px"}},[s("div",{staticClass:"col-md",staticStyle:{"margin-top":"-60px"}},[s("p",[t._v("Professional Experience :")]),s("div",{staticClass:"row",staticStyle:{"padding-top":"60px"}},[s("div",{staticClass:"col-md-4 col-sm-5"},[s("a",{attrs:{href:"https://home.stackfolio.com/",target:"_blank"}},[s("img",{staticStyle:{height:"auto",width:"200px"},attrs:{src:a("9613")}})]),s("p",[s("a",{staticClass:"btn btn-primary btn-outline",staticStyle:{"margin-top":"20px"},attrs:{href:"/"}},[t._v("View projects!")])])]),s("div",{staticClass:"col-8"},[s("p",{staticStyle:{color:"#58b368","font-size":"20px"}},[t._v("Company: Stackfolio")]),s("p",{staticStyle:{"font-style":"italic"}},[t._v("Established startup aims at powering whole loan trading with Machine learning at online marketplace")]),s("p",[t._v("Position: "),s("b",[t._v(" QA ")]),t._v("Intern")]),s("p",[t._v("Date: "),s("b",[t._v("Aug. 2019 ")]),t._v("to"),s("b",[t._v(" present")])])]),s("div",{staticClass:"col-12 border",staticStyle:{"padding-top":"30px"}},[s("p",{attrs:{className:"smalltext"}},[s("ul",[s("li",[t._v("Working with dev team using JIRA to deliver products with optimal user experience")]),s("li",[t._v("Write up testing results and user acceptance log")])])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 col-sm-5"},[s("a",{attrs:{href:"https://www.ohbottech.com",target:"_blank"}},[s("img",{staticClass:"image-ob",staticStyle:{height:"150px",width:"auto"},attrs:{src:a("428c")}})]),s("p",[s("a",{staticClass:"btn btn-primary btn-outline",staticStyle:{"margin-top":"20px"},attrs:{href:"/"}},[t._v("View projects!")])])]),s("div",{staticClass:"col-8"},[s("p",{staticStyle:{color:"#009bef","font-size":"20px"}},[t._v("Company: OH!Bot")]),s("p",{staticStyle:{"font-style":"italic"}},[t._v("New startup focusing on AI powered chatbot as CRM tool for small businesses")]),s("p",[t._v("Position: "),s("b",[t._v(" Software Engineering ")]),t._v("Intern")]),s("p",[t._v("Date: "),s("b",[t._v("June 2019 ")]),t._v("to"),s("b",[t._v(" Aug. 2019")])])]),s("div",{staticClass:"col-12 border",staticStyle:{"padding-top":"30px",border:"3px"}},[s("p",{attrs:{className:"smalltext"}},[s("ul",[s("li",[t._v("Developed modular front-end and back-end applications using HTML, CSS, VueJS, AJAX, NodeJS, deployed applications visited regularly for vendor to manage 1000+ active users of their brand. ")]),s("li",[t._v("Worked closely with 2 business vendors to deliver custom chatbot functions and user experience")]),s("li",[t._v("Frequently used tools: Postman API, Element UI, MongoDB compass, AWS service")])])])])])]),s("div",{staticClass:"row",staticStyle:{"padding-top":"60px"}},[s("div",{staticClass:"col-md-4 col-sm-5"},[s("a",{attrs:{href:"https://home.stackfolio.com/",target:"_blank"}},[s("img",{staticStyle:{height:"auto",width:"200px"},attrs:{src:a("c393")}})])]),s("div",{staticClass:"col-8"},[s("p",{staticStyle:{color:"#e6b31e","font-size":"20px"}},[t._v("College of Computing")]),s("p",[t._v("Position: "),s("b",[t._v(" CS ")]),t._v("Tutor")]),s("p",[t._v("Date: "),s("b",[t._v("Aug. 2018 ")]),t._v("to"),s("b",[t._v("May 2019")])])]),s("div",{staticClass:"col-12 border",staticStyle:{"padding-top":"30px"}},[s("p",{attrs:{className:"smalltext"}},[s("ul",[s("li",[t._v("Covered courses: Intro to Computing, Intro to OOP, Data Structure and Algorithm")]),s("li",[t._v("Communicate technical topics with Oracle tutorials and self-coded example Java classes")]),s("li",[t._v("View sample cases I use on "),s("a",{attrs:{href:"https://github.com/ehuang42/OOPTutoring"}},[t._v("github")])])])])])])])]),s("div",{staticClass:"col-md"})])])])])}],B={name:"Home",props:{msg:String},components:{Nav:_,Footer:N}},V=B,U=(a("663f"),Object(c["a"])(V,G,H,!1,null,"072879f1",null)),L=U.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Nav"),t._m(0),t._m(1),a("Footer")],1)},X=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner",staticStyle:{"justify-content":"center","text-align":"center"}},[a("p",{staticClass:"title"},[t._v(" Renovating Company Website\n            "),a("br"),a("a",{staticClass:"btn btn-primary btn-outline",attrs:{href:"https://www.ohbottech.com/"}},[t._v("Live Website")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col center"},[s("img",{staticClass:"shadow image",attrs:{src:a("ab34")}})]),s("div",{staticClass:"col"},[s("p",{staticClass:"center bullet"},[t._v("Challenge")]),s("p",{staticClass:"detail"},[t._v("The startup company OH!Bot I interned at over the summer decided to change their marketing strategies.")]),s("p",{staticClass:"center bullet"},[t._v("Solution")]),s("p",{staticClass:"detail"},[t._v("Redesign the UX flow of our official website -> "),s("br"),s("mark",[t._v("rebuild the website")])]),s("p",{staticClass:"center bullet"},[t._v("My Role ")]),s("p",{staticClass:"detail"},[t._v("Coordinate with UIUX designer and marketing strategists and clients to deliver final product.")])])]),s("hr"),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("p",{staticClass:"center bullet"},[t._v("Personal Takeaway")]),s("p",{staticClass:"detail center"},[t._v(" The startup company OH! Bot I interned at over the summer decided to change their marketing strategies.")])])])])}],K={name:"website",props:{msg:String},components:{Nav:_,Project:A,Footer:N}},Q=K,Y=(a("4c65"),Object(c["a"])(Q,q,X,!1,null,"66933eba",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("Nav"),a("Project"),a("Footer")],1)},et=[],at={name:"Ecomm",props:{msg:String},components:{Nav:_,About:k,Project:A,Footer:N}},st=at,it=Object(c["a"])(st,tt,et,!1,null,"f91438e2",null),ot=it.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Nav"),a("Project"),a("Footer")],1)},rt=[],ct={name:"Dash",props:{msg:String},components:{Nav:_,About:k,Project:A,Footer:N}},lt=ct,dt=Object(c["a"])(lt,nt,rt,!1,null,null,null),vt=dt.exports;s["default"].use(v["a"]);var pt=new v["a"]({scrollBehavior:function(){return{x:0,y:0}},mode:"history",base:"/dist",routes:[{path:"/",name:"home",component:R},{path:"/resume",name:"resume",component:L},{path:"/ohbot-website",name:"website",component:Z},{path:"/ohbot-ecommerce",name:"ecomm",component:ot},{path:"/ohbot-dashboard",name:"dash",component:vt}]}),ut=a("5f5b");a("f9e3"),a("2dd8");s["default"].use(ut["a"]),s["default"].config.productionTip=!1,new s["default"]({router:pt,render:function(t){return t(d)}}).$mount("#app")},"663f":function(t,e,a){"use strict";var s=a("0656"),i=a.n(s);i.a},"69eb":function(t,e,a){"use strict";var s=a("740f"),i=a.n(s);i.a},"6c45":function(t,e,a){},"740f":function(t,e,a){},"760c":function(t,e,a){"use strict";var s=a("b675"),i=a.n(s);i.a},"7b55":function(t,e,a){t.exports=a.p+"img/website.e7c88f70.png"},9613:function(t,e,a){t.exports=a.p+"img/stackfolio.9530510f.png"},a46c:function(t,e,a){t.exports=a.p+"img/about.6f2ab83d.jpg"},ab34:function(t,e,a){t.exports=a.p+"img/front.fcfc870c.png"},b675:function(t,e,a){},c393:function(t,e,a){t.exports=a.p+"img/coc.a667b85c.png"},cbbf:function(t,e,a){t.exports=a.p+"img/ecomm.e02f8502.png"}});
//# sourceMappingURL=app.8d4e68b3.js.map