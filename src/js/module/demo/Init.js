/**
 * Created by yuting on 2016/11/16.
 *
 */

/**
 * 模块名称
 */
var moduleName = 'demo';
require('./' + moduleName + '.scss');

/**
 * 初始化一个模块名称,在当前位置进行路由的配置
 */

var app = angular.module(moduleName, ['ui.router']);
var G = require('./guidance')(app);

/**
 * 子模块的路由配置
 */
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    //每个路由会对应一个控制器，与一个模版文件
    $stateProvider.state('test', {
        url: '/test',
        controller: G.controllers.testCtrl,
        template: G.templates.testTpl
    });

    //当路由为test2 的情况下 默认为page1
    $urlRouterProvider.when('/test2', 'test2/page1');

    //嵌套试图例子路由
    $stateProvider.state('test2', {
            url: '/test2',
            controller: G.controllers.testCtrl2,
            template: G.templates.testTpl2
        })
        .state('test2.Page1', {
            url: '/page1',
            params : { attrs : null},
            controller: G.controllers.pageCtrl1,
            template: G.templates.page1Tpl
        })
        .state('test2.Page2', {
            url: '/page2',
            params : { attrs : null },
            controller: G.controllers.pageCtrl2,
            template: G.templates.page2Tpl
        })
        .state('test2.Page3', {
            url: '/page3',
            template: G.templates.page3Tpl
        });
}]);

module.exports = app;