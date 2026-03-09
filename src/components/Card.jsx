import React from 'react';

const Card = ({ text, category, bgColor }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <div className="card-content">
        <p className="card-desc">{text}</p>
        <div className="card-category">{category}</div>
      </div>
    </div>
  );
};

export default Card;
