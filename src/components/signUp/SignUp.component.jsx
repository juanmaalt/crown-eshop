import React, { useState } from "react";
import { connect } from "react-redux";

import { FormInput } from "../formInput/FormInput.component";
import { CustomButton } from "../customButton/CustomButton.component";

import "./SignUp.style.scss";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const onSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don´t match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your Email and Password</span>
      <form className="sign-up-form" onSubmit={onSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={onChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
