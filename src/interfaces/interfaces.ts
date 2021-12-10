export interface IMeteorObject {
  [x: string]: string;
}

export interface IMeteorList {
  currentYear: string;
  yearChangedFromMass: boolean;
  basedOnYear: Array<Object>;
  basedOnMass: Array<Object>;
}
