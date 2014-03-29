var app = angular.module('app', ['ionic']);

// configure our routes
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('index', {
            url: '/index.html',
            templateUrl : '/index.html',
            controller  : 'MainCtrl'
        })

        .state('new-account', {
            url: '/new-account',
            templateUrl : '/views/new/new-account.html',
            controller  : 'AccountCtrl'
        })

        .state('accounts', {
            url: '/accounts',
            templateUrl : '/views/accounts.html',
            controller  : 'AccountCtrl'
        })

        .state('new-category', {
            url: '/new-category',
            templateUrl : '/views/new/new-category.html',
            controller  : 'CategoryCtrl'
        })

        .state('categories', {
            url: '/categories',
            templateUrl : '/views/category.html',
            controller  : 'CategoryCtrl'
        })

        .state('new-record', {
            url: '/new-record',
            templateUrl : '/views/new/new-record.html',
            controller  : 'RecordCtrl'
        })

        .state('records', {
            url: '/records',
            templateUrl : '/views/record.html',
            controller  : 'RecordCtrl'
        })

        .state('new-currency', {
            url: '/new-currency',
            templateUrl : '/views/new/new-currency.html',
            controller  : 'CurrencyCtrl'
        })

        .state('currencies', {
            url: '/currencies',
            templateUrl : '/views/currency.html',
            controller  : 'CurrencyCtrl'
        })

        .state('settings', {
            url: '/settings',
            templateUrl : '/views/settings.html',
            controller  : 'SettingsCtrl'
        });
    $urlRouterProvider.otherwise("/index");
});


app.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
    $scope.title = 'Home';
    $scope.message = 'Index';
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
});

app.controller('AccountCtrl', function($scope, $ionicModal) {
    // No need for testing data anymore
    $scope.accounts = [];

    // Create and load the Modal
    $ionicModal.fromTemplateUrl('views/new/new-account.html', function(modal) {
        $scope.accountModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // Called when the form is submitted
    $scope.createAccount = function(account) {
        $scope.accounts.push({
            title: account.title
        });
        $scope.accountModal.hide();
        account.title = "";
    };

    // Open our new task modal
    $scope.newAccount = function() {
        $scope.accountModal.show();
    };

    // Close the new task modal
    $scope.closeNewAccount = function() {
        $scope.accountModal.hide();
    };
});

app.controller('CategoryCtrl', function($scope, $ionicModal) {
    // No need for testing data anymore
    $scope.categories = [];

    // Create and load the Modal
    $ionicModal.fromTemplateUrl('views/new/new-category.html', function(modal) {
        $scope.categoryModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // Called when the form is submitted
    $scope.createCategory = function(category) {
        $scope.categories.push({
            title: category.title
        });
        $scope.categoryModal.hide();
        category.title = "";
    };

    // Open our new task modal
    $scope.newCategory = function() {
        $scope.categoryModal.show();
    };

    // Close the new task modal
    $scope.closeNewCategory = function() {
        $scope.categoryModal.hide();
    };
});

app.controller('RecordCtrl', function($scope, $ionicModal) {
    // No need for testing data anymore
    $scope.records = [];

    // Create and load the Modal
    $ionicModal.fromTemplateUrl('views/new/new-record.html', function(modal) {
        $scope.recordModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // Called when the form is submitted
    $scope.createRecord = function(record) {
        $scope.categories.push({
            title: record.title
        });
        $scope.recordModal.hide();
        record.title = "";
    };

    // Open our new task modal
    $scope.newRecord = function() {
        $scope.recordModal.show();
    };

    // Close the new task modal
    $scope.closeNewRecord = function() {
        $scope.recordModal.hide();
    };
});

app.controller('CurrencyCtrl', function($scope, $ionicModal) {
    // No need for testing data anymore
    $scope.currencies = [];

    // Create and load the Modal
    $ionicModal.fromTemplateUrl('views/new/new-currency.html', function(modal) {
        $scope.currencyModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // Called when the form is submitted
    $scope.createCurrency = function(currency) {
        $scope.currencies.push({
            title: currency.title
        });
        $scope.currencyModal.hide();
        currency.title = "";
    };

    // Open our new task modal
    $scope.newCurrency = function() {
        $scope.currencyModal.show();
    };

    // Close the new task modal
    $scope.closeNewCurrency = function() {
        $scope.currencyModal.hide();
    };
});

app.controller('SettingsCtrl', function($scope) {
    $scope.title = 'Settings';
    $scope.message = 'Settings';
});
