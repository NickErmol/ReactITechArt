import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewsIndexPage() {
  const navigate = useNavigate();
  return (
    <main style={{ padding: '1rem 0' }}>
      <p>Select news</p>
      <button
        style={{ margin: '0 5px' }}
        type="button"
        onClick={() => navigate('/home')}
      >
        Home
      </button>
    </main>
  );
}
