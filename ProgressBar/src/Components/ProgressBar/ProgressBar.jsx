/* eslint-disable react/prop-types */
import React from 'react';
import s from './ProgressBar.module.css';

function ProgressBar(props) {
  const { value } = props;
  const fillerStyle = {
    width: `${value}%`,
  };

  return (
    <div className={s.container}>
      <div className={s.filler} style={fillerStyle}>
        <span className={s.label}>{`${value}%`}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
