var app=angular.module("admin",["ui.router","mgcrea.ngStrap","restangular","wysiwyg.module"]).config(["RestangularProvider",function(e){e.setBaseUrl("/api")}]);app.config(["$stateProvider","$urlRouterProvider",function(e,r){e.state("main",{url:"","abstract":!0,views:{main:{templateUrl:"views/partials/layout.html"},"header@main":{templateUrl:"views/partials/header.html"},"nav@main":{templateUrl:"views/partials/nav.html"}}}).state("main.index",{url:"/",views:{"content@main":{templateUrl:"views/dashboard/main.html"}}}),r.otherwise("/")}]),app.config(["$stateProvider",function(e){e.state("main.users",{url:"/users",resolve:{usersResolve:["Restangular",function(e){return e.one("users").getList()}],groupsResolve:["Restangular",function(e){return e.all("groups").getList()}]},views:{"content@main":{controller:"usersMainCtrl",templateUrl:"views/users/main.html"}}})}]),app.config(["$stateProvider",function(e){e.state("main.news",{url:"/news",resolve:{},views:{"content@main":{controller:"newsMainCtrl",templateUrl:"views/news/main.html"}}})}]),app.controller("usersMainCtrl",["$scope","groupsResolve","usersResolve","$modal","Restangular",function(e,r,t,n,s){e.active={group:-1},e.groups=r,e.users=t.plain(),e.user=_.first(e.users),e.selectGroup=function(r){e.active.group=r.id},e.addGroup=function(r){e.group=r||s.restangularizeElement(null,{},"groups"),n({scope:e,template:"views/modals/users/group.html",placement:"center",show:!0})}}]),app.controller("modalUsersGroupCtrl",["$scope","Restangular",function(e,r){e.save=function(t){e.group.save().then(function(n){e.groups.push(r.restangularizeElement(null,n[0],"groups")),t()})},e.remove=function(r){e.group.remove().then(function(){e.groups.splice(e.groups.indexOf(e.group),1),r()})}}]),app.controller("newsMainCtrl",["$scope","$modal","Restangular",function(e){e.yourModel.customMenu=[["bold","italic","underline","strikethrough","subscript","superscript"],["font"],["font-size"],["font-color","hilite-color"],["remove-format"],["ordered-list","unordered-list","outdent","indent"],["left-justify","center-justify","right-justify"],["code","quote","paragragh"],["link","image"]]}]),app.directive("slimScroll",function(){return{restrict:"EA",link:function(e,r){r.slimscroll(r.data())}}});