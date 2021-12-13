import { IMeteorObject, IMeteorsListWithoutAllMeteors } from "../interfaces/interfaces";

export const meteorDateConverterToYear = (meteorDate: string) => {
  return "" + new Date(meteorDate).getFullYear();
};

export const returnMeteorsFilteredByYear = (pickedYear: string, allMeteorsData: IMeteorObject[]) => {
  const filteredMeteorsByYear = allMeteorsData.filter((meteorObject) => {
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

export const returnFirstMeteorsForMass = (massValue: string, allMeteorsData: IMeteorObject[]) => {
  const foundNewMeteorForMass = allMeteorsData.find((meteorObject: any) => {
    return meteorObject.mass && +meteorObject.mass > +massValue;
  });
  return foundNewMeteorForMass;
};

export const adjustedSelectedMass = (
  massValue: string,
  meteorListByYear: IMeteorObject[],
  meteorYear: string,
  allMeteorsData: IMeteorObject[]
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

  const newFirstMeteorsForMass = returnFirstMeteorsForMass(massValue, allMeteorsData);

  if (newFirstMeteorsForMass) {
    return newMeteorYearAdjustments(newFirstMeteorsForMass, allMeteorsData);
  }

  const newFilteredMassNotFoundMessage = `unable to find any mass (mass:${massValue}) in any year that fits the criteria, try to adjust the mass`;

  alert(newFilteredMassNotFoundMessage);

  return;
};

export const newMeteorYearAdjustments = (foundMeteor: IMeteorObject, allMeteorsData: IMeteorObject[]) => {
  const currentYear = meteorDateConverterToYear(foundMeteor.year as string);
  const newMeteorsFromDate = returnMeteorsFilteredByYear(currentYear, allMeteorsData);

  const meteorListObject: IMeteorsListWithoutAllMeteors = {
    basedOnYear: newMeteorsFromDate,
    basedOnMass: newMeteorsFromDate,
    currentYear: currentYear,
    currentMass: "",
  };

  return meteorListObject;
};
