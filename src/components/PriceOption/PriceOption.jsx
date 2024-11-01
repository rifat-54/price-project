import React from 'react';
import Price from '../Price/Price';

const PriceOption = () => {

    const memberships = [
        {
            id: 101,
            name: "Basic Membership",
            feature: [
                "Access to gym equipment",
                "Locker facilities",
                "1-hour workout time limit per visit",
                "Access to standard showers"
            ],
            price: 20
        },
        {
            id: 102,
            name: "Standard Membership",
            feature: [
                "Gym equipment access",
                "Group fitness classes",
                "Locker facilities",
                "Extended 2-hour workout time limit per visit",
                "Free nutrition guide",
                "Access to standard showers"
            ],
            price: 35
        },
        {
            id: 103,
            name: "Premium Membership",
            feature: [
                "All gym equipment access",
                "Group fitness classes",
                "Personal trainer sessions (twice a week)",
                "Priority locker",
                "No time limit",
                "VIP showers",
                "Sauna access",
                "Free monthly health assessment"
            ],
            price: 50
        }
    ];
    
    

    return (
        <div>
            <h2>All price for available</h2>
            <div className='grid md:grid-cols-3 gap-3'>

           
            {
                memberships.map(p=><Price key={p.id} pricen={p}></Price>)
            }
             </div>
        </div>
    );
};

export default PriceOption;