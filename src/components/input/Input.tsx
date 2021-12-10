import React from "react";

interface IProps {
  label: string;
  inputProp?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  labelStyle?: string;
  inputInvalid: boolean;
  inputInvalidText: string;
}

const Input: React.FC<IProps> = (props: IProps) => {
  const { label, inputProp, labelStyle, inputInvalid, inputInvalidText } =
    props;

  return (
    <React.Fragment>
      <label className={labelStyle} htmlFor={inputProp?.name}>
        {label}
      </label>

      <input
        placeholder={inputInvalid ? inputInvalidText : ""}
        {...inputProp}
      />
    </React.Fragment>
  );
};

export default Input;
