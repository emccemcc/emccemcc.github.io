var app = angular.module('myModule');

app.directive('topHeader', function(){
  return{
    restrict:'EA',
    replace: true,
    templateUrl:"partials/topHeader.html"
  };
});

app.directive('bottomFooter', function(){
  return{
    restrict:'EA',
    replace: true,
    templateUrl:"partials/bottomFooter.html"
  };
});
