"use client";

import { useAtom } from "jotai";
import { authTokenAtom } from "@/store/authstore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  const [authToken] = useAtom(authTokenAtom);
  const router = useRouter();

  // agar login nahi hai to redirect
  useEffect(() => {
    if (!authToken) {
      router.push("/");
    }
  }, [authToken, router]);

  if (!authToken) return null; // jab tak redirect ho raha hai

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          background: "#f0f0f0",
          padding: "20px",
        }}
      >
        <h3>📚 sidebar</h3>
        <nav style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link href="/contact">Contact</Link>
          <Link href="/services">Services</Link>
          <Link href="/available">Available</Link>
          <Link href="/about">About</Link>
        </nav>
      </aside>

      {/* Page content */}
      <main style={{ flex: 1, padding: "20px" }}>{children}</main>
    </div>
  );
}
