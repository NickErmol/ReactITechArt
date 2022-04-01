import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Home</h2>
      <button
        style={{ margin: '0 5px' }}
        type="button"
        onClick={() => navigate('/news')}
      >
        News
      </button>
    </main>
  );
}
