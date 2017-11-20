(function () {
    'use strict';

    angular.module('app.appbar')
        .controller('AppBarCtrl', ['$scope', AppBarCtrl]);

    function AppBarCtrl($scope) {

        $scope.$watch(function () {

            $scope.header = $('li.active').find('span').text();
        });

        $scope.apps = [
            {text : 'APP1', icon : 'fa-facebook-official'},
            {text : 'APP2', icon : 'fa-linkedin-square'},
            {text : 'APP3', icon : 'fa-twitter-square'}
        ];

        $scope.activeApp = $scope.apps[0];

        $scope.setApp = function setApp(app) {
            $scope.activeApp = app;

            return $scope.activeApp;
        };
    }
})();
