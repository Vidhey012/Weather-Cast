import { useState } from 'react';
import useWeatherStore from '../store/useWeatherStore';

const Search = () => {
  const [input, setInput] = useState('');
  const setCity = useWeatherStore((state) => state.setCity);

  const handleSearch = (e) => {
    e.preventDefault();
    setCity(input);
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter city name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-control search-input"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;