// Author - Renê Alves Barbosa | renealves@lavid.ufpb.br

/* recommended */
// main.js

'use strict';

var app = angular.module('league-of-sounds', ['ngRoute','ngMaterial']);

app.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
  	.when('/menu', {
      	templateUrl   : 'partials/menu.html',
      	title         : 'League of Sounds Início',
     	controller    : 'testeController'
    })
    .when('/', {
      	templateUrl   : 'partials/inicio.html',
      	title         : 'League of Sounds Início'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
