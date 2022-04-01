import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Routes/Home';
import News from './Routes/News';
import NewsItem from './Routes/NewsItem';
import NewsIndexPage from './Routes/NewsIndexPage';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="news" element={<News />}>
          <Route index element={<NewsIndexPage />} />
          <Route path=":newsItemId" element={<NewsItem />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There is nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement,
);
