/**  接口列表  **/
appControllers.controller("interfaceListCtrl",function($scope,$state,sentParam,getNoParam){
    $scope.selectAll = false;

    //加载测试接口列表
    var getInterfaceList = function(url){
        getNoParam.List(baseURL+url).success(function(data){
            $scope.interfaceList = data;
        });
    };
    getInterfaceList('data/interfaceList.json');

    //通用模态框
    var setModel = function(config){
        $('#confirmMod').find(".modal-title").text(config.title);
        $('#confirmMod').find(".modal-body p").text(config.content);
        $('#confirmMod').modal('toggle');
        $('#ngConfirm').click(function(event){
            config.confirm();
            event.stopPropagation();
        });
    };
    //
    var eventDel = function(){
        alert("已删除！");
    };
    //增加
    $scope.addInterface = function(){
        $state.go('index.interface.addInterface');
    };
    //查看
    $scope.viewInterface = function(option){
        sentParam.set({
            data : option
        });
        $state.go('index.interface.viewInterface');

    };
    //删除
    $scope.delInterface = function(option){
        setModel({
            title:"删除",
            content:"确定要删除"+option.id+"吗？",
            confirm:eventDel
        });
    };
    //运行选中用例
    $scope.runInterface = function(){
        $state.go('index.interface.result');
    };
});

/**  添加接口  **/
appControllers.controller("interfaceAddCtrl",function($scope,$state,sentParam,postService){
    $scope.step = 1;
    //预处理步骤一Form
    $scope.formStepOne = {
        interfaceURL:"",
        interfaceMethod:""
    };
    //预处理步骤二Form,动态生成
    $scope.formStepTwo = [{
        paraName:'',
        paraVal:'',
        encode:''
    },{
        paraName:'',
        paraVal:'',
        encode:''
    },{
        paraName:'',
        paraVal:'',
        encode:''
    }];
    //预处理步骤三Form
    $scope.formStepThr = {};

    //处理步骤一Form
    $scope.formStepFor = {};
    //预处理步骤二Form
    $scope.formStepFiv = {};
    //预处理步骤三Form
    $scope.formStepSix = {};

    //下一步
    $scope.NextStep = function(num,submit){
        $scope.step = num;


    };
    //最后提交事件
    $scope.submitFinal = function(){

    };
});

/**  查看接口  **/
appControllers.controller("interfaceViewCtrl",function($scope,$state,sentParam,postService){
    var params = sentParam.get();
    $scope.data = params.data;
});

/**  运行用例结果  **/
appControllers.controller("resultCtrl",function($scope,$state,sentParam,getNoParam){
    //加载运行用例结果列表
    var getInterfaceList = function(url){
        getNoParam.List(baseURL+url).success(function(data){
            $scope.results = data;
        });
    };
    getInterfaceList('data/resultList.json');
});