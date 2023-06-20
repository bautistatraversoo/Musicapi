import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://dmartello:austral123@mymongodb.pm7murq.mongodb.net/test";

const client = new MongoClient(connectionString);

let conn;
try {
  // Try
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("austral");

export default db;
