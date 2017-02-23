/**
 * Created by Administrator on 2016/6/10.
 */
//创建主模块myapp
var myapp = angular.module('myapp', ['ionic', 'myCart']);
//配置页面路由
myapp.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    //android和ios配置文件
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    $stateProvider.state('tabs', {
        url: '/tabs',
        abstract: true,//意思是：将这个路由声明为抽象的，也就是说，不能直接在浏览器中显示
        templateUrl: 'views/tabs/tabs.html',
        controller: 'tabsCtrl'
    });
    //tabs路由
    $stateProvider.state('tabs.home', {
        url: '/home',
        views: {'tabs-Content': {templateUrl: 'views/home/home.html', controller: 'homeCtrl'}}
    });
    $stateProvider.state('tabs.hat', {
        url: '/hat',
        views: {'tabs-Content': {templateUrl: 'views/productList/hat.html', controller: 'hatCtrl'}}
    });
    $stateProvider.state('tabs.watch', {
        url: '/watch',
        views: {'tabs-Content': {templateUrl: 'views/productList/watch.html', controller: 'watchCtrl'}}
    });
    $stateProvider.state('tabs.short', {
        url: '/short',
        views: {'tabs-Content': {templateUrl: 'views/productList/short.html', controller: 'shortCtrl'}}
    });
    $stateProvider.state('tabs.pay', {
        url: '/pay',
        views: {'tabs-Content': {templateUrl: 'views/pay/pay.html', controller: 'payCtrl'}}
    });
    $stateProvider.state('tabs.placeOrder', {
        url: '/placeOrder',
        views: {'tabs-Content': {templateUrl: 'views/placeOrder/placeOrder.html', controller: 'placeOrderCtrl'}}
    });
    //登录
    $stateProvider.state('login', {
        url: "/login",
        templateUrl: "views/login/login.html",
        controller: 'loginCtrl'
    });
    //注册
    $stateProvider.state('register', {
        url: "/register",
        templateUrl: "views/register/register.html",
        controller: 'registerCtrl'
    });
    //完成
    $stateProvider.state('finish', {
        url: "/finish",
        templateUrl: "views/finish/finish.html",
        controller: 'finishCtrl'
    });
    $urlRouterProvider.otherwise('/tabs/home');
});