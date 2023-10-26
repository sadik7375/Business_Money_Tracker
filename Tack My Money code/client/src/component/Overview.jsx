import { useState,useEffect } from "react";
import axios from "axios";

const Overview = () => {

  
 const [totalIncome,settotalIncome]=useState([]);
 const [totalExpense,settotalExpense]=useState([]);

 useEffect(() => {
    // Fetch fee data
    axios
      .get("http://localhost:8000/fee")
      .then((response) => {
        if (Array.isArray(response.data)) {
          // Ensure that the response data is an array before setting the state
          settotalIncome(response.data);
        } else {
          console.error("Data from the API is not an array.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
      axios.get("http://localhost:8000/expense")
      .then((response) => {
        console.log(response.data)
        settotalExpense(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    
  }, []);

  let totalAmount = 0;
  let totalAmountextra = 0;
  let expensetotal=0;


  if (totalIncome) {
    // Calculate the total amount from totalIncome array using map and reduce
    totalAmount = totalIncome
      .map((amount) => parseFloat(amount.payment))
      .reduce((total, amount) => total + amount, 0);
     
     
  }
  if (totalIncome) {
    // Calculate the total amount from totalIncome array using map and reduce
    totalAmountextra = totalIncome.map((amount) => parseFloat(amount.additionalpayment))
      .reduce((total, amount) => total + amount, 0);
  }
 
  //additionalamount

  if (totalExpense) {
    // Calculate the total amount from totalIncome array using map and reduce
    expensetotal= totalExpense
      .map((amount) => parseFloat(amount.expense))
      .reduce((total, amount) => total + amount, 0);
  }


    // Calculate the total amount from totalIncome array

  

 
  











    return (
        <div className="bg-white dark:bg-white py-5 max-w-lg mx-auto flex mt-10">
        <div className="grid grid-cols-3 gap-4 mx-10">
            {/* Card 1: Due Amount */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-4">
                <div className="text-gray-700 dark:text-white font-semibold">Total Amount</div>
                <div className="text-3xl text-gray-900 dark:text-white">{totalAmount+totalAmountextra}<span className="text-lg ml-1">TK</span></div>
            </div>

            {/* Card 2: Total Income */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-4">
                <div className="text-gray-700 dark:text-white font-semibold">Due Income</div>
                <div className="text-3xl text-gray-900 dark:text-white">5,000<span className="text-lg ml-1">TK</span></div>
            </div>

            {/* Card 3: Add more cards here */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-4">
                <div className="text-gray-700 dark:text-white font-semibold">Expense</div>
                <div className="text-3xl text-gray-900 dark:text-white">{ expensetotal}<span className="text-lg ml-1">TK</span></div>
            </div>

            {/* Card 4: Add more cards here */}
            {/* <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-4">
                <div className="text-gray-700 dark:text-white font-semibold"></div>
                <div className="text-3xl text-gray-900 dark:text-white">$3,800</div>
            </div> */}
        </div>
    </div>
    );
};

export default Overview;