"use strict";(self.webpackChunkjuniors_please_angular=self.webpackChunkjuniors_please_angular||[]).push([[592],{7905:(p,h,o)=>{o.d(h,{J:()=>n,R:()=>d});var e=o(6825);const c=(0,e.IO)(":enter",[(0,e.jt)("1000ms ease",(0,e.oB)({opacity:1,transform:"scale(1)","transform-origin":"top"}))],{optional:!0}),s=(0,e.IO)(":enter",[(0,e.jt)("800ms ease-out",(0,e.oB)({opacity:1,width:"87%",transform:"scale(1)","transform-origin":"top"}))],{optional:!0}),a=(0,e.IO)(":enter, :leave",[(0,e.oB)({position:"absolute",width:"100%",opacity:0,transform:"scale(0)","transform-origin":"top"})],{optional:!0}),u=[a,s],d=(0,e.X$)("routeAnimations",[(0,e.eR)("* <=> *",[a,c])]),n=(0,e.X$)("routeAnimations",[(0,e.eR)("* <=> *",u)])},7642:(p,h,o)=>{o.d(h,{c:()=>d});var e=o(9468),c=o(6814);const s=function(n){return[n]},a=function(n,l,t){return{"linear-bg text-white":n,shadow:l,"bg-white":t}};function r(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",3),e.NdJ("click",function(){const g=e.CHM(t).$implicit,_=e.oxw();return e.KtG(_.onTechSelect(g))}),e.TgZ(1,"div",4)(2,"span"),e._uU(3),e.qZA()()()}if(2&n){const t=l.$implicit,i=e.oxw();e.Q6J("ngClass",e.VKq(5,s,i.isClickable?"is-clickable":"")),e.xp6(1),e.Udp("font-size","0.7rem"),e.Q6J("ngClass",e.kEZ(7,a,!!t.isChosen,i.shadow,i.isWhite)),e.xp6(2),e.Oqu(t.name)}}function u(n,l){if(1&n&&(e.TgZ(0,"div",5)(1,"span",6),e._uU(2),e.qZA()()),2&n){const t=e.oxw();e.xp6(1),e.Udp("font-size","0.8rem"),e.xp6(1),e.hij(" +",t.remainder," ")}}let d=(()=>{class n{constructor(){this.chosenTechEmitter=new e.vpe,this.slicedTech=[],this.chosenTechs=[],this.remainder=0}ngOnInit(){}ngOnChanges(t){this.initTech()}initTech(){if(this.tech){const t=this.limit||5,i=this.tech.replace(" ","").split(",");this.slicedTech=i.slice(0,t).map(m=>({isChosen:!1,name:m})),this.remainder=i.length-t}}onTechSelect(t){if(this.isClickable){if(t.isChosen=!t.isChosen,t.isChosen)this.chosenTechs.push(t.name);else{const i=this.chosenTechs.indexOf(t.name);-1!==i&&this.chosenTechs.splice(i,1)}this.chosenTechEmitter.emit(this.chosenTechs)}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-tech-boxes"]],inputs:{tech:"tech",limit:"limit",isClickable:"isClickable",shadow:"shadow",isWhite:"isWhite"},outputs:{chosenTechEmitter:"chosenTechEmitter"},standalone:!0,features:[e.TTD,e.jDz],decls:3,vars:2,consts:[[1,"row"],["class","col",3,"ngClass","click",4,"ngFor","ngForOf"],["class","col text-start mt-1",4,"ngIf"],[1,"col",3,"ngClass","click"],[1,"bg-light","text-secondary","tech-box","px-3","fw-bold","rounded","py-1","my-1","text-center",3,"ngClass"],[1,"col","text-start","mt-1"],[1,"rounded-circle","shadow","linear-bg","px-1","py-1"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,r,4,11,"div",1),e.YNc(2,u,3,3,"div",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",i.slicedTech),e.xp6(1),e.Q6J("ngIf",i.remainder>0))},dependencies:[c.ax,c.mk,c.O5],styles:[".tech-box[_ngcontent-%COMP%]{max-width:100px}.is-clickable[_ngcontent-%COMP%]:hover{cursor:pointer}.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .is-white[_ngcontent-%COMP%]{background-color:#fff}"]}),n})()},7790:(p,h,o)=>{o.d(h,{c:()=>c});var e=o(9468);let c=(()=>{class s{constructor(r){this.el=r,this.appErrorImgSrc=""}onError(){this.el.nativeElement.src=this.appErrorImgSrc}}return s.\u0275fac=function(r){return new(r||s)(e.Y36(e.SBq))},s.\u0275dir=e.lG2({type:s,selectors:[["","appErrorImgSrc",""]],hostBindings:function(r,u){1&r&&e.NdJ("error",function(){return u.onError()})},inputs:{appErrorImgSrc:"appErrorImgSrc"},standalone:!0}),s})()},5388:p=>{p.exports=JSON.parse('{"home":{"title":[{"text":"We Make ","isHighligted":false},{"text":"Juniors Capable For ","isHighligted":true},{"text":"Projects","isHighligted":false}],"subtitle":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...","infoTexts":["over 1000 juniors","more than 5000 projects","skilled and profetional experts"],"btnText":"Become a Junior","btnAuthText":"Find a Junior"},"y":{"title":"Sign Up","linkTo":"/auth/login","subtitle":["Or ","Log In","if you already have an account"],"alternateTitle":"Or Continue With: "},"x":{"title":"Log In","linkTo":"/auth/sign-up","subtitle":["Or ","Sign Up","if you don\'t have an account"],"alternateTitle":"Or Continue With: "},"juniorsPage":{"title":"Find Juniors","subtitle":"Find the world\'s best and talented Juniors on Juniors Please"}}')}}]);