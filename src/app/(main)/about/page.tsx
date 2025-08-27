"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { authTokenAtom } from "@/store/authstore";
import { useRouter } from "next/navigation";

// API data type define kar lete hain
interface Book {
  id: number;
  title: string;
  body: string;
}

export default function BooksList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [authToken] = useAtom(authTokenAtom);
  const router = useRouter();

  // ✅ Redirect if no token
  useEffect(() => {
    if (!authToken) {
      router.push("/");
    }
  }, [authToken, router]);

  // ✅ Fetch books
  useEffect(() => {
    if (authToken) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data: Book[]) => setBooks(data.slice(0, 5)))
        .catch((err) => console.error(err));
    }
  }, [authToken]);

  // ✅ Render conditionally (but hooks stay on top)
  if (!authToken) {
    return <p>Redirecting...</p>;
  }

  return (
    <div>
      <h1>Books List</h1>

      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ marginBottom: "15px" }}>
            <strong>Book Name:</strong> {book.title} <br />
            <strong>Description:</strong> {book.body.slice(0, 60)}...
          </li>
        ))}
      </ul>

      <Link href="/about/aboutstudent">
        <button>Go to About Student</button>
      </Link>
    </div>
  );
}
