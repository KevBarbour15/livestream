"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { getVodSource } from "./util/get-source";

export default function HomePage() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    async function fetchAssets() {
      try {
        const response = await fetch("/api/assets");

        // Log the response
        //console.log('Fetch response:', response);

        // Check if response is ok
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        //console.log("data: ", data);
        setAssets(data);
      } catch (error) {
        console.error("Error fetching assets:", error);
      }
    }

    //fetchAssets();
  }, []);

  useEffect(() => {
    async function fetchVodSource() {
      const playbackId = "db93jbi11nta0p6a";
      const source = await getVodSource(playbackId);
      console.log("source: ", source);
    }

    fetchVodSource();
  }, []);

  return (
    <div>
      <h1>Legend Has It</h1>
      <LoginLink postLoginRedirectURL="/dashboard">Sign in</LoginLink>
    </div>
  );
}
