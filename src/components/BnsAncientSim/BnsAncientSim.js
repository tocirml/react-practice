import React, { useState } from 'react';
import MainDisplay from './MainDisplay';
import MaterialDisplay from './MaterialDisplay';
import naSuccessRates from './naSuccessRates';
import upgradeableItems from './upgradeableItems';
import '../../styles/BnsAncientSim.scss';

const BnsAncientSim = () => {
  const [spentGold, setSpentGold] = useState(0);
  const [spentFusionStones, setSpentFusionStones] = useState(0);
  const [attemps, setAttemps] = useState(0);
  const [currentLevels, setCurrentLevels] = useState([...upgradeableItems]);
  const [currentClass, setCurrentClass] = useState('blademaster');

  const reset = () => {
    setCurrentLevels(
      currentLevels.map((item) => {
        return { ...item, level: 0 };
      })
    );
    setAttemps(0);
    setSpentGold(0);
    setSpentFusionStones(0);
  };

  const succeded = (level) => {
    let successChance = naSuccessRates[`level_${level}`].rate,
      roll = Math.random() * 100;
    if (roll < successChance) {
      return 'success';
    }
    return 'fail';
  };

  const updateSpentMaterials = (gold, fusionStones) => {
    setAttemps(attemps + 1);
    setSpentGold(spentGold + gold);
    setSpentFusionStones(spentFusionStones + fusionStones);
  };

  const upgradeItem = (itemType) => {
    let gear = currentLevels.find((item) => item.type === itemType),
      levelInfo = naSuccessRates[`level_${gear.level}`];

    if (succeded(gear.level) === 'success') {
      gear.level += 1;
    } else {
      gear.level = levelInfo.fail;
    }

    setCurrentLevels(
      currentLevels.map((item) => {
        if (item.type === itemType) {
          return { ...item, level: gear.level };
        }
        return item;
      })
    );

    updateSpentMaterials(levelInfo.gold, gear.level === 1 ? 50 : 5);
  };

  return (
    <div className="bns__container">
      <h1>Blade & Soul Ancient System Simulator</h1>
      <p>Test your luck and wallet!</p>
      <div className="bns__container_displays">
        <MaterialDisplay
          gold={spentGold}
          stones={spentFusionStones}
          trys={attemps}
        />
        <MainDisplay upgradeItem={upgradeItem} currentLevels={currentLevels} />
      </div>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset All
      </button>
    </div>
  );
};

export default BnsAncientSim;
