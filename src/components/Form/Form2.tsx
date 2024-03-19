import { useState, ChangeEvent, ReactNode, PropsWithChildren } from "react";
import { FormContext } from "../../context/FormContext/FormContext";

interface FormProps<FormValues> {
  children: ReactNode;
  submit?: (form: FormValues) => void;
  initialValues: FormValues;
}

const Form = <FormValues extends Record<string, any>>({
  children,
  submit = () => {},
  initialValues,
}: PropsWithChildren<FormProps<FormValues>>) => {
  const [form, setForm] = useState<FormValues>(initialValues);

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <form className="Form">
      <FormContext.Provider value={{ form, handleFormChange }}>
        {children}
      </FormContext.Provider>
      <button type="button" onClick={() => submit(form)}>
        Submit
      </button>
    </form>
  );
};

export default Form;
