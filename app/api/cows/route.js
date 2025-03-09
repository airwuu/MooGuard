import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("MooGuard"); // Change to your actual database name
    const cows = await db.collection("cows").find({}).toArray();

    const transformedCows = cows.map(cow => ({
      id: cow._id.toString(),
      name: cow.name,
      healthStatus: cow.healthStatus,
      confidence: cow.confidence,
      notes: cow.reason, // Change 'reason' to 'notes'
      positions: cow.positions,
    }));

    return NextResponse.json(transformedCows);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching cows", error }, { status: 500 });
  }
}
