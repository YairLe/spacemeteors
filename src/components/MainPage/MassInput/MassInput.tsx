import React, { useContext, useEffect } from "react";
import { MeteorListContext } from "../../../context/MeteorListContext";
import { adjustedSelectedMass } from "../../../helpers/helpers";
import Input from "../../Input/Input";
import styles from "./MassInput.module.css";

const MassInput: React.FC = () => {
  const { meteorList, setMeteorList } = useContext(MeteorListContext);

  const validateInput = (value: string) => {
    return +value >= 0;
  };

  const inputSettingsChangeHandler: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      const value = event.target.value;
      setMeteorList({ ...meteorList, currentMass: value });
    };

  const massInputProp = {
    type: "number",
    className: `${styles.massInputStyle} ${
      !validateInput(meteorList.currentMass) && styles.inputInvalidStyle
    }`,
    id: "massValue",
    name: "massValue",
    value: meteorList.currentMass,
    onChange: inputSettingsChangeHandler,
    min: 0,
  };

  useEffect(() => {
    if (
      validateInput(meteorList.currentMass) &&
      meteorList.currentMass !== ""
    ) {
      const newMeteorListObject = adjustedSelectedMass(
        meteorList.currentMass,
        meteorList.basedOnYear,
        meteorList.currentYear
      );
      if (newMeteorListObject) {
        setMeteorList(newMeteorListObject);
      }
    }
  }, [
    meteorList.currentMass,
    meteorList.basedOnYear,
    meteorList.currentYear,
    setMeteorList,
  ]);

  return (
    <React.Fragment>
      <Input
        label="Select a mass:"
        inputProp={massInputProp}
        labelStyle={styles.labelStyle}
      />
    </React.Fragment>
  );
};

export default MassInput;
