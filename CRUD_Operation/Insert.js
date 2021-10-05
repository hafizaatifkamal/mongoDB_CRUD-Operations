const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/employee_db";

MongoClient.connect(url, function(err, client) {

    if (err) throw err;

    const dataObj = [
        { employee_id: "vb001", employee_name: "Atif Kamal" },
        { employee_id: "vb002", employee_name: "Sachin Nishad" },
        { employee_id: "vb003", employee_name: "Abhiram" },
        { employee_id: "vb004", employee_name: "Yousuf" },
        { employee_id: "vb005", employee_name: "Saad Hasan" },
        { employee_id: "vb006", employee_name: "Divyanshu" },
        { employee_id: "vb007", employee_name: "Yashdeep" }
    ];

    const db = client.db("employee_db");

    db.collection("employee").insertMany(dataObj, function(err, res) {

        if (err) throw err;

        console.log("Number of records inserted: " + res.insertedCount);

        client.close();
    });
});