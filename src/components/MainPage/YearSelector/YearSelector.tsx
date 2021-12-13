import React, { useContext, useEffect, useState } from "react";
import { MeteorListContext } from "../../../context/MeteorListContext";
import {
  meteorDateConverterToYear,
  returnMeteorsFilteredByYear,
} from "../../../helpers/helpers";
import meteorData from "../../../meteorsdata.json";
import DropDown from "../../DropDown/DropDown";
import styles from './YearSelector.module.css'

const YearSelector: React.FC = () => {
  const [yearsList, setYearsList] = useState<string[]>([]);
  const { meteorList, setMeteorList } = useContext(MeteorListContext);

  useEffect(() => {
    setYearsList(returnAllExistMeteorYears());
  }, []);

  const returnAllExistMeteorYears = () => {
    const meteorYearsList: string[] = [];
    meteorData.forEach((meteorObject) => {
      const meteorDate = meteorDateConverterToYear(meteorObject.year as string);

      if (!meteorYearsList.includes(meteorDate) && meteorDate !== "NaN") {
        meteorYearsList.push(meteorDate);
      }
    });
    const sortedMeteorYearsList = meteorYearsList.sort((a, b) => {
      return +a - +b;
    });
    return sortedMeteorYearsList;
  };

  const onHandleSelectorChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const returnedMeteorData = returnMeteorsFilteredByYear(event.target.value);

    const meteorListObject = {
      basedOnYear: returnedMeteorData,
      basedOnMass: returnedMeteorData,
      currentYear: event.target.value,
      currentMass: "",
    };
    setMeteorList(meteorListObject);
  };


  const yearSelectorInputProp = {
    type: "number",
    className: styles.yearSelectorInputStyle,
    id: "yearSelector",
    name: "yearSelector",
    list:"year-select",
    value: meteorList.currentYear,
    onChange: onHandleSelectorChange,
    min: 0,
    placeHolder:"-- Please choose an option --",
  };

  return (
    <DropDown
      labelName={"Select a year:"}
      optionsList={yearsList}
      inputProp={yearSelectorInputProp}
    />
  );
};

export default YearSelector;
