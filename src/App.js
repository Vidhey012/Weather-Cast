import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useWeatherStore from './store/useWeatherStore';
import useThemeStore from './store/useThemeStore';
import Search from './components/Search';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import ThemeToggle from './components/ThemeToggle';
import RecentSearches from './components/RecentSearches';
import GeolocationButton from './components/GeolocationButton';
import UnitToggle from './components/UnitToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const queryClient = new QueryClient();

function App() {
  const city = useWeatherStore((state) => state.city);
  const theme = useThemeStore((state) => state.theme);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`app ${theme}`}>
        <div className="container">
          <br/>
          <br/>
          <h1 className="headingFont text-center mb-4 fluid">Weather Cast</h1>
          <br/>
          <Search />
          <div className="d-flex gap-2 mb-3">
            <GeolocationButton />
            <ThemeToggle /> 
            <UnitToggle /> 
          </div>
          <RecentSearches />
          {city && <Weather city={city} />}
          {city && <Forecast city={city} />}
          <br/>
          <br/>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;