/**
 * Created by Administrator on 2016/6/11.
 */
angular.module('myapp').controller('placeOrderCtrl', function ($scope) {
    $scope.data={
        name:'',
        postcode:'',
        phone:'',
        city:'',
        road:''
    };
/*    $scope.data.shipping={};
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