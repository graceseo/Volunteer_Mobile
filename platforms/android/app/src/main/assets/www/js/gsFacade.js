/**
 * File Name: gsFacade.js

 * Revision History:
 *        Gyeonglim Seo, 2019-04-11 : Created
 */
//
// function gsAddFeedback() {
//     //1.test validation
//     if(gsDoValidate_gsFrmAddReview()){
//         console.info("Validation is successful");
//         //2. if validation is successful then fetch the info from input controls
//         var businessName = $("#gsBusinessNameAdd").val();
//         var typeId=$("#gsTypeAdd").val();
//         var reviewerEmail=$("#gsReviewerEmailAdd").val();
//         var reviewerComments=$("#gsReviewerCommentAdd").val();
//         var reviewDate=$("#gsReviewDateAdd").val();
//         var hasRating=$("#gsCheckRatingAdd").prop("checked");
//         var rating1=$("#gsFoodQualityAdd").val();
//         var rating2=$("#gsServiceAdd").val();
//         var rating3=$("#gsValueAdd").val();
//         var opt;
//
//         //3. only your ratings' checkbox is checked, rating1/rating2/rating3 is included
//         if(hasRating){
//             opt = [businessName, typeId, reviewerEmail,reviewerComments,reviewDate,hasRating,rating1,rating2,rating3];
//         }else{
//             opt=[businessName, typeId, reviewerEmail, reviewerComments,reviewDate,hasRating,null,null,null];
//         }
//         function success() {
//             console.info("Record inserted successfully");
//             alert("New Feedback Added");
//         }
//         //4. insert into table (by calling insert DAL function and supplying the inputs
//         Review.insert(opt, success);
//
//
//     }else{
//         console.error("Adding Review failed");
//     }
// }
//
// function gsGetlNewOrgz() {
//     var options=[];
//
//     function callback(tx, results) {
//         var htmlCode="";
//
//         for(var i=0; i<results.rows.length; i++){
//             var row=results.rows[i];
//             var overollRating=0;
//
//             //Only if the 'hasRating' field is true, ovarollaRating will be calculated
//             if(row['hasRating']){
//                 //call a function for calculating
//                 overollRating=getOverallRating(row['rating1'],row['rating2'],row['rating3']);
//             }
//             htmlCode += "<li><a data-role='button' data-row-id=" + row['id'] + " href='#'>"+
//                 "<h2>Business Name: "+row['businessName']+"</h2>"+
//                 "<p>Reviewer Email: "+row['reviewerEmail']+"<br>"+
//                 "Comments: "+row['reviewerComments']+"<br>"+
//                 "Overall Rating: "+overollRating+"</p></a></li>";
//         }
//
//         var lv = $("#gsFeedbackList");
//
//         lv =lv.html(htmlCode);
//         lv.listview("refresh");  //very important
//
//         function clickHandler() {
//             localStorage.setItem("id", $(this).attr("data-row-id") );
//
//             $(location).prop('href', '#gsEditFeedbackPage');
//         }
//
//         $("#gsFeedbackList a").on("click", clickHandler);
//
//     }
//
//     Review.selectAll(options, callback);
// }
function gsGetCategory() {
    var options = [];

    function callback(tx, results) {
        var htmlCode="";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            htmlCode += "<li><a data-role='button' data-row-id=" + row['id'] + " href='#'>"+
                "<img src='"+row['image']+"'><h2>"+row['name']+"</h2></p></a></li>";
        }
        var lv = $("#gsExploreList");

        lv =lv.html(htmlCode);
        lv.listview("refresh");  //very important

        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id") );

            $(location).prop('href', '#gsEditFeedbackPage');
        }

        $("#gsExploreList a").on("click", clickHandler);
    }
    Category.selectAll(options, callback);
}

function gsCheckId() {
    var opt;
    var id=$("#gsLoginID").val();
    var pwd=$("#gsLoginPwd").val();
    opt=[id, pwd];

    function callback(tx, results) {
        var htmlCode="";
        if (results.rows.length!==null || results.rows.length!==0) {
            var row=results.rows[1]
            htmlCode += "<h1>"+row['first_name']+"!</h1>" ;
        }
        var lv = $("#gsExploreHeader");

        lv.html(htmlCode);
    }
    Volunteer.select(opt, callback);
}
function gsAddVolunteer() {

}
