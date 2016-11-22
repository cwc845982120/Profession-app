/**
 * Created by yuting on 2016/11/16.
 */

/**
 * 控制器引入当前模块依赖,对当前模块进行单独的控制器定义
 * @returns {string} 返回控制器名称
 */

module.exports = function(app){
    var controllerName = 'pageCtrl1';

    app.controller(controllerName,['$scope','$stateParams','testSer',function($scope,$stateParams,ts){
        debugger;
        console.log('pageCtrl1',$stateParams.attrs);
    }]);

    return controllerName;
};
