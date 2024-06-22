import React from 'react'
import logo from '../components/logo.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="w-full h-screen font-sans bg-white bg-landscape">
      <div className="container flex items-center justify-center flex-1 h-full mx-auto">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <div className="justify-between items-center max-w-sm p-10 m-auto rounded shadow-xl bg-white/25">

              <div className="flex justify-center mb-4">
                <img className="w-16 h-16" src={logo} alt="logo" />
              </div>
              <p className="mb-8 text-2xl font-light text-center text-white">
                Select
              </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                <Link to='/organizationlogin'>
                  Management
                </Link>
                </button>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                <Link to='/librarianlogin'>
                  Librarian
                </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero
