import { ChangeEvent, createContext } from "react";

export type FormContextType<FormValues> = {
  form: FormValues;
  handleFormChange: (event: ChangeEvent<HTMLInputElement>) => void;
  // handleSubmit: () => void;
};

// export const FormContext = createContext<FormContextType<any>>({
//   form: {},
//   handleFormChange: () => {},
//   handleSubmit: () => {},
// });

export const FormContext = createContext<FormContextType<any> | undefined>(
  undefined
);
