const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const dbName = "employee_db";

async function main() {

    await client.connect();

    console.log("Connected successfully to the server");

    const db = client.db(dbName);

    const collection = db.collection("employee");

    return "Done.";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());