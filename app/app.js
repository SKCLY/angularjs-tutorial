var myApp = angular.module("myApp",[
    "appRouter",//路由注入
    "appServers",//服务注入
    "appFilters",//过滤器注入
    "appDirectives",//指令注入
    "appControllers"//控制器注入
]);

var appControllers = angular.module("appControllers",[]);

var baseURL = "http://127.0.0.1:8080/";

myApp.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);