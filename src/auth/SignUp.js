import React from "react";

const SignUp = (props) => {
  return (
    <form>
      <input type="email" id="email" name="email" required />
      <input type="password" id="password" name="password" required />
    </form>
  );
};

export default SignUp;
