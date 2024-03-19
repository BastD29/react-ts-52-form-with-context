import { ChangeEvent, createContext } from "react";

export type FormContextType<FormValues> = {
  form: FormValues;
  handleFormChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const FormContext = createContext<FormContextType<any> | undefined>(
  undefined
);
