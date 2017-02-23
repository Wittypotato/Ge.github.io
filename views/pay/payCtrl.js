/**
 * Created by Administrator on 2016/6/10.
 */
angular.module('myapp').controller('payCtrl', function ($scope,shopCart) {
    $scope.cart=shopCart.findAll();
    $scope.moneyTotal = function () {
        var total = 0;//保存商品的总金额
        //遍历cart数组，统计商品的总金额
        for (var i = 0; i < $scope.cart.length; i++) {
            total += $scope.cart[i].product.price * $scope.cart[i].number;
        }
        return total;
    };
    //删除商品
    $scope.remove= function (item) {
        shopCart.reduce(item.product.name);
    }
});