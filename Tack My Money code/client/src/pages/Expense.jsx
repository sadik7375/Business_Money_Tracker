import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Expense = () => {
    const [description,setDescription]=useState();
    const [expense,setexpense]=useState();
    const [date,setDate]=useState();
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
      e.preventDefault();
   
      axios.post('http://localhost:8000/addexpense',{description,expense,date})
      .then(result=>{
        console.log(result);
        console.log(description)
        console.log(expense)
        console.log(date)
        
      //   setDescription('');
      // setexpenseAmount('');
      // setDate('');
      navigate('/');


      })
  
        .catch(err=>{console.log(err)});
        
    }

    return (
        <div>
            <p>Expense</p>
            <Sidebar></Sidebar>
            <Navbar></Navbar>
            <div className="min-w-screen min-h-screen bg-white flex items-center justify-center px-4 pb-10 pt-1">
    <div
      className="w- mx-auto rounded-lg  bg-gray-800  shadow-lg p-5 text-gray-700  pr-8"
      style={{ maxWidth: 500 }}
>
   
      <div className="mb-5">
        <h1 className="text-center text-white font-bold text-xl uppercase">
          Add Expenses
        </h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}  >
      <div className="mb-3 flex -mx-2">
        <div className="px-2">
      
        </div>
        <div className="px-2">
      
        </div>
      </div>
     
      <div className="mb-3">
        <label className="font-bold text-white text-sm mb-2 ml-1">Description </label>
        <div>
          <input
            className="w-full px-2 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="Full name"
            type="text"
            onChange={(e)=>setDescription(e.target.value)}
          />
        </div>
      </div>
    
      
        <label className="font-bold text-white text-sm mb-2 ml-1">Expenses Amount</label>
        <div>
          <input
            className="w-64 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="Expense"
            type="text"
            onChange={(e)=>setexpense(e.target.value)}
          />
        </div>
        <div className="mb-3 -mx-2 flex items-end">
        <div className="px-2 w-1/2">
          <label className="font-bold text-white text-sm mb-2 ml-1">Date</label>
          <div>
          <input
            className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder=""
            type="Date"
            onChange={(e)=>setDate(e.target.value)}
          />
          </div>
       
        </div>
      
      </div>
    
      <div>
        <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
          <i className="mdi mdi-lock-outline mr-1" /> Add Expense
        </button>
      </div>
     
      </form>
      
     
    </div>
  </div>


        </div>
        
        </div>
     
    );
};

export default Expense;