import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Analytics = () => {
  const [timePeriod, setTimePeriod] = useState('week');
  const [progressData, setProgressData] = useState({ labels: [], datasets: [] });
  const [totalBooks, setTotalBooks] = useState(0);
  const [issuedBooks, setIssuedBooks] = useState(0);
  const [genrePreferences, setGenrePreferences] = useState({ labels: [], datasets: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [timePeriod]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [progressResponse, totalBooksResponse, issuedBooksResponse, genrePreferencesResponse] = await Promise.all([
        axios.get(`/api/progress?period=${timePeriod}`),
        axios.get('/api/books/total'),
        axios.get('/api/books/issued'),
        axios.get(`/api/genres?period=${timePeriod}`)
      ]);

      setProgressData(formatChartData(progressResponse.data, 'Books Checked Out'));
      setTotalBooks(totalBooksResponse.data.total);
      setIssuedBooks(issuedBooksResponse.data.issued);
      setGenrePreferences(formatChartData(genrePreferencesResponse.data, 'Books of This Genre Checked Out'));
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatChartData = (data, label) => {
    if (!Array.isArray(data)) {
      console.error('Expected data to be an array but got:', data);
      return { labels: [], datasets: [] };
    }

    return {
      labels: data.map(item => item.date), // Assuming your data has a date field
      datasets: [
        {
          label,
          data: data.map(item => item.count), // Assuming your data has a count field
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    };
  };

  const handleTimePeriodChange = (e) => {
    setTimePeriod(e.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Progress Line</h2>
        <Line data={progressData} options={{ responsive: true, plugins: { tooltip: { callbacks: { label: (tooltipItem) => `${tooltipItem.raw} books checked out` } } } }} />
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Total Books</h2>
        <p>Total Books: {totalBooks}</p>
        <p>Issued Books: {issuedBooks}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Genre Preferences</h2>
        <Line data={genrePreferences} options={{ responsive: true, plugins: { tooltip: { callbacks: { label: (tooltipItem) => `${tooltipItem.raw} books of this genre checked out` } } } }} />
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <label htmlFor="timePeriod" className="block text-sm font-medium text-gray-700 mb-2">
          Select Time Period
        </label>
        <select
          id="timePeriod"
          value={timePeriod}
          onChange={handleTimePeriodChange}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </div>
    </div>
  );
};

export default Analytics;
