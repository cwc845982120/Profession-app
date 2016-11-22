/**
 * 初始化一些base对象使用时从此地导入
 * @param app
 */
var anijs = require('anijs');

module.exports = function(app){
    app.controller('baseController',['$scope',function($scope){

        $scope.setTitle = function(title){
            console.log(title);
        };


        $scope.$watch('$viewContentLoaded', function() {
            anijs.run();
        });

        console.log('自动埋点');
    }]);
};
