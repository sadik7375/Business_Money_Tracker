
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';





const Charts = () => {

  const [feeData, setFeeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);



  useEffect(() => {
    // Fetch fee data
    axios.get("http://localhost:8000/fee")
      .then((response) => {
        console.log(response.data)
        setFeeData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch expense data
    axios.get("http://localhost:8000/expense")
      .then((response) => {
        console.log(response.data)
        setExpenseData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);





// Function to format the date to "MMMM" 
const formatDateToMonth = (date) => {
  const options = { month: 'long' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

// Combine feeData and expenseData into a single array of objects with Month, Income, and Expense properties
const combinedData = [
  ...feeData.map((fee) => ({
    Month: formatDateToMonth(new Date(fee.paymentdate)),
    Income: parseFloat(fee.payment),
    Expense: 0,
  })),
  ...expenseData.map((expense) => ({
    Month: formatDateToMonth(new Date(expense.date)),
    Income: 0,
    Expense: parseFloat(expense.expense),
  })),
];

// Group data by Month and sum the Income and Expense for the same Month
const groupedData = combinedData.reduce((acc, dataPoint) => {
  const existingData = acc.find((item) => item.Month === dataPoint.Month);

  if (existingData) {
    existingData.Income += dataPoint.Income;
    existingData.Expense += dataPoint.Expense;
  } else {
    acc.push(dataPoint);
  }

  return acc;
}, []);

// Now 'groupedData' contains the combined and grouped data with Month
console.log(groupedData);










    
    return (
        <div className="flex justify-center">
        <LineChart
            width={500}
            height={300}
            data={groupedData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            className="mx-auto" // Center the chart horizontally
        >
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="Month" />
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