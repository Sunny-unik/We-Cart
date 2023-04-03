import { useRef, FormEvent } from "react";

export default function SetPassword() {
  const passwordInput = useRef<HTMLInputElement>(null);
  const confirmPasswordInput = useRef<HTMLInputElement>(null);

  const handleChange = ({ target }: { target: HTMLInputElement }) => console.log(target.value);

  const updatePassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      password: passwordInput.current!.value,
      confirmPassword: confirmPasswordInput.current!.value
    });
  };

  return (
    <form onSubmit={updatePassword}>
      <div className="input-fields">
        <input
          name="password"
          type="password"
          ref={passwordInput}
          onChange={handleChange}
          placeholder="Password"
          className="input-line full-width"
        />
        <input
          name="confirmPassword"
          type="password"
          ref={confirmPasswordInput}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="input-line full-width"
        />
      </div>
      <div className="spacing"></div>
      <div>
        <button className="ghost-round full-width">Update Password</button>
      </div>
    </form>
  );
}
