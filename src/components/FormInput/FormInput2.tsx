import { FC } from "react";

import { useFormContext } from "../../hooks/useFormContext";
import { FormValues } from "../../models/Form";

interface FormInputProps {
  label: string;
  type?: string;
  name: string;
}

const FormInput: FC<FormInputProps> = ({ label, type = "text", name }) => {
  const { form, handleFormChange } = useFormContext<FormValues>();

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
