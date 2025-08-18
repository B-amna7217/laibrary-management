// src/components/Header.tsx

import Link from "next/link";

export default function Header() {
  return (
    <header style={{ backgroundColor: "#e0f7fa", padding: "20px" }}>
      <h1>Laibrary Management system</h1>
      <nav>
        <ul style={{ display: "flex", listStyle: "none", padding: 0, margin: 0, gap: "15px" }}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/available">Available</Link></li>
        </ul>
      </nav>
    </header>
  );
}
