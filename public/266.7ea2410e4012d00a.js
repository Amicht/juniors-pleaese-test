"use strict";(self.webpackChunkjuniors_please_angular=self.webpackChunkjuniors_please_angular||[]).push([[266],{9197:(Y,m,c)=>{c.r(m),c.d(m,{JuniorsComponent:()=>G});var w=c(5388);const b=JSON.parse('["Javascript","TypeScript","Node.js","React.js","Angular","Vue.js","MongoDB","Magneto","PHP","Java","SpringBoot"]');var _=c(8645),P=c(4352),x=c(9360),O=c(8251),y=c(3997),t=c(5879),g=c(8804);let Z=(()=>{class n{constructor(e){this.juniorsPageservice=e,this.selectedView="list"}selectView(e){this.selectedView=e,this.juniorsPageservice.changeCardsDisplay(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.u))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-view-selector"]],standalone:!0,features:[t.jDz],decls:8,vars:4,consts:[[1,"row","rounded","row","selection-wrapper","px-2"],[1,"list-view","col-6","rounded",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","32","height","32","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-hdd-stack-fill"],["d","M2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"],[1,"grid-view","col-6",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","48","height","48","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-grid-3x2-gap-fill"],["d","M1 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V4zM1 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9z"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return o.selectView("list")}),t.O4$(),t.TgZ(2,"svg",2),t._UZ(3,"path",3),t.qZA()(),t.kcU(),t.TgZ(4,"div",4),t.NdJ("click",function(){return o.selectView("grid")}),t.TgZ(5,"span"),t.O4$(),t.TgZ(6,"svg",5),t._UZ(7,"path",6),t.qZA()()()()),2&e&&(t.xp6(2),t.ekj("selected","list"===o.selectedView),t.xp6(4),t.ekj("selected","grid"===o.selectedView))},styles:[".selection-wrapper[_ngcontent-%COMP%]{border:1px solid var(--info)}.list-view[_ngcontent-%COMP%], .grid-view[_ngcontent-%COMP%]{cursor:pointer;margin:auto;color:var(--info);color:#74b2ca;background-color:var(--primary);transition:background-color .3s,transform .6s}.list-view[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%], .grid-view[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{color:#3c819c;transform:scale(1.2);transition:ease-in-out .6s}"]}),n})();var u=c(6814),p=c(6303);const h=function(n){return{"bg-light":n}};function S(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.onSortDirectionSelect(a))}),t._uU(1),t.qZA()}if(2&n){const e=r.$implicit,o=t.oxw();t.Q6J("ngClass",t.VKq(2,h,e===o.sortDirection)),t.xp6(1),t.hij(" ",e," ")}}function T(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.onSortParamSelect(a))}),t._uU(1),t.qZA()}if(2&n){const e=r.$implicit,o=t.oxw();t.Q6J("ngClass",t.VKq(2,h,e.display===o.sortParam.display)),t.xp6(1),t.hij(" ",e.display," ")}}let F=(()=>{class n{constructor(e){this.juniorsPageService=e,this.sortByParams=[],this.directions=["asc","desc"],this.sortDirection=this.directions[0]}ngOnInit(){this.sortByParams=this.juniorsPageService.sortParams,this.sortDirection=this.juniorsPageService.reqParamsGetter.sortDirection||this.directions[0];const e=this.sortByParams.find(o=>o.value===this.juniorsPageService.reqParamsGetter.sort);this.sortParam=e||this.sortByParams[0]}onSortParamSelect(e){this.sortParam=e,this.juniorsPageService.updateSortParam(e.value,this.sortDirection)}onSortDirectionSelect(e){this.sortDirection=e,this.juniorsPageService.updateSortParam(this.sortParam.value,this.sortDirection)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.u))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sort-by-dropdown"]],standalone:!0,features:[t.jDz],decls:13,vars:3,consts:[[1,"col-12"],["ngbDropdown","",1,"d-inline-flex","justify-content-between","rounded","buttons-wrapper"],["ngbDropdown","","role","group","aria-label","Button group with nested dropdown",1,"btn-group"],["type","button","ngbDropdownToggle","",1,"btn","btn-outline-info","dropdown-toggle-split","fs-5"],["ngbDropdownMenu","",1,"dropdown-menu"],["class","fs-5 text-dark ","ngbDropdownItem","",3,"ngClass","click",4,"ngFor","ngForOf"],["type","button","id","dropdownBasic1","ngbDropdownToggle","",1,"btn","btn-outline-info","fs-5","px-3"],[1,"text-info"],[1,"text-dark"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1"],["ngbDropdownItem","",1,"fs-5","text-dark",3,"ngClass","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"button",3),t.TgZ(4,"div",4),t.YNc(5,S,2,4,"button",5),t.qZA()(),t.TgZ(6,"button",6)(7,"span",7),t._uU(8,"Sort By: "),t.qZA(),t.TgZ(9,"span",8),t._uU(10),t.qZA()(),t.TgZ(11,"div",9),t.YNc(12,T,2,4,"button",5),t.qZA()()()),2&e&&(t.xp6(5),t.Q6J("ngForOf",o.directions),t.xp6(5),t.Oqu(o.sortParam.display),t.xp6(2),t.Q6J("ngForOf",o.sortByParams))},dependencies:[p.jt,p.iD,p.Vi,u.ax,p.TH,u.mk],styles:[".dropdown[_ngcontent-%COMP%]{background-color:var(--primary)}.dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .dropdown.show[_ngcontent-%COMP%]{background-color:var(--light)}"]}),n})();var s=c(95);function D(n,r){1&n&&(t.TgZ(0,"span",13),t.O4$(),t.TgZ(1,"svg",14),t._UZ(2,"path",15),t.qZA(),t._uU(3,"Filters"),t.qZA())}function k(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"span",16),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onFilterSearch())}),t._uU(1,"Search"),t.qZA()}}function j(n,r){if(1&n&&(t.TgZ(0,"option",21),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function J(n,r){if(1&n&&(t.TgZ(0,"div",17)(1,"span",18),t._uU(2),t.qZA(),t.TgZ(3,"select",19),t.YNc(4,j,2,2,"option",20),t.qZA()()),2&n){const e=r.$implicit;t.xp6(2),t.Oqu(e.text),t.xp6(1),t.Q6J("formControlName",e.name),t.xp6(1),t.Q6J("ngForOf",e.options)}}function A(n,r){if(1&n&&(t.TgZ(0,"div",22)(1,"span",18),t._uU(2),t.qZA(),t._UZ(3,"input",23),t.qZA()),2&n){const e=r.$implicit;t.xp6(2),t.Oqu(e.text),t.xp6(1),t.Q6J("formControlName",e.name)}}let U=(()=>{class n{constructor(e,o){this.juniorsPageService=e,this.formBuilder=o,this.filterInputs=[{text:"Min Repositories",name:"fromGithubRepositories"},{text:"Min Stars",name:"fromGithubStars"},{text:"Min Contributions",name:"fromGithubContributions"}],this.filterSelects=[{name:"userType",text:"User type",options:["","developer","hr","other"]},{name:"searchStatus",text:"Job-search status",options:["","looking","hired"]}],this.initialFilters={},this.isCollapsed=!0}ngOnInit(){this.getInitialFiltersFromQuerystring(),this.setNewForm()}setNewForm(){this.filtersForm=this.formBuilder.group({userType:[this.initialFilters.userType||""],searchStatus:[this.initialFilters.searchStatus||""],fromGithubRepositories:[this.initialFilters.fromGithubRepositories||null,[s.kI.min(0)]],fromGithubStars:[this.initialFilters.fromGithubStars||null,[s.kI.min(0)]],fromGithubContributions:[this.initialFilters.fromGithubContributions||null,[s.kI.min(0)]]})}getInitialFiltersFromQuerystring(){this.initialFilters=this.juniorsPageService.reqParamsGetter}onFilterSearch(){this.filtersForm.invalid||this.juniorsPageService.updateSearchRequestParams(this.filtersForm.value)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.u),t.Y36(s.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-filter-dropdown"]],standalone:!0,features:[t.jDz],decls:16,vars:7,consts:[[1,"col","dropdown","text-center"],["aria-controls","collapseExample",1,"fs-5","px-3","dropdown-toggle","mt-1",3,"click"],["class","text px-2 py-2",4,"ngIf","ngIfElse"],["textOnOpen",""],[3,"ngbCollapse","ngbCollapseChange"],["collapse","ngbCollapse"],[3,"formGroup"],[1,"card"],[1,"card-body"],[1,"row"],["class","col-md-6 d-flex my-2",4,"ngFor","ngForOf"],[1,"fs-5","text-start","mt-3"],["class","d-flex filter-input-wrapper mb-3 col-lg-4 col-md-6",4,"ngFor","ngForOf"],[1,"text","px-2","py-2"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","viewBox","0 0 20 20",1,"bi","bi-funnel","mt-0"],["d","M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"],[1,"text","px-2","py-2",3,"click"],[1,"col-md-6","d-flex","my-2"],[1,"input-group-text"],[1,"form-select","col",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"d-flex","filter-input-wrapper","mb-3","col-lg-4","col-md-6"],["type","number",1,"form-control","border",3,"formControlName"]],template:function(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){t.CHM(i);const l=t.MAs(6);return t.KtG(l.toggle())}),t.YNc(2,D,4,0,"span",2),t.YNc(3,k,2,0,"ng-template",null,3,t.W1O),t.qZA()(),t.TgZ(5,"div",4,5),t.NdJ("ngbCollapseChange",function(l){return o.isCollapsed=l}),t.TgZ(7,"form",6)(8,"div",7)(9,"div",8)(10,"div",9),t.YNc(11,J,5,3,"div",10),t.qZA(),t.TgZ(12,"h3",11),t._uU(13,"Github Activity"),t.qZA(),t.TgZ(14,"div",9),t.YNc(15,A,4,2,"div",12),t.qZA()()()()()}if(2&e){const i=t.MAs(4);t.xp6(1),t.uIk("aria-expanded",!o.isCollapsed),t.xp6(1),t.Q6J("ngIf",o.isCollapsed)("ngIfElse",i),t.xp6(3),t.Q6J("ngbCollapse",o.isCollapsed),t.xp6(2),t.Q6J("formGroup",o.filtersForm),t.xp6(4),t.Q6J("ngForOf",o.filterSelects),t.xp6(4),t.Q6J("ngForOf",o.filterInputs)}},dependencies:[s.UX,s._Y,s.YN,s.Kr,s.Fj,s.wV,s.EJ,s.JJ,s.JL,s.sg,s.u,u.ax,u.O5,p.lQ,p._D],styles:[".card[_ngcontent-%COMP%]{background-color:var(--unnamed-color-ccedfd)}.dropdown[_ngcontent-%COMP%]{background-color:var(--primary)}.dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .dropdown.show[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover, .dropdown-toggle[_ngcontent-%COMP%]   .dropdown.show[_ngcontent-%COMP%]{cursor:pointer}.dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%], .dropdown.show[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%], .dropdown-toggle[_ngcontent-%COMP%]   .dropdown.show[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:var(--info)}.dropdown[_ngcontent-%COMP%]   .filter-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .dropdown[_ngcontent-%COMP%]   .filter-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover{background-color:var(--light);color:var(--info)}"]}),n})(),B=(()=>{class n{constructor(e){this.juniorsPageService=e,this.searchWordUpdate=new _.x}ngOnInit(){this.searchWord=this.juniorsPageService.reqParamsGetter.name||"",this.searchWordUpdate.pipe(function M(n,r=P.z){return(0,x.e)((e,o)=>{let i=null,a=null,l=null;const v=()=>{if(i){i.unsubscribe(),i=null;const d=a;a=null,o.next(d)}};function Q(){const d=l+n,C=r.now();if(C<d)return i=this.schedule(void 0,d-C),void o.add(i);v()}e.subscribe((0,O.x)(o,d=>{a=d,l=r.now(),i||(i=r.schedule(Q,n),o.add(i))},()=>{v(),o.complete()},void 0,()=>{a=i=null}))})}(700),(0,y.x)()).subscribe(e=>{this.juniorsPageService.updateSearchWord(e)})}ngOnDestroy(){this.searchWordUpdate.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.u))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-search-bar"]],standalone:!0,features:[t.jDz],decls:15,vars:1,consts:[[1,"bg-white","py-1","my-2","px-2","rounded","border"],[1,"row","px-2"],[1,"my-1","col-lg-4","col","text-start","border","rounded","search-input-wrapper","py-1","d-inline-flex"],[1,"pe-1","search-icon","align-middle"],["width","20","height","20","viewBox","0 0 20 20",1,"DocSearch-Search-Icon"],["d","M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z","stroke","currentColor","fill","none","fill-rule","evenodd","stroke-linecap","round","stroke-linejoin","round"],["type","text","placeholder","Search Juniors",1,"input","align-middle",3,"ngModel","ngModelChange"],[1,"filters-wrapper","col-lg","col-md","order-md-last","my-1"],[1,"d-flex","justify-content-evenly"],[1,"sort-by-selector-wrapper"],[1,"card-display-selector-wrapper","order-lg-last","col-lg-2","col-md-3","col-4","mx-auto"],[1,"filter-selector-wrapper","col-sm-auto"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"span",3),t.O4$(),t.TgZ(4,"svg",4),t._UZ(5,"path",5),t.qZA()(),t.kcU(),t.TgZ(6,"input",6),t.NdJ("ngModelChange",function(a){return o.searchWord=a})("ngModelChange",function(a){return o.searchWordUpdate.next(a)}),t.qZA()(),t.TgZ(7,"div",7)(8,"div",8)(9,"div",9),t._UZ(10,"app-sort-by-dropdown"),t.qZA()()(),t.TgZ(11,"div",10),t._UZ(12,"app-view-selector"),t.qZA()(),t.TgZ(13,"div",11),t._UZ(14,"app-filter-dropdown"),t.qZA()()),2&e&&(t.xp6(6),t.Q6J("ngModel",o.searchWord))},dependencies:[s.UX,s.Fj,s.JJ,s.u5,s.On,U,F,Z],styles:[".search-input-wrapper[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}.search-input-wrapper[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:none;font-size:1.25rem;background-color:transparent;color:var(--dark)}.search-input-wrapper[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:hover{cursor:pointer}.search-input-wrapper[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus{background-color:var(--light)}.search-input-wrapper[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;height:auto;color:#adc2cb}.search-input-wrapper[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:var(--light)}.search-input-wrapper[_ngcontent-%COMP%]:hover   .search-icon[_ngcontent-%COMP%]{color:var(--info)}.card-display-selector-wrapper[_ngcontent-%COMP%], .filters-wrapper[_ngcontent-%COMP%]{display:none}@media screen and (min-width: 400px){.filters-wrapper[_ngcontent-%COMP%]{display:block}}@media screen and (min-width: 560px){.card-display-selector-wrapper[_ngcontent-%COMP%]{display:block}}"]}),n})();var V=c(7642),q=c(4512),f=c(5526),z=c(7913),N=c(7371),I=c(1555);let G=(()=>{class n{constructor(e,o,i,a){this.profileService=e,this.authService=o,this.activatedRoute=i,this.juniorsPageService=a,this.title="",this.subtitle="",this.technologies=[],this.initialParams={count:9,sort:"picture"}}ngOnInit(){this.activatedRoute.queryParams.subscribe(i=>{const a={...this.initialParams,...i};this.juniorsPageService.searchReqParams=a,this.profileService.searchProfile(a)});const{subtitle:e,title:o}=w.juniorsPage;this.title=o,this.subtitle=e,this.technologies=b}onTechFilterChange(e){this.juniorsPageService.updateTechFilter(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(N.H),t.Y36(I.e),t.Y36(f.gz),t.Y36(g.u))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-juniors"]],standalone:!0,features:[t.jDz],decls:15,vars:8,consts:[[1,"screen","bg-light"],[3,"burgerMenu"],[1,"pb-5"],[1,"container","text-center"],[1,"search-bar-section"],[1,"text-start","mt-5"],[1,"fs-1","text-info"],[1,"fs-4","text-secondary"],[1,"tech-boxes-wrapper"],[3,"isClickable","limit","isWhite","shadow","tech","chosenTechEmitter"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-navbar",1),t.TgZ(2,"main",2)(3,"div",3)(4,"section",4)(5,"div",5)(6,"h2",6),t._uU(7),t.qZA(),t.TgZ(8,"h3",7),t._uU(9),t.qZA(),t.TgZ(10,"div",8)(11,"app-tech-boxes",9),t.NdJ("chosenTechEmitter",function(a){return o.onTechFilterChange(a)}),t.qZA()()(),t._UZ(12,"app-search-bar"),t.qZA(),t._UZ(13,"router-outlet"),t.qZA()()(),t._UZ(14,"app-footer")),2&e&&(t.xp6(1),t.Q6J("burgerMenu",!0),t.xp6(6),t.Oqu(o.title),t.xp6(2),t.Oqu(o.subtitle),t.xp6(2),t.Q6J("isClickable",!0)("limit",20)("isWhite",!0)("shadow",!0)("tech",o.technologies.join(", ")))},dependencies:[f.lC,q.S,p.IJ,V.c,B,z.c],styles:[".tech-boxes-wrapper[_ngcontent-%COMP%]{display:none}ngb-pagination[_ngcontent-%COMP%]     a{color:var(--secondary)!important;border-color:transparent}ngb-pagination[_ngcontent-%COMP%]     .page-item.active .page-link{color:var(--primary)!important;border-radius:10px;background:transparent linear-gradient(180deg,var(--unnamed-color-4f9dbc) 0%,#50A0C0 34%,#5DC4F1 100%) 0% 0% no-repeat padding-box;background:transparent linear-gradient(180deg,#4F9DBC 0%,#50A0C0 34%,#5DC4F1 100%) 0% 0% no-repeat padding-box;box-shadow:2.5px 1px 1px #50a0c0}ngb-pagination[_ngcontent-%COMP%]     .page-item.disabled .page-link{background-color:var(--primary)!important;color:var(--secondary)!important}ngb-pagination[_ngcontent-%COMP%]     .page-item .page-link{border-radius:10px}ngb-pagination[_ngcontent-%COMP%]     .page-item:first-child .page-link, ngb-pagination[_ngcontent-%COMP%]     .page-item:last-child .page-link{background-color:var(--primary)!important;color:var(--secondary)!important}ngb-pagination[_ngcontent-%COMP%]     .page-item:first-child{margin-right:1rem}ngb-pagination[_ngcontent-%COMP%]     .page-item:last-child{margin-left:1rem}ngb-pagination[_ngcontent-%COMP%]     .page-item:not(:disabled):not(.disabled):first-child .page-link, ngb-pagination[_ngcontent-%COMP%]     .page-item:not(:disabled):not(.disabled):last-child .page-link{color:var(--primary)!important;background:transparent linear-gradient(180deg,var(--unnamed-color-4f9dbc) 0%,#50A0C0 34%,#5DC4F1 100%) 0% 0% no-repeat padding-box;background:transparent linear-gradient(180deg,#4F9DBC 0%,#50A0C0 34%,#5DC4F1 100%) 0% 0% no-repeat padding-box}@media screen and (min-width: 560px){.tech-boxes-wrapper[_ngcontent-%COMP%]{display:block}}"]}),n})()}}]);