import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  //console.log("Fetching recordings from Livepeer");
  try {
    const response = await axios.get("https://livepeer.com/api/asset", {
      headers: {
        Authorization: `Bearer ${process.env.LIVEPEER_API_KEY}`,
      },
    });

    const recordings = response.data;
    //console.log("Recordings: ", recordings);
    return NextResponse.json(recordings);
  } catch (error) {
    console.error("Error fetching recordings from Livepeer:", error);
    return NextResponse.json(
      { error: "Error fetching recordings from Livepeer" },
      { status: 500 }
    );
  }
}
