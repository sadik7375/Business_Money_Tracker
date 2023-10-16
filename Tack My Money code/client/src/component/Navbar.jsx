import React from 'react';
import sadikImage from './sadik.jpg'; // Import the image
import { RiCustomerService2Fill,RiNotification2Line } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
const Navbar = () => {
    return (
        <nav className="bg-indigo-500 py-5 max-w-xs fixed top-0 right-0">


            <div className="px-3 flex items-center justify-between mx-auto gap-x-4">
            <div className="group relative">
       <a href='#'><i className="text-2xl text-white group-hover:text-gray-900 transition duration-300 ease-in-out transform group-hover:scale-110">
            <MdNotifications/>
        </i></a> 
        <div className="hidden group-hover:block absolute top-0 right-full bg-white dark:bg-white p-1 rounded-md text-xs text-black transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            Notifications
        </div>
    </div>
    <div className="group relative">
    <a href='#'><i className="text-2xl text-white group-hover:text-gray-900 transition duration-300 ease-in-out transform group-hover:scale-110">
            <RiCustomerService2Fill/>
       </i></a> 
        <div className="hidden group-hover:block absolute top-0 right-full bg-white dark:bg-white p-1 rounded-md text-xs text-black transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            customer support
        </div>
    </div>
                {/* Your circular profile image */}
                {/* <div className="rounded-full overflow-hidden h-8 w-8">
                    <a href="" >
                        <img
                            src={sadikImage} // Use the imported image
                            alt="Your Profile"
                            className="h-full w-full object-cover"
                        />
                    </a>
                </div> */}
            </div>
        </nav>
    );
};

export default Navbar;
