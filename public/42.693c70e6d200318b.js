"use strict";(self.webpackChunkjuniors_please_angular=self.webpackChunkjuniors_please_angular||[]).push([[42],{42:(P,l,s)=>{s.r(l),s.d(l,{AuthFormComponent:()=>M});var i=s(95),m=s(5526),d=s(6814),u=s(5388),t=s(9468),p=s(1555);function g(e,o){if(1&e){const r=t.EpF();t.TgZ(0,"div",21),t.O4$(),t.TgZ(1,"svg",22),t._UZ(2,"path",23)(3,"path",24),t.qZA(),t._uU(4),t.kcU(),t.TgZ(5,"button",25),t.NdJ("click",function(){t.CHM(r);const a=t.oxw();return t.KtG(a.serverError=void 0)}),t.qZA()()}if(2&e){const r=t.oxw();t.xp6(4),t.hij(" ",r.serverError," ")}}function c(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1," required "),t.qZA())}function f(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1," username must be 6 characters or more "),t.qZA())}function h(e,o){if(1&e&&(t.TgZ(0,"div",26),t.YNc(1,c,2,0,"div",27),t.YNc(2,f,2,0,"div",27),t.qZA()),2&e){const r=o.ngIf;t.xp6(1),t.Q6J("ngIf",r.required),t.xp6(1),t.Q6J("ngIf",r.minlength)}}function _(e,o){1&e&&(t.O4$(),t.TgZ(0,"svg",28),t._UZ(1,"path",29)(2,"path",30),t.qZA())}function v(e,o){1&e&&(t.O4$(),t.TgZ(0,"svg",31),t._UZ(1,"path",32)(2,"path",33),t.qZA())}function b(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1," required "),t.qZA())}function C(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1," password must be 8 characters or more "),t.qZA())}function w(e,o){if(1&e&&(t.TgZ(0,"div",26),t.YNc(1,b,2,0,"div",27),t.YNc(2,C,2,0,"div",27),t.qZA()),2&e){const r=o.ngIf;t.xp6(1),t.Q6J("ngIf",r.required),t.xp6(1),t.Q6J("ngIf",r.minlength)}}function x(e,o){1&e&&(t.TgZ(0,"div",34)(1,"span",35),t._uU(2,"Loading..."),t.qZA()())}let M=(()=>{class e{constructor(r,n,a,A){this.authService=r,this.formBuilder=n,this.activatedRoute=a,this.router=A,this.pageName="",this.loading=!1,this.hidePassword=!0,this.redirectUrl=""}ngOnInit(){this.activatedRoute.queryParams.subscribe(r=>{this.redirectUrl=r.redirectUrl}),this.activatedRoute.data.subscribe(r=>{this.pageName=r.pageName,this.texts="login"===this.pageName?u.x:u.y}),this.setNewForm()}onSubmitHandler(){this.myForm.valid&&(this.serverError=void 0,this.loading=!0,"login"===this.pageName?this.authService.loginUser(this.myForm.value).then(()=>this.navigateAfterAuth("/juniors")).catch(r=>this.serverError="Incorrect username or password").finally(()=>this.loading=!1):this.authService.registerUser(this.myForm.value).then(()=>this.navigateAfterAuth("/sign-up-2")).catch(r=>this.serverError="Oops.. something went wrong").finally(()=>this.loading=!1))}navigateAfterAuth(r){this.router.navigateByUrl(this.redirectUrl&&"login"===this.pageName?this.redirectUrl:r)}setNewForm(){this.myForm=this.formBuilder.nonNullable.group({username:["",[i.kI.required,i.kI.minLength(6)]],password:["",[i.kI.minLength(8),i.kI.required]],rememberMe:[!1]})}checkIfDirtyAndHasErrors(r){const n=this.myForm.get(r);return n?.errors&&n?.dirty?n.errors:null}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(p.e),t.Y36(i.qu),t.Y36(m.gz),t.Y36(m.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-auth-form"]],inputs:{texts:"texts"},standalone:!0,features:[t.jDz],decls:29,vars:15,consts:[[1,"form-wrapper","linear-bg","col-lg-4","col-md-5","col-sm-7","rounded","mx-auto","mb-4"],[1,"auth-form","rounded","bg-white","text-secondary","px-5","pb-5"],[3,"formGroup","ngSubmit"],[1,"text-center","text-info","fs-1","pt-4","pb-3"],[1,"fs-6","mb-4"],[1,"linear-bg","text-primary","rounded","px-1","py-1","mx-1",3,"routerLink"],["class","alert alert-danger alert-dismissible","role","alert",4,"ngIf"],[1,"mb-3","form-group"],["name","username","type","username","placeholder","username","formControlName","username",1,"form-control","input-field"],["class","text-danger",4,"ngIf"],[1,"input-group","input-field"],["name","password","placeholder","Password","formControlName","password",1,"form-control",3,"type"],[1,"password-icon","input-group-text","bg-white","text-info","px-4",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","class","bi bi-eye-fill","viewBox","0 0 16 16",4,"ngIf"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","class","bi bi-eye-slash-fill","viewBox","0 0 16 16",4,"ngIf"],[1,"d-flex","justify-content-between"],[1,"mb-3","text-secondary","form-check"],["for","checkbox",1,"form-check-label"],["name","rememberMe","formControlName","rememberMe","type","checkbox",1,"form-check-input","bg-info"],["variant","primary","type","submit",1,"linear-bg","btn","text-primary",3,"disabled"],["class","spinner-border spinner-border-sm text-primary mx-3","role","status",4,"ngIf"],["role","alert",1,"alert","alert-danger","alert-dismissible"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-exclamation-circle"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close",3,"click"],[1,"text-danger"],[4,"ngIf"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-eye-fill"],["d","M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"],["d","M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-eye-slash-fill"],["d","m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"],["d","M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"],["role","status",1,"spinner-border","spinner-border-sm","text-primary","mx-3"],[1,"visually-hidden"]],template:function(r,n){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return n.onSubmitHandler()}),t.TgZ(3,"h2",3),t._uU(4),t.qZA(),t.TgZ(5,"h3",4),t._uU(6),t.TgZ(7,"a",5),t._uU(8),t.qZA(),t._uU(9),t.qZA(),t.YNc(10,g,6,1,"div",6),t.TgZ(11,"div",7),t._UZ(12,"input",8),t.YNc(13,h,3,2,"div",9),t.qZA(),t.TgZ(14,"div",7)(15,"div",10),t._UZ(16,"input",11),t.TgZ(17,"div",12),t.NdJ("click",function(){return n.hidePassword=!n.hidePassword}),t.YNc(18,_,3,0,"svg",13),t.YNc(19,v,3,0,"svg",14),t.qZA()(),t.YNc(20,w,3,2,"div",9),t.qZA(),t.TgZ(21,"div",15)(22,"div",16)(23,"label",17),t._UZ(24,"input",18),t._uU(25," Remember Me "),t.qZA()(),t.TgZ(26,"button",19),t._uU(27),t.YNc(28,x,3,0,"div",20),t.qZA()()()()()),2&r&&(t.xp6(2),t.Q6J("formGroup",n.myForm),t.xp6(2),t.Oqu(n.texts.title),t.xp6(2),t.hij(" ",n.texts.subtitle[0]," "),t.xp6(1),t.s9C("routerLink",n.texts.linkTo),t.xp6(1),t.hij("",n.texts.subtitle[1]," "),t.xp6(1),t.hij(" ",n.texts.subtitle[2]," "),t.xp6(1),t.Q6J("ngIf",n.serverError),t.xp6(3),t.Q6J("ngIf",n.checkIfDirtyAndHasErrors("username")),t.xp6(3),t.Q6J("type",n.hidePassword?"password":"text"),t.xp6(2),t.Q6J("ngIf",n.hidePassword),t.xp6(1),t.Q6J("ngIf",!n.hidePassword),t.xp6(1),t.Q6J("ngIf",n.checkIfDirtyAndHasErrors("password")),t.xp6(6),t.Q6J("disabled",n.myForm.invalid),t.xp6(1),t.hij(" ",n.loading?"":"Submit"," "),t.xp6(1),t.Q6J("ngIf",n.loading))},dependencies:[i.UX,i._Y,i.Fj,i.Wl,i.JJ,i.JL,i.sg,i.u,m.rH,d.O5],styles:[".form-wrapper[_ngcontent-%COMP%]{padding:.15rem}.form-wrapper[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]{background:var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;background:#FFFFFF 0% 0% no-repeat padding-box}.form-wrapper[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{cursor:pointer;transition:transform .4s}.form-wrapper[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]   .password-icon[_ngcontent-%COMP%]{cursor:pointer}.form-wrapper[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]   .password-icon[_ngcontent-%COMP%]{transition:transform .4s}.form-wrapper[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input.ng-dirty.ng-invalid[_ngcontent-%COMP%], .form-wrapper[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]   .input-field.ng-dirty.ng-invalid[_ngcontent-%COMP%]{border:.1px solid rgb(253,52,52)}.form-wrapper[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-wrapper[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:focus{transform:scale(1.1);border:.1px solid var(--unnamed-color-4f9dbc);border-bottom-width:4px}.form-wrapper[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus.ng-dirty.ng-invalid, .form-wrapper[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:focus.ng-dirty.ng-invalid{transform:scale(1.1);border:.1px solid rgb(253,52,52);border-bottom-width:4px}"]}),e})()}}]);