import React from 'react';

const Card = ({ text, category }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-text">{text}</div>
        <div className="card-category">{category}</div>
      </div>
    </div>
  );
};

export default Card;
