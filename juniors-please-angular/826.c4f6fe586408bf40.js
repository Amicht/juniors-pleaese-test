"use strict";(self.webpackChunkjuniors_please_angular=self.webpackChunkjuniors_please_angular||[]).push([[826],{7642:(f,p,s)=>{s.d(p,{c:()=>x});var e=s(5879),l=s(6814);function d(c,r){if(1&c){const o=e.EpF();e.TgZ(0,"span",7),e.NdJ("click",function(){e.CHM(o);const h=e.oxw(2).$implicit,i=e.oxw();return e.KtG(i.onTechSelect(h))}),e.O4$(),e.TgZ(1,"svg",8),e._UZ(2,"path",9),e.qZA()()}}const m=function(c,r,o){return{"linear-bg text-white mx-5":c,shadow:r,"bg-white":o}};function g(c,r){if(1&c&&(e.TgZ(0,"div",5)(1,"span"),e.YNc(2,d,3,0,"span",6),e._uU(3),e.qZA()()),2&c){const o=e.oxw().$implicit,n=e.oxw();e.Q6J("ngClass",e.kEZ(3,m,n.isClickable,n.shadow,n.isWhite)),e.xp6(2),e.Q6J("ngIf",n.isClickable),e.xp6(1),e.hij(" ",o," ")}}function t(c,r){if(1&c&&(e.TgZ(0,"div",3),e.YNc(1,g,4,7,"div",4),e.qZA()),2&c){const o=r.$implicit;e.xp6(1),e.Q6J("ngIf",o)}}const u=function(){return{"font-size":"0.8rem"}};function v(c,r){if(1&c&&(e.TgZ(0,"div",10)(1,"span",11),e._uU(2),e.qZA()()),2&c){const o=e.oxw();e.xp6(1),e.Akn(e.DdM(3,u)),e.xp6(1),e.hij(" +",o.remainder," ")}}let x=(()=>{class c{constructor(){this.tech="",this.chosenTechEmitter=new e.vpe,this.slicedTech=[],this.chosenTechs=[],this.remainder=0}ngOnInit(){this.initTech()}ngOnChanges(o){o.tech&&this.initTech()}initTech(){const o=this.limit||5;this.chosenTechs=this.tech?this.tech.split(","):[],this.slicedTech=this.chosenTechs.slice(0,o),this.remainder=this.chosenTechs.length-o}onTechSelect(o){if(this.isClickable){const n=this.chosenTechs.indexOf(o);-1!==n&&this.chosenTechs.splice(n,1),this.chosenTechEmitter.emit(this.chosenTechs)}}techTrackBy(o,n){return n}}return c.\u0275fac=function(o){return new(o||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-tech-boxes"]],inputs:{tech:"tech",limit:"limit",isClickable:"isClickable",shadow:"shadow",isWhite:"isWhite"},outputs:{chosenTechEmitter:"chosenTechEmitter"},standalone:!0,features:[e.TTD,e.jDz],decls:3,vars:3,consts:[[1,"row"],["class","col",4,"ngFor","ngForOf","ngForTrackBy"],["class","col text-start mt-1",4,"ngIf"],[1,"col"],["class","bg-light fs-6 text-secondary tech-box px-3 fw-bold rounded py-1 my-1 text-center",3,"ngClass",4,"ngIf"],[1,"bg-light","fs-6","text-secondary","tech-box","px-3","fw-bold","rounded","py-1","my-1","text-center",3,"ngClass"],["class","is-clickable",3,"click",4,"ngIf"],[1,"is-clickable",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle-fill","text-white"],["d","M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"],[1,"col","text-start","mt-1"],[1,"rounded-circle","shadow","linear-bg","px-1","py-1"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0),e.YNc(1,t,2,1,"div",1),e.YNc(2,v,3,4,"div",2),e.qZA()),2&o&&(e.xp6(1),e.Q6J("ngForOf",n.slicedTech)("ngForTrackBy",n.techTrackBy),e.xp6(1),e.Q6J("ngIf",n.remainder>0))},dependencies:[l.ax,l.mk,l.O5],styles:[".tech-box[_ngcontent-%COMP%]{max-width:-moz-fit-content;max-width:fit-content}.is-clickable[_ngcontent-%COMP%]:hover{cursor:pointer}.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .is-white[_ngcontent-%COMP%]{background-color:#fff}"]}),c})()},6833:(f,p,s)=>{s.r(p),s.d(p,{ProjectsViewComponent:()=>o});var e=s(5861),l=s(6814),d=s(132),m=s(5526),g=s(649),t=s(5879),u=s(589),v=s(6303);const x=function(n){return[n]};function c(n,h){if(1&n){const i=t.EpF();t.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"a",11)(4,"button",12),t.O4$(),t.TgZ(5,"svg",13),t._UZ(6,"path",14),t.qZA()()(),t.kcU(),t.TgZ(7,"button",15),t.NdJ("click",function(){const _=t.CHM(i).$implicit,w=t.oxw();return t.KtG(w.onDeleteBtnClicked(_))}),t.O4$(),t.TgZ(8,"svg",16),t._UZ(9,"path",17)(10,"path",18),t.qZA()()(),t.kcU(),t._UZ(11,"app-project-card",19),t.qZA()()}if(2&n){const i=h.$implicit;t.xp6(3),t.Q6J("routerLink",t.VKq(2,x,i.id)),t.xp6(8),t.Q6J("project",i)}}const r=function(){return["new"]};let o=(()=>{class n{constructor(i,a){var T=this;this.projectService=i,this.modalService=a,this.projects=[],this.deleteProject=_=>{this.projectService.deleteProject(_).then(this.getProjects)},this.getProjects=(0,e.Z)(function*(){T.projectService.getMyProjects().then(_=>T.projects=_)})}ngOnInit(){this.getProjects()}onDeleteBtnClicked(i){const a=this.modalService.open(g.z);a.componentInstance.itemName=i.name,a.componentInstance.itemId=i.id,a.componentInstance.delete.subscribe(this.deleteProject)}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(u.Y),t.Y36(v.FF))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-projects-view"]],standalone:!0,features:[t.jDz],decls:10,vars:3,consts:[[1,"container","mb-5","my-1"],[1,"mb-5"],[1,"text-info","fs-4","shadow-sm","rounded-3","py-2","px-2",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-plus-circle","me-1"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"],[1,"text-center","fs-1","mb-4"],["class","project-wrapper",4,"ngFor","ngForOf"],[1,"project-wrapper"],[1,"position-relative"],[1,"manage-btns","py-1","text-end","position-absolute","top-0","end-0"],[3,"routerLink"],[1,"btn","btn-info","rounded-pill","shadow"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-pencil","text-white"],["d","M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"],[1,"btn-danger","btn","rounded-pill","ms-2","shadow",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-trash"],["d","M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"],["d","M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"],[3,"project"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"a",2),t.O4$(),t.TgZ(3,"svg",3),t._UZ(4,"path",4)(5,"path",5),t.qZA(),t._uU(6," Add project"),t.qZA()(),t.kcU(),t.TgZ(7,"h2",6),t._uU(8,"My Projects"),t.qZA(),t.YNc(9,c,12,4,"div",7),t.qZA()),2&i&&(t.xp6(2),t.Q6J("routerLink",t.DdM(2,r)),t.xp6(7),t.Q6J("ngForOf",a.projects))},dependencies:[l.ez,l.sg,d.X,m.rH],encapsulation:2}),n})()}}]);