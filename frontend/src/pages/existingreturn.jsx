import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Issueorreturnpage = () => {
  const [studentID, setStudentID] = useState('');
  const [action, setAction] = useState('');
  const navigate = useNavigate();

  const handleStudentIDChange = (e) => {
    setStudentID(e.target.value);
  };

  const handleActionChange = (e) => {
    setAction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === 'issue') {
      navigate('/issue-book');
    } else if (action === 'return') {
      navigate('/return-book');
    }
  };

  return (
    <div className="w-full h-screen font-sans bg-cover bg-landscape">
      <div className="container flex items-center justify-center flex-1 h-full mx-auto">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <div className="justify-between items-center max-w-sm p-10 m-auto rounded shadow-xl bg-white/25">
              <h2 className="mb-8 text-2xl font-light text-center text-white">Issue or Return</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-white">Student ID:</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    value={studentID}
                    onChange={handleStudentIDChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-white">Action:</label>
                  <select
                    className="w-full px-4 py-2 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    value={action}
                    onChange={handleActionChange}
                  >
                    <option value="" disabled>Select action</option>
                    <option value="issue">Issue</option>
                    <option value="return">Return</option>
                  </select>
                </div>
                <div className="flex items-center justify-center mt-4">
                  <button
                    type="submit"
                    className="py-2 px-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issueorreturnpage;