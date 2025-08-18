'use client';

import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div style={{ padding: 30 }}>
      <h2>My Home page</h2>
      <p>web page design</p>

      {/* ✅ LOGIN BUTTON */}
      <Link href="/login">
        <button>Go to Login Page</button>
      </Link>
      <h2>main page</h2>
    </div>
    </>
  );
}
