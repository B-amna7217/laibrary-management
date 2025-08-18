import Link from "next/link";
import React from "react";

export default async function BooksList() {
  // API call (posts as books)
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div>
      <h1>Books List</h1>

      <ul>
        {data.slice(0, 5).map((book: any) => (
          <li key={book.id} style={{ marginBottom: "15px" }}>
            <strong>Book Name:</strong> {book.title} <br />
            <strong>Description:</strong> {book.body.slice(0, 60)}...
          </li>
        ))}
      </ul>

      {/* Button for nested routing */}
      <Link href="/about/aboutstudent">
        <button>Go to About Student</button>
      </Link>
    </div>
  );
}
