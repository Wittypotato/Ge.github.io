/**
 * Created by Administrator on 2016/6/10.
 */
angular.module('myapp').controller('hatCtrl', function ($scope,$http,shopCart) {
    var url='data/hat.json';
    $http.get(url).success(function (data) {
        $scope.hats=data;
    });
});