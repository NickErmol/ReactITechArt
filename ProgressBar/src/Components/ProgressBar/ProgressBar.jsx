import React from 'react';
import PropTypes from 'prop-types';
import style from './ProgressBar.module.css';

function ProgressBar(props) {
  const { value } = props;
  const fillerStyle = {
    width: `${value}%`,
  };

  return (
    <div className={style.container}>
      <div className={style.filler} style={fillerStyle}>
        <span className={style.label}>{`${value}%`}</span>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
};
export default ProgressBar;
