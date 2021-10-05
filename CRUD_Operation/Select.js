const http = require("http");

const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/employee_db";

MongoClient.connect(url, function(err, client) {

    const db = client.db("employee_db");

    if (err) throw err;

    const query = { employee_id: "vb003" };

    db.collection("employee")
        .find(query)
        .toArray(function(err, res) {

            if (err) throw err;

            console.log(res);

            client.close();
        });
});