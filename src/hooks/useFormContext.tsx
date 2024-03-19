import { Context, useContext } from "react";
import {
  FormContext,
  FormContextType,
  FormValuesType,
} from "../context/FormContext/FormContext";

export function useFormContext<FormValues extends FormValuesType>() {
  const context = useContext(
    FormContext as Context<FormContextType<FormValues> | null>
  );

  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return context;
}
