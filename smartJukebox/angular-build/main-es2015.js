(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n  <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Cardo:400,700|Oswald\">\r\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n</head>\r\n\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a *ngIf=\"userName\" class=\"navbar-brand\" routerLink=\"/home\" routerLinkActive=\"active\">{{title}}</a>\r\n  <a *ngIf=\"!userName\" class=\"navbar-brand\" routerLink=\"/auth\" routerLinkActive=\"active\">{{title}}</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n    <ul *ngIf=\"userName\" class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-item nav-link\" routerLink=\"/players\" routerLinkActive=\"active\">Lecture</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-item nav-link\" routerLink=\"/search\" routerLinkActive=\"active\">Recherche</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-item nav-link\" routerLink=\"/channels\" routerLinkActive=\"active\">Salons</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a *ngIf=\"!userName\" class=\"nav-item nav-link\" routerLink=\"/auth/signup\" routerLinkActive=\"active\">Inscription</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a *ngIf=\"!userName\" class=\"nav-item nav-link\" routerLink=\"/auth/login\" routerLinkActive=\"active\">Connexion</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a *ngIf=\"userName\" class=\"nav-item nav-link\" (click)=\"disconnect();\">Déconnexion</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div [@routeAnimations]=\"o && o.activatedRouteData && o.activatedRouteData['animation']\">\r\n  <router-outlet #o=\"outlet\"></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\r\n    <div class=\"col-md-5 p-lg-5 mx-auto my-5\">\r\n      <h1 class=\"display-4 font-weight-normal\"><em>smartJukebox</em></h1>\r\n      <p class=\"lead font-weight-normal\"><em>smartJukebox</em> est un outil en ligne qui vous permet de rechercher des musiques sur Youtube et de les enregistrer dans des playlists. Créez ou rejoingnez des salons pour partager vos playlists, voir celles des autres utilisateurs, et donner votre avis dans le chat ! </p>\r\n      <a class=\"btn btn-outline-info\" routerLink=\"/auth/signup\" routerLinkActive=\"active\">Commencer !</a>\r\n    </div>\r\n    <div class=\"product-device box-shadow d-none d-md-block\"></div>\r\n    <div class=\"product-device product-device-2 box-shadow d-none d-md-block\"></div>\r\n</div>\r\n  \r\n<div class=\"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3\">\r\n  <div class=\"bg-dark mr-md-3 pt-3 px-3 pt-md-4 px-md-5 text-center text-white overflow-hidden\">\r\n    <div class=\"my-3 py-3\">\r\n      <h2 class=\"display-5\">Inscription</h2>\r\n      <p class=\"lead\">Créez un compte pour commencer à utiliser l'application</p>\r\n      <a class=\"btn btn-outline-info\" routerLink=\"/auth/signup\" routerLinkActive=\"active\">Inscription</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"bg-info mr-md-3 pt-3 px-3 pt-md-4 px-md-5 text-center overflow-hidden\">\r\n    <div class=\"my-3 p-3\">\r\n      <h2 class=\"display-5\">Connexion</h2>\r\n      <p class=\"lead\">Vous possédez déjà un compte ?</p>\r\n      <a class=\"btn btn-outline-dark\" routerLink=\"/auth/login\" routerLinkActive=\"active\">Connexion</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/channels/channels.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/channels/channels.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n\r\n\r\n\r\n<!-- Individual view of a selected channel -->\r\n\r\n<div *ngIf=\"individualView\" [@changeViewAnimation]>\r\n    <div class=\"card border-0\">\r\n        <div class=\"d-flex justify-content-center\">\r\n            <a *ngIf=\"isHost\" class=\"p2 flex-fill btn btn-lg btn-danger rounded-0 text-light\" (click)=\"deleteChannel()\">Supprimer le salon</a>\r\n            <a *ngIf=\"!isHost\" class=\"p2 flex-fill btn btn-lg btn-warning rounded-0 text-light\" (click)=\"leaveChannel()\">Quitter le salon</a>\r\n            <a class=\"p2 flex-fill btn btn-lg btn-dark rounded-0 text-light\" (click)=\"backToMainView()\">Retourner à la vue principale</a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"jumbotron\">\r\n        <div class=\"row mb-5\">\r\n            <div class=\"col\">\r\n                <div align=\"center\">\r\n                    <h5>Membres du salon : </h5>\r\n                    <p>{{currentChannel.host}}&nbsp;&nbsp;&nbsp;<i class=\"fa fa-podcast fa-lg\"></i></p>\r\n                    <div *ngFor=\"let m of currentChannel.members;\">{{m}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div align=\"center\">\r\n                    <h1>{{currentChannel.name}}</h1>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div align=\"center\">\r\n                    <h5>Description : </h5>\r\n                    <p>{{currentChannel.description}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row pt-5 mb-5\">\r\n            <div class=\"col-7\" [@messageBoxAnimation]>\r\n                <div align=\"center\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 mb-5\">\r\n                            <div [ngClass]=\"!listeningMusic ? 'notClickable' : 'clickable'\">\r\n                                <div align=\"center\">\r\n                                    <h3 class=\"pb-5\"> Écouter </h3>\r\n                                    <div id=\"mainPlayer\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngFor=\"let s of songs; index as i;\" class=\"col mb-4\">\r\n                            <div class=\"img\">\r\n                                <img src=\"https://img.youtube.com/vi/{{s.id}}/0.jpg\">\r\n                            </div>\r\n                            <h5>{{s.title}}</h5>\r\n                            <div class=\"d-flex justify-content-center\">\r\n                                <button type=\"button\" class=\"btn btn-success rounded-0 border-0\" (click)=\"sendToPreview(i)\"><i class=\"fa fa-play\"></i></button>\r\n                                <button type=\"button\" class=\"btn btn-danger rounded-0 border-0\" (click)=\"deleteSong(i)\"><i class=\"fa fa-trash\"></i></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-5\">\r\n                <div align=\"center\" [@messageBoxAnimation]>\r\n                    <h3 class=\"pb-5\"> Chat </h3>\r\n                    <div class=\"overflow-auto\" style=\"max-height: 500px;\" id=\"chatBox\">\r\n                        <div *ngFor=\"let m of currentChannelMessages;\" class=\"card rounded-0 border-0\">\r\n                            <span>\r\n                                <p>{{m.content}}<small class=\"text-muted\">, de {{m.author}},{{m.datetime}}</small></p>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <form [formGroup]=\"postChatMessage\" (ngSubmit)=\"onPost(postChatMessage.value)\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\"><i class=\"fa fa-share\"></i>\r\n                                    </span>\r\n                                </div>\r\n                                <input class=\"form-control\" type=\"text\" formControlName=\"message\" name=\"message\" id=\"message\" placeholder=\"Écrire un nouveau message\" required/>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <button type=\"submit\" class=\"btn btn-primary btn-block\" id=\"postMessage\" name=\"postMessage\" [disabled]=\"!postChatMessage.valid\"> Envoyer  </button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Global views of channels (public/user channels) -->\r\n\r\n<div *ngIf=\"!individualView\" [@changeViewAnimation]>\r\n    <div class=\"card border-0\">\r\n        <div class=\"d-flex justify-content-center\">\r\n            <a class=\"p2 flex-fill btn btn-lg btn-dark rounded-0 text-light\" (click)=\"toggleCreationForm()\">Créer un nouveau salon</a>\r\n            <a *ngIf=\"mainView\" class=\"p2 flex-fill btn btn-lg btn-dark rounded-0 text-light\" (click)=\"toggleMainView()\">Accéder à mes salons</a>\r\n            <a *ngIf=\"!mainView\" class=\"p2 flex-fill btn btn-lg btn-dark rounded-0 text-light\" (click)=\"toggleMainView()\">Revenir à la vue principale</a>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!-- Channel creation form -->\r\n\r\n    <div *ngIf=\"creatingNewChannel\" [@formAnimation]>\r\n        <article class=\"card-body\">\r\n            <h4 class=\"card-title text-center mb-4 mt-1\">Création d'un salon</h4>\r\n\r\n            <div *ngIf=\"takenName\" class=\"alert alert-danger\">\r\n                Ce nom de salon est déjà utilisé. Veuillez en choisir un nouveau.\r\n            </div>\r\n\r\n            <form [formGroup]=\"newChannelForm\" (ngSubmit)=\"onSubmit(newChannelForm.value)\">\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\"> <i class=\"fa fa-bars\"></i></span>\r\n                        </div>\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"name\" name=\"name\" id=\"name\" placeholder=\"Nom du salon\" required/>\r\n                    </div>\r\n                    <div *ngIf=\"name.invalid && !name.pristine\" class=\"alert alert-danger mt-1 mb-2 rounded-0\">\r\n                        <div *ngIf=\"name.errors.required\">Ce champ est requis</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\"> <i class=\"fa fa-bars\"></i></span>\r\n                        </div>\r\n                        <input class=\"form-control\" type=\"textfield\" formControlName=\"description\" name=\"description\" id=\"description\" placeholder=\"Description\"/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i></span>\r\n                        </div>\r\n                        <input class=\"form-control\" type=\"textfield\" formControlName=\"password\" name=\"password\" id=\"password\" placeholder=\"Mot de passe (optionnel)\"/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\" id=\"submitDetails\" name=\"submitDetails\" [disabled]=\"!newChannelForm.valid\"> Créer  </button>\r\n                </div>\r\n\r\n                <p class=\"text-center\"><a class=\"nav-link\" (click)=\"toggleCreationForm()\">Fermer</a></p>\r\n\r\n            </form>\r\n        </article>\r\n    </div>\r\n\r\n\r\n\r\n    <!-- Public channels -->\r\n\r\n    <div *ngIf=\"mainView\" class=\"jumbotron\" [@changeViewAnimation]>\r\n\r\n        <div class=\"mb-5 pb-2\">\r\n            <h2>Salons publics</h2>\r\n            <form class=\"form-inline mt-4 mb-3\" [formGroup]=\"searchForm\" (ngSubmit)=\"search(searchForm.value)\">\r\n                <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n                <input class=\"form-control form-control-sm ml-3 w-75 rounded-0 border-0\" type=\"text\" formControlName=\"search\" name=\"search\" placeholder=\"Rechercher un salon\" aria-label=\"Search\">\r\n            </form>\r\n            <a class=\"p2 mt-3 flex-fill btn btn-lg btn-dark rounded-0 text-light\" (click)=\"loadMainView()\"><i class=\"fa fa-refresh\"></i></a>\r\n        </div>\r\n\r\n        <div class=\"card-columns\">\r\n            <div *ngFor=\"let pc of publicChannels;\" class=\"card rounded-0 border-0\">\r\n                <div class=\"card-body\">\r\n                    <i *ngIf=\"pc.password\" class=\"fa fa-lock\" aria-hidden=\"true\"></i>\r\n                    <h5 class=\"card-title\">{{pc.name}}</h5>\r\n                    <p class=\"card-text\">{{pc.description}}</p>\r\n                    <p class=\"card-text\"><small class=\"text-muted\">Participants : {{pc.members.length+1}}</small></p>\r\n                    <a *ngIf=\"!pc.password\" class=\"hidden stretched-link\" (click)=\"openIndividualView(pc)\"></a>\r\n                    <a *ngIf=\"pc.password\" class=\"hidden stretched-link\" (click)=\"showModal=true;channelToTest=pc\"></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Modal -->\r\n    <div class=\"modal\" id=\"myModal\" [ngClass]=\"{'show':showModal}\">\r\n        <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n\r\n            <!-- Modal Header -->\r\n            <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Salon privé</h4>\r\n            <button type=\"button\" class=\"close\" (click)=\"showModal=false\" data-dismiss=\"modal\">&times;</button>\r\n            </div>\r\n\r\n            <!-- Modal body -->\r\n            <form [formGroup]=\"passwordForm\" (ngSubmit)=\"checkPassword(passwordForm.value)\">\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\"><i class=\"fa fa-lock\"></i>\r\n                            </span>\r\n                        </div>\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"password\" name=\"password\" id=\"password\" placeholder=\"Mot de passe du salon\" required/>\r\n                    </div>\r\n                    <div *ngIf=\"incorrectPassword\" class=\"alert alert-danger mt-1 mb-2 rounded-0\">\r\n                        <div> Le mot de passe est incorrect</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Modal footer -->\r\n                <div class=\"modal-footer\">\r\n                    <div class=\"form-group\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\">Entrer</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- User channels -->\r\n\r\n    <div *ngIf=\"!mainView\" class=\"jumbotron\" [@changeViewAnimation]>\r\n\r\n        <div class=\"mb-5 pb-2\">\r\n            <h2>Mes salons</h2>\r\n            <form class=\"form-inline mt-4 mb-3\" [formGroup]=\"privateSearchForm\" (ngSubmit)=\"privateSearch(privateSearchForm.value)\">\r\n                <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n                <input class=\"form-control form-control-sm ml-3 w-75 rounded-0 border-0\" type=\"text\" formControlName=\"search\" name=\"search\" placeholder=\"Rechercher un salon\" aria-label=\"Search\">\r\n            </form>\r\n            <a class=\"p2 mt-3 flex-fill btn btn-lg btn-dark rounded-0 text-light\" (click)=\"loadPersonnalView()\"><i class=\"fa fa-refresh\"></i></a>\r\n        </div>\r\n\r\n        <div class=\"card-columns\">\r\n            <div *ngFor=\"let hc of hostChannels;\" class=\"card rounded-0 border-0\">\r\n                <div class=\"card-body\">\r\n                    <i *ngIf=\"hc.password\" class=\"fa fa-unlock\" aria-hidden=\"true\"></i>\r\n                    <h5 class=\"card-title\">{{hc.name}} &nbsp;<i class=\"fa fa-podcast fa-lg\"></i></h5>\r\n                    <p class=\"card-text\">{{hc.description}}</p>\r\n                    <p class=\"card-text\"><small class=\"text-muted\">Participants : {{hc.members.length+1}}</small></p>\r\n                    <a class=\"hidden stretched-link\" (click)=\"openIndividualView(hc)\"></a>\r\n                </div>\r\n            </div>\r\n            <div *ngFor=\"let mc of memberChannels;\" class=\"card rounded-0 border-0\">\r\n                <div class=\"card-body\">\r\n                    <i *ngIf=\"mc.password\" class=\"fa fa-unlock\" aria-hidden=\"true\"></i>\r\n                    <h5 class=\"card-title\">{{mc.name}}</h5>\r\n                    <p class=\"card-text\">{{mc.description}}</p>\r\n                    <p class=\"card-text\"><small class=\"text-muted\">Participants : {{mc.members.length+1}}</small></p>\r\n                    <a class=\"hidden stretched-link\" (click)=\"openIndividualView(mc)\"></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main role=\"main\">\r\n\r\n    <div class=\"jumbotron\">\r\n      <div class=\"container\">\r\n        <h1 class=\"display-3\">Bienvenue sur <em id=\"smartJukebox\">smartJukebox</em> !</h1>\r\n        <p>Vous pouvez dès à présent commencer à utiliser l'application. Pour débuter, vous pourriez chercher une musique ?</p>\r\n        <p><a class=\"btn btn-primary btn-lg\" routerLink=\"/search\" routerLinkActive=\"active\" role=\"button\">Rechercher une musique &raquo;</a></p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <h2>Recherche</h2>\r\n          <p align=\"justify\">L'onglet recherche vous permet de trouver n'importe laquelle de vos musiques favorites tant qu'elle existe sur Youtube. Vous pourrez depuis cette page ajouter les musiques choisies à votre playlist perso, ou a vos salons.</p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <h2>Lecture</h2>\r\n          <p align=\"justify\">Visistez l'onget lecture pour consulter, gérer et écouter votre playlist perso.</p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <h2>Salons</h2>\r\n          <p align=\"justify\">Rejoignez un salon public ou privé (nécessite un mot de passe) pour découvrir et écouter les playlists des autres utilisateurs, et donnez-leur votre avis ! Ou créez votre propre salon, et montrez au monde entier vos goûts musicaux affutés ...</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\"><p><a class=\"btn btn-secondary\" routerLink=\"/search\" routerLinkActive=\"active\" role=\"button\">Recherche &raquo;</a></p>\r\n        </div>\r\n        <div class=\"col-md-4\"><p><a class=\"btn btn-secondary\" routerLink=\"/players\" routerLinkActive=\"active\" role=\"button\">Lecture &raquo;</a></p>\r\n        </div>\r\n        <div class=\"col-md-4\"><p><a class=\"btn btn-secondary\" routerLink=\"/channels\" routerLinkActive=\"active\" role=\"button\">Salons &raquo;</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n</main>\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\r\n\r\n<div class=\"card\">\r\n    <article class=\"card-body\">\r\n        <h4 class=\"card-title text-center mb-4 mt-1\">Connexion</h4>\r\n        <hr>\r\n        <p class=\"text-success text-center\">Veuillez remplir tous les champs</p>\r\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\">\r\n        <div class=\"form-group\">\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\r\n                </div>\r\n                <input class=\"form-control\" type=\"username\" formControlName=\"username\" name=\"username\" placeholder=\"Nom d'utilisateur ou E-Mail\" required/>\r\n            </div>\r\n            <div *ngIf=\"usernameCtrl.invalid && !usernameCtrl.pristine\" class=\"alert alert-danger mt-1 mb-2 rounded-0\">\r\n                <div> Ce champ est requis</div>                                    \r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\r\n                </div>\r\n                <input class=\"form-control\" formControlName=\"password\" placeholder=\"Mot de passe\" name=\"password\" type=\"password\">\r\n            </div>\r\n            <div *ngIf=\"passwordCtrl.invalid && !passwordCtrl.pristine\" class=\"alert alert-danger mt-1 mb-2 rounded-0\">\r\n                <div> Ce champ est requis</div>                                    \r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-primary btn-block\" id=\"submitDetails\" name=\"submitDetails\"> Se connecter  </button>\r\n        <div *ngIf=\"!userExist\" class=\"alert alert-danger mt-1 mb-2 rounded-0\">\r\n            <div> L'identifiant et le mot de passe ne correspondent pas</div>                                    \r\n        </div>\r\n        </div>\r\n        <p class=\"text-center\"><a class=\"nav-link\" routerLink=\"/auth/signup\" routerLinkActive=\"active\">S'inscrire</a></p>\r\n        </form>\r\n    </article>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/players/players.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/players/players.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-7\">\r\n            <div align=\"center\">\r\n                <h3 class=\"pb-5\"> Mes musiques </h3>\r\n                <div class=\"row\">\r\n                    <div *ngFor=\"let s of songs; index as i;\" class=\"col mb-4\">\r\n                        <div class=\"img\">\r\n                          <img src=\"https://img.youtube.com/vi/{{s.id}}/0.jpg\">\r\n                        </div>\r\n                        <h5>{{s.title}}</h5>\r\n                        <div class=\"d-flex justify-content-center\">\r\n                            <button type=\"button\" class=\"btn btn-success rounded-0 border-0\" (click)=\"sendToPreview(i)\"><i class=\"fa fa-play\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-danger rounded-0 border-0\" (click)=\"delete(i)\"><i class=\"fa fa-trash\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-5\">\r\n            <div [ngClass]=\"!listeningMusic ? 'notClickable' : 'clickable'\">\r\n                <div align=\"center\">\r\n                    <h3 class=\"pb-5\"> Écouter </h3>\r\n                    <div id=\"mainPlayer\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n\r\n<div class=\"container\">\r\n  <article class=\"card-body\">\r\n    <h4 class=\"card-title text-center mb-4 mt-1\">Effectuer une recherhce</h4>\r\n    <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSubmit(searchForm.value)\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"> <i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"title\" name=\"title\" id=\"title\"   placeholder=\"Rechercher\" required>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-primary btn-block\" id=\"submitDetails\" name=\"submitDetails\"   [disabled]=\"!searchForm.valid\"> Rechercher </button>\r\n      </div>\r\n    </form>\r\n  </article>\r\n</div>\r\n\r\n<div [ngClass]=\"!resultsDisplayed ? 'notClickable' : 'clickable'\" [@changeViewAnimation]>\r\n  <div class=\"d-flex justify-content-center mb-4\">\r\n    <div id=\"searchPlayer\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"resultsDisplayed\" class=\"row\" [@changeViewAnimation]>\r\n  <div *ngFor=\"let r of results; index as i;\" class=\"col mb-3\">\r\n    <div style=\"max-width: 400px;\" id={{i}}>\r\n      <div class=\"img pb-1\">\r\n        <img src=\"https://img.youtube.com/vi/{{r.id}}/0.jpg\">\r\n      </div>\r\n      <h5>{{r.title}}</h5>\r\n      <form [formGroup]=\"channelSelection\" (ngSubmit)=\"sendToChannel(channelSelection.value, r.id)\">\r\n        <div class=\"d-flex justify-content-center\">\r\n          <button type=\"button\" class=\"btn btn-success rounded-0 border-0\" (click)=\"sendToPreview(i)\"><i class=\"fa fa-play\"></i></button>\r\n          <button type=\"button\" class=\"btn btn-light rounded-0 border-0\" (click)=\"saveForUser(r.id)\"><i class=\"fa fa-save\"></i></button>\r\n          <select formControlName=\"channel\" class=\"form-control\" required name=\"selectedChannel\" id=\"selectedChannel\">\r\n            <option [value]=\"hc.name\" *ngFor=\"let hc of hostChannels\">\r\n              {{hc.name}}\r\n            </option>\r\n          </select>\r\n          <button type=\"submit\" id=\"selectChannel\" name=\"selectChannel\" [disabled]=\"!channelSelection.valid\" class=\"btn btn-light rounded-0 border-0\"><i class=\"fa fa-share\"></i></button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<footer *ngIf=\"successfullyAdded\" class=\"footer fixed-bottom\" [@alertAnimation]>\r\n  <div class=\"card border-0 rounded-0\">\r\n    <div class=\"d-flex justify-content-center\">\r\n      <div *ngIf=\"successfullyAdded\" class=\"p2 flex-fill btn btn-lg btn-success rounded-0 text-light\"> Morceau ajouté avec succès ! </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\r\n\r\n<div class=\"card\">\r\n    <article class=\"card-body\">\r\n        <h4 class=\"card-title text-center mb-4 mt-1\">Inscription</h4>\r\n        <hr>\r\n        <p class=\"text-success text-center\">Veuillez remplir tous les champs</p>\r\n\r\n        <div *ngIf=\"takenUsername || takenEmail || signupError\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"takenUsername\"> Ce nom d'utilisateur est déjà pris, veuillez en choisir un nouveau </div>\r\n            <div *ngIf=\"takenEmail\"> Cette adresse email est déjà utilisée, veuillez en entrer une autre </div>\r\n            <div *ngIf=\"signupError\"> Une erreur a eu lieu durant l'inscription, vérifiez vos informations puis réessayez </div>\r\n        </div>\r\n\r\n        <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit(signupForm.value)\">\r\n\r\n            <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\r\n                     </div>\r\n                    <input class=\"form-control\" type=\"text\" formControlName=\"username\" name=\"username\" id=\"username\" placeholder=\"Nom d'utilisateur\" required/>\r\n                </div>\r\n                <div *ngIf=\"username.invalid && !username.pristine\" class=\"alert alert-danger mt-1 mb-2 rounded-0\">\r\n                    <div *ngIf=\"username.errors.required\"> Ce champ est requis</div>                                    \r\n                </div> \r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"> <i class=\"fa fa-envelope\"></i> </span>\r\n                     </div>\r\n                    <input class=\"form-control\" type=\"email\" formControlName=\"email\" name=\"email\" id=\"email\" placeholder=\"E-Mail\" required/>\r\n                </div>\r\n                <div *ngIf=\"email.invalid && !email.pristine\" class=\"alert alert-danger mt-1 mb-2 rounded-0\">\r\n                    <div *ngIf=\"email.errors.required\"> Ce champ est requis</div>  \r\n                    <div *ngIf=\"email.errors.email\"> Adresse e-mail invalide</div>                                               \r\n                </div> \r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"> <i class=\"fa fa-envelope\"></i> </span>\r\n                     </div>\r\n                    <input class=\"form-control\" type=\"emailConf\" formControlName=\"emailConf\" name=\"emailConf\" id=\"emailConf\" placeholder=\"Confirmer l'E-Mail\" required/>\r\n                </div>\r\n                <div *ngIf=\"emailConf.invalid && !emailConf.pristine\" class=\"alert alert-danger mt-1 mb-2 rounded-0\">\r\n                    <div *ngIf=\"emailConf.errors.required\"> Ce champ est requis</div>  \r\n                    <div *ngIf=\"emailConf.errors.email\"> Adresse e-mail invalide</div>\r\n                    <div *ngIf=\"isIdenticalToEmail && !emailConf.errors.email\"> Les emails doivent être identiques </div>                                                                   \r\n                </div> \r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\r\n                    </div>\r\n                    <input class=\"form-control\" formControlName=\"password\" placeholder=\"Mot de passe\" name=\"password\" type=\"password\">\r\n                </div>\r\n                <div *ngIf=\"password.invalid && !password.pristine\" class=\"alert alert-danger mt-1 mb-2 rounded-0\">\r\n                    <div *ngIf=\"password.errors.required\"> Ce champ est requis</div>  \r\n                    <div *ngIf=\"password.errors.minlength\"> Le mot de passe doit faire plus de {{passwordMinLength}} caractères</div>                                               \r\n                </div> \r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\r\n                     </div>\r\n                    <input class=\"form-control\" type=\"password\" formControlName=\"passwordConf\" name=\"passwordConf\" id=\"passwordConf\" placeholder=\"Confirmer le Mot de passe\" required/>\r\n                </div>\r\n                <div *ngIf=\"passwordConf.invalid && !passwordConf.pristine\" class=\"alert alert-danger mt-1 mb-2 rounded-0\">\r\n                    <div *ngIf=\"passwordConf.errors.required\"> Ce champ est requis </div>  \r\n                    <div *ngIf=\"passwordConf.errors.minlength\"> Le mot de passe doit faire plus de {{passwordMinLength}} caractères</div>\r\n                    <div *ngIf=\"isIdenticalToPassword\"> Les mots de passe doivent être identiques </div>                                         \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-primary btn-block\" id=\"submitDetails\" name=\"submitDetails\" [disabled]=\"!signupForm.valid\"> S'inscrire  </button>\r\n            </div>\r\n\r\n            <p class=\"text-center\"><a class=\"nav-link\" routerLink=\"/auth/login\" routerLinkActive=\"active\">Se connecter</a></p>\r\n\r\n        </form>\r\n    </article>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players/players.component */ "./src/app/players/players.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _channels_channels_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./channels/channels.component */ "./src/app/channels/channels.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");










const routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"], data: { animation: 'Auth' } },
    { path: 'auth/signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], data: { animation: 'Signup' } },
    { path: 'auth/login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], data: { animation: 'Login' } },
    { path: 'players', component: _players_players_component__WEBPACK_IMPORTED_MODULE_3__["PlayersComponent"], data: { animation: 'Players' } },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], data: { animation: 'Search' } },
    { path: 'channels', component: _channels_channels_component__WEBPACK_IMPORTED_MODULE_8__["ChannelsComponent"], data: { animation: 'Channels' } },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], data: { animation: 'Home' } },
    { path: '**', redirectTo: 'auth', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a:hover {\r\n    cursor:pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVyIHtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _route_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route-animations */ "./src/app/route-animations.ts");





let AppComponent = class AppComponent {
    constructor(router, _sharedService) {
        this.router = router;
        this._sharedService = _sharedService;
        this.title = 'smartJukebox';
        this.userName = localStorage.getItem('userName');
        _sharedService.changeEmitted$.subscribe(text => {
            console.log(text);
            this.userName = localStorage.getItem('userName');
        });
    }
    disconnect() {
        localStorage.clear();
        this.router.navigate(['/auth']);
        this.userName = null;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        providers: [_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]],
        animations: [
            _route_animations__WEBPACK_IMPORTED_MODULE_4__["slideInAnimation"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./players/players.component */ "./src/app/players/players.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _channels_channels_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./channels/channels.component */ "./src/app/channels/channels.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _players_players_component__WEBPACK_IMPORTED_MODULE_8__["PlayersComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
            _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__["AuthComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _channels_channels_component__WEBPACK_IMPORTED_MODULE_13__["ChannelsComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    max-width: 960px;\r\n}\r\n\r\nh1{\r\n    font-family: 'Oswald', sans-serif;\r\n}\r\n\r\n.border-top { border-top: 1px solid #e5e5e5; }\r\n\r\n.border-bottom { border-bottom: 1px solid #e5e5e5; }\r\n\r\n.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\r\n\r\n.flex-equal > * {\r\n  -webkit-box-flex: 1;\r\n  flex: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .flex-md-equal > * {\r\n    -webkit-box-flex: 1;\r\n    flex: 1;\r\n  }\r\n}\r\n\r\n.overflow-hidden { \r\n    overflow: hidden; \r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUEsY0FBYyw2QkFBNkIsRUFBRTs7QUFDN0MsaUJBQWlCLGdDQUFnQyxFQUFFOztBQUVuRCxjQUFjLDhDQUE4QyxFQUFFOztBQUU5RDtFQUVFLG1CQUFtQjtFQUNuQixPQUFPO0FBQ1Q7O0FBQ0E7RUFDRTtJQUVFLG1CQUFtQjtJQUNuQixPQUFPO0VBQ1Q7QUFDRjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJvcmRlci10b3AgeyBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTVlNTsgfVxyXG4uYm9yZGVyLWJvdHRvbSB7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1OyB9XHJcblxyXG4uYm94LXNoYWRvdyB7IGJveC1zaGFkb3c6IDAgLjI1cmVtIC43NXJlbSByZ2JhKDAsIDAsIDAsIC4wNSk7IH1cclxuXHJcbi5mbGV4LWVxdWFsID4gKiB7XHJcbiAgLW1zLWZsZXg6IDE7XHJcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICBmbGV4OiAxO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5mbGV4LW1kLWVxdWFsID4gKiB7XHJcbiAgICAtbXMtZmxleDogMTtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLm92ZXJmbG93LWhpZGRlbiB7IFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbn1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthComponent = class AuthComponent {
    constructor(router) {
        this.router = router;
        if (localStorage.getItem('userName') !== null) {
            router.navigate(['/home']);
        }
    }
    ngOnInit() {
    }
};
AuthComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")).default]
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/channels/channels-animations.ts":
/*!*************************************************!*\
  !*** ./src/app/channels/channels-animations.ts ***!
  \*************************************************/
/*! exports provided: divAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divAnimation", function() { return divAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const divAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('formAnimation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)', opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)', opacity: 0 }))
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('changeViewAnimation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200)
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('messageBoxAnimation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)
        ])
    ])
];


/***/ }),

/***/ "./src/app/channels/channels.component.css":
/*!*************************************************!*\
  !*** ./src/app/channels/channels.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a { \r\n    cursor: pointer; \r\n}\r\n\r\n.modal.show{\r\n    display: block;\r\n}\r\n\r\n.notClickable {\r\n    pointer-events:none;\r\n}\r\n\r\n.clickable {\r\n    pointer-events: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvY2hhbm5lbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY2hhbm5lbHMvY2hhbm5lbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEgeyBcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgXHJcbn1cclxuXHJcbi5tb2RhbC5zaG93e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5ub3RDbGlja2FibGUge1xyXG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcclxufVxyXG5cclxuLmNsaWNrYWJsZSB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/channels/channels.component.ts":
/*!************************************************!*\
  !*** ./src/app/channels/channels.component.ts ***!
  \************************************************/
/*! exports provided: ChannelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsComponent", function() { return ChannelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _channels_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./channels-animations */ "./src/app/channels/channels-animations.ts");






let ChannelsComponent = class ChannelsComponent {
    // ===== Inits =====
    constructor(formBuilder, http, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        // ===== States =====
        this.takenName = false;
        this.isPublic = true;
        this.creatingNewChannel = false;
        this.mainView = true;
        this.individualView = false;
        this.isHost = false;
        this.listeningMusic = false;
        this.incorrectPassword = false;
        this.showModal = false;
        this.mainPlayer = null;
        this.songs = [];
        this.currentUser = localStorage.getItem('userName');
        if (this.currentUser === null) {
            router.navigate(['/auth']);
        }
        this.newChannelForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: '',
            password: ''
        });
        this.searchForm = this.formBuilder.group({
            search: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.privateSearchForm = this.formBuilder.group({
            search: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.postChatMessage = this.formBuilder.group({
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.passwordForm = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.individualView = false;
            }
        });
    }
    ngOnInit() {
        this.loadPersonnalView();
        this.loadMainView();
        this.interval = setInterval(() => {
            if (this.individualView) {
                let chatHistory = document.getElementById("chatBox");
                chatHistory.scrollTop = chatHistory.scrollHeight;
                this.loadCurrentChannelMessages();
            }
        }, 1000);
    }
    initPlayerView() {
        this.mainPlayer = new window['YT'].Player('mainPlayer', {
            height: '480',
            width: '720',
            videoId: '',
            events: {}
        });
    }
    initPlayer() {
        // Loads the IFrame Player API code asynchronously
        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        this.http.get('/api/v1/playlists/channelplaylist?channelName=' + this.currentChannel.name).subscribe((ids) => {
            let i;
            let numTitles = 0;
            for (i = 0; i < ids.playlist.length; i++) {
                this.http.get('/watch?v=' + ids.playlist[i] + '&format=json').subscribe((titles) => {
                    let num = titles.html.split("embed/")[1].split("?feature")[0];
                    this.songs[numTitles] = { id: num, title: titles.title };
                    numTitles = numTitles + 1;
                });
            }
        });
        // Wait for initializations before loading
        setTimeout(() => this.initPlayerView(), 1000);
    }
    get name() { return this.newChannelForm.get('name'); }
    get description() { return this.newChannelForm.get('description'); }
    get password() { return this.newChannelForm.get('password'); }
    // ===== View controllers =====
    toggleMainView() {
        this.mainView = !this.mainView;
        this.loadPersonnalView();
        this.loadMainView();
    }
    toggleCreationForm() {
        this.creatingNewChannel = !this.creatingNewChannel;
    }
    backToMainView() {
        this.individualView = false;
    }
    loadCurrentChannelMessages() {
        this.http.get('/api/v1/channel/messages?channel=' + this.currentChannel.name).subscribe((data) => {
            this.currentChannelMessages = data.messages;
        });
        this.individualView = true;
    }
    openIndividualView(channel) {
        this.songs = [];
        this.currentChannel = channel;
        this.loadCurrentChannelMessages();
        this.initPlayer();
        if (channel.host === this.currentUser) {
            this.isHost = true;
        }
        else { // Add user to channel members if not already in or host
            this.http.get('/api/v1/channel/ismemberofchannel?user=' + this.currentUser + '&channel=' + this.currentChannel.name).subscribe((data) => {
                if (data.member === false) {
                    const dataToSend = { userToAdd: this.currentUser, currentChannel: this.currentChannel };
                    this.http.put('/api/v1/channel/addmember', dataToSend).subscribe((data) => {
                        this.currentChannel = data.channel;
                    });
                }
            });
            this.isHost = false;
        }
        this.individualView = true;
    }
    loadMainView() {
        this.http.get('/api/v1/channel/publicchannels?user=' + this.currentUser).subscribe((data) => {
            this.publicChannels = data;
        });
    }
    loadPersonnalView() {
        this.http.get('/api/v1/channel/hostchannels?host=' + this.currentUser).subscribe((data) => {
            this.hostChannels = data;
        });
        this.http.get('/api/v1/channel/memberchannels?member=' + this.currentUser).subscribe((data) => {
            this.memberChannels = data;
        });
    }
    // ===== Buttons and forms controllers =====
    onSubmit(channelData) {
        let toSearch = channelData.name + " " + channelData.description + " " + this.currentUser;
        toSearch = toSearch.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const dataToSend = { channelData: channelData, currentUser: this.currentUser, toSearch: toSearch };
        this.http.post('/api/v1/channel/create', dataToSend).subscribe((data) => {
            this.takenName = false;
            if (data.channel === "takenName") {
                this.takenName = true;
            }
            else {
                this.creatingNewChannel = false;
                this.loadPersonnalView();
                this.currentChannel = data.channel;
                this.isHost = true;
                this.individualView = true;
            }
        });
    }
    onPost(messageContent) {
        const dataToSend = { messageContent: messageContent.message, author: this.currentUser, channelName: this.currentChannel.name };
        this.http.post('/api/v1/channel/message', dataToSend).subscribe((data) => {
            this.currentChannelMessages = data.messages;
        });
        this.loadCurrentChannelMessages();
    }
    search(toSearch) {
        let keywords = toSearch.search;
        keywords = keywords.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (keywords !== "") {
            this.http.get('/api/v1/channel/publicSearch?keywords=' + keywords + '&user=' + this.currentUser).subscribe((data) => {
                this.publicChannels = data;
            });
        }
    }
    privateSearch(toSearch) {
        let keywords = toSearch.search;
        keywords = keywords.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (keywords !== "") {
            this.http.get('/api/v1/channel/privateSearch?keywords=' + keywords + '&user=' + this.currentUser).subscribe((data) => {
                this.memberChannels = data;
                this.hostChannels = null;
            });
        }
    }
    deleteChannel() {
        this.http.delete('/api/v1/channel/deletechannel?channelToDelete=' + this.currentChannel.name).subscribe((data) => { });
        this.loadPersonnalView();
        this.loadMainView();
        this.individualView = false;
    }
    leaveChannel() {
        const dataToSend = { channel: this.currentChannel.name, member: this.currentUser };
        this.http.put('/api/v1/channel/leavechannel', dataToSend).subscribe((data) => {
            this.currentChannel = data.channel;
        });
        this.loadPersonnalView();
        this.loadMainView();
        this.individualView = false;
    }
    checkPassword(res) {
        this.http.get('/api/v1/channel/checkPassword?name=' + this.channelToTest.name + '&password=' + res.password).subscribe((data) => {
            if (!data) {
                this.incorrectPassword = true;
            }
            else {
                this.showModal = false;
                this.openIndividualView(this.channelToTest);
            }
        });
    }
    sendToPreview(index) {
        this.listeningMusic = true;
        let id = this.songs[index].id;
        this.mainPlayer.loadVideoById(id);
        this.mainPlayer.playVideo();
        this.mainPlayer.unMute();
        this.mainPlayer.setVolume(100);
    }
    deleteSong(index) {
        this.http.delete('/api/v1/playlists/channelplaylist?songID=' + this.songs[index] + '&channelName=' + this.currentChannel.name).subscribe((data) => {
            this.http.get('/api/v1/playlists/channelplaylist?channelName=' + this.currentChannel.name).subscribe((data) => {
                this.songs = data.playlist;
            });
        });
    }
};
ChannelsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ChannelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-channels',
        animations: [_channels_animations__WEBPACK_IMPORTED_MODULE_5__["divAnimation"]],
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./channels.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/channels/channels.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./channels.component.css */ "./src/app/channels/channels.component.css")).default]
    })
], ChannelsComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Move down content because we have a fixed navbar that is 3.5rem tall */\r\nbody {\r\n    padding-top: 3.5rem;\r\n}\r\nh1{\r\n    font-family: 'Oswald', sans-serif;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUVBQXlFO0FBQ3pFO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1vdmUgZG93biBjb250ZW50IGJlY2F1c2Ugd2UgaGF2ZSBhIGZpeGVkIG5hdmJhciB0aGF0IGlzIDMuNXJlbSB0YWxsICovXHJcbmJvZHkge1xyXG4gICAgcGFkZGluZy10b3A6IDMuNXJlbTtcclxufVxyXG5cclxuaDF7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
        if (localStorage.getItem('userName') === null) {
            router.navigate(['/auth']);
        }
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card{\r\n    margin-top: 7%;\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");






let LoginComponent = class LoginComponent {
    constructor(formBuilder, http, router, _sharedService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this._sharedService = _sharedService;
        this.userExist = true;
        if (localStorage.getItem('userName') !== null) {
            router.navigate(['/home']);
        }
    }
    onSubmit(loginData) {
        this.http.get('/api/v1/login?username=' + loginData.username + '&password=' + loginData.password).subscribe((data) => {
            if (!data.accountInfo) {
                this.userExist = false;
            }
            else {
                this.userExist = true;
                localStorage.setItem('userName', data.accountInfo.username);
                this._sharedService.emitChange('login Complete');
                this.router.navigate(['/home']);
            }
        });
    }
    ngOnInit() {
        this.usernameCtrl = this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.passwordCtrl = this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.loginForm = this.formBuilder.group({
            username: this.usernameCtrl,
            password: this.passwordCtrl
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/players/players.component.css":
/*!***********************************************!*\
  !*** ./src/app/players/players.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notClickable {\r\n    pointer-events:none;\r\n}\r\n\r\n.clickable {\r\n    pointer-events: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVycy9wbGF5ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wbGF5ZXJzL3BsYXllcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RDbGlja2FibGUge1xyXG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcclxufVxyXG5cclxuLmNsaWNrYWJsZSB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/players/players.component.ts":
/*!**********************************************!*\
  !*** ./src/app/players/players.component.ts ***!
  \**********************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PlayersComponent = class PlayersComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.mainPlayer = null;
        this.songs = [];
        this.listeningMusic = false;
        this.currentUser = localStorage.getItem('userName');
        if (this.currentUser === null) {
            router.navigate(['/auth']);
        }
    }
    ngOnInit() {
        // Loads the IFrame Player API code asynchronously
        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        // Wait for initializations before loading
        setTimeout(() => this.initPlayer(), 1000);
        this.http.get('/api/v1/playlists/playlist?host=' + this.currentUser).subscribe((ids) => {
            let i;
            let numTitles = 0;
            for (i = 0; i < ids.ids.length; i++) {
                this.http.get('/watch?v=' + ids.ids[i] + '&format=json').subscribe((titles) => {
                    let num = titles.html.split("embed/")[1].split("?feature")[0];
                    this.songs[numTitles] = { id: num, title: titles.title };
                    numTitles = numTitles + 1;
                });
            }
        });
    }
    initPlayer() {
        this.mainPlayer = new window['YT'].Player('mainPlayer', {
            height: '480',
            width: '720',
            videoId: '',
            events: {}
        });
    }
    sendToPreview(index) {
        this.listeningMusic = true;
        let id = this.songs[index].id;
        this.mainPlayer.loadVideoById(id);
        this.mainPlayer.playVideo();
        this.mainPlayer.unMute();
        this.mainPlayer.setVolume(100);
    }
    delete(index) {
        this.http.delete('/api/v1/playlists/playlist?songID=' + this.songs[index] + '&host=' + this.currentUser).subscribe((data) => {
            this.http.get('/api/v1/playlists/playlist?host=' + this.currentUser).subscribe((data) => {
                this.songs = data.ids;
            });
        });
    }
};
PlayersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PlayersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-players',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./players.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/players/players.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./players.component.css */ "./src/app/players/players.component.css")).default]
    })
], PlayersComponent);



/***/ }),

/***/ "./src/app/route-animations.ts":
/*!*************************************!*\
  !*** ./src/app/route-animations.ts ***!
  \*************************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Players => Auth', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Search => Auth', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Youtube => Auth', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Spotify => Auth', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Channels => Auth', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Home => Auth', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Auth => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Signup => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Login => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Home => Players', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Home => Search', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Home => Channels', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Youtube => Spotify', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Youtube => Search', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Youtube => Channels', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Spotify => Search', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Spotify => Channels', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Search => Channels', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Players => Search', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Players => Channels', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Channels => Search', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Channels => Players', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Channels => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Search => Players', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Search => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Players => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Youtube => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Spotify => Youtube', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Spotify => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Youtube => Players', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Login => Signup', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Login => Auth', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Signup => Auth', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Auth => Signup', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Auth => Login', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Signup => Login', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
]);


/***/ }),

/***/ "./src/app/search/search-animations.ts":
/*!*********************************************!*\
  !*** ./src/app/search/search-animations.ts ***!
  \*********************************************/
/*! exports provided: divAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divAnimation", function() { return divAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const divAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('changeViewAnimation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(400)
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(400)
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('alertAnimation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(5000)
        ])
    ])
];


/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iframe {\r\n  width: 100% !important;\r\n}\r\n\r\n.notClickable {\r\n  pointer-events:none;\r\n}\r\n\r\n.clickable {\r\n  pointer-events: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlmcmFtZSB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vdENsaWNrYWJsZSB7XHJcbiAgcG9pbnRlci1ldmVudHM6bm9uZTtcclxufVxyXG5cclxuLmNsaWNrYWJsZSB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-animations */ "./src/app/search/search-animations.ts");






let SearchComponent = class SearchComponent {
    constructor(formBuilder, http, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.searchPlayer = null;
        this.resultsDisplayed = false;
        this.resultsID = null;
        this.results = [];
        this.successfullyAdded = false;
        this.currentUser = localStorage.getItem('userName');
        if (this.currentUser === null) {
            router.navigate(['/auth']);
        }
        this.searchForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.channelSelection = this.formBuilder.group({
            channel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        this.http.get('/api/v1/channel/hostchannels?host=' + this.currentUser).subscribe((data) => {
            this.hostChannels = data;
        });
        // Loads the IFrame Player API code asynchronously
        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        // Wait for initializations before loading
        setTimeout(() => this.initPlayer(), 1000);
        this.displayTitle('ixkoVwKQaJg');
    }
    initPlayer() {
        this.searchPlayer = new window['YT'].Player('searchPlayer', {
            height: '400',
            width: '800',
            videoId: '',
            events: {
                'onStateChange': this.updatePlayerState.bind(this)
            }
        });
    }
    displayTitle(id) {
        this.http.get('/watch?v=' + id + '&format=json').subscribe((data) => {
        });
    }
    updatePlayerState(event) {
        if (event.data == window['YT'].PlayerState.CUED) {
            this.resultsID = this.searchPlayer.getPlaylist();
            let i;
            let nbTitles = 0;
            for (i = 0; i < this.resultsID.length; i++) {
                this.http.get('/watch?v=' + this.resultsID[i] + '&format=json').subscribe((data) => {
                    let num = data.html.split("embed/")[1].split("?feature")[0];
                    this.results[nbTitles] = { id: num, title: data.title };
                    nbTitles = nbTitles + 1;
                });
            }
            this.searchPlayer.playVideo();
        }
    }
    onSubmit(searchContent) {
        this.resultsDisplayed = false;
        this.searchPlayer.cuePlaylist({
            'listType': "search",
            'list': searchContent.title
        });
        setTimeout(() => this.resultsDisplayed = true, 1000);
    }
    sendToChannel(channel, songID) {
        this.http.put('/api/v1/channel/addSong', { songID: songID, channel: channel.channel, host: this.currentUser }).subscribe((data) => {
            this.successfullyAdded = true;
            this.successfullyAdded = false;
        });
    }
    saveForUser(songID) {
        this.http.put('/api/v1/playlists/playlist', { host: this.currentUser, songID: songID }).subscribe((data) => {
            this.successfullyAdded = true;
        });
        setTimeout(() => this.successfullyAdded = false, 1500);
    }
    sendToPreview(index) {
        let id = this.results[index].id;
        this.searchPlayer.loadVideoById(id);
        this.searchPlayer.playVideo();
        this.searchPlayer.unMute();
        this.searchPlayer.setVolume(100);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        animations: [_search_animations__WEBPACK_IMPORTED_MODULE_5__["divAnimation"]],
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SharedService = class SharedService {
    constructor() {
        this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.changeEmitted$ = this.emitChangeSource.asObservable();
    }
    emitChange(change) {
        this.emitChangeSource.next(change);
    }
};
SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], SharedService);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card{\r\n    margin-top: 7%;\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SignupComponent = class SignupComponent {
    constructor(formBuilder, http, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.passwordMinLength = 3;
        this.takenUsername = false;
        this.takenEmail = false;
        this.signupError = false;
        if (localStorage.getItem('userName') !== null) {
            router.navigate(['/home']);
        }
        this.signupForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            emailConf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, this.isIdenticalToEmail('email')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.passwordMinLength)]],
            passwordConf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.passwordMinLength), this.isIdenticalToPassword('password')]]
        });
    }
    isIdenticalToPassword(passwordToCompare) {
        let password;
        let passwordConf;
        return function matchPreviousPassword(control) {
            if (!control.parent) {
                return null;
            } // If there is nothing to compare yet
            if (!passwordConf) {
                passwordConf = control;
                password = control.parent.get(passwordToCompare);
                password.valueChanges.subscribe(() => {
                    passwordConf.updateValueAndValidity();
                });
            }
            if (password.value !== passwordConf.value) {
                return { matchPrevious: true };
            }
        };
    }
    isIdenticalToEmail(emailToCompare) {
        let email;
        let emailConf;
        return function matchPreviousEmail(control) {
            if (!control.parent) {
                return null;
            }
            if (!emailConf) {
                emailConf = control;
                email = control.parent.get(emailToCompare);
                email.valueChanges.subscribe(() => {
                    emailConf.updateValueAndValidity();
                });
            }
            if (email.value !== emailConf.value) {
                return { matchPrevious: true };
            }
        };
    }
    get username() { return this.signupForm.get('username'); }
    get email() { return this.signupForm.get('email'); }
    get emailConf() { return this.signupForm.get('emailConf'); }
    get password() { return this.signupForm.get('password'); }
    get passwordConf() { return this.signupForm.get('passwordConf'); }
    onSubmit(userData) {
        this.http.post('/api/v1/signup', userData).subscribe((data) => {
            this.takenUsername = false;
            this.takenEmail = false;
            this.signupError = false;
            switch (data.signup) {
                case "error":
                    this.signupError = true;
                    break;
                case "takenUsername":
                    this.takenUsername = true;
                    break;
                case "takenEmail":
                    this.takenEmail = true;
                    break;
                case "success":
                    this.router.navigate(['/auth/login']);
                    break;
            }
        });
    }
    ngOnInit() { }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\drope\Documents\Fac\Master 2\S9\Prog web\Projet\ProgWeb\smartJukebox\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map