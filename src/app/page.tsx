"use client";

import { useState } from "react";
import { useAtom } from "jotai";
import { authTokenAtom } from "@/store/authstore";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [, setAuthToken] = useAtom(authTokenAtom);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "admin@example.com" && password === "123456") {
      setAuthToken("my-secret-access-token");
      router.push("/dashboard"); // ✅ correct path
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button
        onClick={handleLogin}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
}
