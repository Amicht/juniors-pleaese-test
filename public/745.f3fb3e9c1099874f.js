"use strict";(self.webpackChunkjuniors_please_angular=self.webpackChunkjuniors_please_angular||[]).push([[745],{3226:(_,m,a)=>{a.d(m,{M:()=>o});var v=a(5526),n=a(5879);let o=(()=>{class g{}return g.\u0275fac=function(p){return new(p||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["app-linear-btn"]],inputs:{text:"text",link:"link"},standalone:!0,features:[n.jDz],decls:5,vars:2,consts:[[3,"routerLink"],[1,"outer","shadow-sm"],[1,"button"],[1,"text"]],template:function(p,f){1&p&&(n.TgZ(0,"a",0)(1,"div",1)(2,"div",2)(3,"div",3),n._uU(4),n.qZA()()()()),2&p&&(n.s9C("routerLink",f.link),n.xp6(4),n.hij(" ",f.text," "))},dependencies:[v.rH],styles:[".tilt-bg[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:-1}.outer[_ngcontent-%COMP%]{background:var(--unnamed-color-ecfafe) 0% 0% no-repeat padding-box;background:#ECFAFE 0% 0% no-repeat padding-box;width:-moz-fit-content;width:fit-content}.button[_ngcontent-%COMP%]{border:none;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;display:block;background:transparent linear-gradient(180deg,var(--unnamed-color-4f9dbc) 0%,#50A0C0 34%,#5DC4F1 100%) 0% 0% no-repeat padding-box;background:transparent linear-gradient(180deg,#4F9DBC 0%,#50A0C0 34%,#5DC4F1 100%) 0% 0% no-repeat padding-box;background-size:5% 100%;background-position:left bottom;transition:all .5s ease-out}.button[_ngcontent-%COMP%]:hover{background-size:200% 100%;cursor:pointer;background-position:left bottom}.button[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{text-align:center;font-size:1rem;line-height:2.5rem;color:var(--secondary);transition:all .6s ease-out;display:block;padding:.5rem 2.75rem .5rem 1.5rem}.button[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]:hover{color:var(--primary)}"]}),g})()},4512:(_,m,a)=>{a.d(m,{S:()=>P});var v=a(3226),n=a(5879);const o=function(t,i){return{"is-active":t,"lighten-bg":i}};let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-burger-btn"]],inputs:{show:"show"},standalone:!0,features:[n.jDz],decls:4,vars:5,consts:[["id","hamburger-6",1,"hamburger","py-1","px-1","mt-0","expended-on-hover",3,"click"],[1,"line"]],template:function(e,r){1&e&&(n.TgZ(0,"div",0),n.NdJ("click",function(){return r.show=!r.show}),n._UZ(1,"span",1)(2,"span",1)(3,"span",1),n.qZA()),2&e&&n.Tol(n.WLB(2,o,r.show,!r.show))},styles:[".lighten-bg[_ngcontent-%COMP%]{background-color:#ffffff4d}.hamburger[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:50px;height:5px;background-color:var(--secondary);display:block;margin:8px auto;transition:all .3s ease-in-out}.hamburger[_ngcontent-%COMP%]:hover{cursor:pointer}#hamburger-6.is-active[_ngcontent-%COMP%]{transition:all .3s ease-in-out;transition-delay:.6s;transform:rotate(45deg)}#hamburger-6.is-active[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{background-color:var(--info)}#hamburger-6.is-active[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:nth-child(2){width:0px}#hamburger-6.is-active[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:nth-child(1), #hamburger-6.is-active[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:nth-child(3){transition-delay:.3s}#hamburger-6.is-active[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:nth-child(1){transform:translateY(13px)}#hamburger-6.is-active[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:nth-child(3){transform:translateY(-13px) rotate(90deg)}"]}),t})();var d=a(5526),p=a(6814),f=a(6303),c=a(1555);function u(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"div")(1,"a",9)(2,"div",10),n.NdJ("click",function(){n.CHM(e);const l=n.oxw(2);return n.KtG(l.close())}),n._uU(3),n.qZA()()()}if(2&t){const e=i.$implicit;n.xp6(1),n.s9C("routerLink",e.href),n.xp6(2),n.hij(" ",e.name," ")}}function s(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"div",3),n._UZ(1,"div",4),n.TgZ(2,"div",5),n.YNc(3,u,4,2,"div",6),n.TgZ(4,"div",7)(5,"app-linear-btn",8),n.NdJ("click",function(){n.CHM(e);const l=n.oxw();return n.KtG(l.signOut())}),n.qZA()()()()}if(2&t){const e=n.oxw();n.xp6(3),n.Q6J("ngForOf",e.navs)}}let h=(()=>{class t{constructor(e,r){this.offcanvasService=e,this.authService=r,this.navs=[{name:"Home",href:"/"},{name:"Find a Junior",href:"/juniors"}],this.show=!1}open(e){this.offcanvasService.open(e,{position:"end",backdrop:"static",panelClass:"bg-secondary text-info overflow-auto"}),this.show=!0}close(){this.offcanvasService.dismiss(),this.show=!1}signOut(){this.authService.logoutUser(),this.close()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(f._B),n.Y36(c.e))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-navbar-offcanvas"]],standalone:!0,features:[n.jDz],decls:4,vars:3,consts:[["content",""],[1,"burgerBtn","px-0","py-0",3,"click"],[3,"show"],[1,"bg-secondary","text-primary"],[1,"offcanvas-header","my-3"],[1,"text-center","offcanvas-body"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-5"],["link","/","text","Sign Out",3,"click"],[3,"routerLink"],[1,"fs-3","my-3","hover-underline-animation","text-light",3,"click"]],template:function(e,r){if(1&e){const l=n.EpF();n.YNc(0,s,6,1,"ng-template",null,0,n.W1O),n.TgZ(2,"div",1),n.NdJ("click",function(){n.CHM(l);const k=n.MAs(1);return n.KtG(r.show?r.close():r.open(k))}),n._UZ(3,"app-burger-btn",2),n.qZA()}2&e&&(n.xp6(2),n.Udp("z-index",2147483),n.xp6(1),n.Q6J("show",r.show))},dependencies:[p.ax,d.rH,v.M,g],styles:['.burgerBtn[_ngcontent-%COMP%]{z-index:2147483;position:relative}.hover-underline-animation[_ngcontent-%COMP%]{display:inline-block;position:relative;color:var(--info)}.hover-underline-animation[_ngcontent-%COMP%]:after{content:"";position:absolute;width:100%;transform:scaleX(0);height:10px;bottom:0;left:0;background-color:var(--info);transform-origin:bottom right;transition:transform .25s ease-out}.hover-underline-animation[_ngcontent-%COMP%]:hover:after{transform:scaleX(1);transform-origin:bottom left}.sidenav[_ngcontent-%COMP%]{overflow-x:hidden;transition:.5s;height:100vh;position:fixed;z-index:1001;top:0;left:0;padding-top:80px}.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px 20px 8px 32px;text-decoration:none;font-size:25px;display:block;transition:.3s}.sidenav[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%]{position:absolute;top:0;font-size:36px;margin-left:50px}@media screen and (max-height: 450px){.sidenav[_ngcontent-%COMP%]{padding-top:15px}.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:18px}}']}),t})();function b(t,i){1&t&&n._UZ(0,"app-navbar-offcanvas")}function C(t,i){1&t&&(n.TgZ(0,"li",12)(1,"a",13),n._UZ(2,"app-linear-btn",14),n.qZA()()),2&t&&(n.xp6(2),n.Q6J("text","Sign Up"))}function x(t,i){1&t&&(n.TgZ(0,"li",15)(1,"a",16),n._uU(2,"Login"),n.qZA()())}function O(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"a",17),n.NdJ("click",function(){n.CHM(e);const l=n.oxw(2);return n.KtG(l.goBack())}),n._uU(1," Back "),n.qZA()}}function M(t,i){if(1&t&&(n.TgZ(0,"div",7)(1,"ul",8),n.YNc(2,C,3,1,"li",9),n.YNc(3,x,3,0,"li",10),n.TgZ(4,"li"),n.YNc(5,O,2,0,"a",11),n.qZA()()()),2&t){const e=n.oxw();n.xp6(2),n.Q6J("ngIf",e.signUp),n.xp6(1),n.Q6J("ngIf",e.login),n.xp6(2),n.Q6J("ngIf",e.backBtn)}}let P=(()=>{class t{constructor(e,r){this.authService=e,this.location=r,this.isAuth$=null}ngOnInit(){this.isAuth$=this.authService.isAuth$}goBack(){this.location.back()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(c.e),n.Y36(p.Ye))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-navbar"]],inputs:{signUp:"signUp",login:"login",backBtn:"backBtn",burgerMenu:"burgerMenu"},standalone:!0,features:[n.jDz],decls:9,vars:4,consts:[[1,"navbar","navbar-expand-lg"],[1,"container","mt-0","pt-0"],["routerLink","/",1,"navbar-brand"],["src","/assets/images/JMP-logo.png","width","150px","height","50px","alt","JMP logo image",1,"d-inline-block","align-text-top"],[1,"burger-menu-wrapper"],[4,"ngIf","ngIfElse"],["unSignedUser",""],[1,""],[1,"d-flex"],["class","auth-btn nav-item me-3",4,"ngIf"],["class","auth-btn nav-item mt-3 text-dark",4,"ngIf"],["class","back-btn btn",3,"click",4,"ngIf"],[1,"auth-btn","nav-item","me-3"],["routerLink","/auth/sign-up"],[3,"text"],[1,"auth-btn","nav-item","mt-3","text-dark"],["routerLink","/auth/login",1,"text-dark","fs-6"],[1,"back-btn","btn",3,"click"]],template:function(e,r){if(1&e&&(n.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),n._UZ(3,"img",3),n.qZA(),n.TgZ(4,"div",4),n.YNc(5,b,1,0,"app-navbar-offcanvas",5),n.ALo(6,"async"),n.qZA(),n.YNc(7,M,6,3,"ng-template",null,6,n.W1O),n.qZA()()),2&e){const l=n.MAs(8);n.xp6(5),n.Q6J("ngIf",n.lcZ(6,2,r.isAuth$))("ngIfElse",l)}},dependencies:[d.rH,p.O5,h,v.M,p.Ov],styles:[".navbar[_ngcontent-%COMP%]{width:100%;max-width:100vw}.burger-menu-wrapper[_ngcontent-%COMP%]{position:relative}.navbar-brand[_ngcontent-%COMP%]{z-index:3}.auth-btn[_ngcontent-%COMP%]{z-index:3;position:relative;left:-20vh;display:none}.auth-btn[_ngcontent-%COMP%]:hover{cursor:pointer}ul[_ngcontent-%COMP%]{list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none}.back-btn[_ngcontent-%COMP%]{font-size:1.5rem;padding:.75rem 1.5rem;color:var(--primary);border:none;transition:ease-in-out .3s;background:var(--unnamed-color-4f9dbc) 0% 0% no-repeat padding-box;box-shadow:0 0 66px var(--unnamed-color-4f9dbc);background:#4F9DBC 0% 0% no-repeat padding-box;box-shadow:0 0 66px #4f9dbc;border-radius:51px}.back-btn[_ngcontent-%COMP%]:hover{color:var(--primary);background:transparent linear-gradient(180deg,var(--unnamed-color-4f9dbc) 0%,#50A0C0 34%,#5DC4F1 100%) 0% 0% no-repeat padding-box;background:transparent linear-gradient(180deg,#4F9DBC 0%,#50A0C0 34%,#5DC4F1 100%) 0% 0% no-repeat padding-box;box-shadow:0 0 88px #4f9dbc}@media only screen and (min-width: 768px){.auth-btn[_ngcontent-%COMP%]{display:inline-block}.back-btn[_ngcontent-%COMP%]{margin-right:5.25rem}}"]}),t})()},2745:(_,m,a)=>{a.r(m),a.d(m,{AuthWrapperComponent:()=>f});var v=a(6814),n=a(4512),o=a(5879);let g=(()=>{class c{}return c.\u0275fac=function(s){return new(s||c)},c.\u0275cmp=o.Xpm({type:c,selectors:[["app-tilt-bg"]],standalone:!0,features:[o.jDz],decls:6,vars:0,consts:[[1,"tilt-bg"],[1,"inner"],["alt","tilt","src","/assets/images/gradient-image.png"],[1,"custom-shape-divider-bottom-1686312754"],["data-name","Layer 1","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 1200 120","preserveAspectRatio","none"],["d","M1200 120L0 16.48 0 0 1200 0 1200 120z",1,"shape-fill"]],template:function(s,h){1&s&&(o.TgZ(0,"div",0)(1,"div",1),o._UZ(2,"img",2),o.qZA(),o.TgZ(3,"div",3),o.O4$(),o.TgZ(4,"svg",4),o._UZ(5,"path",5),o.qZA()()())},styles:[".tilt-bg[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-1}.tilt-bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.custom-shape-divider-bottom-1686312754[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;overflow:hidden;line-height:0;transform:rotate(180deg)}.custom-shape-divider-bottom-1686312754[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:relative;display:block;width:calc(173% + 1.3px);height:343px;transform:rotateY(180deg)}.custom-shape-divider-bottom-1686312754[_ngcontent-%COMP%]   .shape-fill[_ngcontent-%COMP%]{fill:var(--primary)}"]}),c})();var d=a(5526),p=a(7905);let f=(()=>{class c{constructor(s){this.cd=s}ngAfterViewInit(){this.cd.detectChanges()}prepareRoute(s){return s&&s.activatedRouteData&&s.activatedRouteData.animation}}return c.\u0275fac=function(s){return new(s||c)(o.Y36(o.sBO))},c.\u0275cmp=o.Xpm({type:c,selectors:[["app-auth-wrapper"]],standalone:!0,features:[o.jDz],decls:6,vars:2,consts:[[1,"screen"],[3,"backBtn"],[1,"auth-wrapper"],["outlet","outlet"]],template:function(s,h){if(1&s&&(o.TgZ(0,"main",0),o._UZ(1,"app-navbar",1)(2,"app-tilt-bg"),o.TgZ(3,"div",2),o._UZ(4,"router-outlet",null,3),o.qZA()()),2&s){const b=o.MAs(5);o.xp6(1),o.Q6J("backBtn",!0),o.xp6(2),o.Q6J("@routeAnimations",h.prepareRoute(b))}},dependencies:[v.ez,n.S,g,d.lC],styles:[".auth-wrapper[_ngcontent-%COMP%]{position:relative}"],data:{animation:[p.R]}}),c})()}}]);