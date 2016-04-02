var appServers = angular.module("appServers",[]);

/** 通用post查询 **/
appServers.factory('postService',['$http',
    function($http){
        var doRequest = function(data,url){
            return $http({
                method:'post',
                url:url,
                data : $.param(data),
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        };
        return {
            List: function(data,url) {
                return doRequest(data,url);
            }
        };
    }
]);
/** 通用get查询 **/
appServers.factory('getService',['$http',
    function($http){
        var doRequest = function(data,url){
            return $http({
                method:'get',
                url:url,
                params : data
            });
        };
        return {
            List: function(data,url) {
                return doRequest(data,url);
            }
        };
    }
]);
/**(不带参数)通用get服务**/
appServers.factory('getNoParam', ['$http',
    function($http) {
        var getFunc = function(URL){
            return $http({
                method:'get',
                url:URL
            });
        };
        return {
            List: function(URL) {
                return getFunc(URL);
            }
        };
    }
]);

/**  通用页面之间参数传递  **/
appServers.factory('sentParam',function() {
    //定义服务返回对象
    var paramService = {};
    //定义参数设置对象
    var paramsObj = {};

    //定义设置参数的set函数
    var _set = function(data){
        paramsObj = data;
    };
    //定义获取参数的get函数
    var _get = function(){
        return  paramsObj;
    };

    paramService.set = _set;
    paramService.get = _get;

    return paramService;

});