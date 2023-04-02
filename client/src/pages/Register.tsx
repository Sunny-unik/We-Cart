import { Link } from "react-router-dom";
import { useState } from "react";
import validationHelper from "../helpers/validationHelper";
import { AccountContainer, LoginSignupDiv } from "../components/Layouts";

export default function Register() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (event: any) => {
    setUserInput((nextInput) => {
      const target = event.target as HTMLInputElement;
      return { ...nextInput, [target.name]: target.value };
    });
  };

  const handleSubmit = () => {
    if (userInput.password !== userInput.confirmPassword) return alert("Passwords do not match");

    const postData = { ...userInput, confirmPassword: undefined };
    console.log(validationHelper.checkAll(postData));
  };

  return (
    <>
      <div className="bold-line"></div>
      <AccountContainer>
        <LoginSignupDiv>
          <div className="overlay"></div>
          <div className="content">
            <div className="welcome">Hello There!</div>
            <div className="subtitle">
              We're almost done. Before using our services you need to create an account.
            </div>
            <div className="input-fields">
              <input
                name="name"
                type="text"
                value={userInput.name}
                onChange={handleChange}
                placeholder="Name"
                className="input-line full-width"
              ></input>
              <input
                name="email"
                type="email"
                value={userInput.email}
                onChange={handleChange}
                placeholder="Email"
                className="input-line full-width"
              ></input>
              <input
                name="password"
                type="password"
                value={userInput.password}
                onChange={handleChange}
                placeholder="Password"
                className="input-line full-width"
              ></input>
              <input
                name="confirmPassword"
                type="password"
                value={userInput.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="input-line full-width"
              ></input>
            </div>
            <div className="spacing">
              already have an account? &nbsp;
              <span className="highlight">
                <Link to="/login">Login</Link>
              </span>
            </div>
            <div>
              <button onClick={handleSubmit} className="ghost-round full-width">
                Create Account
              </button>
            </div>
          </div>
        </LoginSignupDiv>
      </AccountContainer>
    </>
  );
}
