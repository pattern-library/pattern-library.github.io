/**
* @ngdoc function
* @name atlasAngularTest.PatternsCtrl
*
* @description
* Controller that PatternsCtrl
*/
function PatternsCtrl ($routeParams, $sce) {
  'use strict';
  var self = this;
  self.whatev = $routeParams;
  self.url = $sce.trustAsResourceUrl('/'+String($routeParams.whatev));
}
angular
  .module('atlasAngularTest')
  .controller('PatternsCtrl', PatternsCtrl);
