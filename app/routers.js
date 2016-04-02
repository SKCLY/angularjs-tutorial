var appRouter = angular.module("appRouter",["ui.router"]);

appRouter.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/index");
    $stateProvider
        //1、主视图入口
        //1.1、首页
        .state('index',{
            url:"/index",
            views:{
                "":{
                    templateUrl:'/views/ui-router.html'
                },
                "topNav@index":{
                    templateUrl:'/views/topNav.html',
                    controller: function($scope) {
                        $scope.home = true;
                    }
                },
                "sideNav@index":{
                    templateUrl:'/views/sideNavs/sideHome.html',
                    controller: function($scope) {
                        $scope.home = true;
                    }
                },
                "main@index":{
                    templateUrl:'/views/main/home/index.html'
                }
            }
        })
        //1.1、app版本发布
        .state('index.appVersion',{
            url:"/appVersion",
            views:{
                "sideNav@index":{
                    templateUrl:'/views/sideNavs/sideHome.html',
                    controller: function($scope) {
                        $scope.appVersion = true;
                    }
                },
                "main@index":{
                    templateUrl:'/views/main/home/appVersion.html'
                }
            }
        })
        //1.2、核销分佣信息报表
        .state('index.verifyInfo',{
            url:"/verifyInfo",
            views:{
                "sideNav@index":{
                    templateUrl:'/views/sideNavs/sideHome.html',
                    controller: function($scope) {
                        $scope.verifyInfo = true;
                    }
                },
                "main@index":{
                    templateUrl:'/views/main/home/verifyInfo.html'
                }
            }
        })
        //1.3、样板房预约客户信息
        .state('index.reserveInfo',{
            url:"/reserveInfo",
            views:{
                "sideNav@index":{
                    templateUrl:'/views/sideNavs/sideHome.html',
                    controller: function($scope) {
                        $scope.reserveInfo = true;
                    }
                },
                "main@index":{
                    templateUrl:'/views/main/home/reserveInfo.html'
                }
            }
        })
        //1.4、运营日常信息查询
        .state('index.dailyInfo',{
            url:"/dailyInfo",
            views:{
                "sideNav@index":{
                    templateUrl:'/views/sideNavs/sideHome.html',
                    controller: function($scope) {
                        $scope.dailyInfo = true;
                    }
                },
                "main@index":{
                    templateUrl:'/views/main/home/dailyInfo.html'
                }
            }
        })

        //2、基础数据
        //2.1、品牌管理
        .state('index.basicData',{
            url:"/basicData",
            views:{
                "topNav@index":{
                    templateUrl:'/views/topNav.html',
                    controller: function($scope) {
                        $scope.basicData = true;
                    }
                },
                "sideNav@index":{
                    templateUrl:'/views/sideNavs/sideBasicData.html',
                    controller: function($scope) {
                        $scope.brand = true;
                    }
                },
                "main@index":{
                    templateUrl:'/views/main/basicData/brand.html'
                }
            }
        })
        .state('index.basicData.brand',{
            url:""
        })
        //2.2、梦想家
        .state('index.basicData.dreamer',{
            url:"/dreamer",
            views:{
                "sideNav@index":{
                    templateUrl:'/views/sideNavs/sideBasicData.html',
                    controller: function($scope) {
                        $scope.dreamer = true;
                    }
                },
                "main@index":{
                    templateUrl:'/views/main/basicData/dreamer.html'
                }
            }
        })
        //2.3、导购管理
        .state('index.basicData.shopGuider',{
            url:"/shopGuider",
            views:{
                "sideNav@index":{
                    templateUrl:'/views/sideNavs/sideBasicData.html',
                    controller: function($scope) {
                        $scope.shopGuider = true;
                    }
                },
                "main@index":{
                    templateUrl:'/views/main/basicData/shopGuider.html'
                }
            }
        })

        //3、促销中心
        //3.1、优惠券管理
        .state('index.promotion',{
            url:"/promotion",
            views:{
                "topNav@index":{
                    templateUrl:'/views/topNav.html',
                    controller: function($scope) {
                        $scope.promotion = true;
                    }
                },
                "sideNav@index":{
                    templateUrl:'/views/sideNavs/sidePromotion.html',
                    controller: function($scope) {
                        $scope.coupon = true;
                    }
                },
                "main@index":{
                    templateUrl:'/views/main/promotion/coupon.html'
                }
            }
        })
        .state('index.promotion.coupon',{
            url:""
        })
        //3.2、佣金管理
        .state('index.promotion.commission',{
            url:"/commission",
            views:{
                "sideNav@index":{
                    templateUrl:'/views/sideNavs/sidePromotion.html',
                    controller: function($scope) {
                        $scope.commission = true;
                    }
                },
                "main@index":{
                    templateUrl:'/views/main/promotion/commission.html'
                }
            }
        })
        //3.3、活动管理
        .state('index.promotion.activity',{
            url:"/activity",
            views:{
                "sideNav@index":{
                    templateUrl:'/views/sideNavs/sidePromotion.html',
                    controller: function($scope) {
                        $scope.activity = true;
                    }
                },
                "main@index":{
                    templateUrl:'/views/main/promotion/activity.html'
                }
            }
        })
        //3.4、礼包管理
        .state('index.promotion.gift',{
            url:"/gift",
            views:{
                "sideNav@index":{
                    templateUrl:'/views/sideNavs/sidePromotion.html',
                    controller: function($scope) {
                        $scope.gift = true;
                    }
                },
                "main@index":{
                    templateUrl:'/views/main/promotion/gift.html'
                }
            }
        })

        //4、商家管理
        //4.1、商家管理
        .state('index.business',{
            url:"/business",
            views:{
                "topNav@index":{
                    templateUrl:'/views/topNav.html',
                    controller: function($scope) {
                        $scope.business = true;
                    }
                },
                "sideNav@index":{
                    templateUrl:'/views/sideNavs/sideBusiness.html',
                    controller: function($scope) {
                        $scope.business = true;
                    }
                },
                "main@index":{
                    templateUrl:'/views/main/business/business.html'
                }
            }
        })
        .state('index.business.business',{
            url:""
        })

        //5、商品管理
        //5.1、商品管理
        .state('index.commodity',{
            url:"/commodity",
            views:{
                "topNav@index":{
                    templateUrl:'/views/topNav.html',
                    controller: function($scope) {
                        $scope.commodity = true;
                    }
                },
                "sideNav@index":{
                    templateUrl:'/views/sideNavs/sideCommodity.html',
                    controller: function($scope) {
                        $scope.commodity = true;
                    }
                },
                "main@index":{
                    templateUrl:'/views/main/commodity/commodity.html'
                }
            }
        })
        .state('index.commodity.commodity',{
            url:""
        })
        //6、接口测试
        //6.1、接口列表
        .state('index.interface',{
            url:"/interface",
            views:{
                "topNav@index":{
                    templateUrl:'/views/topNav.html',
                    controller: function($scope) {
                        $scope.interface = true;
                    }
                },
                "sideNav@index":{
                    templateUrl:'/views/sideNavs/sideInterface.html',
                    controller: function($scope) {
                        $scope.interface = true;
                    }
                },
                "main@index":{
                    templateUrl:'/views/main/interface/interfaceList.html',
                    controller:'interfaceListCtrl'
                }
            }
        })
        .state('index.interface.interfaceList',{
            url:""
        })
        //6.2、增加接口
        .state('index.interface.addInterface',{
            url:"/addInterface",
            views:{
                "main@index":{
                    templateUrl:'/views/main/interface/addInterface.html',
                    controller:'interfaceAddCtrl'
                }
            }
        })
        //6.3、查看接口
        .state('index.interface.viewInterface',{
            url:"/viewInterface",
            views:{
                "main@index":{
                    templateUrl:'/views/main/interface/viewInterface.html',
                    controller:'interfaceViewCtrl'
                }
            }
        })
        //6.4、运行用例结果
        .state('index.interface.result',{
            url:"/result",
            views:{
                "main@index":{
                    templateUrl:'/views/main/interface/result.html',
                    controller:'resultCtrl'
                }
            }
        })
});