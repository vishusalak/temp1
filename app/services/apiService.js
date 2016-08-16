app.factory('apiService',function($http,apiPath){

    var apiServiceFactory = {};


    apiServiceFactory.getDataSetSuggestions = function(){
        return $http.get(apiPath + '/search/suggest/schools',{cache : 'true'});
    };

    apiServiceFactory.getDataSet = function(path){
        return $http.get(apiPath + '/data' + path ,{cache : 'true'});
    };


    return apiServiceFactory;

});


app.factory('apiAuthInterceptor',function(authToken){

    var interceptorFactory = {};

    interceptorFactory.request = function(config){

        config.headers['Authorization'] = authToken ;
        config.headers['content-type'] = "application/json";

        return config;
    };

    return interceptorFactory;

});