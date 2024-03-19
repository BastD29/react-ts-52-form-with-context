import { useState, ChangeEvent, ReactNode } from "react";
import { FormContext } from "../../context/FormContext/FormContext";

interface FormProviderProps<FormValues> {
  children: ReactNode;
  initialValues: FormValues;
  submit?: (form: FormValues) => void;
}

export function FormProvider<FormValues extends Record<string, any>>({
  children,
  initialValues,
  submit = () => {},
}: FormProviderProps<FormValues>) {
  const [form, setForm] = useState<FormValues>(initialValues);

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <FormContext.Provider value={{ form, handleFormChange }}>
      <form
        className="Form"
        onSubmit={(e) => {
          e.preventDefault();
          submit(form);
        }}
      >
        {children}
        <button type="submit">Submit</button>
      </form>
    </FormContext.Provider>
  );
}
