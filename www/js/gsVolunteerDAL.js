/**
 * File Name: gsVolunteerDAL.js
 *
 * Revision History:
 *       Gyeonglim Seo, 2019-04-11 : Created
 */
//
// var Review={
//     insert: function (options, callback) {
//         function txFunction(tx) {
//             var sql="INSERT INTO review (businessName, typeId, reviewerEmail, reviewerComments, "+
//                 "reviewDate, hasRating, rating1, rating2, rating3)"+
//                 " values(?,?,?,?,?,?,?,?,?);";
//             tx.executeSql(sql,options, callback,errorHandler);
//         }
//         function successTransaction() {
//             console.info("Insert transaction is successful");
//         }
//         db.transaction(txFunction, errorHandler, successTransaction);
//     },
//     update: function (options, callback) {
//         function txFunction(tx) {
//             var sql = "UPDATE review SET businessName=?, typeId=?, reviewerEmail=?, reviewerComments=?, "+
//                 "reviewDate=?, hasRating=?, rating1=?, rating2=?, rating3=? where id=?";
//             tx.executeSql(sql, options, callback, errorHandler);
//         }
//         function successTransaction() {
//             console.info("Update transaction is successful");
//         }
//         db.transaction(txFunction, errorHandler, successTransaction);
//     },
//     delete: function (options, callback) {
//         function txFunction(tx) {
//             var sql = "DELETE FROM review WHERE id=?;";
//             tx.executeSql(sql, options, callback, errorHandler);
//         }
//
//         function successTransaction() {
//             console.info("Delete transaction is successful");
//         }
//
//         db.transaction(txFunction, errorHandler, successTransaction);
//     },
//     select: function (options, callback) {
//         function txFunction(tx) {
//             var sql = "SELECT * FROM review WHERE id=?;";
//             tx.executeSql(sql, options, callback, errorHandler);
//         }
//
//         function successTransaction() {
//             console.info("Select transaction is successful");
//         }
//
//         db.transaction(txFunction, errorHandler, successTransaction);
//     },
//     selectAll: function (options, callback) {
//         function txFunction(tx) {
//             var sql = "SELECT * FROM review;";
//             tx.executeSql(sql, options, callback, errorHandler);
//         }
//
//         function successTransaction() {
//             console.info("Select All transaction is successful");
//         }
//
//         db.transaction(txFunction, errorHandler, successTransaction);
//     }
// };

var Category={
    selectAll: function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT * FROM category;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Select All transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
