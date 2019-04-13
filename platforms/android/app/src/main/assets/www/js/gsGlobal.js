/**
* File Name: gsGlobal.js

* Revision History:
*        Gyeonglim Seo, 2019-04-11 : Created
*/

function gsHomePage_Show() {
    // gsGetRecentWanted();
}

function gsExplorePage_show() {
    gsGetCategory();
}

function gsBtnLogin_click() {
    gsCheckId();
}

function gsBtnSignup_click() {
    $(location).prop('href', '#gsVolunteerSignPage');
}

function gsBtnVolJoinSave_click() {

}

function init() {
    $("#gsHomePage").on("pageshow", gsHomePage_Show);
    $("#gsExplorePage").on("pageshow", gsExplorePage_show);
    $("#gsBtnLogin").on("click",gsBtnLogin_click);
    $("#gsBtnSignup").on("click", gsBtnSignup_click);
    $("#gsBtnVolJoinSave").on("click", gsBtnVolJoinSave_click);
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
