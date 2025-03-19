import useWeatherStore from '../store/useWeatherStore';
import { fetchWeatherByCoords } from '../api/weather';
import { FaPeriscope } from 'react-icons/fa';

const GeolocationButton = () => {
  const setCity = useWeatherStore((state) => state.setCity);

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoords(latitude, longitude).then((data) => {
            setCity(data.name);
          });
        },
        (error) => {
          console.error('Geolocation Error:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <button onClick={handleLocationClick} className="btn btn-info mb-3">
      <FaPeriscope size={16} /> Current Location
    </button>
  );
};

export default GeolocationButton;