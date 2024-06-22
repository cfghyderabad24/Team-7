// CheckIn.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../components/logo.jpg'; // Adjust the path as necessary

const CheckIn = () => {
  const [isbn, setIsbn] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const currentTimestamp = new Date().toLocaleString();
    setTimestamp(currentTimestamp);
  }, []);

  const handleIsbnChange = (event) => {
    setIsbn(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/preview?isbn=${isbn}&timestamp=${encodeURIComponent(timestamp)}`);
  };

  return (
    <div className="w-full h-screen font-sans bg-cover bg-landscape">
      <div className="container flex items-center justify-center flex-1 h-full mx-auto">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form onSubmit={handleSubmit} className="justify-between items-center max-w-sm p-10 m-auto rounded shadow-xl bg-white/25">
              <div className="flex justify-center mb-4">
                <img className="w-16 h-16" src={logo} alt="logo" />
              </div>
              <p className="mb-8 text-2xl font-light text-center text-white">
                Check In
              </p>
              <div className="mb-2">
                <div className="relative">
                  <input
                    type="text"
                    value={isbn}
                    onChange={handleIsbnChange}
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="ISBN Code"
                    required
                  />
                </div>
              </div>
              <div className="mb-2">
                <div className="relative">
                  <input
                    type="text"
                    value={timestamp}
                    readOnly
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-200 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Timestamp"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  type="submit"
                  className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckIn;
