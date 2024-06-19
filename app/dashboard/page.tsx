import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

// middleware.ts is best for this because it allows this to still be rendered on the client side
// while maintaining the security of the route
export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Dashboard</h1>
        <Link href="/">Home</Link>
        <LogoutLink postLogoutRedirectURL="/">Log out</LogoutLink>
      </div>
    </main>
  );
}
