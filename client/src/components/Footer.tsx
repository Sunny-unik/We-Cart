import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const gotoHome = () => {
    window.location.pathname === "/"
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : navigate("/");
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-2nd">
            <img
              alt="logo"
              src="http://localhost:3000/images/logo-white.png"
              style={{ cursor: "pointer" }}
              onClick={gotoHome}
            />
            <p>
              Our Purpose is to Sustainably make the Pleasure and Benefits of Sports Accessible to
              as the Many
            </p>
          </div>
          <div className="footer-col-3rd">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          <div className="footer-col-4th">
            <h3>Connect With Us on</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">Developed by We-Cart Team</p>
      </div>
    </div>
  );
}
