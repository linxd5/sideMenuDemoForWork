// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('testApp', ['ionic', 'testApp.controllers'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleContent();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: "AppCtrl"
            })

            .state('app.personalCenter', {
                url: '/personalCenter',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/personalCenter.html',
                        controller: "PersonalCenterCtrl"
                    }
                }
            })

            .state('app.accountAndSecurity', {
                url: '/accountAndSecurity',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/accountAndSecurity.html'
                    }
                }
            })

            .state("app.about", {
                url: "/about",
                views: {
                    "menuContent": {
                        templateUrl: "templates/about.html"
                    }
                }
            })

            .state('app.playlists', {
                url: '/playlists',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/playlists.html',
                        controller: 'PlaylistsCtrl'
                    }
                }
            })

            .state("app.personalCenter.personalCenterEdit", {
                url: "/personalCenterEdit" ,
                views: {
                    "personalCenter": {
                        templateUrl: "templates/personalCenterEdit.html",
                        controller: "personalCenterEditCtrl"
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/playlists');

    });
