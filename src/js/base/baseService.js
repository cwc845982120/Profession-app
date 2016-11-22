/**
 * 初始化一些base对象使用时从此地导入
 * @param app
 */
var headers = require('../util/httpHeaderConfig');
var _ = require('underscore');

var baseConfig = {
    retry: true,
    method: __LOCAL__ ? 'GET' : 'POST',
    timeout: 30000,
    responseType: "json",
    withCredentials: false,
    headers: headers
};

module.exports = function (app) {
    app.service('baseService', ['$q', '$http', function ($q, $http) {

        var reqConfig = {};

        var _this = this;

        _this.alert = function () {
            console.log('baseService');
        };

        _this.setReqConfig = function (configObj) {
            reqConfig = _.extend({}, baseConfig, configObj);
        };

        _this.run = function (params) {
            var defer = $q.defer();
            var _params = params;

            var httpConfig = {
                method: reqConfig.method, //POST
                withCredentials: reqConfig.withCredentials, //false
                headers: reqConfig.headers,
                url: reqConfig.url, //'/demo/queryComponents',
                timeout: 30000,
                responseType: "json"
            };

            //get与post赋值
            if (httpConfig.method.toUpperCase() != "GET" && httpConfig.method.toUpperCase() != "DELETE") {
                httpConfig.data = _params;
            } else {
                httpConfig.params = _params;
            }
            //参考网址http://www.cnblogs.com/ys-ys/p/4984639.html?utm_source=tuicool&utm_medium=referral
            $http(httpConfig)
                .success(function (data, status, headers, config) {
                    console.log('[success ' + reqConfig.url + ' result]');
                    console.log(JSON.stringify(data));
                    defer.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    defer.reject(data);
                });

            return defer.promise; //返回承诺，返回获取数据的API
        };

        _this.fetch = function (params) {
            var delay = $q.defer();
            var promise = _this.run(params);
            promise.then(function (data) {
                delay.resolve(data);
            }, function (data) {
                delay.reject(data);
            });
            return delay.promise;
        }
    }]);
};
