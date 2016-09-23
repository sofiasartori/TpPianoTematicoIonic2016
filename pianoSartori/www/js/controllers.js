angular.module('starter.controllers', ['ionic'])

.controller('MiCuentaCtrl', function($scope) {})

.controller('PianoCtrl', ['$scope', '$state', function ($scope, $state) {
  //$cordovaNativeAudio.preloadSimple("sonido1", "sounds/sonido1.mp3");
  $scope.boton1 = function(){
    console.log("hola");
    //$cordovaNativeAudio.play("sonido1");
  }
}])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AcercaDeCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
