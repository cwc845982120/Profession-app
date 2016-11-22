/**
 * Created by yuting on 2016/11/16.
 */

/**
 * 控制器引入当前模块依赖,对当前模块进行单独的控制器定义
 * @returns {string} 返回控制器名称
 */

module.exports = function(app){
    var controllerName = 'testCtrl';

    app.controller(controllerName,['$scope','$controller','$state','testSer',function($scope,$controller,$state,ts){
        $controller('baseController', {$scope: $scope}); //继承baseController

        $scope.setTitle('进行设置');

        $scope.goTest2 = function(){
            $state.go('test2.Page1',{ attrs : '我来自testCtrl'});
        }
    }]);

    return controllerName;
};
