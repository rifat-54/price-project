import React from 'react';

import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const marksData = [
        { id: 1, name: "Student A", math: 85, physics: 78 },
        { id: 2, name: "Student B", math: 92, physics: 88 },
        { id: 3, name: "Student C", math: 76, physics: 85 },
        { id: 4, name: "Student D", math: 90, physics: 82 },
        { id: 5, name: "Student E", math: 65, physics: 73 },
        { id: 6, name: "Student F", math: 88, physics: 91 },
        { id: 7, name: "Student G", math: 70, physics: 60 },
        { id: 8, name: "Student H", math: 95, physics: 95 },
        { id: 9, name: "Student I", math: 80, physics: 85 },
        { id: 10, name: "Student J", math: 78, physics: 76 }
    ];
    


    return (
        <div className='bg-black px-8 py-10'>
            <LChart width={500} height={600} data={marksData}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Line type={'monotone'} dataKey={"math"} stroke='red'></Line>
                <Line type={'monotone'} dataKey={"physics"} stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;