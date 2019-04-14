/**
 * File Name: gsVolunteerDAL.js
 *
 * Revision History:
 *       Gyeonglim Seo, 2019-04-11 : Created
 */

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

var organization={
    selectAllwithWorkCount: function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT organization.orgz_name, organization.address, count(works.orgz_name) as work_count " +
                "FROM organization, works "+
                "WHERE organization.orgz_name=works.orgz_name "+
                "GROUP BY organization.orgz_name, organization.address;";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Select transaction is successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    insert: function (options, callback) {
        function txFunction(tx) {
            var sql="INSERT or REPLACE INTO organization (orgz_name, contact_full_name, contact_phone, address)"+
                " VALUES(?,?,?,?);";
            tx.executeSql(sql,options, callback,errorHandler);
        }
        function successTransaction() {
            console.info("Insert transaction is successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT orgz_id FROM organization WHERE orgz_name=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Select transaction is successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
var works={
    insert: function (options, callback) {
        function txFunction(tx) {
            var sql="INSERT INTO works (orgz_name,category_id,position,start_date,end_date)"+
                " VALUES(?,?,?,?,?);";
            tx.executeSql(sql,options, callback,errorHandler);
        }
        function successTransaction() {
            console.info("Insert transaction is successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function (options, callback) {
        function txFunction(tx) {
            var sql = "DELETE FROM works WHERE work_id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Delete transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function (options, callback) {
        function txFunction(tx) {
            var sql = "UPDATE works SET orgz_name=?,category_id=?,position=?,start_date=?,end_date=? "+
                "WHERE work_id=?";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Update transaction is successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT work_id,orgz_name,image,name,position,start_date,end_date FROM works, category "+
                "WHERE works.category_id=category.category_id;";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Select transaction is successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT category_id,works.orgz_name, contact_full_name, contact_phone, address, position,start_date,end_date "+
                "FROM works, organization "+
                "WHERE works.orgz_name=organization.orgz_name and works.work_id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Select transaction is successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
};
