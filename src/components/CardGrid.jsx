import React from 'react';
import Card from './Card';

const CardGrid = () => {
    const cards = [
        {
            text: "Which channel should I increase my budget on based on the model?",
            category: "MODEL INSIGHT",
            bgColor: "#ffe8df"
        },
        {
            text: "What is the ROI of each media channel in my project?",
            category: "MODEL INSIGHT",
            bgColor: "#f1e5ff"
        },
        {
            text: "Show me a breakdown of media spend by channel for the last 3 months",
            category: "ANALYSIS",
            bgColor: "#e5f0ff"
        },
        {
            text: "Which channels are underperforming and where should I cut spend?",
            category: "OPTIMIZATION",
            bgColor: "#ffebee"
        },
        {
            text: "What were my top performing channels in the most recent weeks?",
            category: "ANALYSIS",
            bgColor: "#e8fdf2"
        },
        {
            text: "Generate a revenue trend chart for the last 6 months",
            category: "VISUALIZATION",
            bgColor: "#fff4d3"
        }
    ];

    return (
        <div className="grid-container">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    text={card.text}
                    category={card.category}
                    bgColor={card.bgColor}
                />
            ))}
        </div>
    );
};

export default CardGrid;
