import { FC, useContext } from "react";

import { FormContext } from "../Form/Form";

interface FormInputProps {
  label: string;
  type?: string;
  name: string;
}

const FormInput: FC<FormInputProps> = ({ label, type = "text", name }) => {
  const { form, handleFormChange } = useContext(FormContext);

  return (
    <div className="FormInput">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={form[name] || ""}
        onChange={handleFormChange}
      />
    </div>
  );
};

export default FormInput;
