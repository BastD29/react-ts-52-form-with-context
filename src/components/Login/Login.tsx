import { FC } from "react";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";

type LoginFormValues = {
  username: string;
  password: string;
};

type LoginProps = {};

const initialValues = {
  username: "",
  password: "",
};

const Login: FC<LoginProps> = ({}) => {
  const handleSubmit = (formData: LoginFormValues) => {
    console.log("submitted Login formData:", formData);
  };

  return (
    <>
      <h2>Login</h2>
      <Form<LoginFormValues>
        submit={handleSubmit}
        initialValues={initialValues}
      >
        <FormInput label="Username" name="username" />
        <FormInput label="Password" name="password" />
      </Form>
    </>
  );
};

export default Login;
