import { useState, useRef, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AccountContainer, LoginSignupDiv } from "../components/Layouts";
import LogoButton from "../components/LogoButton";
import SetPassword from "../components/SetPassword";
import ConfirmOtp from "../components/ConfirmOtp";
import userValidation from "../helpers/validationHelper";
import PasswordInput from "../components/PasswordInput";

export default function Login() {
  const [activeForm, setactiveForm] = useState<"login" | "forgotPassword" | "setPassword">("login");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleChange = ({ target }: { target: HTMLInputElement }) => console.log(target.value);

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    const validUserData = validateUser();

    if (validUserData) {
      console.log(validUserData);
      navigate("/");
    }
  };

  const validateUser = () => {
    const [emailInput, passwordInput] = [emailRef.current!, passwordRef.current!];
    const userData = {
      email: emailInput.value,
      password: passwordInput.value
    };
    const errors: string[] = [];
    const [emailReport, passwordReport] = [
      userValidation.checkEmail(userData.email),
      userValidation.checkPassword(userData.password)
    ];

    !emailReport.status && errors.push(emailReport.message);
    !passwordReport.status && errors.push(passwordReport.message);

    return errors.length ? alert(errors.join(",\n")) : userData;
  };

  const handleForgotClick = () => {
    const validateEmail = userValidation.checkEmail(emailRef.current!.value);
    if (!validateEmail.status) return alert(validateEmail.message);

    setactiveForm("forgotPassword");
  };

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
                    ref={emailRef}
                    onChange={handleChange}
                    required
                    autoFocus
                    placeholder="Email"
                    className="input-line full-width"
                  />
                  <PasswordInput
                    ref={passwordRef}
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
