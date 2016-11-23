/*
* Blog content controller
*/
(function(){
  'use strict';

  angular.module('Blog')
         .controller('blogContentController', function($scope, $http){

    var self = this;

    $http.get("https://jsonplaceholder.typicode.com/posts").success(function(data) {
      console.log(angular.toJson(data));
      self.articles = data;
    }).error(function(data){
      console.log('error');
      // network error walk-around, just for testing purpose
      $http.get("app/data/data.json").success(function(data){
        self.articles = data;
      }).error(function(){
        console.log('data error');
      })
    })

    // TODO: Increase the loading speed by load the date by stage
  });
})();