import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentOptions = () => {
  const navigate = useNavigate();

  const handleExistingClick = () => {
    navigate('/checkin'); // Navigate to '/checkin' path
  };

  const handleNewRegistrationClick = () => {
    navigate('/newreg'); // Navigate to '/newreg' path
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Options</h2>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handleExistingClick}
            className="bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full py-2 px-4 rounded-lg shadow-md transition ease-in duration-200 focus:outline-none"
          >
            Existing Student
          </button>
          <button
            onClick={handleNewRegistrationClick}
            className="bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full py-2 px-4 rounded-lg shadow-md transition ease-in duration-200 focus:outline-none"
          >
            New Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentOptions;
