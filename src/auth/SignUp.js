import React, { useState } from "react";
import { auth } from "../firebase";

const SignUp = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const createHandleFormChange = (setStateFn) => (event) => {
    console.log("UMBREON", event.target.value);
    setStateFn(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("VAPOREON", { email, password });
    try {
      const output = await auth.createUserWithEmailAndPassword(email, password);
      console.log("ODDISH", output);
    } catch (error) {
      console.error("ERROR", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        onChange={createHandleFormChange(setEmail)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        onChange={createHandleFormChange(setPassword)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
