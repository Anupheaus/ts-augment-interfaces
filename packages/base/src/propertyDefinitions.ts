export enum HouseTypes {
  Detached,
  EndTerraced,
  Terraced,
  SemiDetached,
}

export interface HousePropertyDefinition {
  type: 'house';
  numberOfFloors: number;
  houseType: HouseTypes;
}

export interface FlatPropertyDefinition {
  type: 'flat';
  floor: number;
}

export type PropertyDefinition = HousePropertyDefinition | FlatPropertyDefinition;
