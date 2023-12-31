import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [name,setname]=useState();
  const [email,setemail]=useState();
  const [password,setpassword]=useState();
  const [phonenumber,setphonenumber]=useState();

 const handleSubmit=(e)=>{

  e.preventDefault();
  axios.post('http://localhost:8000/signup',{name,email,password,phonenumber})
  .then(result=>{
    console.log(result);
    // navigate('/login');

  })
 



 }




    return (
       
        <div className="flex flex-col md:flex-row items-center justify-center md:h-screen mx-auto">
  
    <div className="w-full md:w-1/2 bg-white md:rounded-lg md:shadow dark:border md:mt-0  sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-[#6075e2] ">
        <h1 className="text-xl  font-bold leading-tight tracking-tight mt-1 pt-1 text-gray-900 md:text-2xl dark:text-white">
          Create Your account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-1" action="#">
        <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
            
              className=" sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name"
              required=""
                onChange={(e)=>setname(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Email
            </label>
            <input
              type="email"
            
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="mail@gmail.com"
              required=""
              onChange={(e)=>setemail(e.target.value)}
            />
          </div>
         
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
             
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-200 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              onChange={(e)=>setpassword(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="phone number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Phone number
            </label>
            <input
              type="text"
            
              placeholder= "Phone number"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              onChange={(e)=>setphonenumber(e.target.value)}
            />
          </div>
            <div className="flex justify-center mt-9">
          <button
            type="submit"
            className=" px-10  text-black hover:bg-primary-700 focus:ring-4 md:mx-3 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center hover:bg-indigo-500 hover:text-white dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Create an account
          </button>
          </div>
          <div className="mt-8">
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <button type='submit'><a
              href="#"
              className="font-medium text-white hover:underline dark:text-primary-500"
            >
              Login here
            </a>
            </button>
          </p>
          </div>
          <div className="mt-10">
          <p className="text-white flex justify-center ">------------OR------------</p>
          <span ><a className="text-white  flex justify-center" href="">Google icon</a></span>
          </div>
        </form>
      </div>
    </div>
  </div>
    );
};

export default SignUp;