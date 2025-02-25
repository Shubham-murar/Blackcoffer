// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterBar from './components/FilterBar';
import Charts from './components/Charts'; // or however your chart is named

function App() {
  const [data, setData] = useState([]);

  // Fetch all data on initial load
  useEffect(() => {
    axios.get('https://dashboard-dcpd.onrender.com/api/data')
      .then(res => setData(res.data))
      .catch(err => console.error('Error fetching initial data:', err));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
      <FilterBar setData={setData} />
      <Charts data={data} />
    </div>
  );
}

export default App;
