import React from 'react';
import { useNavigation } from '../../../context/NavigationContext';

const NavigationButtons = ({ section }) => {
  const { goToSection } = useNavigation();

  return (
    <button
      key={section.key}
      onClick={() => goToSection(`section-${section.key}`)}
      className="px-4 py-2 border border-gray-200 shadow-sm text-black rounded-full hover:bg-gray-100 hover:shadow-none transition-colors duration-200 text-base cursor-pointer bg-white"
    >
      {section.name}
    </button>
  );
};

export default NavigationButtons;
