const { MongoClient } = require("mongodb");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Missing MONGO_URI in environment variables");
}

async function run() {
  try {
    const client = new MongoClient(MONGO_URI);
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db("users");  
    const collection = db.collection("demo_user");  

    const cows = await collection.find({}).limit(5).toArray(); 

    console.log("Fetched cows from DB:", cows); 

    await client.close();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run();
