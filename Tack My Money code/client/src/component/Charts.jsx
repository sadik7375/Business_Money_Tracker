

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Charts = () => {
    const data = [
        {
          name: 'January',
          Income: 10,
          Expense:1000,
          amt: 2400,
        },
        {
          name: 'February',
          Income: 3000,
          Expense:2000,
       
          amt: 2210,
        },
        {
          name: 'March',
          Income: 2000,
          Expense:3000,
          
          amt: 2290,
        },
        {
          name: 'April',
          Income: 2780,
          Expense:4000,
          
          amt: 2000,
        },
        {
          name: 'May',
          Income: 1890,
          Expense:1000,
         
          amt: 2181,
        },
        {
          name: 'June',
          Income: 2000,
          Expense:7000,
        
          amt: 2500,
        },
        {
          name: 'July',
          Income: 3666,
          Expense:2000,
       
          amt: 2100,
        },
        {
            name: 'Aguest',
            Income: 3660,
            Expense:8000,
            amt: 2100,
          },
          {
            name: 'September',
            Income: 3480,
            Expense:1200,
            amt: 2100,
          },
          {
            name: 'October',
            Income: 3290,
            Expense:1500,
            amt: 2100,
          },
          {
            name: 'November',
            Income: 2490,
            Expense:1900,
            amt: 2100,
          },
          {
            name: 'December',
            Income: 3400,
            Expense:1400,
            amt: 2100,
          },
      ];
    return (
        <div className="flex justify-center">
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            className="mx-auto" // Center the chart horizontally
        >
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Income" stroke="#00ff00" />
            <Line type="monotone" dataKey="Expense" stroke="#FF0000" />
        </LineChart>
    </div>
    );
};

export default Charts;