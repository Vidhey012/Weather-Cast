import useThemeStore from '../store/useThemeStore';
import { FaSun, FaMoon } from 'react-icons/fa'; 

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button onClick={toggleTheme} className="btn btn-secondary mb-3">
      {theme === 'light' ? <><FaMoon size={16} /> Dark Mode</> : <><FaSun size={16} /> Light Mode</>}
    </button>
  );
};

export default ThemeToggle;