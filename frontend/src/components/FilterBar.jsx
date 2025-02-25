import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FilterBar.css';

const FilterBar = ({ setData }) => {
  const [distinctValues, setDistinctValues] = useState({
    end_year: [],
    topic: [],
    sector: [],
    region: [],
    pestle: [],
    source: [],
    swot: [],
    country: [],
    city: []
  });

  const [filters, setFilters] = useState({
    end_year: '',
    topic: '',
    sector: '',
    region: '',
    pestle: '',
    source: '',
    swot: '',
    country: '',
    city: ''
  });
https://dashboard-dcpd.onrender.com/api/data
  useEffect(() => {
    axios
      .get('https://dashboard-dcpd.onrender.com/api/distinct_values')
      .then((response) => {
        setDistinctValues({
          // Filter out years greater than 2020 and sort descending
          end_year: response.data.end_year
            .filter(year => Number(year) <= 2020)
            .sort((a, b) => b - a),
          topic: response.data.topic.sort(),
          sector: response.data.sector.sort(),
          // Standardize "world" to "World" and remove duplicates
          region: Array.from(new Set(response.data.region.map(r => r.toLowerCase() === 'world' ? 'World' : r))).sort(),
          pestle: response.data.pestle.sort(),
          source: response.data.source.sort(),
          swot: response.data.swot.sort(),
          country: response.data.country.sort(),
          city: response.data.city.sort()
        });
      })
      .catch((error) => console.error('Error fetching distinct values:', error));
  }, []);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const applyFilters = async () => {
    try {
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value.trim() !== '') {
          params.append(key, value.trim());
        }
      });

      const response = await axios.get(`http://127.0.0.1:5000/api/data?${params.toString()}`);
      setData(response.data);
    } catch (err) {
      console.error('Error fetching filtered data:', err);
    }
  };

  const resetFilters = async () => {
    setFilters({
      end_year: '',
      topic: '',
      sector: '',
      region: '',
      pestle: '',
      source: '',
      swot: '',
      country: '',
      city: ''
    });
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/data');
      setData(response.data);
    } catch (err) {
      console.error('Error resetting data:', err);
    }
  };

  return (
    <div className="filter-bar-container">
      <div className="filter-item">
        <label>End Year</label>
        <select name="end_year" value={filters.end_year} onChange={handleChange}>
          <option value="">--Select--</option>
          {distinctValues.end_year.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label>Topic</label>
        <select name="topic" value={filters.topic} onChange={handleChange}>
          <option value="">--Select--</option>
          {distinctValues.topic.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label>Sector</label>
        <select name="sector" value={filters.sector} onChange={handleChange}>
          <option value="">--Select--</option>
          {distinctValues.sector.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label>Region</label>
        <select name="region" value={filters.region} onChange={handleChange}>
          <option value="">--Select--</option>
          {distinctValues.region.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label>PESTLE</label>
        <select name="pestle" value={filters.pestle} onChange={handleChange}>
          <option value="">--Select--</option>
          {distinctValues.pestle.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label>Source</label>
        <select name="source" value={filters.source} onChange={handleChange}>
          <option value="">--Select--</option>
          {distinctValues.source.map((src) => (
            <option key={src} value={src}>
              {src}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label>SWOT</label>
        <select name="swot" value={filters.swot} onChange={handleChange}>
          <option value="">--Select--</option>
          {distinctValues.swot.map((sw) => (
            <option key={sw} value={sw}>
              {sw}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label>Country</label>
        <select name="country" value={filters.country} onChange={handleChange}>
          <option value="">--Select--</option>
          {distinctValues.country.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label>City</label>
        <select name="city" value={filters.city} onChange={handleChange}>
          <option value="">--Select--</option>
          {distinctValues.city.map((ct) => (
            <option key={ct} value={ct}>
              {ct}
            </option>
          ))}
        </select>
      </div>

      <div className="button-group">
        <button onClick={applyFilters}>Apply Filters</button>
        <button onClick={resetFilters}>Reset Filters</button>
      </div>
    </div>
  );
};

export default FilterBar;
