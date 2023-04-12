import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, FormEvent } from "react";
import validationHelper, { registerUserInterface } from "../helpers/validationHelper";
import { AccountContainer, LoginSignupDiv } from "../components/Layouts";
import LogoButton from "../components/LogoButton";
import ConfirmOtp from "../components/ConfirmOtp";
import PasswordInput from "../components/PasswordInput";

export default function Register() {
  const [activeForm, setactiveForm] = useState<"register" | "verification">("register");
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const handleChange = ({ target }: { target: HTMLInputElement }) => console.log(target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validUserData = validateUser();

    if (validUserData) {
      console.log(validUserData);
      setactiveForm("verification");
    }
  };

  const validateUser = () => {
    const formData = new FormData(formRef.current!);
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword")
    };

    const validationReport = validationHelper.checkAll(userData as registerUserInterface);

    return !validationReport.status ? alert(validationReport.message) : userData;
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
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="input-fields">
                  <input
                    type="text"
                    name="name"
                    autoFocus
                    required
                    minLength={2}
                    maxLength={55}
                    onChange={handleChange}
                    placeholder="Name"
                    className="input-line full-width"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    placeholder="Email"
                    className="input-line full-width"
                  />
                  <PasswordInput
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    className="input-line full-width"
                  />
                  <PasswordInput
                    name="confirmPassword"
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
                <button className="ghost-round full-width">Create Account</button>
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
