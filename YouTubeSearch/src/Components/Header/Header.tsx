import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  const [input, setInput] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (e.target[0].value) navigate(`/search/${input}`);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="text"
        placeholder="Search"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Header;
