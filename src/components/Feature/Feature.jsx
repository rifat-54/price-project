import React from 'react';
import { GoVerified } from "react-icons/go";

const Feature = ({features}) => {
    return (
        <div className='flex items-center gap-2'>
            <GoVerified className='bg-green-600' />
            {features}
        </div>
    );
};

export default Feature;