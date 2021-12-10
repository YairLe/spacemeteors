import React, { useContext, useEffect } from "react";
import { MeteorListContext } from "../../../context/MeteorListContext";
import { adjustedSelectedMass } from "../../../helpers/helpers";
import useInput from "../../../hooks/use-input";
import Input from "../../Input/Input";
import styles from "./MassInput.module.css";

const MassInput: React.FC = () => {
  const { meteorList, setMeteorList } = useContext(MeteorListContext);

  const {
    value: massValue,
    isValid,
    notifyInvalidValue,
    inputSettingsChangeHandler,
    inputBlur,
    resetInputSettings: resetMassValue,
  } = useInput((value: string) => +value >= 0);

  const massInputProp = {
    type: "number",
    className: `${styles.massInputStyle} ${
      notifyInvalidValue && styles.inputInvalidStyle
    }`,
    id: "massValue",
    name: "massValue",
    value: massValue,
    onChange: inputSettingsChangeHandler,
    onBlur: inputBlur,
    min: 0,
  };

  useEffect(() => {
    if (isValid && massValue) {
      const newMeteorListObject = adjustedSelectedMass(
        massValue,
        meteorList.basedOnYear,
        meteorList.currentYear,
        meteorList.yearChangedFromMass
      );

      if (newMeteorListObject) {
        setMeteorList(newMeteorListObject);
      }
    }
  }, [massValue, isValid, meteorList]);

  useEffect(() => {
    if (!meteorList.yearChangedFromMass) {
      resetMassValue();
    }
  }, [meteorList.yearChangedFromMass, meteorList.currentYear]);

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
