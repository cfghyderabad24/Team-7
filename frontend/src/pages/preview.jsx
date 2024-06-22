import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Preview = () => {
  const [combinedData, setCombinedData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const isbn = queryParams.get('isbn');
  const timestamp = queryParams.get('timestamp');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch book data
        const bookResponse = await fetch(`/api/book-data?isbn=${isbn}`);
        const bookData = await bookResponse.json();

        // Fetch people data
        const peopleResponse = await fetch(`/api/people-data?isbn=${isbn}`);
        const peopleData = await peopleResponse.json();

        // Calculate due date
        const checkinDate = new Date(timestamp);
        const dueDate = new Date(checkinDate);
        dueDate.setDate(checkinDate.getDate() + 7);

        // Combine data
        const combinedData = {
          isbn,
          bookName: bookData.name,
          genre: bookData.genre,
          level: bookData.level,
          checkin: timestamp,
          dueDate: dueDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
          id: peopleData.id,
        };

        setCombinedData(combinedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [isbn, timestamp]);

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/checkin-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(combinedData),
      });

      if (response.ok) {
        navigate('/');
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="w-full h-screen font-sans bg-cover bg-landscape">
      <div className="container flex items-center justify-center flex-1 h-full mx-auto">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <div className="justify-between items-center max-w-sm p-10 m-auto rounded shadow-xl bg-white/25">
              <p className="mb-8 text-2xl font-light text-center text-black">
                Preview Check In
              </p>
              <table className="table-auto w-full text-left bg-white rounded-lg shadow-md">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Field</th>
                    <th className="px-4 py-2">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(combinedData).map(([key, value]) => (
                    <tr key={key}>
                      <td className="border px-4 py-2">{key}</td>
                      <td className="border px-4 py-2">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={handleSubmit}
                  className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
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

export default Preview;
