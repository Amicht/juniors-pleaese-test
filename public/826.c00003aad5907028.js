"use strict";(self.webpackChunkjuniors_please_angular=self.webpackChunkjuniors_please_angular||[]).push([[826],{7642:(f,p,s)=>{s.d(p,{c:()=>v});var e=s(5879),h=s(6814);function u(i,l){if(1&i){const c=e.EpF();e.TgZ(0,"span",7),e.NdJ("click",function(){e.CHM(c);const a=e.oxw(2).$implicit,o=e.oxw();return e.KtG(o.onTechSelect(a))}),e.O4$(),e.TgZ(1,"svg",8),e._UZ(2,"path",9),e.qZA()()}}const m=function(i,l,c){return{"linear-bg text-white mx-5":i,shadow:l,"bg-white":c}};function t(i,l){if(1&i&&(e.TgZ(0,"div",5)(1,"span"),e.YNc(2,u,3,0,"span",6),e._uU(3),e.qZA()()),2&i){const c=e.oxw().$implicit,n=e.oxw();e.Q6J("ngClass",e.kEZ(3,m,n.isClickable,n.shadow,n.isWhite)),e.xp6(2),e.Q6J("ngIf",n.isClickable),e.xp6(1),e.hij(" ",c," ")}}function _(i,l){if(1&i&&(e.TgZ(0,"div",3),e.YNc(1,t,4,7,"div",4),e.qZA()),2&i){const c=l.$implicit;e.xp6(1),e.Q6J("ngIf",c)}}const d=function(){return{"font-size":"0.8rem"}};function g(i,l){if(1&i&&(e.TgZ(0,"div",10)(1,"span",11),e._uU(2),e.qZA()()),2&i){const c=e.oxw();e.xp6(1),e.Akn(e.DdM(3,d)),e.xp6(1),e.hij(" +",c.remainder," ")}}let v=(()=>{class i{constructor(){this.tech="",this.chosenTechEmitter=new e.vpe,this.slicedTech=[],this.chosenTechs=[],this.remainder=0}ngOnInit(){this.initTech()}ngOnChanges(c){c.tech&&this.initTech()}initTech(){const c=this.limit||5;this.chosenTechs=this.tech?this.tech.split(","):[],this.slicedTech=this.chosenTechs.slice(0,c),this.remainder=this.chosenTechs.length-c}onTechSelect(c){if(this.isClickable){const n=this.chosenTechs.indexOf(c);-1!==n&&this.chosenTechs.splice(n,1),this.chosenTechEmitter.emit(this.chosenTechs)}}techTrackBy(c,n){return n}}return i.\u0275fac=function(c){return new(c||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-tech-boxes"]],inputs:{tech:"tech",limit:"limit",isClickable:"isClickable",shadow:"shadow",isWhite:"isWhite"},outputs:{chosenTechEmitter:"chosenTechEmitter"},standalone:!0,features:[e.TTD,e.jDz],decls:3,vars:3,consts:[[1,"row"],["class","col",4,"ngFor","ngForOf","ngForTrackBy"],["class","col text-start mt-1",4,"ngIf"],[1,"col"],["class","bg-light fs-6 text-secondary tech-box px-3 fw-bold rounded py-1 my-1 text-center",3,"ngClass",4,"ngIf"],[1,"bg-light","fs-6","text-secondary","tech-box","px-3","fw-bold","rounded","py-1","my-1","text-center",3,"ngClass"],["class","is-clickable",3,"click",4,"ngIf"],[1,"is-clickable",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle-fill","text-white"],["d","M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"],[1,"col","text-start","mt-1"],[1,"rounded-circle","shadow","linear-bg","px-1","py-1"]],template:function(c,n){1&c&&(e.TgZ(0,"div",0),e.YNc(1,_,2,1,"div",1),e.YNc(2,g,3,4,"div",2),e.qZA()),2&c&&(e.xp6(1),e.Q6J("ngForOf",n.slicedTech)("ngForTrackBy",n.techTrackBy),e.xp6(1),e.Q6J("ngIf",n.remainder>0))},dependencies:[h.ax,h.mk,h.O5],styles:[".tech-box[_ngcontent-%COMP%]{max-width:-moz-fit-content;max-width:fit-content}.is-clickable[_ngcontent-%COMP%]:hover{cursor:pointer}.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .is-white[_ngcontent-%COMP%]{background-color:#fff}"]}),i})()},6833:(f,p,s)=>{s.r(p),s.d(p,{NgbdModalContent:()=>l,ProjectsViewComponent:()=>c});var e=s(5861),h=s(6814),u=s(132),m=s(5526),t=s(5879),_=s(6303),d=s(589);const g=function(n){return[n]};function v(n,a){if(1&n){const o=t.EpF();t.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"a",11)(4,"button",12),t.O4$(),t.TgZ(5,"svg",13),t._UZ(6,"path",14),t.qZA()()(),t.kcU(),t.TgZ(7,"button",15),t.NdJ("click",function(){const b=t.CHM(o).$implicit,x=t.oxw();return t.KtG(x.onDeleteBtnClicked(b))}),t.O4$(),t.TgZ(8,"svg",16),t._UZ(9,"path",17)(10,"path",18),t.qZA()()(),t.kcU(),t._UZ(11,"app-project-card",19),t.qZA()()}if(2&n){const o=a.$implicit;t.xp6(3),t.Q6J("routerLink",t.VKq(2,g,o.id)),t.xp6(8),t.Q6J("project",o)}}const i=function(){return["new"]};let l=(()=>{class n{constructor(o,r){this.activeModal=o,this.projectService=r}onDelete(){var o=this;return(0,e.Z)(function*(){yield o.projectService.deleteProject(o.project.id),console.log(`project ${o.project.name} deleted!`),o.close()})()}close(){this.activeModal.close("Close click")}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(_.Kz),t.Y36(d.Y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ngbd-modal-content"]],inputs:{project:"project"},standalone:!0,features:[t.jDz],decls:12,vars:1,consts:[[1,"modal-header","bg-light"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-danger",3,"click"],["type","button",1,"btn","btn-outline-dark",3,"click"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Delete Project"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return r.activeModal.dismiss("Cross click")}),t.qZA()(),t.TgZ(4,"div",3)(5,"p"),t._uU(6),t.qZA()(),t.TgZ(7,"div",4)(8,"button",5),t.NdJ("click",function(){return r.onDelete()}),t._uU(9,"delete"),t.qZA(),t.TgZ(10,"button",6),t.NdJ("click",function(){return r.close()}),t._uU(11,"Cancel"),t.qZA()()),2&o&&(t.xp6(6),t.hij("Are you sure you want to delete '",r.project.name,"' permanently?"))},encapsulation:2}),n})(),c=(()=>{class n{constructor(o,r){this.projectService=o,this.modalService=r,this.projects=[]}ngOnInit(){this.projSub=this.projectService.$projects.subscribe(o=>{this.projects=o}),this.projectService.getMyProjects()}onDeleteBtnClicked(o){this.modalService.open(l).componentInstance.project=o}ngOnDestroy(){this.projSub.unsubscribe()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(d.Y),t.Y36(_.FF))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-projects-view"]],standalone:!0,features:[t.jDz],decls:10,vars:3,consts:[[1,"container","mb-5","my-1"],[1,"mb-5"],[1,"text-info","fs-4","shadow-sm","rounded-3","py-2","px-2",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-plus-circle","me-1"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"],[1,"text-center","fs-1","mb-4"],["class","project-wrapper",4,"ngFor","ngForOf"],[1,"project-wrapper"],[1,"position-relative"],[1,"manage-btns","py-1","text-end","position-absolute","top-0","end-0"],[3,"routerLink"],[1,"btn","btn-info","rounded-pill","shadow"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-pencil","text-white"],["d","M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"],[1,"btn-danger","btn","rounded-pill","ms-2","shadow",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-trash"],["d","M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"],["d","M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"],[3,"project"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"a",2),t.O4$(),t.TgZ(3,"svg",3),t._UZ(4,"path",4)(5,"path",5),t.qZA(),t._uU(6," Add project"),t.qZA()(),t.kcU(),t.TgZ(7,"h2",6),t._uU(8,"My Projects"),t.qZA(),t.YNc(9,v,12,4,"div",7),t.qZA()),2&o&&(t.xp6(2),t.Q6J("routerLink",t.DdM(2,i)),t.xp6(7),t.Q6J("ngForOf",r.projects))},dependencies:[h.ez,h.sg,u.X,m.rH],encapsulation:2}),n})()}}]);