import { ChangeEvent, createContext } from "react";

interface FormContextType<FormValues> {
  form: FormValues;
  handleFormChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FormContext = createContext<FormContextType<any>>({
  form: {},
  handleFormChange: () => {},
});
