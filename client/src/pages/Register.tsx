import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, FormEvent } from "react";
import validationHelper from "../helpers/validationHelper";
import { AccountContainer, LoginSignupDiv } from "../components/Layouts";
import LogoButton from "../components/LogoButton";
import ConfirmOtp from "../components/ConfirmOtp";

export default function Register() {
  const [activeForm, setactiveForm] = useState<"register" | "verification">("register");
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const confirmPasswordInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleChange = ({ target }: { target: HTMLInputElement }) => console.log(target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordInput.current!.value !== confirmPasswordInput.current!.value)
      return alert("Passwords do not match");

    const validationReport = validationHelper.checkAll({
      name: nameInput.current!.value,
      email: emailInput.current!.value,
      password: passwordInput.current!.value
    });
    validationReport[0] ? setactiveForm("verification") : console.log(validationReport);
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
            <div className="subtitle">
              We're almost done. Before using our services you need to create an account.
            </div>
            {activeForm === "register" ? (
              <form onSubmit={handleSubmit}>
                <div className="input-fields">
                  <input
                    type="text"
                    ref={nameInput}
                    onChange={handleChange}
                    placeholder="Name"
                    className="input-line full-width"
                  />
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
                  <input
                    type="password"
                    ref={confirmPasswordInput}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="input-line full-width"
                  />
                </div>
                <div className="spacing">
                  already have an account? &nbsp;
                  <span className="highlight">
                    <Link to="/login">Login</Link>
                  </span>
                </div>
                <div>
                  <button className="ghost-round full-width">Create Account</button>
                </div>
              </form>
            ) : (
              <ConfirmOtp
                afterMatchHandler={() => navigate("/")}
                cancelHandler={() => setactiveForm("register")}
              />
            )}
          </div>
        </LoginSignupDiv>
      </AccountContainer>
    </>
  );
}
