import React from 'react';
import ClassImage from './ClassImage';
import GearDisplay from './GearDisplay';
import naSuccessRates from './naSuccessRates';

const MainDisplay = ({ updateMaterials, currentLevel }) => {
  return (
    <div className="bns__main-display">
      <ClassImage />
      <GearDisplay />
    </div>
  );
};

export default MainDisplay;
