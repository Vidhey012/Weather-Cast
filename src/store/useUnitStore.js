import { create } from 'zustand';

const useUnitStore = create((set) => ({
  unit: 'celsius',
  toggleUnit: () => set((state) => ({ unit: state.unit === 'celsius' ? 'fahrenheit' : 'celsius' })), 
}));

export default useUnitStore;