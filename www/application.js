var app = angular.module('app', ['ionic', 'firebase']);
var url = 'https://smoneybox.firebaseio.com';

// configure our routes
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('index', {
            url: '/index.html',
            templateUrl : '/index.html',
            controller  : 'MainCtrl'
        })

        .state('accounts', {
            url: '/accounts',
            templateUrl : '/views/accounts.html',
            controller  : 'AccountCtrl'
        })

        .state('categories', {
            url: '/categories',
            templateUrl : '/views/category.html',
            controller  : 'CategoryCtrl'
        })

        .state('records', {
            url: '/records',
            templateUrl : '/views/record.html',
            controller  : 'RecordCtrl'
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

app.controller('AccountCtrl', function($scope, $ionicModal, $firebase) {

    var accountsFire = new Firebase(url + "/" + "accounts");

    // Create and load the Modal
    $ionicModal.fromTemplateUrl('views/new/new-account.html', function(modal) {
        $scope.accountModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // Called when the form is submitted
    $scope.createAccount = function(account) {
        $scope.accounts.$add({
           title: account.title,
           description: account.description
        });
        $scope.accountModal.hide();
        account.title = "";
        account.description = "";
    };

    // Open our new task modal
    $scope.newAccount = function() {
        $scope.accountModal.show();
    };

    // Close the new task modal
    $scope.closeNewAccount = function() {
        $scope.accountModal.hide();
    };

    $scope.deleteAccount = function(id) {
        $scope.accounts.$remove(id);
    };
    $scope.accounts = $firebase(accountsFire);
});

app.controller('CategoryCtrl', function($scope, $ionicModal, $firebase) {

    var categoriesFire = new Firebase(url + "/" + "categories");

    // Create and load the Modal
    $ionicModal.fromTemplateUrl('views/new/new-category.html', function(modal) {
        $scope.categoryModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // Called when the form is submitted
    $scope.createCategory = function(category) {
        $scope.categories.$add({
            title: category.title,
            description: category.description
        });
        $scope.categoryModal.hide();
        category.title = "";
        category.description = "";
    };

    // Open our new task modal
    $scope.newCategory = function() {
        $scope.categoryModal.show();
    };

    // Close the new task modal
    $scope.closeNewCategory = function() {
        $scope.categoryModal.hide();
    };

    $scope.deleteCategory = function(id) {
        $scope.categories.$remove(id);
    };
    $scope.categories = $firebase(categoriesFire);
});

app.controller('RecordCtrl', function($scope, $ionicModal, $firebase) {

    var recordsFire = new Firebase(url + "/" + "records");

    // Create and load the Modal
    $ionicModal.fromTemplateUrl('views/new/new-record.html', function(modal) {
        $scope.recordModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // Called when the form is submitted
    $scope.createRecord = function(record) {
        $scope.records.$add({
            title: record.title,
            description: record.description
        });
        $scope.recordModal.hide();
        record.title = "";
        record.description = "";
    };

    // Open our new task modal
    $scope.newRecord = function() {
        $scope.recordModal.show();
    };

    // Close the new task modal
    $scope.closeNewRecord = function() {
        $scope.recordModal.hide();
    };

    $scope.deleteRecord = function(id) {
        $scope.records.$remove(id);
    };
    $scope.records = $firebase(recordsFire);
});

app.controller('CurrencyCtrl', function($scope, $ionicModal, $firebase) {

    var currenciesFire = new Firebase(url + "/" + "currencies");

    // Create and load the Modal
    $ionicModal.fromTemplateUrl('views/new/new-currency.html', function(modal) {
        $scope.currencyModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // Called when the form is submitted
    $scope.createCurrency = function(currency) {
        $scope.currencies.$add({
            title: currency.title,
            description: currency.description
        });
        $scope.currencyModal.hide();
        currency.title = "";
        currency.description = "";
    };

    // Open our new task modal
    $scope.newCurrency = function() {
        $scope.currencyModal.show();
    };

    // Close the new task modal
    $scope.closeNewCurrency = function() {
        $scope.currencyModal.hide();
    };

    $scope.deleteRecord = function(id) {
        $scope.records.$remove(id);
    };
    $scope.currencies = $firebase(currenciesFire);
});

app.controller('SettingsCtrl', function($scope) {
    $scope.title = 'Settings';
    $scope.message = 'Settings';
});
