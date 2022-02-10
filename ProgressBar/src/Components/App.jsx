/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import ProgressBarHandlers from './ProgressBar/ProgressBarHandlers';
import s from  './App.module.css';

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div className={s.App}>
      <section className={s.AppHeader}>
      <p>
         Progress Bar
      </p>
       <ProgressBar value = {value}/>
       <ProgressBarHandlers setValue = {setValue} value = {value}/>
      </section>
    </div>
  );
}

export default App;
