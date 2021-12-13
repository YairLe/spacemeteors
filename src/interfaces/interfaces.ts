export interface IMeteorObject {
  [x: string]: any;
}

export interface IMeteorsListWithoutAllMeteors {
  currentYear: string;
  basedOnYear: Array<Object>;
  basedOnMass: Array<Object>;
  currentMass: string;
}

export interface IMeteorList extends IMeteorsListWithoutAllMeteors {
  allMeteors: Array<Object>;

}
