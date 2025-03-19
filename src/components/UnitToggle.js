import useUnitStore from '../store/useUnitStore';
import { FaTemperatureLow, FaTemperatureHigh } from 'react-icons/fa';

const UnitToggle = () => {
  const { unit, toggleUnit } = useUnitStore();

  return (
    <button onClick={toggleUnit} className="btn btn-warning mb-3">
      {unit === 'celsius' ? (
        <>
          <FaTemperatureHigh size={16} /> F
        </>
      ) : (
        <>
          <FaTemperatureLow size={16} /> C
        </>
      )}
    </button>
  );
};

export default UnitToggle;