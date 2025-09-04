import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Home Page</h1>
      
        
          <Link className="gap-10" href="/meals">Meals Page</Link>
          <Link className="gap-10" href="/meals/share">Share Page</Link>
          <Link className="gap-10" href="/community">Community</Link>

    </main>
  );
}
