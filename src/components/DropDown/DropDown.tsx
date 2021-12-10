import React from "react";
import styles from "./DropDown.module.css";

interface IProps {
  labelName: string;
  labelAndSelectorFor: string;
  selectorName: string;
  optionsList: string[];
  onHandleSelectorChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const DropDown: React.FC<IProps> = (props: IProps) => {
  const {
    labelName,
    labelAndSelectorFor,
    selectorName,
    optionsList,
    onHandleSelectorChange,
  } = props;

  const defaultOption = "-- Please choose an option --";

  return (
    <React.Fragment>
      <label className={styles.label} htmlFor={labelAndSelectorFor}>
        {labelName}
      </label>
      <select
        className={styles.selector}
        name={selectorName}
        id={labelAndSelectorFor}
        onChange={onHandleSelectorChange}
      >
        <option value="">{defaultOption}</option>

        {optionsList.map((optionValue) => (
          <option key={optionValue} value={optionValue}>
            {optionValue}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default DropDown;
