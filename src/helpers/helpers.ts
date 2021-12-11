import { IMeteorList, IMeteorObject } from "../interfaces/interfaces";
import meteorData from "../meteorsdata.json";

export const meteorDateConverterToYear = (meteorDate: string) => {
  return "" + new Date(meteorDate).getFullYear();
};

export const returnMeteorsFilteredByYear = (pickedYear: string) => {
  const filteredMeteorsByYear = meteorData.filter((meteorObject) => {
    const meteorDate = meteorDateConverterToYear(meteorObject.year as string);
    return meteorDate === pickedYear;
  });
  return filteredMeteorsByYear;
};

export const returnMeteorsFilteredByMass = (
  meteorListToFilter: IMeteorObject[],
  massValue: string
) => {
  const filteredMeteorsByMass = meteorListToFilter.filter(
    (meteorObject: IMeteorObject) => {
      return meteorObject.mass && +meteorObject.mass > +massValue;
    }
  );
  return filteredMeteorsByMass;
};

export const returnFirstMeteorsForMass = (massValue: string) => {
  const foundNewMeteorForMass = meteorData.find((meteorObject) => {
    return meteorObject.mass && +meteorObject.mass > +massValue;
  });
  return foundNewMeteorForMass;
};

export const adjustedSelectedMass = (
  massValue: string,
  meteorListByYear: IMeteorObject[],
  meteorYear: string
) => {
  const filteredMeteorsByMass = returnMeteorsFilteredByMass(
    meteorListByYear,
    massValue
  );
  if (filteredMeteorsByMass.length > 0) {
    const meteorListObject = {
      basedOnYear: meteorListByYear,
      basedOnMass: filteredMeteorsByMass,
      currentYear: meteorYear,
      currentMass: massValue,
    };
    return meteorListObject;
  }

  const filteredMassNotFoundMessage = `the mass was not found (mass:${massValue}), jumping to first-year where there is a mass that fits the criteria`;

  alert(filteredMassNotFoundMessage);

  const newFirstMeteorsForMass = returnFirstMeteorsForMass(massValue);

  if (newFirstMeteorsForMass) {
    return newMeteorYearAdjustments(newFirstMeteorsForMass);
  }

  const newFilteredMassNotFoundMessage = `unable to find any mass (mass:${massValue}) in any year that fits the criteria, try to adjust the mass`;

  alert(newFilteredMassNotFoundMessage);

  return;
};

export const newMeteorYearAdjustments = (foundMeteor: IMeteorObject) => {
  const currentYear = meteorDateConverterToYear(foundMeteor.year as string);
  const newMeteorsFromDate = returnMeteorsFilteredByYear(currentYear);

  const meteorListObject: IMeteorList = {
    basedOnYear: newMeteorsFromDate,
    basedOnMass: newMeteorsFromDate,
    currentYear: currentYear,
    currentMass: "",
  };

  return meteorListObject;
};
