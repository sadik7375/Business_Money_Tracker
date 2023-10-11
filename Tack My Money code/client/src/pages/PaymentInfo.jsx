import React from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';

const PaymentInfo = () => {
    return (
        <div>
            
            <Sidebar></Sidebar>
            <Navbar></Navbar>
            
            <div className="flex justify-center font-bold mt-10 text-indigo-500"><p>MEMBER INFORMATION</p></div>
            <div className="  flex justify-center mt-10 ml-32 ">
                
  <table className="w-xs text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-white uppercase bg-indigo dark:bg-indigo-500 dark:text-white">
      <tr>
        <th scope="col" className="px-3 py-3">
         Name
        </th>
        <th scope="col" className="px-3 py-3">
         Phone Number
        </th>
        <th scope="col" className="px-3 py-3">
          Additional fee
        </th>
        <th scope="col" className="px-3 py-3">
         Date
        </th>
        <th scope="col" className="px-3 py-3">
         Status
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          wahid sadik
        </th>
        <td className="px-3 py-2  text-white whitespace-nowrap dark:text-white" >01701737576</td>
        <td className="px-3 py-2  text-white whitespace-nowrap dark:text-white">1000</td>
        <td className="px-3 py-2  text-white whitespace-nowrap dark:text-white">12.10.2023</td>
        <td className="px-3 py-2 bg-green-900 ">Paid</td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Abdul sadik
        </th>
        <td className="px-3 py-2  text-white whitespace-nowrap dark:text-white">01975010820</td>
        <td className="px-3 py-2  text-white whitespace-nowrap dark:text-white">700</td>
        <td className="px-3 py-2  text-white whitespace-nowrap dark:text-white">13.10.2023</td>
        <td className="px-3 py-2  bg-red-900">Due</td>
      </tr>
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default PaymentInfo;