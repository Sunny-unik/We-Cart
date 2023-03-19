import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="errorParent">
      <div className="face">
        <div className="band">
          <div className="red"></div>
          <div className="white"></div>
          <div className="blue"></div>
        </div>
        <div className="eyes"></div>
        <div className="dimples"></div>
        <div className="mouth"></div>
      </div>
      <h1>Oops! Something went wrong!</h1>
      <div className="text-center">
        <Link to="/" className="btn">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
