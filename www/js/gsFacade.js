/**
 * File Name: gsFacade.js

 * Revision History:
 *        Gyeonglim Seo, 2019-04-11 : Created
 */

function gsAddWork() {
    //1.test validation
    if(gsDoValidate_gsFrmAddWork()){
        console.info("Validation is successful");

        var workCategory=$("#gsAddCategoryList").val();
        var orgzName=$("#gsWorkOrgzNameAdd").val();
        var contactName=$("#gsWorkOrgzContectNameAdd").val();
        var contactPhone=$("#gsWorkOrgzContectPhoneAdd").val();
        var contactAddress=$("#gsWorkOrgzContectAddressAdd").val();
        var workPostion=$("#gsWorkPositionAdd").val();
        var workStart=$("#gsWorkStartDateAdd").val();
        var workEnd=$("#gsWorkEndDateAdd").val();

         var opt;
         opt = [orgzName, contactName, contactPhone, contactAddress];

         function success() {
             console.info("Record inserted successfully into organization table");
         }
         organization.insert(opt, success);

         var option;
         option=[orgzName,workCategory,workPostion,workStart,workEnd];

         function workSuccess() {
            console.info("Record inserted successfully into works table");
            alert("New work added");
        }

        works.insert(option, workSuccess);
        $(location).prop('href', '#gsWorkListPage');
    }else{
        console.error("Adding Work failed");
    }
}

function gsGetWorkList() {
    var options=[];

    function callback(tx, results) {
        var htmlCode="";

        for(var i=0; i<results.rows.length; i++){
            var row=results.rows[i];
            htmlCode += "<li><a data-role='button' data-row-id=" +row['work_id']+ " href='#'>"+
                "<img src="+row['image']+" width='100%' height='100'>"+
                "<h2>"+row['position']+"</h2>"+
                "<p><b>Organazation Name</b>: "+row['orgz_name']+"<br/>"+
                 "<b>Category</b>: "+row['name']+"<br/>"+
                 row['start_date']+" ~ "+
                 row['end_date']+"</p></a></li>";
        }

        var lv = $("#gsWorkList");

        lv =lv.html(htmlCode);
        lv.listview("refresh");  //very important

        function clickHandler() {
            window.localStorage.removeItem("id");
            window.localStorage.setItem("id", $(this).attr("data-row-id") );

            $(location).prop('href', '#gsEditWorkPage');
        }

        $("#gsWorkList a").on("click", clickHandler);

    }
    works.selectAll(options, callback);
}

/*
*Get list of categories
 */
function gsGetCategory(para) {
    var options = [];
    var parameter=para;

    function callback(tx, results) {
        var htmlCode="";

        for (var i = 0; i < results.rows.length; i++) {

            var row = results.rows[i];
            var selected="";
            if(parameter!=null){
                if(row['category_id']===parameter){
                    selected="selected";
                }
            }else{
                if(row['name']==="Animals"){
                    selected="selected";
                }
            }
            htmlCode +="<option value="+row['category_id']+" "+selected+">"+row['name']+"</option>";
        }
        if(parameter!=null){
            var sv=$("#gsEditCategoryList");
        }else{
            var sv=$("#gsAddCategoryList");
        }
        sv =sv.html(htmlCode);
        sv.selectmenu("refresh")
    }
    Category.selectAll(options, callback);
}

function getShowCurrentWork() {
    var id=window.localStorage.getItem("id");
    var options=[id];

    function callback(tx, results) {
        var row=results.rows[0];

        $("#gsWorkOrgzNameEdit").val(row['orgz_name']);
        $("#gsWorkOrgzContectNameEdit").val(row['contact_full_name']);
        $("#gsWorkOrgzContectPhoneEdit").val(row['contact_phone']);
        $("#gsWorkOrgzContectAddressEdit").val(row['address']);
        $("#gsWorkPositionEdit").val(row['position']);
        $("#gsWorkStartDateEdit").val(row['start_date']);
        $("#gsWorkEndDateEdit").val(row['end_date']);

        gsGetCategory(row['category_id']);
    }
    works.select(options,callback);
}

function gsDeleteWork() {
    var id=window.localStorage.getItem("id");
    var opt=[id];

    function success() {
        alert("Work Deleted successfully");
    }
    works.delete(opt, success);

    $(location).prop('href', '#gsWorkListPage');
}

function gsUpdateWork(){
    var id=window.localStorage.getItem("id");
    //1.test validation
    if(gsDoValidate_gsFrmEditWork()){
        console.info("Validation is successful");
        //2. if validation is successful then fetch the info from input controls
        var workCategory=$("#gsEditCategoryList").val();
        var orgzName=$("#gsWorkOrgzNameEdit").val();
        var contactName=$("#gsWorkOrgzContectNameEdit").val();
        var contactPhone=$("#gsWorkOrgzContectPhoneEdit").val();
        var contactAddress=$("#gsWorkOrgzContectAddressEdit").val();
        var workPostion=$("#gsWorkPositionEdit").val();
        var workStart=$("#gsWorkStartDateEdit").val();
        var workEnd=$("#gsWorkEndDateEdit").val();

        var opt;
        opt = [orgzName, contactName, contactPhone, contactAddress];

        function success() {
            console.info("Record Updated successfully into organization table");
        }
        // 'organization table can be replaced(or duplication key update), so dont' need update
        organization.insert(opt, success);

        var option;
        option=[orgzName,workCategory,workPostion,workStart,workEnd, id];

        function workSuccess() {
            console.info("Record Updated successfully into works table");
        }

        works.update(option, workSuccess);

        $(location).prop('href', '#gsWorkListPage');
    }else{
        console.error("Adding Work failed");
    }
}

function gsGetOrganizationList() {
    var options=[];

    function callback(tx, results) {
        var htmlCode="";

        for(var i=0; i<results.rows.length; i++){
            var row=results.rows[i];
            htmlCode += "<li><a data-role='button' id='"+row['orgz_name']+"' href='#'>"+
                "<h2>"+row['orgz_name']+"</h2>"+
                "<p><b>Address: </b>: "+row['address']+"<br/>"+
                "<b>Number of you work</b>: "+row['work_count']+"<br/></p></a></li>";
        }
        var lv = $("#gsOrgzList");

        lv =lv.html(htmlCode);
        lv.listview("refresh");  //very important

        function clickHandler() {
            window.localStorage.removeItem("orgzName");
            window.localStorage.setItem("orgzName",$(this).attr("id"));

            $(location).prop('href', '#gsOrgzWorkListPage');
        }

        $("#gsOrgzList a").on("click", clickHandler);

    }
    organization.selectAllwithWorkCount(options, callback);
}

function gsGetOrgzWorkList() {
    var orgzName=window.localStorage.getItem("orgzName");
    var options=[orgzName];

    function callback(tx, results) {
        var htmlCode="";

        for(var i=0; i<results.rows.length; i++){
            var row=results.rows[i];
            htmlCode += "<li><a data-role='button' data-row-id=" +row['work_id']+ " href='#'>"+
                "<img src="+row['image']+" width='100%' height='100'>"+
                "<h2>"+row['position']+"</h2>"+
                "<p><b>Organazation Name</b>: "+row['orgz_name']+"<br/>"+
                "<b>Category</b>: "+row['name']+"<br/>"+
                row['start_date']+" ~ "+
                row['end_date']+"</p></a></li>";
        }

        var lv = $("#gsOrgzWorkList");

        lv =lv.html(htmlCode);
        lv.listview("refresh");  //very important

        function clickHandler() {
            window.localStorage.removeItem("id");
            window.localStorage.setItem("id", $(this).attr("data-row-id") );

            $(location).prop('href', '#gsEditWorkPage');
        }

        $("#gsOrgzWorkList a").on("click", clickHandler);

    }
    works.selectOrgzworkList(options, callback);
}
