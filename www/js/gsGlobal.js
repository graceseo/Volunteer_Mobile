/**
* File Name: gsGlobal.js

* Revision History:
*        Gyeonglim Seo, 2019-04-11 : Created
*/

function gsHomePage_show() {
    // gsGetRecentWanted();
}


function gsAddWorkPage_show() {
    gsGetCategory();
}

function gsBtnWorkSave_click() {
    gsAddWork();
}

function gsWorkList_show() {
    gsGetWorkList();
}

function gsEditWorkPage_show() {
    getShowCurrentWork();
}

function gsBtnCancelEdit_click() {
    $(location).prop('href', '#gsWorkListPage');
}

function gsBtnDeleteEdit_click() {
    gsDeleteWork();
}

function gsBtnUpdateEdit_click() {
    gsUpdateWork();
}

function gsOrgzListPage_show() {
    gsGetOrganizationList();
}

function init() {
    $("#gsHomePage").on("pageshow", gsHomePage_show);
    $("#gsAddWorkPage").on("pageshow", gsAddWorkPage_show);
    $("#gsBtnWorkAddSave").on("click",gsBtnWorkSave_click);
    $("#gsWorkListPage").on("pageshow", gsWorkList_show);
    $("#gsEditWorkPage").on("pageshow", gsEditWorkPage_show);
    $("#gsBtnCancelEdit").on("click", gsBtnCancelEdit_click);
    $("#gsBtnDeleteEdit").on("click", gsBtnDeleteEdit_click);
    $("#gsBtnUpdateEdit").on("click", gsBtnUpdateEdit_click);
    $("#gsOrgzListPage").on("pageshow", gsOrgzListPage_show);
}

function initDB() {
    try{
        gsCreateDatabase();
        if(db){
            console.info("Create table..");
            gsCreateTables();
        }
        else{
            console.error("Error: Cannot create tables: database does not exist")
        }
    }
    catch(e){
        console.error("Error: (Fatal) error in initDB(). Can not proceed.");
    }
}

$(document).ready(function () {
    init();
    initDB();
});
