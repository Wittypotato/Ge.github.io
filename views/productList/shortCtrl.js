/**
 * Created by Administrator on 2016/6/10.
 */
angular.module('myapp').controller('shortCtrl', function ($scope,$http,shopCart) {
    var url='data/short.json';
    $http.get(url).success(function (data) {
        $scope.shorts=data;
    });
});