app.service('dataService',function(apiService){


    this.getDataSets = function(){
        return apiService.getDataSetSuggestions();
    };


    this.dataSet = function(path){
        return apiService.getDataSet(path);
    };



    //
    //this.dataSets = [{
    //    "data_src" : "National Census Data 2011",
    //    "databases" :
    //        [{
    //            "data_score" : "84.7",
    //            "file_type" : "web",
    //            "db_hits"  : "1292281",
    //            "db_rows" : "12000",
    //            "db_columns" : "15",
    //            "db_location" : "India",
    //            "db_name" : "Census Data 2011 - Government of India - Ministry of Home Affairs"
    //        },{
    //            "data_score" : "74.7",
    //            "file_type" : "pdf",
    //            "db_hits"  : "1292",
    //            "db_rows" : "1930",
    //            "db_columns" : "19",
    //            "db_location" : "India",
    //            "db_name" : "Main Non-Economic activities of marginal workers by gender and age group"
    //        },{
    //            "data_score" : "34.7",
    //            "file_type" : "excel",
    //            "db_hits"  : "12",
    //            "db_rows" : "100",
    //            "db_columns" : "15",
    //            "db_location" : "India",
    //            "db_name" : "Private Final Consumption Expenditure at current prices"
    //        }
    //        ]
    //},
    //    {
    //    "data_src" : "Aggregated Economic Survey Data 2016",
    //    "databases" : [{
    //        "data_score" : "84.7",
    //        "file_type" : "web",
    //        "db_hits"  : "1292281",
    //        "db_rows" : "12000",
    //        "db_columns" : "15",
    //        "db_location" : "India",
    //        "db_name" : "Census Data 2011 - Government of India - Ministry of Home Affairs"
    //    },{
    //        "data_score" : "74.7",
    //        "file_type" : "pdf",
    //        "db_hits"  : "1292",
    //        "db_rows" : "1930",
    //        "db_columns" : "19",
    //        "db_location" : "India",
    //        "db_name" : "Main Non-Economic activities of marginal workers by gender and age group"
    //    },{
    //        "data_score" : "34.7",
    //        "file_type" : "excel",
    //        "db_hits"  : "12",
    //        "db_rows" : "100",
    //        "db_columns" : "15",
    //        "db_location" : "India",
    //        "db_name" : "Private Final Consumption Expenditure at current prices"
    //    }
    //    ]
    //},{
    //    "data_src" : "SocialCops Collect",
    //    "databases" : [{
    //        "data_score" : "84.7",
    //        "file_type" : "web",
    //        "db_hits"  : "1292281",
    //        "db_rows" : "12000",
    //        "db_columns" : "15",
    //        "db_location" : "India",
    //        "db_name" : "Census Data 2011 - Government of India - Ministry of Home Affairs"
    //    },{
    //        "data_score" : "74.7",
    //        "file_type" : "pdf",
    //        "db_hits"  : "1292",
    //        "db_rows" : "1930",
    //        "db_columns" : "19",
    //        "db_location" : "India",
    //        "db_name" : "Main Non-Economic activities of marginal workers by gender and age group"
    //    },{
    //        "data_score" : "34.7",
    //        "file_type" : "excel",
    //        "db_hits"  : "12",
    //        "db_rows" : "100",
    //        "db_columns" : "15",
    //        "db_location" : "India",
    //        "db_name" : "Private Final Consumption Expenditure at current prices"
    //    },{
    //        "data_score" : "94.8",
    //        "file_type" : "web",
    //        "db_hits"  : "19230450",
    //        "db_rows" : "160304",
    //        "db_columns" : "35",
    //        "db_location" : "India",
    //        "db_name" : "RTE Data Collection Survey"
    //    }
    //    ]
    //}] ;



    //console.log(apiService.getDataSet());

});



