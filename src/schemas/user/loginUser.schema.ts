import * as yup from "yup";

const loginUserSchema = yup.object().shape({
  email: yup.string().email().lowercase().required(),
  password: yup.string().required(),
});

export { loginUserSchema };
