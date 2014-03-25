var app = angular.module('app', ['ionic']);

// configure our routes
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('index', {
            url: '/index.html',
            templateUrl : '/index.html',
            controller  : 'MainCtrl'
        })

        .state('account', {
            url: '/account.html',
            templateUrl : '/views/account.html',
            controller  : 'AccountCtrl'
        })

        .state('category', {
            url: '/category.html',
            templateUrl : '/views/category.html',
            controller  : 'CategoryCtrl'
        })

        .state('record', {
            url: '/record.html',
            templateUrl : '/views/record.html',
            controller  : 'RecordCtrl'
        })

        .state('currency', {
            url: '/currency.html',
            templateUrl : '/views/currency.html',
            controller  : 'CurrencyCtrl'
        })

        .state('settings', {
            url: '/settings.html',
            templateUrl : '/views/settings.html',
            controller  : 'SettingsCtrl'
        });
        $urlRouterProvider.otherwise("/index");
});


app.controller('MainCtrl', function($scope) {
    $scope.title = 'Home';
    $scope.message = 'Index';
});

app.controller('AccountCtrl', function($scope) {
    $scope.title = 'Accounts';
    $scope.message = 'Account';
});

app.controller('CategoryCtrl', function($scope) {
    $scope.title = 'Categories';
    $scope.message = 'Category';
});

app.controller('RecordCtrl', function($scope) {
    $scope.title = 'Records';
    $scope.message = 'Record';
});

app.controller('CurrencyCtrl', function($scope) {
    $scope.title = 'Currencies';
    $scope.message = 'Currency';
});

app.controller('SettingsCtrl', function($scope) {
    $scope.title = 'Settings';
    $scope.message = 'Settings';
});
