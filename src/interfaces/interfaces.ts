export interface IMeteorObject {
  [x: string]: any;
}

export interface IMeteorList {
  currentYear: string;
  yearChangedFromMass: boolean;
  basedOnYear: Array<Object>;
  basedOnMass: Array<Object>;
}
