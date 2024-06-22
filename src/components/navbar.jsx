import React from 'react';
import logo from './logo.jpg';
import { useAuth } from '../auth/authcontext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {isAuthenticated,signout, isAdmin, Adminsignout }=useAuth()
  
  return (
    <div>
      <nav className="bg-white dark:bg-gray-800">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a className="flex-shrink-0" href="/">
                <img className="w-8 h-8" src={logo} alt="Workflow" />
              </a>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">

                  <p className="text-black dark:text-white">Room To Read Welcomes You!</p>
                </div>
              </div>
            </div>
            {isAuthenticated===true && isAdmin===false && (
              <div className="flex items-center ml-4 md:ml-6">
              <button onClick={()=>signout()} className="hidden md:inline-block ml-4 py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg focus:outline-none">
                Logout
              </button>
            </div>)}

            {isAuthenticated===false && isAdmin===true && (
              <div className="flex items-center ml-4 md:ml-6">
              <button onClick={()=>Adminsignout()} className="hidden md:inline-block ml-4 py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg focus:outline-none">
                Logout
              </button>
            </div>)}

            
            <div className="flex -mr-2 md:hidden">
              <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Home
            </a>
            <a
              className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Gallery
            </a>
            <a
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Content
            </a>
            <a
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Contact
            </a>
            <a
              className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Login
            </a>
            <a
              className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Logout
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
