import * as yup from "yup";

const createUserSchema = yup.object().shape({
  email: yup.string().email().lowercase().required(),
  isAdm: yup.boolean().default(false).optional(),
  password: yup.string().required(),
});

const serializedCreateUserSchema = yup.object().shape({
  email: yup.string().email().lowercase().required(),
  isAdm: yup.boolean().default(false).required(),
  userUuid: yup.string().uuid().required(),
});

export { createUserSchema, serializedCreateUserSchema };
