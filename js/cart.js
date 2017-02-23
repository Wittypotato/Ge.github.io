/**
 * Created by Administrator on 2016/6/10.
 */
//创建一个新的模块cart
var cart=angular.module('myCart',[]);
//factory是一个工厂方法
angular.module('myCart').factory('shopCart', function () {
    var cart = [];//相当于购物车中的购物筐
    //返回一个对象——购物车
    return {
        //定义一个方法/函数，向购物车中添加商品
        add: function (product) {
            var flag = false;
            //先判断购物车中是否有该商品
            for (var index = 0; index < cart.length; index++) {
                if (cart[index].product.name == product.name) {
                    flag = true;
                    //如果找到了，则修改该item对象中的number值所代表的数量(++)
                    cart[index].number++;
                }
            }
            //如果没有，创造一个item对象，然后将该item添加到购物筐数组中
            if (!flag) {
                var item = {};
                item.product = product;
                item.number = 1;
                //将该item加入购物筐
                cart.push(item);
            }
        },
        //定义一个方法/函数，向购物车中删除商品
        reduce: function (name) {
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].product.name == name) {
                    cart.splice(i, 1);
                    break;
                }
            }
        },
        //定义一个方法/函数，向购物车中改商品——传入2个参数，被替换的商品oldProduct和新替换的商品newProduct
        change: function (oldProduct, newProduct) {
            var flag = false;
            //先判断购物车中是否有该商品
            for (var index = 0; index < cart.length; index++) {
                if (cart[index].product.name == oldProduct.name) {
                    flag = true;
                    //如果找到了，用新商品的name与price替换旧商品的name与price 数量初始设置为1
                    cart[index].product.name = newProduct.name;//
                    cart[index].product.price = newProduct.price;
                    cart[index].number = 1;
                }
            }
            //如果没有，创造一个item对象，然后将该item添加到购物筐数组中
            if (!flag) {
                var item = {};
                item.product = product;
                item.number = 1;
                //将该item加入购物筐
                cart.push(item);
            }
        },
        //定义一个方法/函数，向购物车中查找所有商品
        findAll: function () {
            return cart;
        },
        //定义一个方法/函数，向购物车中查找指定商品
        find: function (name) {
            var flag = false;
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].product.name == name) {
                    flag = true;
                    console.log('该商品的单价是：' + cart[i].product.price + '\t' + '该商品的数量是：' + cart[i].number);
                }
                if (!flag) {
                    console.log('购物筐中没有' + name + '商品');
                }
            }
        }
    }
});
