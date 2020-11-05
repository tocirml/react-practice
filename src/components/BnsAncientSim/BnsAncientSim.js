import React, { useState } from 'react';
import MainDisplay from './MainDisplay';
import MaterialDisplay from './MaterialDisplay';
import naSuccessRates from './naSuccessRates';
import '../../styles/BnsAncientSim.scss';

const BnsAncientSim = () => {
  const [spentGold, setSpentGold] = useState(0);
  const [spentFusionStones, setSpentFusionStones] = useState(0);
  const [attemps, setAttemps] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentClass, setCurrentClass] = useState('blademaster');

  const updateSpentMaterials = (goldUsed, fusionStonesUsed) => {
    console.log(naSuccessRates[`level_${currentLevel}`].gold);
    console.log(naSuccessRates['level_10']);
    setAttemps(attemps + 1);
    setSpentGold(spentGold + goldUsed);
    setSpentFusionStones(spentFusionStones + fusionStonesUsed);
  };

  return (
    <div className="bns__container">
      <h1>Blade & Soul Ancient System Simulator</h1>
      <p>Test your luck!</p>
      <div className="bns__container_displays">
        <MaterialDisplay
          gold={spentGold}
          stones={spentFusionStones}
          trys={attemps}
        />
        <MainDisplay
          updateMaterials={updateSpentMaterials}
          currentLevel={currentLevel}
        />
      </div>
    </div>
  );
};

export default BnsAncientSim;
