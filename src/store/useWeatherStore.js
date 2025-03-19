import { create } from 'zustand';

const useWeatherStore = create((set) => ({
  city: '',
  recentSearches: [],
  setCity: (city) => {
    set((state) => {
      const cityExists = state.recentSearches.some((c) => c.toLowerCase() === city.toLowerCase());
      if (!cityExists) {
        const updatedSearches = [city, ...state.recentSearches.slice(0, 4)];
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
        return { city, recentSearches: updatedSearches };
      }
      return { city };
    });
  },
}));

export default useWeatherStore;