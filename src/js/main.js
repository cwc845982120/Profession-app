/**
 * Created by yuting on 2016/11/14.
 */

require('../sass/main.scss');

var app = {};
//路由设置

//历史记录
app.init = function(){
    //导入插件
    require('angular');
    require('angular-ui-router');

    //导入app
    require('./app');
};

app.start = function(){
    //手动启动应用
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['myApp']);
    });
};

app.init();
app.start();




