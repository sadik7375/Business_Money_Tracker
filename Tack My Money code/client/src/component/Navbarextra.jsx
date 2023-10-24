import React from 'react';
import { FaUserTie, FaRegCopy, FaMoneyBillAlt } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import { FcManager } from "react-icons/fc";
import { BiLogOut, BiHomeAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbarextra = () => {
  const navigate = useNavigate();

  function handleLogout() {
    axios.get("/logout")
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-indigo-500 shadow-lg h-14 border-b">
      <div className="flex items-center justify-between h-14">
        <div className='text-white shadow-inner font-semibold text-lg ml-5'>Track My Money</div>
        <ul className="flex space-x-4 mr-5">
          <li>
            <Link to="/" className="text-white hover:text-gray-800">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/addmember" className="text-white hover:text-gray-800">
              Add Member
            </Link>
          </li>
          <li>
            <Link to="/addfee" className="text-white hover:text-gray-800">
              Add Fee
            </Link>
          </li>
          <li>
            <Link to="/paymentinfo" className="text-white hover:text-gray-800">
              Payment Info
            </Link>
          </li>
          <li>
            <Link to="/expense" className="text-white hover:text-gray-800">
              Expense
            </Link>
          </li>
          <li>
            <a href="#" onClick={handleLogout} className="text-white hover:text-gray-800">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbarextra;
