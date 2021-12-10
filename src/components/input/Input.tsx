import React from "react";

interface IProps {
  label: string;
  inputProp?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  labelStyle?: string;
}

const Input: React.FC<IProps> = (props: IProps) => {
  const { label, inputProp, labelStyle } = props;

  return (
    <React.Fragment>
      <label className={labelStyle} htmlFor={inputProp?.name}>
        {label}
      </label>

      <input {...inputProp} />
    </React.Fragment>
  );
};

export default Input;
