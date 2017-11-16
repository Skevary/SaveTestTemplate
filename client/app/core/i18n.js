(function () {

    angular.module('app.i18n', ['pascalprecht.translate'])
        .config(['$translateProvider', i18nConfig])
        .controller('LangCtrl', ['$scope', '$translate', LangCtrl]);

    function i18nConfig($translateProvider) {

        $translateProvider.useStaticFilesLoader({
            prefix: 'assets/i18n/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy(null);
    }

    function LangCtrl($scope, $translate) {
        $scope.activeLang = 'EN';
        $scope.setLang = setLang;

        $scope.langs = ['EN', 'RU',];

        function setLang(lang) {
            switch (lang) {
                case 'EN':
                    $translate.use('en');
                    break;
                case 'RU':
                    $translate.use('ru');
                    break;
            }

            $scope.activeLang = lang;

            return $scope.activeLang;
        }
    }

})();
