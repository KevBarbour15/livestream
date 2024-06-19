"use client";
import { Livepeer } from "livepeer";
import { getSrc } from "@livepeer/react/external";

const livepeer = new Livepeer({
  apiKey: process.env.NEXT_PUBLIC_LIVEPEER_API_KEY,
});

export async function getVodSource(playbackId: string) {
  console.log("Fetching VOD source for playback ID: ", playbackId);
  try {
    const response = await livepeer.playback.get(playbackId);
    if (response.playbackInfo) {
      const src = getSrc(response.playbackInfo);
      console.log("Generated Source URL: ", src);
      return src;
    } else {
      console.error("Playback information is not available");
      return null;
    }
  } catch (error) {
    console.error("Error fetching VOD source: ", error);
    return null;
  }
}
