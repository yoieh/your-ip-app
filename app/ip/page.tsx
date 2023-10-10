"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Ip() {
  const searchParams = useSearchParams();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      Your ip: {searchParams.get("ip")}
      <Link href="/"> Go back home </Link>
    </main>
  );
}
