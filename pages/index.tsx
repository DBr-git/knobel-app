import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <main className="p-12">
      {user ? (
        <div className="text-center">
          <p>Logged in</p>
          <Link href="/api/auth/logout">Logout</Link>
        </div>
      ) : (
        <div className="text-center">
          <p>Not logged in</p>
          <Link href="/api/auth/login">Login</Link>
        </div>
      )}
    </main>
  );
}
