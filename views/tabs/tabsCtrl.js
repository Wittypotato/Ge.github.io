/**
 * Created by Administrator on 2016/6/9.
 */
angular.module('myapp').controller('tabsCtrl', function ($scope,$http,shopCart) {
    //拿到购物车中所有商品的信息
    var cart = shopCart.findAll();
    //方法一：获取购物车中商品的数量
    $scope.countTotal = function () {
        var total = 0;//保存商品的总数量
        //遍历cart数组，统计商品的总数量
        for (var i = 0; i < cart.length; i++) {
            total += cart[i].number;
        }
        return total;
    };
    //增加商品
    $scope.shopAdd= function (product) {
        shopCart.add(product);
    };
    //清空购物车
    $scope.sendOrder= function () {
        shopCart.findAll().length=0;
    };
    /*$scope.data.shipping={};
    var orderUrl='data/order.json';
    $scope.sendOrder= function () {
        var order =angular.copy($scope.data.shipping);
        order.shipping=shopCart.findAll();
        $http.post(orderUrl,order).success(function (responseData) {
            $scope.data.shipping.orderId=responseData.orderId;
            shopCart.findAll().length=0;
        }).error(function (err) {
            $scope.data.shipping.orderError=err;
        });
    };*/
});