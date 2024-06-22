import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../components/logo.jpg';
import { useAuth } from '../auth/authcontext';

const Enterdetailsorg = () => {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const { Adminsignin } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userid === "adminsignin" && password === "12345") {
      setUserId('');
      setPassword('');
      Adminsignin();
      navigate('/checkin'); // Redirect to /checkin after login
    }
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
              <p className="mb-8 text-2xl font-light text-center text-black">
                Organization Login
              </p>
              <div className="mb-2">
                <div className="relative">
                  <input
                    type="text"
                    value={userid}
                    onChange={(e) => setUserId(e.target.value)}
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="User Id"
                  />
                </div>
              </div>
              <div className="mb-2">
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  type="submit"
                  className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  Validate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterdetailsorg;
