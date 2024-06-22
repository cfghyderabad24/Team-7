import React, { useState } from 'react';

const Registrationpage = ({ onCancel, onSubmit }) => {
  const [studentName, setStudentName] = useState('');
  const [studentRollNo, setStudentRollNo] = useState('');
  const [grade, setGrade] = useState('');
  const [yearOfJoining, setYearOfJoining] = useState('');
  const [adhar, setAdhar] = useState(''); // State for Aadhaar number

  const handleSubmit = () => {
    const formData = {
      studentName,
      studentRollNo,
      grade,
      yearOfJoining,
      adhar, // Include Aadhaar number in the form data
    };
    onSubmit(formData); // Send form data to parent component
    // Optionally, you can clear the form fields here
    // setStudentName('');
    // setStudentRollNo('');
    // setGrade('');
    // setYearOfJoining('');
    // setAdhar('');
  };

  return (
    <div className="w-full h-screen font-sans bg-cover bg-landscape">
      <div className="container flex items-center justify-center flex-1 h-full mx-auto">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <div className="max-w-sm p-10 m-auto rounded shadow-xl bg-black/30">
              <h2 className="mb-8 text-2xl text-center text-black font-medium">Register</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="mb-4">
                  <label className="block text-black">Student Name:</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    style={{ borderColor: 'black' }}
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black">Roll No:</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    style={{ borderColor: 'black' }}
                    value={studentRollNo}
                    onChange={(e) => setStudentRollNo(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black">Grade:</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    style={{ borderColor: 'black' }}
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black">Year of Joining:</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    style={{ borderColor: 'black' }}
                    value={yearOfJoining}
                    onChange={(e) => setYearOfJoining(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black">Adhar:</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    style={{ borderColor: 'black' }}
                    value={adhar}
                    onChange={(e) => setAdhar(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center mt-4">
                <button
                  onClick={handleSubmit}
                  className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrationpage;
