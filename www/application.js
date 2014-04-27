var app = angular.module('app', ['ionic', 'firebase']);
var url = 'https://smoneybox.firebaseio.com';
var accountsFire = new Firebase(url + "/accounts" );
var categoriesFire = new Firebase(url + "/categories");
var recordsFire = new Firebase(url + "/records");
var currenciesFire = new Firebase(url + "/currencies");
var usersFire = new Firebase(url + "/users");
var usersAuth = new Firebase(url);

// configure our routes
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('index', {
            url: '/index',
            controller  : 'MainCtrl'
        })

        .state('accounts', {
            url: '/accounts',
            templateUrl : '/views/accounts.html',
            controller  : 'AccountCtrl'
        })

        .state('detail_account', {
            url: '/detail_account',
            templateUrl : '/views/detail/detail_account.html',
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

        .state('auth', {
            url: '/auth',
            templateUrl : '/views/auth.html',
            controller  : 'AuthCtrl'
        })

        .state('settings', {
            url: '/settings',
            templateUrl : '/views/settings.html',
            controller  : 'SettingsCtrl'
        });
    $urlRouterProvider.otherwise('/index');
}]);

app.factory("DataFactory", function($firebase){
    return{
        accounts:
            accounts = $firebase(accountsFire)
        ,
        categories:
            categories = $firebase(categoriesFire)
        ,
        records:
            records = $firebase(recordsFire)
        ,
        currencies:
            currencies = $firebase(currenciesFire)
        ,
        users:
            users = $firebase(usersFire)
    }
});


app.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
    $scope.title = 'Home';
    $scope.message = 'Index';
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
});


app.controller('AccountCtrl', function($scope, $ionicModal, $firebase, DataFactory) {

    $scope.accounts = [];

    // Create and load the Modal
    $ionicModal.fromTemplateUrl('views/new/new-account.html', function(modal) {
        $scope.newAccountModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('views/update/update-account.html', function(modal) {
        $scope.updateAccountModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // Called when the form is submitted
    $scope.createAccount = function(account) {
        $scope.accounts.$add({
            name: account.name,
            description: account.description,
            currency: account.currency
        });
        $scope.closeNewAccount();
        account.name = "";
        account.description = "";
    };

    // Open our new task modal
    $scope.newAccount = function() {
        $scope.newAccountModal.show();
    };

    // Close the new task modal
    $scope.closeNewAccount = function() {
        $scope.newAccountModal.hide();
    };

    $scope.deleteAccount = function(key) {
        $scope.accounts.$remove(key);
    };

    $scope.editAccount = function(key, account){
        $scope.updateAccountModal.show();
        $scope.current_account = account;
        $scope.current_account_key = key;
    };

    $scope.closeUpdateAccount = function(){
        $scope.updateAccountModal.hide();
    };

    $scope.updateAccount = function(account){

        var ref = new Firebase(url + "/accounts/" + $scope.current_account_key);

        $scope.updatedAccount = $firebase(ref);
        $scope.updatedAccount.$set({
            name: account.name,
            description: account.description,
            currency: account.currency
        });

        $scope.closeUpdateAccount();
        account.name = "";
        account.description = "";
    };

    $scope.accounts = DataFactory.accounts;
    $scope.currencies = DataFactory.currencies;
});


app.controller('CategoryCtrl', function($scope, $ionicModal, $firebase, DataFactory) {

    $scope.categories = [];

    // Create and load the Modal
    $ionicModal.fromTemplateUrl('views/new/new-category.html', function(modal) {
        $scope.categoryModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('views/update/update-category.html', function(modal) {
        $scope.updateCategoryModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // Called when the form is submitted
    $scope.createCategory = function(category) {
        $scope.categories.$add({
            name: category.name,
            description: category.description,
            color: category.color,
            account: category.account
        });
        $scope.closeNewCategory();
        category.name = "";
        category.description = "";
        category.color = "";
    };

    // Open our new task modal
    $scope.newCategory = function() {
        $scope.categoryModal.show();
    };

    // Close the new task modal
    $scope.closeNewCategory = function() {
        $scope.categoryModal.hide();
    };

    $scope.deleteCategory = function(key) {
        $scope.categories.$remove(key);
    };

    $scope.editCategory = function(key, category){
        $scope.updateCategoryModal.show();
        $scope.current_category = category;
        $scope.current_category_key = key;
    };

    $scope.closeUpdateCategory = function(){
        $scope.updateCategoryModal.hide();
    };

    $scope.updateCategory = function(category){

        var ref = new Firebase(url + "/categories/" + $scope.current_category_key);

        $scope.updatedCategory = $firebase(ref);
        $scope.updatedCategory.$set({
            name: category.name,
            description: category.description,
            color: category.color,
            account: category.account
        });

        $scope.closeUodateCategory();
        category.name = "";
        category.description = "";
    };


    $scope.accounts = DataFactory.accounts;
    $scope.categories = DataFactory.categories;
});

app.controller('RecordCtrl', function($scope, $ionicModal, $firebase, DataFactory) {

    $scope.records = [];

    // Create and load the Modal
    $ionicModal.fromTemplateUrl('views/new/new-record.html', function(modal) {
        $scope.recordModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('views/update/update-record.html', function(modal) {
        $scope.updateRecordModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // Called when the form is submitted
    $scope.createRecord = function(record) {
        $scope.records.$add({
            amount: record.amount,
            date: record.date,
            description: record.description,
            category: record.category
        });
        $scope.closeNewRecord();
        record.amount = "";
        record.date = "";
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

    $scope.deleteRecord = function(key) {
        $scope.records.$remove(key);
    };

    $scope.editRecord = function(key, record){
        $scope.updateRecordModal.show();
        $scope.current_record = record;
        $scope.current_record_key = key;
    };

    $scope.closeUpdateRecord = function(){
        $scope.updateRecordModal.hide();
    };

    $scope.updateRecord = function(record){

        var ref = new Firebase(url + "/records/" + $scope.current_record_key);

        $scope.updatedRecord = $firebase(ref);
        $scope.updatedRecord.$set({
            amount: record.amount,
            date: record.date,
            description: record.description,
            category: record.category
        });
        $scope.closeUpdateRecord();
        record.amount = "";
        record.date = "";
        record.description = "";
    };

    $scope.categories = DataFactory.categories;
    $scope.records = DataFactory.records;
});

app.controller('CurrencyCtrl', function($scope, $ionicModal, $firebase, DataFactory) {

    $scope.currencies = [];

    // Create and load the Modal
    $ionicModal.fromTemplateUrl('views/new/new-currency.html', function(modal) {
        $scope.currencyModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('views/update/update-currency.html', function(modal) {
        $scope.updateCurrencyModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // Called when the form is submitted
    $scope.createCurrency = function(currency) {
        $scope.currencies.$add({
            name: currency.name,
            description: currency.description
        });
        $scope.closeNewCurrency();
        currency.name = "";
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

    $scope.deleteCurrency = function(key) {
        $scope.currencies.$remove(key);
    };

    $scope.editCurrency = function(key, currency){
        $scope.updateCurrencyModal.show();
        $scope.current_currency = currency;
        $scope.current_currency_key = key;
    };

    $scope.closeUpdateCurrency = function(){
        $scope.updateCurrencyModal.hide();
    };

    $scope.updateCurrency = function(currency){

        var ref = new Firebase(url + "/currencies/" + $scope.current_currency_key);

        $scope.updatedCurrency = $firebase(ref);
        $scope.updatedCurrency.$set({
            name: currency.name,
            description: currency.description
        });

        $scope.closeUpdateRecord();
        currency.name = "";
        currency.description = "";
    };

    $scope.currencies = DataFactory.currencies;
});

app.controller('SettingsCtrl', function($scope) {
    $scope.title = 'Settings';
    $scope.message = 'Settings';
});

app.controller('AuthCtrl', function($scope, $ionicModal, $firebase, DataFactory){

    var auth = new FirebaseSimpleLogin(usersAuth, function(error, user) {
        if (error) {
            // an error occurred while attempting login
            console.log(error);
            switch(error.code) {
                case 'EMAIL_TAKEN': alert('E-mail is already taken')
                case 'INVALID_EMAIL': alert('Invalid e-mail')
                case 'INVALID_PASSWORD':alert('Invalid password')
                case 'UNKNOWN_ERROR': alert('Unknown error, please contact us')
                default:
            }
        } else if (user) {
            // user authenticated with Firebase
            console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
        } else {
            // user is logged out
        }
    });

    $ionicModal.fromTemplateUrl('views/auth/register.html', function(modal) {
        $scope.registerModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('views/auth/login.html', function(modal) {
        $scope.loginModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $scope.registerModalShow = function() {
        $scope.registerModal.show();
    };

    $scope.registerModalHide = function() {
        $scope.registerModal.hide();
    };

    $scope.loginModalShow = function() {
        $scope.loginModal.show();
    };

    $scope.loginModalHide = function() {
        $scope.loginModal.hide();
    };

    $scope.newUser = function(user){
        $scope.userEmail = user.email;
        $scope.userPassword = user.password;

        auth.createUser($scope.userEmail, $scope.userPassword, function(error, user) {
            if (!error) {
                console.log('User UID: ' + user.uid + ', Email: ' + $scope.userEmail + ', User ID: ' + user.id + ', User Password: ' + $scope.userPassword);
            }
            $scope.userId = user.id;
            $scope.userUid = user.uid;


            $scope.addUserToFirebase($scope.userEmail, $scope.userUid, $scope.userId);

        });

        $scope.registerModalHide();
        user.email = '';
        user.password = '';
    };


    $scope.addUserToFirebase = function(userEmail, userUid, userId){
        $scope.users.$add({
            email: userEmail,
            userUid: userUid,
            userId: userId
        });
    };


    $scope.userLogin = function(user){
        $scope.userLoginEmail = user.email;
        $scope.userLoginPassword = user.password;

        auth.login('password', {
            email: user.email,
            password: user.password
        });
        $scope.loginModalHide();
        user.email = '';
        user.password = '';
    };

    $scope.users = DataFactory.users;
});