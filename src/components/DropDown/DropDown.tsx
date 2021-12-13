import React from "react";
import styles from "./DropDown.module.css";
import Input from "../Input/Input";

interface IProps {
  labelName: string;
  optionsList: string[];
  inputProp?: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
}

const DropDown: React.FC<IProps> = (props: IProps) => {
  const {
    labelName,
    optionsList,
    inputProp
  } = props;

  return (
    <React.Fragment>
      <Input label={labelName} labelStyle={styles.label} inputProp={inputProp}/>
      <datalist
        className={styles.selector}
        id={inputProp?.list}
      >
        {optionsList.map((optionValue) => (
          <option key={optionValue} value={optionValue}>
            {optionValue}
          </option>
        ))}
      </datalist>
    </React.Fragment>
  );
};

export default DropDown;
