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

.controller('contactsCtrl', function($scope, $cordovaContacts){
  $scope.getContacts = function() {
    $scope.phoneContacts = [];

    function onSuccess(contacts) {
      for (var i = 0; i < contacts.length; i++) {
        var contact = contacts[i];
        $scope.phoneContacts.push(contact);
      }
    };

    function onError(contactError) {
      alert(contactError);
    };

    var options = {};
    options.multiple = true;

    $cordovaContacts.find(options).then(onSuccess, onError);
  };
});
