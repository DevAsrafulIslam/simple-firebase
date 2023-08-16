import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";

const Register = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    // email password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const logUser = result.user;
        console.log(logUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const emailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={submitForm}>
        <input
          onChange={emailChange}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <br />
        <input
          onChange={passwordChange}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
