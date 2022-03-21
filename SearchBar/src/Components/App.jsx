import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchRadioChoice from './SearchBar/SearchRadioChoice';
import style from './App.module.css';
import VisiblePosts from './SearchBar/VisiblePosts';

function App() {
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState('immediate');
  const posts = [
    { id: '1', name: 'This first post' },
    { id: '2', name: 'This next post' },
    { id: '3', name: 'We have the third React post!' },
    { id: '4', name: 'This is the fourth and final of all posts' },
  ];

  return (
    <div className={style.App}>
      <p>Search Bar</p>
      <SearchBar setQuery={setQuery} mode={mode} />
      <SearchRadioChoice setMode={setMode} mode={mode} />
      <VisiblePosts allPosts={posts} query={query} />
    </div>
  );
}

export default App;
