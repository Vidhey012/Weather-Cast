import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from '../api/weather';
import useUnitStore from '../store/useUnitStore';

const Weather = ({ city }) => {
  const { unit } = useUnitStore();
  const { data, isLoading, error } = useQuery({
    queryKey: ['weather', city],
    queryFn: () => fetchWeather(city),
    enabled: !!city,
  });

  if (isLoading) return <div className="text-center">Loading weather...</div>;
  if (error) return <div className="alert alert-danger">{error.message}</div>;

  const temperature = unit === 'celsius' ? data.main.temp : (data.main.temp * 9) / 5 + 32;

  return (
    <div className="card mb-4">
      <div className="card-body text-center">
        <h2 className="card-title">{data.name}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="Weather Icon"
        />
        <p className="display-4">{Math.round(temperature)}°{unit === 'celsius' ? 'C' : 'F'}</p>
        <p className="lead">{data.weather[0].description}</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind Speed: {data.wind.speed} m/s</p>
        <p>Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
        <p>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default Weather;