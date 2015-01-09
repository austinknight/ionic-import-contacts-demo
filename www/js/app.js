// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('contactsApp', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('contactsCtrl', function($scope, $cordovaContacts, $timeout){
  $scope.getContacts = function() {
    $scope.phoneContacts = [];

    function onSuccess(contacts) {
      console.log(contacts)
      $timeout(function() {
        for (var i = 0; i < contacts.length; i++) {
          var contact = contacts[i];
          $scope.phoneContacts.push(contact);
        }

      }, 0);
    };

    function onError(contactError) {
      $timeout(function() {
        alert(contactError);
      }, 0);
    };

    var options = {};
    options.filter = "";
    options.multiple = true;

    $cordovaContacts.find(options).then(onSuccess, onError);
  };
});
