import { useNavigate } from "react-router-dom";
import { Container, Row } from "./Layouts";
import styled from "styled-components";

export default function Footer() {
  const navigate = useNavigate();

  const gotoHome = () => {
    window.location.pathname === "/"
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : navigate("/");
  };

  return (
    <FooterDiv>
      <Container>
        <Row>
          <div className="footer-col-2nd">
            <img
              alt="logo"
              src="images/logo-white.png"
              style={{ cursor: "pointer" }}
              onClick={gotoHome}
              loading="lazy"
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
        </Row>
        <hr />
        <p className="copyright">Developed by We-Cart Team</p>
      </Container>
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  background: #000;
  color: #8a8a8a;
  font-size: 14px;
  padding: 20px 0 20px;
  p {
    color: #8a8a8a;
  }
  h3 {
    color: #fff;
    margin-bottom: 20px;
  }
  ul {
    padding: 0px;
  }
  li {
    cursor: pointer;
  }
  hr {
    border: none;
    background: #b5b5b5;
    height: 1px;
    margin: 20px 0;
  }
  .app-logo {
    margin-top: 20px;
    img {
      width: 140px;
    }
  }
  .copyright {
    text-align: center;
  }
  .footer-col-1st,
  .footer-col-2nd,
  .footer-col-3rd,
  .footer-col-4th {
    min-width: 250px;
    margin-bottom: 20px;
  }
  .footer-col-1st {
    flex-basis: 30%;
  }
  .footer-col-2nd {
    flex: 1;
  }
  .footer-col-2nd img {
    width: 180px;
    margin-bottom: 20px;
  }
  .footer-col-3rd,
  .footer-col-4th {
    flex-basis: 30%;
  }
`;
