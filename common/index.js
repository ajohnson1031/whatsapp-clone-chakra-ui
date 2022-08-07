import { yup as Yup } from "yup";

const formSchema = Yup.object({
  username: Yup.string()
    .required("Username required")
    .min(6, "Username must be between 6 and 30 characters")
    .max(28, "Username must be between 6 and 30 characters"),
  password: Yup.string()
    .required("Password required")
    .min(6, "Password must be between 6 and 12 characters")
    .max(12, "Password must be between 6 and 12 characters"),
});

module.exports = { formSchema };
