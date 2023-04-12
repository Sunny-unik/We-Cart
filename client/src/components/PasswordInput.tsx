import { useState, forwardRef, ForwardRefRenderFunction } from "react";
import { PasswordToggleBtn } from "./Layouts";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // custom props here
}

const PasswordInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (props, ref) => {
  const [inputType, setinputType] = useState<"text" | "password">("password");

  return (
    <>
      <input ref={ref} type={inputType} required minLength={8} maxLength={16} {...props} />
      <PasswordToggleBtn
        className={inputType === "text" ? "fa fa-eye-slash" : "fa fa-eye"}
        onClick={() => setinputType((value) => (value === "text" ? "password" : "text"))}
      />
    </>
  );
};

export default forwardRef(PasswordInput);
