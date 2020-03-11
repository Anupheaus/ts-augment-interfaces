import { createProperties, HouseTypes } from 'ts-augment-interfaces-base';

createProperties({
  definitions: {
    houseOne: {
      type: 'house',
      houseType: HouseTypes.Detached,
      numberOfFloors: 3,
    }
  }
});
