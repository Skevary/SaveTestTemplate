(function () {
    'use strict';

    angular.module('app.appbar')
        .controller('AppBarCtrl', ['$scope', AppBarCtrl]);

    function AppBarCtrl($scope) {
        $scope.$watch(function () {
            $scope.header = $('li.active').find('span').text();
        });
    }
})();
