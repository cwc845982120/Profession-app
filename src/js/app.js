/**
 * Created by yuting on 2016/11/16.
 */

/**
 * 依赖的子模块数组有多少子模块就加多少子模块    使用name关键字变成 ['demo','ui.router']
 */
var relaArr = [
    require('./module/demo/Init').name
];

var app = angular.module('myApp', relaArr); //模块

require('./base/baseService')(app);
require('./base/baseController')(app);

/**
 * 此地进行全局监控
 */
app.run(['$rootScope', '$location', '$state',  function($rootScope, $location, $state){
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        //Todo: 加入历史记录操控
        console.log('历史记录操作');

    });
}]);

module.exports = app;