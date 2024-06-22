import React, { useState } from 'react';

const Returnpage = ({ onCancel, onSubmit }) => {
  const [bookID, setBookID] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleBookIDChange = (e) => {
    setBookID(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit({ bookID, isbn, feedback });
  };

  return (
    <div className="w-full h-screen font-sans bg-cover bg-landscape">
      <div className="container flex items-center justify-center flex-1 h-full mx-auto">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <div className="justify-between items-center max-w-sm p-10 m-auto rounded shadow-xl bg-white/25">
              <h2 className="mb-8 text-2xl font-light text-center text-white">Return Book</h2>
              <div className="mb-4">
                <label className="block text-white">Book ID:</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  value={bookID}
                  onChange={handleBookIDChange}
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full px-4 py-2 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  placeholder="Feedback"
                  value={feedback}
                  onChange={handleFeedbackChange}
                  rows="4"
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={onCancel}
                  className="py-2 px-4 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="py-2 px-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returnpage;