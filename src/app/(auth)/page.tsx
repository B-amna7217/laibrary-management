'use client';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/footer'; 
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // form refresh na ho
    router.push('/home');
  };

  return (
    <>
      <Header />

      <div
        style={{
          maxWidth: '400px',
          margin: '100px auto',
          padding: '30px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Login</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>Email:</label>
            <br />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
              placeholder="admin@example.com"
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>Password:</label>
            <br />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
              placeholder="1234"
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </form>

        {error && (
          <p style={{ color: 'red', marginTop: '15px', textAlign: 'center' }}>
            {error}
          </p>
        )}
      </div>

      <Footer />
    </>
  );
}
