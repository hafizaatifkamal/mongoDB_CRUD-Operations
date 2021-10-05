const http = require("http");

const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/employee_db";

MongoClient.connect(url, function(err, client) {

    const db = client.db("employee_db");

    if (err) throw err;

    const deleteQuery = { employee_id: "vb004" };

    db.collection("employee")
        .deleteOne(deleteQuery, function(err, res) {

            if (err) throw err;

            console.log(res + " record(s) deleted");

            client.close();
        });
});