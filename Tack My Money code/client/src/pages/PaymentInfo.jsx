import {useState, useEffect } from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import axios from 'axios';

const PaymentInfo = () => {

  const [usersinfo,setUsersinfo]=useState([]);

   useEffect(()=>{

    axios.get("http://localhost:8000/addfee")
    .then(result=>{
      setUsersinfo(result.data);
      console.log(result);
       
    })
    .catch(err=>console.log(err));
   


   },[]);


   const [search,setSearch]=useState();

    return (
        <div>
            
            <Sidebar></Sidebar>
            <Navbar></Navbar>
            
            <div className="flex justify-center font-bold mt-10 text-indigo-500"><p>MEMBER INFORMATION</p></div>
       <div  className="flex items-center justify-center ml-1">     
    <label htmlFor="voice-search" className="sr-only">
      Search
    </label>
    <div className="relative ">
      <div className="flex absolute mr-8  inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <input
        type="text"
        id="voice-search"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
        placeholder="Search member by phone number"
        required="" 
        onChange={(e)=>{setSearch(e.target.value)}}
      />
       
    </div>
   
</div>
            <div className="  flex justify-center mt-10 ml-32 ">
            <>
  {/* Hello world */}
  
</>
  
  <table className="w-xs text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-white uppercase bg-indigo dark:bg-indigo-500 dark:text-white">
      <tr>
        <th scope="col" className="px-2 py-3">
         Name
        </th>
        <th scope="col" className="px-3 py-3">
         Phone Number
        </th>
        <th scope="col" className="px-1 py-3">
          Additional Fee
        </th>
        <th scope="col" className="px-1 py-3">
          Monthly Fee
        </th>
      
        <th scope="col" className="px-2 py-3">
         Date
        </th>
        <th scope="col" className="px-2 py-3">
         DueDate
        </th>
        
        {/* <th scope="col" className="px-2 py-3">
         Status
        </th> */}
        <th scope="col" className="px-1 py-3">
         Action
        </th>
      </tr>
    </thead>
    <tbody>
    {
            
               usersinfo.filter((userinfo)=>{
                return search === "" ? true : userinfo.phonenumber.toLowerCase().includes(search); //true means don't apply conditional 
                  
               }).map((userinfo)=>(
                <tr key={userinfo.email} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-1 py-2  text-white whitespace-nowrap dark:text-white" >{userinfo.name}</td>
                <td className="px-1 py-2  text-white whitespace-nowrap dark:text-white" >{userinfo.phonenumber}</td>
                <td className="px-1 py-2  text-white whitespace-nowrap dark:text-white" >{userinfo.payment}</td>
                <td className="px-1 py-2  text-white whitespace-nowrap dark:text-white" >{userinfo.additionalpayment}</td>
                <td className="px-1 py-2  text-white whitespace-nowrap dark:text-white" >{userinfo.paymentdate}</td>
                <td className="px-1 py-2  text-white whitespace-nowrap dark:text-white" >{userinfo.duedate}</td>
                  {/* <td className="px-1 py-2 bg-green-900 ">Paid</td> */}
                  <td ><button className="px-1 py-1 bg-gray-600 text-white cursor-pointer" >Update</button></td>
                </tr>



               ))


    }
    
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default PaymentInfo;