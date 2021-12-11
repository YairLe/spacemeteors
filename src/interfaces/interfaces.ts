export interface IMeteorObject {
  [x: string]: any;
}

export interface IMeteorList {
  currentYear: string;
  basedOnYear: Array<Object>;
  basedOnMass: Array<Object>;
  currentMass: string;
}
