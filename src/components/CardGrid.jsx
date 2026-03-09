import React from 'react';
import Card from './Card';

const CardGrid = () => {
    const cards = [
        {
            text: "Which channel should I increase my budget on based on the model?",
            category: "Model Insight",
            accentColor: "#FF4D00"
        },
        {
            text: "What is the ROI of each media channel in my project?",
            category: "Model Insight",
            accentColor: "#8B5CF6"
        },
        {
            text: "Show me a breakdown of media spend by channel for the last 3 months",
            category: "Analysis",
            accentColor: "#3B82F6"
        },
        {
            text: "Which channels are underperforming and where should I cut spend?",
            category: "Optimization",
            accentColor: "#EF4444"
        },
        {
            text: "What were my top performing channels in the most recent weeks?",
            category: "Analysis",
            accentColor: "#10B981"
        },
        {
            text: "Generate a revenue trend chart for the last 6 months",
            category: "Visualization",
            accentColor: "#F59E0B"
        }
    ];

    return (
        <div className="grid-container">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    text={card.text}
                    category={card.category}
                    accentColor={card.accentColor}
                />
            ))}
        </div>
    );
};

export default CardGrid;
