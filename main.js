var myApp = angular.module('myApp', []);
myApp.factory('Data', function () {
  return {message: ''}
})

function Control($scope, Data){
  $scope.data = Data;
}
