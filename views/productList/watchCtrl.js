/**
 * Created by Administrator on 2016/6/10.
 */
angular.module('myapp').controller('watchCtrl', function ($scope,$http,shopCart) {
    var url='data/watch.json';
    $http.get(url).success(function (data) {
        $scope.watches=data;
    });
});