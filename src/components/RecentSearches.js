import useWeatherStore from '../store/useWeatherStore';

const RecentSearches = () => {
  const recentSearches = useWeatherStore((state) => state.recentSearches);
  const setCity = useWeatherStore((state) => state.setCity);

  return (
    <div className="mb-4">
      <h4>Recent Searches</h4>
      {recentSearches.length > 0 ? (
        <ul className="list-group">
          {recentSearches.map((city, index) => (
            <li
              key={index}
              className="list-group-item list-group-item-action"
              onClick={() => setCity(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      ) : (
        <>
            <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                    No recent searches
                </li>
            </ul>
        </>
      )}
    </div>
  );
};

export default RecentSearches;