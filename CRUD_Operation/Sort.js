const http = require("http");

const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/employee_db";

MongoClient.connect(url, function(err, client) {

    const db = client.db("employee_db");

    if (err) throw err;

    const sortedData = { employee_name: 1 };

    db.collection("employee")
        .find()
        .sort(sortedData)
        .toArray(function(err, res) {

            console.log(res);

            client.close();
        });
});