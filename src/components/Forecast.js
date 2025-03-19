import { useQuery } from '@tanstack/react-query';
import { fetchForecast } from '../api/weather';
import useUnitStore from '../store/useUnitStore'; 

const Forecast = ({ city }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['forecast', city],
    queryFn: () => fetchForecast(city),
    enabled: !!city,
  });

  const { unit } = useUnitStore(); 

  if (isLoading) return <div className="text-center">Loading forecast...</div>;
  if (error) return <div className="alert alert-danger">{error.message}</div>;

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const convertTemperature = (temp) => {
    return unit === 'celsius' ? temp : (temp * 9) / 5 + 32;
  };

  const uniqueDates = [];
  const filteredData = data.list.filter((item) => {
    const date = formatDate(item.dt);
    if (!uniqueDates.includes(date)) {
      uniqueDates.push(date);
      return true;
    }
    return false;
  }).slice(0, 4);

  return (
    <div className="mt-4">
      <h3 className="text-center mb-3">4-Day Forecast</h3>
      <div className="row">
        {filteredData.map((item, index) => (
          <div key={index} className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{formatDate(item.dt)}</h5>
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt="Weather Icon"
                />
                <p className="card-text">
                  {Math.round(convertTemperature(item.main.temp))}°{unit === 'celsius' ? 'C' : 'F'}
                </p>
                <p className="card-text">{item.weather[0].description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;