import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddFee = () => {
  const navigate = useNavigate();
  const [name,setName]=useState();
  const [phonenumber,setPhoneNumber]=useState();
  const [payment,setPayment]=useState();
  const [additionalpayment,setAdditionalPayment]=useState();
  const [paymentdate,setPayDate]=useState();
  const [duedate,setDueDate]=useState();

   
  const handleSubmit=(e)=>{
    console.log("hello sadik");
    e.preventDefault();
    axios.post('http://localhost:8000/addfee',{name,phonenumber,payment,additionalpayment,paymentdate,duedate})
    .then(result=>{
      console.log(result);
      navigate('/');
    })

      .catch(err=>{console.log(err)});


  }




    return (
    <div>
         <Navbar></Navbar>
        <Sidebar></Sidebar>
        <>
  <div className="min-w-screen min-h-screen bg-white flex items-center justify-center px-7 pb-20 pt-16">
    <div
      className="w-80 mx-auto rounded-lg  bg-gray-800  shadow-lg p-5 text-gray-700  pr-8"
      style={{ maxWidth: 500 }}
    >
   
      <div className="mb-10">
        <h1 className="text-center text-white font-bold text-xl uppercase">
          payment info
        </h1>
      </div>
      <div className="mb-3 flex -mx-2">
        <div className="px-2">
      
        </div>
        <div className="px-2">
      
        </div>
      </div>
      <form onSubmit={handleSubmit}  >
      <div className="mb-3">
        <label className="font-bold text-white text-sm mb-2 ml-1">Name </label>
        <div>
          <input
            className="w-64 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="Full name"
            type="text"
            onChange={(e)=>{setName(e.target.value);}}
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="font-bold text-white text-sm mb-2 ml-1">Phone Number</label>
        <div>
          <input
            className="w-64 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="phone number work user id"
            type="text"
            onChange={(e)=>{setPhoneNumber(e.target.value);}}
          />
        </div>
      </div>
      <div className="mb-10">
        <label className="font-bold text-white text-sm mb-2 ml-1">Payment Amount</label>
        <div>
          <input
            className="w-64 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="Fee"
            type="text"
            onChange={(e)=>{setPayment(e.target.value);}}
          />
        </div>
        <label className="font-bold text-white text-sm mb-2 ml-1">Additional Fee</label>
        <div>
          <input
            className="w-64 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="Admission or others fee"
            type="text"
            onChange={(e)=>{setAdditionalPayment(e.target.value);}}
          />
        </div>
        <div className="mb-3 -mx-2 flex items-end">
        <div className="px-2 w-1/2">
          <label className="font-bold text-white text-sm mb-2 ml-1">Payment date</label>
          <div>
          <input
            className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder=""
            type="Date"
            onChange={(e)=>{setPayDate(e.target.value);}}
          />
          </div>
          <div className="mb-3 -mx-2 flex items-end">
        <div className="px-2 w-1/2">
          <label className="font-bold text-white text-sm mb-2 ml-1">Due date</label>
          <div>
          <input
            className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder=""
            type="Date"
            onChange={(e)=>{setDueDate(e.target.value);}}
          />
          </div>
        </div>
      
      </div>
        </div>
      
      </div>
    
      </div>
      <div>
        <button type='submit' className="block cursor-pointer w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
          <i className="mdi mdi-lock-outline mr-1" /> Add Payment
        </button>
      </div>
      </form>
  
      
    
    </div>
  </div>
  
  <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
   
  </div>
</>

    </div>
    );
};

export default AddFee;