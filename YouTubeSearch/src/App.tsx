import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import WatchPage from './Pages/WatchPage/WatchPage';
import SearchPage from './Pages/SearchPage/SearchPage';
import Header from './Components/Header/Header';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/watch/:id" element={<WatchPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There is nothing here!</p>
            </main>
          }
        />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
