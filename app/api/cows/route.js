import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Missing MONGO_URI in environment variables");
}

export default async function GET() {
  try {
    const client = new MongoClient(MONGO_URI);
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db("users");  // Your database
    const collection = db.collection("demo_user");  // Your collection

    // Fetch data
    const data = await collection.find({}).limit(5).toArray();

    // Transform MongoDB data to match frontend structure
    const transformedData = data.map((entry) => ({
      id: entry._id.toString(),  // Convert MongoDB ObjectId to string
      time: entry.time,
      positions: [
        { name: "obj1", x: entry.obj1?.[0], y: entry.obj1?.[1] },
        { name: "obj2", x: entry.obj2?.[0], y: entry.obj2?.[1] },
        { name: "obj3", x: entry.obj3?.[0], y: entry.obj3?.[1] },
        { name: "obj4", x: entry.obj4?.[0], y: entry.obj4?.[1] },
        { name: "obj5", x: entry.obj5?.[0], y: entry.obj5?.[1] }
      ].filter(pos => pos.x !== undefined && pos.y !== undefined) // Remove undefined values
    }));

    await client.close();
    return NextResponse.json(transformedData);
  } catch (error) {
    console.error("❌ Error fetching cows:", error);
    return NextResponse.json({ message: "Error fetching cows", error }, { status: 500 });
  }
}
