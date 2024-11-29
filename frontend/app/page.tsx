"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";





export default function Home() {

  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Welcome to the CRM Starter Project</h1>
        <p>This is the homepage.</p>
        <Link href="/form">Go to the Form Page</Link>
      </div>
    </main>
  );
}
