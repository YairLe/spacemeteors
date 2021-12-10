import { IMeteorList, IMeteorObject } from "../interfaces/interfaces";
import meteorData from "../meteorsdata.json";

export const meteorDateConverterToYear = (meteorDate: string) => {
  return "" + new Date(meteorDate).getFullYear();
};

export const adjustedSelectedYear = (pickedYear: string) => {
  const filteredMeteorsByYear = meteorData.filter((meteorObject) => {
    const meteorDate = meteorDateConverterToYear(meteorObject.year as string);
    return meteorDate === pickedYear;
  });
  return filteredMeteorsByYear;
};

export const newMeteorYearAdjustments = (
  massValue: string,
  foundMeteor: IMeteorObject
) => {
  const currentYear = meteorDateConverterToYear(foundMeteor.year as string);
  const newMeteorsFromDate = adjustedSelectedYear(currentYear);
  const newMeteorsFromMass = adjustedSelectedMass(
    massValue,
    newMeteorsFromDate,
    currentYear,
    true
  );

  const meteorListObject: IMeteorList = {
    yearChangedFromMass: true,
    basedOnYear: newMeteorsFromDate,
    basedOnMass: newMeteorsFromMass ? newMeteorsFromMass.basedOnMass : [{}],
    currentYear: currentYear,
  };

  return meteorListObject;
};

export const adjustedSelectedMass = (
  massValue: string,
  meteorListByYear: IMeteorObject[],
  meteorYear: string,
  meteorChangedFromMass: boolean
) => {
  const filteredMeteorsByMass = meteorListByYear.filter(
    (meteorObject: IMeteorObject) => {
      return meteorObject.mass && +meteorObject.mass > +massValue;
    }
  );

  let currentYear = meteorYear;
  if (filteredMeteorsByMass.length === 0) {
    alert(
      `the mass was not found, jumping to first-year where there is a mass that fits the criteria`
    );
    const newMeteorForMass = meteorData.find((meteorObject) => {
      return meteorObject.mass && +meteorObject.mass > +massValue;
    });

    if (newMeteorForMass) {
      return newMeteorYearAdjustments(massValue, newMeteorForMass);
    } else {
      alert(
        `unable to find any mass in any year that fits the criteria, try to adjust the mass`
      );
      return;
    }
  }
  const meteorListObject = {
    yearChangedFromMass: meteorChangedFromMass,
    basedOnYear: meteorListByYear,
    basedOnMass: filteredMeteorsByMass,
    currentYear: currentYear,
  };
  return meteorListObject;
};
