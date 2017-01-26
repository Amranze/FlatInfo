var profileApp = angular.module('ProfileApp',['ngRoute']);

profileApp.config(function($routeProvider) {
    $routeProvider
    .when('/friends', {
        templateUrl : 'partials/second.html',
        controller  : 'FriendController'
    })
    .when('/pictures', {
        templateUrl : 'partials/pictures.html',
        controller  : 'PictureController'
    });
    
});

profileApp.controller('MainController', function($scope) {
    // create a message to display in our view
    $scope.info = 'Welcome to MainController';
});

profileApp.controller('FriendController', function($scope) {
    // create a message to display in our view
    $scope.info = 'Welcome to Oodles';
});
 
profileApp.controller('PictureController', function($scope) {
    $scope.url = '/FlatInfo/resources/'
    $scope.info = 'About Oodles';
});