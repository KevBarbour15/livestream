import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

// import mui css for styling
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export const metadata: Metadata = {
  title: "Legend Has It",
  description: "Legend Has It",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
