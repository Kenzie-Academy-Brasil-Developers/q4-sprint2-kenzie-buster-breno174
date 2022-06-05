import * as yup from "yup";

const createDvdSchema = yup.object().shape({
  dvd: yup.array().of(
    yup.object().shape({
      name: yup.string().lowercase(),
      duration: yup.string().lowercase(),
      quantity: yup.number(),
      price: yup.number(),
    })
  ),
});

export { createDvdSchema };
