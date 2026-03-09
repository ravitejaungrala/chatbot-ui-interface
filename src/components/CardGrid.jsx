import React from 'react';
import Card from './Card';

const CardGrid = () => {
    const cards = [
        {
            text: "Which channel should I increase my budget on based on the model?",
            category: "MODEL INSIGHT"
        },
        {
            text: "What is the ROI of each media channel in my project?",
            category: "MODEL INSIGHT"
        },
        {
            text: "Show me a breakdown of media spend by channel for the last 3 months",
            category: "ANALYSIS"
        },
        {
            text: "Which channels are underperforming and where should I cut spend?",
            category: "OPTIMIZATION"
        },
        {
            text: "What were my top performing channels in the most recent weeks?",
            category: "ANALYSIS"
        },
        {
            text: "Generate a revenue trend chart for the last 6 months",
            category: "VISUALIZATION"
        }
    ];

    return (
        <div className="grid-container">
            {cards.map((card, index) => (
                <Card key={index} text={card.text} category={card.category} />
            ))}
        </div>
    );
};

export default CardGrid;
