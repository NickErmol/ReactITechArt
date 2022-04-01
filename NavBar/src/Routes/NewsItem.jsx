import React from 'react';
import { useParams } from 'react-router-dom';
import { getNewsItem } from '../data';

export default function NewsItem() {
  const params = useParams();
  const newsItem = getNewsItem(parseInt(params.newsItemId, 10));
  return (
    <main style={{ padding: '1rem' }}>
      <h2>Header: {newsItem.name}</h2>
      <p>{newsItem.text}</p>
    </main>
  );
}
