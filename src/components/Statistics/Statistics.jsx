import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

  
const data = [
    { name: 'Assignment-1', value: 57 },
    { name: 'Assignment-2', value: 59 },
    { name: 'Assignment-3', value: 60 },
    { name: 'Assignment-4', value: 60 },
    { name: 'Assignment-5', value: 60 },
    { name: 'Assignment-6', value: 55 },
    { name: 'Assignment-7', value: 57 },
    { name: 'Assignment-8', value: 60 },
  ];
  
  const COLORS = ['#FF6384', '#36A2EB', '#f54266', '#2ECC71', '#F1C40F', '#E74C3C', '#8E44AD', '#7E90FE'];
  
const Statistics = () => {

    return (
        <div className='container d-flex justify-content-center mt-4'>
           <div>
            <h1>My Assignment Numbers</h1>
            <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={120}
                            fill="#8884d8"
                            label
                        >
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    <Tooltip />
                </PieChart>
           </div>
      </div>
    );
};

export default Statistics;