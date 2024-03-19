import { /* Context, */ useContext } from "react";
import {
  FormContext,
  FormContextType,
} from "../context/FormContext/FormContext";

export function useFormContext<FormValues>() {
  const context = useContext(FormContext);

  // const context = useContext(
  //   FormContext as Context<FormContextType<FormValues> | undefined>
  // );

  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return context as FormContextType<FormValues>;
}
