"use strict";(self.webpackChunkjuniors_please_angular=self.webpackChunkjuniors_please_angular||[]).push([[243],{3226:(u,s,t)=>{t.d(s,{M:()=>l});var c=t(5526),n=t(9468);let l=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-linear-btn"]],inputs:{text:"text",link:"link"},standalone:!0,features:[n.jDz],decls:5,vars:2,consts:[[3,"routerLink"],[1,"outer","shadow-sm"],[1,"button"],[1,"text"]],template:function(r,i){1&r&&(n.TgZ(0,"a",0)(1,"div",1)(2,"div",2)(3,"div",3),n._uU(4),n.qZA()()()()),2&r&&(n.s9C("routerLink",i.link),n.xp6(4),n.hij(" ",i.text," "))},dependencies:[c.rH],styles:[".tilt-bg[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:-1}.outer[_ngcontent-%COMP%]{background:var(--unnamed-color-ecfafe) 0% 0% no-repeat padding-box;background:#ECFAFE 0% 0% no-repeat padding-box;width:-moz-fit-content;width:fit-content}.button[_ngcontent-%COMP%]{border:none;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;display:block;background:transparent linear-gradient(180deg,var(--unnamed-color-4f9dbc) 0%,#50A0C0 34%,#5DC4F1 100%) 0% 0% no-repeat padding-box;background:transparent linear-gradient(180deg,#4F9DBC 0%,#50A0C0 34%,#5DC4F1 100%) 0% 0% no-repeat padding-box;background-size:5% 100%;background-position:left bottom;transition:all .5s ease-out}.button[_ngcontent-%COMP%]:hover{background-size:200% 100%;cursor:pointer;background-position:left bottom}.button[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{text-align:center;font-size:1rem;line-height:2.5rem;color:var(--secondary);transition:all .6s ease-out;display:block;padding:.5rem 2.75rem .5rem 1.5rem}.button[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]:hover{color:var(--primary)}"]}),e})()},8243:(u,s,t)=>{t.r(s),t.d(s,{ProfileOverviewComponent:()=>r});var c=t(7642),n=t(3226),l=t(6814),e=t(9468),a=t(7371);let r=(()=>{class i{constructor(o){this.profileService=o,this.jobTitle="** Job Title **",this.mockDescription="** Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",this.technologies=""}ngOnInit(){this.techSubscription=this.profileService.profileCurrentlyViewed.subscribe(o=>{o&&o.technologies&&(this.technologies=o.technologies)})}ngOnDestroy(){this.techSubscription.unsubscribe()}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(a.H))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-profile-overview"]],standalone:!0,features:[e.jDz],decls:10,vars:7,consts:[[1,"text-info","fs-3","my-5"],[1,"fs-5","text-secondary"],[3,"link","text"],[1,"mt-5","mb-4"],[1,"text-secondary","fs-5"],[3,"limit","isWhite","tech"]],template:function(o,p){1&o&&(e.TgZ(0,"div")(1,"h2",0),e._uU(2),e.qZA(),e.TgZ(3,"p",1),e._uU(4),e.qZA(),e._UZ(5,"app-linear-btn",2),e.qZA(),e.TgZ(6,"div",3)(7,"h4",4),e._uU(8," Technologies "),e._UZ(9,"app-tech-boxes",5),e.qZA()()),2&o&&(e.xp6(2),e.Oqu(p.jobTitle),e.xp6(2),e.Oqu(p.mockDescription),e.xp6(1),e.Q6J("link","/")("text","Read More.."),e.xp6(4),e.Q6J("limit",20)("isWhite",!0)("tech",p.technologies))},dependencies:[l.ez,n.M,c.c]}),i})()}}]);