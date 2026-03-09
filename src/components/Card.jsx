import React from 'react';

const Card = ({ text, category, accentColor }) => {
    return (
        <div className="card" style={{ '--accent-color': accentColor }}>
            <p className="card-desc">{text}</p>
            <div className="card-category">{category}</div>
        </div>
    );
};

export default Card;
