(function () {
    'use strict';

    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {
                var routes, setRoutes;

                // Set your routes
                routes = ['some/market-analysis'];

                setRoutes = function (route) {
                    var config, url;
                    url = '/' + route;
                    config = {
                        url: url,
                        templateUrl: 'app/' + route + '.html'
                    };
                    $stateProvider.state(route, config);
                    return $stateProvider;
                };

                routes.forEach(function (route) {
                    return setRoutes(route);
                });

                $stateProvider
                    .state('dashboard', {
                        url: '/dashboard',
                        templateUrl: 'app/dashboard/dashboard.html'
                    });

                $urlRouterProvider
                    .when('/', '/dashboard')
                    .otherwise('/dashboard');

                $locationProvider.html5Mode(true);
            }
        ]);

})();
