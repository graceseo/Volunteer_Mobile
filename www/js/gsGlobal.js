/**
* File Name: gsGlobal.js

* Revision History:
*        Gyeonglim Seo, 2019-04-11 : Created
*/

function gsHomePage_Show() {
    // gsGetlNewOrgz();
    // gsGetRecentWanted();
}

function gsExplorePage_show() {
    gsGetCategory();
}

function init() {
    $("#gsHomePage").on("pageshow", gsHomePage_Show);
    $("#gsExplorePage").on("pageshow", gsExplorePage_show);
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
