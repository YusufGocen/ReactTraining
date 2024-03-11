import React from "react";
import { useFormik } from "formik";
import Logo from "../Components/Logo.png";
import { Link } from "react-router-dom";
import "../Register.css";
import '../App.css'
import { basicSchema } from '../Components/Schemas';

const onSubmit= async(values,actions)=>{
  console.log(values),
  console.log(actions)
  await new Promise((resolve) => {
      setTimeout(resolve,1000);
  })
  actions.resetForm();
}

const Register = () => {
  const { values, errors,isSubmitting, handleChange, handleSubmit } = useFormik({
    initialValues: {
      Name: "",
      email: "",
      password: "",
      ConfirmPasword: ""
    },
    validationSchema:basicSchema,onSubmit
  });
  return (
    <div className="App">
      <Link to="/">
        <img className="Logo" src={Logo} alt="" />
      </Link>
      <form onSubmit={handleSubmit}>
        <h1>Create account</h1>
        <div className="inputdiv">
          <label>Your Name</label>
          <input
            type="text"
            value={values.Name}
            id="Name"
            onChange={handleChange}
            placeholder="First And LastName"
            className={errors.Name ? 'input-error' : ''}
          />
          {errors.Name && <p className="error">{errors.Name}</p>}
        </div>
        <div className="inputdiv">
          <label>Mobil Number or Email</label>
          <input
            type="email"
            value={values.email}
            id="email"
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
           {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="inputdiv">
          <label>Password</label>
          <input
            type="password"
            value={values.password}
            id="password"
            onChange={handleChange}
            placeholder="At least 6 characters"
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="inputdiv">
          <label>Re-Enter Password</label>
          <input
            type="password"
            value={values.ConfirmPasword}
            id="ConfirmPasword"
            onChange={handleChange}
            className={errors.ConfirmPasword ? 'input-error' : ''}
          />
             {errors.ConfirmPasword && <p className="error">{errors.ConfirmPasword}</p>}
        </div>
        <button disabled={isSubmitting} type="submit">Continue</button>
        <div className="desc">
          <p>By creating an account , you agree to Amazon </p>
          <a href="#">Conditions of use</a> And <a href="#">Privacy Notice</a>
        </div>
        <br /><br /><hr />
        <div className="desc2">
          <h5>Buying for Work?</h5>
          <a href="#">Create a Free business account</a>
        </div>
        <br /><br /><hr />
        <div className="desc3">
        <p>Already Have an account?</p>
        <Link to="/Login">Sign In</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
