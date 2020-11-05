import GearItem from './GearItem';

const GearDisplay = () => {
  return (
    <div className="gear-box">
      <div className="gear-box-weapon">
        <GearItem />
      </div>
      <div className="gear-box-accesories">
        <GearItem />
        <GearItem />
        <GearItem />
        <GearItem />
        <GearItem />
        <GearItem />
        <GearItem />
        <GearItem />
        <GearItem />
        <GearItem />
      </div>
    </div>
  );
};

export default GearDisplay;
