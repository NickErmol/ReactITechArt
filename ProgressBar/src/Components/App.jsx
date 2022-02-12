import React, { useState } from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import ProgressBarHandlers from './ProgressBar/ProgressBarHandlers';
import style from './App.module.css';

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className={style.App}>
      <p>Progress Bar</p>
      <ProgressBar value={value} />
      <ProgressBarHandlers setValue={setValue} value={value} />
    </div>
  );
}

export default App;
