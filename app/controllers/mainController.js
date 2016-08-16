app.controller('mainController',function($scope,dataService){

    var vm = this;

    vm.previewSidebar = {
        "show" : true,
        "dataSet" : null,
        "loading" : false,
        "title"   : ""
     };

    dataService.getDataSets().then(function(res){
        vm.dataSets = res.data;
    });

    vm.getDataSet = function(path,title){
        vm.previewSidebar.title = title;
        vm.previewSidebar.loading = true;

        dataService.dataSet(path).then(function(res){
            vm.previewSidebar.dataSet = res.data;
            vm.previewSidebar.loading = false;
        });
    };

});