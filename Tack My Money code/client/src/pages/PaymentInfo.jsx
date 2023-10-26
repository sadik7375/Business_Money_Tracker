import React, { useState, useEffect } from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import { AiFillDelete } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import axios from 'axios';
import { Link } from 'react-router-dom';

const itemsPerPage = 10; // Number of items to display per page

const PaymentInfo = () => {
  const [usersinfo, setUsersinfo] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  //when app com. render the useeffect call..when you add fee this useeffect call automatically
  //addfee occurs sideeffect
  useEffect(() => {
    axios.get("http://localhost:8000/addfee")
      .then(result => {
        setUsersinfo(result.data);
        console.log(result);
      })
      .catch(err => console.log(err));
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(usersinfo.length / itemsPerPage);

  // Get the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = usersinfo.slice(startIndex, endIndex);

const handleDelete=(id)=>{

  console.log(id);
  axios.delete(`http://localhost:8000/deletememberinfo/${id}`)
  .then(res=>{
    window.location.reload();
    console.log(res);
  })
  .catch(err=>console.log(err));



}

const updateDueStatus = () => {
  const currentDate = new Date();

  // Update the status for each member in your state
  const updatedUsersInfo = usersinfo.map((userinfo) => {
    const dueDate = new Date(userinfo.duedate);

    // Check if the due date has passed
    if (dueDate < currentDate) {
      return {
        ...userinfo,
        status: 'Due',
      };
    } else {
      return {
        ...userinfo,
        status: 'Paid',
      };
    }
  });

  // Update the state with the new status
  setUsersinfo(updatedUsersInfo);
};
useEffect(() => {
  updateDueStatus(); // Initial update
  const intervalId = setInterval(updateDueStatus, 24 * 60 * 60 * 1000); // Update every 24 hours

  return () => {
    clearInterval(intervalId); // Clean up the interval when the component unmounts
  };
}, []);

  return (
    <div>
      <Navbar></Navbar>

      <div className="flex justify-center font-bold mt-10 text-indigo-500"><p>MEMBER INFORMATION</p></div>
      <div className="flex items-center justify-center ml-1">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="flex absolute mr-8 inset-y-0 left-0 items-center pl-3 pointer-events-none">
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
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex justify-center mt-10 ml-32">
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
              Monthly Fee
              </th>
              <th scope="col" className="px-1 py-3">
               
                Additional Fee
              </th>
              <th scope="col" className="px-2 py-3">
                Date
              </th>
              <th scope="col" className="px-2 py-3">
                DueDate
              </th>
              <th scope="col" className="px-2 py-3">
               Status
              </th>
              <th scope="col" className="px-1 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            
            {currentItems //method chain .filter().map()
              .filter((userinfo) => {
                return search === "" || userinfo.phonenumber.toLowerCase().includes(search);
              })
              .map((userinfo) => (
                <tr key={userinfo._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-1 py-2 text-white whitespace-nowrap dark:text-white">{userinfo.name}</td>
                  <td className="px-1 py-2 text-white whitespace-nowrap dark:text-white">{userinfo.phonenumber}</td>
                  <td className="px-1 py-2 text-white whitespace-nowrap dark:text-white">{userinfo.payment}</td>
                  <td className="px-1 py-2 text-white whitespace-nowrap dark-text-white">{userinfo.additionalpayment}</td>
                  <td className="px-1 py-2 text-white whitespace-nowrap dark-text-white">{userinfo.paymentdate}</td>
                  <td className="px-1 py-2 text-white whitespace-nowrap dark-text-white">{userinfo.duedate}</td>
                  <td className="px-1 py-2 text-white whitespace-nowrap dark:text-white bg-green-600">{userinfo.status}  </td>
                  <td className='flex justify-between bg-white'>
                    <button onClick={(e)=>handleDelete(userinfo._id)} className="px-1 py-1 pb-1 bg-red-500 rounded-lg text-white cursor-pointer text-sm">
                      <AiFillDelete/>
                    </button>
                    <Link to={`/updateinfo/${userinfo._id}`}  className="px-1 py-1 pb-1 bg-green-600 rounded-lg text-sm cursor-pointer text-white ">
                      <GrUpdate/>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
                 
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 cursor-pointer rounded-full ${currentPage === index + 1 ? 'bg-indigo-500 text-white' : 'text-indigo-500 hover:bg-indigo-100'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
