import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [userInput, setUserInput] = useState({ email: "", password: "" });

  function handleChange(event: ChangeEvent) {
    setUserInput((nextInput) => {
      return {
        ...nextInput,
        [(event.target as HTMLInputElement).name]: (event.target as HTMLInputElement).value
      };
    });
  }

  function handleSubmit() {
    console.log(userInput);
  }

  return (
    <>
      <div className="bold-line"></div>
      <div className="door-container">
        <div className="window">
          <div className="overlay"></div>
          <div className="content">
            <div className="welcome">Hello There!</div>
            <div className="subtitle">Welcome Back</div>
            <div className="input-fields">
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
            </div>
            <div className="spacing">
              <span className="highlight">Forgot Password ?</span>
            </div>
            <div>
              <button onClick={handleSubmit} className="ghost-round full-width">
                Login
              </button>
            </div>
            <hr />
            <div className="spacing">
              new user ? &nbsp;
              <span className="highlight">
                <Link to="/register">Create Account</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}