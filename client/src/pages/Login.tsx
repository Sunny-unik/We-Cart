import { useState, useRef, FormEvent } from "react";
import { Link } from "react-router-dom";
import { AccountContainer, LoginSignupDiv } from "../components/Layouts";
import LogoButton from "../components/LogoButton";
import SetPassword from "../components/SetPassword";
import ConfirmOtp from "../components/ConfirmOtp";

export default function Login() {
  const [activeForm, setactiveForm] = useState<"login" | "forgotPassword" | "setPassword">("login");
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const handleChange = ({ target }: { target: HTMLInputElement }) => console.log(target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      email: emailInput.current!.value,
      password: passwordInput.current!.value
    });
  };

  const handleForgotClick = () => setactiveForm("forgotPassword");

  return (
    <>
      <div className="bold-line"></div>
      <AccountContainer>
        <LoginSignupDiv>
          <div className="overlay"></div>
          <div className="content">
            <div className="welcome">
              <LogoButton theme="dark" />
            </div>
            <div className="subtitle">Welcome Back</div>
            {activeForm === "login" && (
              <form onSubmit={handleSubmit}>
                <div className="input-fields">
                  <input
                    type="email"
                    ref={emailInput}
                    onChange={handleChange}
                    placeholder="Email"
                    className="input-line full-width"
                  />
                  <input
                    type="password"
                    ref={passwordInput}
                    onChange={handleChange}
                    placeholder="Password"
                    className="input-line full-width"
                  />
                </div>
                <div className="spacing">
                  <span className="highlight" onClick={handleForgotClick}>
                    Forgot Password ?
                  </span>
                </div>
                <div>
                  <button className="ghost-round full-width">Login</button>
                </div>
                <hr />
                <div className="spacing">
                  new user ? &nbsp;
                  <span className="highlight">
                    <Link to="/register">Create Account</Link>
                  </span>
                </div>
              </form>
            )}
            {activeForm === "forgotPassword" && (
              <ConfirmOtp
                afterMatchHandler={() => setactiveForm("setPassword")}
                cancelHandler={() => setactiveForm("login")}
              />
            )}
            {activeForm === "setPassword" && <SetPassword />}
          </div>
        </LoginSignupDiv>
      </AccountContainer>
    </>
  );
}
