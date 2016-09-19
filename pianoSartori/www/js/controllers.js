angular.module('starter.controllers', ['ionic', 'ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PianoCtrl', function($scope, $cordovaVibration, $cordovaNativeAudio) {
  $cordovaNativeAudio.preloadSimple('sonido1', 'sounds/1.mp3');
  $cordovaNativeAudio.preloadSimple('sonido2', 'sounds/2.mp3');
  $cordovaNativeAudio.preloadSimple('sonido3', 'sounds/3.mp3');
  $cordovaNativeAudio.preloadSimple('sonido4', 'sounds/4.mp3');
  $cordovaNativeAudio.preloadSimple('sonido5', 'sounds/5.mp3');
  $cordovaNativeAudio.preloadSimple('sonido6', 'sounds/6.mp3');

  $scope.boton1 = function(){
    $cordovaVibration.vibrate(1000);
    $cordovaNativeAudio.play('sonido1');
  }
  $scope.boton2 = function(){
    $cordovaVibration.vibrate(1000);
    $cordovaNativeAudio.play('sonido2');
  }
  $scope.boton3 = function(){
    $cordovaVibration.vibrate(1000);
    $cordovaNativeAudio.play('sonido3');
  }
  $scope.boton4 = function(){
    $cordovaVibration.vibrate(1000);
    $cordovaNativeAudio.play('sonido4');
  }
  $scope.boton5 = function(){
    $cordovaVibration.vibrate(1000);
    $cordovaNativeAudio.play('sonido5');
  }
  $scope.boton6 = function(){
    $cordovaVibration.vibrate(1000);
    $cordovaNativeAudio.play('sonido6');
  }
})
