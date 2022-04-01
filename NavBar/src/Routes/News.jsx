import React, { useMemo } from 'react';
import { Link, Outlet } from 'react-router-dom';
import getNews from '../data';

export default function News() {
  const news = getNews();
  const newsList = useMemo(
    () =>
      news.map(newsItem => (
        <Link
          style={{ display: 'block', margin: '1rem 0' }}
          to={`/news/${newsItem.id}`}
          key={newsItem.id}
        >
          {newsItem.name}
        </Link>
      )),
    [news],
  );
  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        {newsList}
      </nav>
      <Outlet />
    </div>
  );
}
