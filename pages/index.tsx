import Navigation from "@/components/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <main className="p-12">
      {user ? (
        <>
          <Navigation />
          <div className="text-center">
            <p>Eingeloggt</p>
            <Link href="/api/auth/logout">Ausloggen</Link>
          </div>
        </>
      ) : (
        <div className="text-center">
          <p>Nicht eingeloggt</p>
          <Link href="/api/auth/login">Einloggen</Link>
        </div>
      )}
    </main>
  );
}
