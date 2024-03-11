import * as yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    Name: yup
    .string()
    .max(40)
    .required("First And LastName required"),
  email: yup
    .string()
    .email(
      "Wrong or ınvalid Email addres or phone number. Please Correct and try again.  "
    )
    .required("Enter your Email or Phone Number"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters required")
    .matches(passwordRules, {
      message: "please enter at least one capital letter and one number",
    })
    .required("Password Required"),
  ConfirmPasword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Try Password"),
});
