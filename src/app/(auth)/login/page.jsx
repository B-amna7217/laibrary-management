"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Dummy credentials
    const dummyEmail = "test@example.com";
    const dummyPassword = "123456";

    if (email === dummyEmail && password === dummyPassword) {
      setMessage("Login successful!");
      setTimeout(() => {
        router.push("/firstpage"); // Redirect after login
      }, 1000);
      // Normally: Call API to get token & save to localStorage
    } else {
      setMessage("Invalid email or password!");
    }
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Welcome Back
        </h2>

        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full border-2 border-pink-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full border-2 border-pink-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <Link href="/">
              <p className="pt-4 mr-2 text-pink-600">forgot password!</p>
            </Link>
          </div>
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded font-semibold transition duration-300 w-full"
          >
            Login
          </button>

          <p className="text-center text-gray-500 text-sm mt-4">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-pink-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default Login;


