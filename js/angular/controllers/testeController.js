// Author - Renê Alves Barbosa | renealves@lavid.ufpb.br

/* recommended */
// createSessionController.js

'use strict';

app.controller('testeController', ['$scope', function ($scope) {

	$scope.botoes = [{'name': 'Inicio', 'link' : '#/'}, {'name': 'Menu', 'link' : '#/menu'}];

}]);