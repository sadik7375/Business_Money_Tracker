import React from 'react';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';

const AddMember = () => {
    return (
         
        <div>
            <Navbar></Navbar>
             <Sidebar></Sidebar>
            <div className="flex flex-col md:flex-row items-center justify-center md:h-screen mx-auto">
        
        <div className="w-full md:w-1/2 bg-white  md:rounded-lg md:shadow dark:border md:mt-0  sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-6 md:space-y-3  sm:p-8 shadow-orange-50  bg-gray-800 ">
            <h1 className="text-xl  font-bold leading-tight tracking-tight mt-1 pt-1  md:text-2xl text-white">
              MEMBER REGISTRATION
            </h1>
            <form className="space-y-3 md:space-y-1" action="#">
            
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                Name
                </label>
                <input
                  type="email"
                
                  className="bg-gray-50 border border-gray-300 text-black-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text- dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                Phone Number
                </label>
                <input
                  type="email"
                
                  className="bg-gray-50 border border-gray-300 text-black-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text- dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Phone Number"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                Additional fee
                </label>
                <input
                  type="email"
                
                  className="bg-gray-50 border border-gray-300 text-black-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text- dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Addmission Fee or others"
                  required=""
                />
              </div>
             
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date
                </label>
                <input
                  type="date"
                 
                  placeholder="data"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2  dark:text-black dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
            
              <div className='mt-5 flex justify-center'>
              <button
                type="submit"
                className=" w-100 pt-2 px-20 font-bold-medium text-black hover:bg-indigo-500 hover:text-white focus:ring-4 md:mx-3 focus:outline-none focus:ring-primary-300 font-lg rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Add new Member
              </button>
              </div>
              {/* <p className="text-white flex justify-center">------------OR------------</p>
          <span ><a className="text-white  flex justify-center" href="">Google icon</a></span> */}
    
            
    
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AddMember;