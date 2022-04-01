import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Some News</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/home">Home</Link> | <Link to="/news">News</Link>
      </nav>
      <Outlet />
    </div>
  );
}
