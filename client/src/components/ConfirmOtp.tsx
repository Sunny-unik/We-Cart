import { FormEvent, useRef } from "react";

export default function ConfirmOtp({
  afterMatchHandler,
  cancelHandler
}: {
  afterMatchHandler: () => void;
  cancelHandler: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = ({ target }: { target: HTMLInputElement }) => console.log(target.value);

  const updatePassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputRef.current!.value);
    afterMatchHandler();
  };

  return (
    <>
      <form onSubmit={updatePassword}>
        <div className="input-fields">
          <input
            name="password"
            type="number"
            ref={inputRef}
            onChange={handleChange}
            placeholder="Password"
            className="input-line full-width"
          />
        </div>
        <div className="spacing"></div>
        <div>
          <button type="submit" className="ghost-round full-width">
            Confirm OTP
          </button>
          <button type="button" onClick={cancelHandler} className="ghost-round full-width">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
