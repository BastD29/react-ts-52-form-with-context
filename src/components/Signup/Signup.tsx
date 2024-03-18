import { FC } from "react";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";

type SignupFormValues = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  username?: string;
};

type SignupProps = {};

const initialValues = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  password: "",
};

const Signup: FC<SignupProps> = ({}) => {
  const handleSubmit = (formData: SignupFormValues) => {
    console.log("submitted signup formData:", formData);
  };

  return (
    <>
      <h2>Sign up</h2>
      <Form<SignupFormValues>
        submit={handleSubmit}
        initialValues={initialValues}
      >
        <FormInput label="First Name" name="firstName" />
        <FormInput label="Last Name" name="lastName" />
        <FormInput label="Email Address" type="email" name="emailAddress" />
        <FormInput label="Password" type="password" name="password" />
      </Form>
    </>
  );
};

export default Signup;
