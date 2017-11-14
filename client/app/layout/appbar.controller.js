(function () {
    'use strict';

    angular.module('app.appbar')
        .controller('AppBarCtrl', ['$scope', AppBarCtrl])

    function AppBarCtrl($scope) {
        $scope.title = 'Dashboard';
    }

})();
