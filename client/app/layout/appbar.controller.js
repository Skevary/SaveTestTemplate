(function () {
    'use strict';

    angular.module('app.appbar')
        .controller('AppBarCtrl', ['$scope', '$location', AppBarCtrl]);

    function AppBarCtrl($scope, $location) {
        $scope.header =  $location.path().substr(1).replace(/\b\w/g, s => s.toUpperCase());
    }

})();
