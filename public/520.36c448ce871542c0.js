"use strict";(self.webpackChunkjuniors_please_angular=self.webpackChunkjuniors_please_angular||[]).push([[520],{3520:(g,n,r)=>{r.r(n),r.d(n,{ProfileProjectsComponent:()=>f});var s=r(7642),c=r(6814),e=r(5879),p=r(7371);function l(t,i){if(1&t&&e._UZ(0,"img",14),2&t){const o=e.oxw().$implicit;e.Udp("object-fit","cover"),e.Q6J("alt",o.name)("src",o.picture,e.LSH)}}function d(t,i){if(1&t&&(e.TgZ(0,"div",15),e._UZ(1,"app-tech-boxes",16),e.qZA()),2&t){const o=e.oxw().$implicit;e.xp6(1),e.Q6J("limit",7)("isWhite",!0)("tech",o.technologies)}}function m(t,i){if(1&t&&(e.TgZ(0,"div",17)(1,"a",18),e._uU(2,"Project Link"),e.qZA()()),2&t){const o=e.oxw().$implicit;e.xp6(1),e.Q6J("href",o.liveLink,e.LSH)}}function a(t,i){if(1&t&&(e.TgZ(0,"div",19)(1,"a",20),e._uU(2,"Code Repo's"),e.qZA()()),2&t){const o=e.oxw().$implicit;e.xp6(1),e.Q6J("href",o.codeLink,e.LSH)}}function _(t,i){if(1&t&&(e.TgZ(0,"div",3)(1,"div",4),e.YNc(2,l,1,4,"img",5),e.qZA(),e.TgZ(3,"div",6)(4,"div",7)(5,"h3",8),e._uU(6),e.qZA()(),e.TgZ(7,"p",9),e._uU(8,"** Dummy description about the project, Dummy description about the project, Dummy description about the project..."),e.qZA(),e.YNc(9,d,2,3,"div",10),e.TgZ(10,"div",11),e.YNc(11,m,3,1,"div",12),e.YNc(12,a,3,1,"div",13),e.qZA()()()),2&t){const o=i.$implicit;e.xp6(2),e.Q6J("ngIf",o.picture),e.xp6(4),e.Oqu(o.name),e.xp6(3),e.Q6J("ngIf",o.technologies),e.xp6(2),e.Q6J("ngIf",o.liveLink),e.xp6(1),e.Q6J("ngIf",o.codeLink)}}let f=(()=>{class t{constructor(o){this.profileService=o,this.projects=[]}ngOnInit(){this.projSubscription=this.profileService.profileCurrentlyViewed.subscribe(o=>{o&&(this.projects=o.projectCollection)})}ngOnDestroy(){this.projSubscription.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(p.H))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-profile-projects"]],standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"my-5","fw-bold","fs-2"],[1,""],["class","project-wrapper bg-light row px-1 mb-3 border py-3 shadow-lg rounded",4,"ngFor","ngForOf"],[1,"project-wrapper","bg-light","row","px-1","mb-3","border","py-3","shadow-lg","rounded"],[1,"col-lg-4","bg-dark","rounded"],["class","img-fluid rounded h-100 w-100",3,"alt","src","object-fit",4,"ngIf"],[1,"col-lg-8","pt-3"],[1,"row","project-header"],[1,"col-sm-6","fw-bold"],[1,"my-3","fs-6"],["class","col-md-12 my-3",4,"ngIf"],[1,"project-foolter-buttons","row"],["class","col-sm-6 my-3 expended-on-hover",4,"ngIf"],["class","col-sm my-3 expended-on-hover",4,"ngIf"],[1,"img-fluid","rounded","h-100","w-100",3,"alt","src"],[1,"col-md-12","my-3"],[3,"limit","isWhite","tech"],[1,"col-sm-6","my-3","expended-on-hover"],["target","_blank",1,"linear-bg","text-primary","py-2","px-3","rounded","shadow",3,"href"],[1,"col-sm","my-3","expended-on-hover"],["target","_blank",1,"border","border-info","text-secondary","py-2","px-3","rounded","shadow",3,"href"]],template:function(o,u){1&o&&(e.TgZ(0,"div")(1,"h3",0),e._uU(2,"Projects"),e.qZA(),e.TgZ(3,"div",1),e.YNc(4,_,13,5,"div",2),e.qZA()()),2&o&&(e.xp6(4),e.Q6J("ngForOf",u.projects))},dependencies:[c.ax,c.O5,s.c]}),t})()}}]);