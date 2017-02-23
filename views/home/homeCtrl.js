/**
 * Created by Administrator on 2016/6/9.
 */
angular.module('myapp').controller('homeCtrl', function ($scope) {
    $scope.activeIndex=0;
    //当发生幻灯片切换事件时，换行
    $scope.onSlideChanged= function (index) {
        $scope.activeIndex=index;
    };
    //当单击分页器小圆点时
    $scope.pagerClick= function (index) {
        $scope.activeIndex=index;
    };
});