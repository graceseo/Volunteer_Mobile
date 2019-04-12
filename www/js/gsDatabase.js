/**
* File Name: gsDatabase.js

* Revision History:
*        Gyeonglim Seo, 2019-04-11 : Created
*/
var db;

function errorHandler(tx, error) {
    console.error("SQL error: " + tx + " (" + error.code + ") : " + error.message);
}

/**
 * For creating database
 */
function gsCreateDatabase(){
    var shortName="VolunteerDB";
    var version="1.0";
    var displayName="DB for VolunteerDB app";
    var dbSize=2*1024*1024;

    console.info("Creating database...");

    function dbCreateSuccess() {
        console.info("Database created successfully");
    }
    db=openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);
}

/**
 * When the mobile application start, this function creates tables
 */
function gsCreateTables() {
    function txFunction(tx) {
        var options=[];

        var dropCategorySql="DROP TABLE IF EXISTS category; ";
        var dropCategoryMessage="'category' table dropped successfully";
        tx.executeSql(dropCategorySql, options, successExecute(dropCategoryMessage), errorHandler);

        var createCategorySql="CREATE TABLE category("+
                "category_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"+
                "name VARCHAR(20)," +
                "image VARCHAR(20)"+
                ");";
        var creatCategoryMessage="'Category' table created successfully";

        tx.executeSql(createCategorySql, options, successExecute(creatCategoryMessage), errorHandler);

        var insertSql=["INSERT INTO Category (name, image) VALUES('Animals','img/animal.png')",
                        "INSERT INTO Category (name, image) VALUES('Children','img/children.png')",
                        "INSERT INTO Category (name, image) VALUES('Food','img/food.png')",
                        "INSERT INTO Category (name, image) VALUES('Arts','img/arts.png')",
                        "INSERT INTO Category (name, image) VALUES('Driver','img/car.png')",
                        "INSERT INTO Category (name, image) VALUES('Technology','img/technology.png')"];

        for(var i=0; i<insertSql.length; i++){
            tx.executeSql(insertSql[i], options, successExecute("execute sql : " + insertSql[i]), errorHandler);
        }

        var creatVolunteerSql="CREATE TABLE IF NOT EXISTS volunteer("+
            "volunteer_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"+
            "first_name VARCHAR(20) NOT NULL,"+
            "last_name VARCHAR(20) NOT NULL,"+
            "phone VARCHAR(10) NOT NULL,"+
            "email VARCHAR(30)"+
            ");";
        var createVolunteerMessage="'Volunteer' table created successfully";

        tx.executeSql(creatVolunteerSql, options, successExecute(createVolunteerMessage), errorHandler);

        var creatOrganizationSql="CREATE TABLE IF NOT EXISTS organization(" +
            "orgz_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
            "orgz_name VARCHAR(50) NOT NULL," +
            "contact_first_name VARCHAR(20) NOT NULL,"+
            "contact_last_name VARCHAR(20) NOT NULL,"+
            "contact_phone VARCHAR(10) NOT NULL,"+
            "address VARCHAR(100)" +
            ");";
        var createOrganizationMessage="'Organization' table created successfully";

        tx.executeSql(creatOrganizationSql, options, successExecute(createOrganizationMessage), errorHandler);

        var creatPositionSql="CREATE TABLE IF NOT EXISTS org_position("+
            "orgz_id INTEGER NOT NULL,"+
            "category_id INTEGER NOT NULL,"+
            "position varchar(30),"+
            "start_date DATE NOT NULL,"+
            "end_date DATE NOT NULL,"+
            "description VARCHAR(300) NOT NULL,"+
            "FOREIGN KEY(orgz_id) REFERENCES organization(orgz_id),"+
            "FOREIGN KEY(category_id) REFERENCES category(category_id),"+
            "PRIMARY KEY(orgz_id,category_id,position));";

        var createPositionMessage="'org_position' table created successfully";

        tx.executeSql(creatPositionSql, options, successExecute(createPositionMessage), errorHandler);

        /**
         * this function shows all message on console
         * @param successMessage
         */
        function successExecute(successMessage) {
            console.info(successMessage);
        }
    }
    function successTransaction() {
        console.info("Create tables transaction successful");
    }
    db.transaction(txFunction, errorHandler, successTransaction );
}
