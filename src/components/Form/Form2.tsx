import { ReactNode } from "react";
import { FormProvider } from "../../context/FormContext/FormProvider";

interface FormProps<FormValues> {
  children: ReactNode;
  submit?: (form: FormValues) => void;
  initialValues: FormValues;
}

function Form<FormValues extends Record<string, any>>({
  children,
  submit,
  initialValues,
}: FormProps<FormValues>) {
  return (
    <FormProvider initialValues={initialValues} submit={submit}>
      {children}
    </FormProvider>
  );
}

export default Form;
