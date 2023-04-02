import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./Layouts";
import LogoButton from "./LogoButton";

export default function Nav() {
  const activeLinkHandler = ({ isActive }: { isActive: boolean }) => (isActive ? "active" : "");

  return (
    <div>
      <Container>
        <Navbar>
          <div className="logo">
            <LogoButton theme="light" />
          </div>
          <nav>
            <ul id="menu-items">
              <li>
                <NavLink className={activeLinkHandler} to="/collection">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink className={activeLinkHandler} to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className={activeLinkHandler} to="/register">
                  Sign up
                </NavLink>
              </li>
            </ul>
          </nav>
          <NavLink className={activeLinkHandler} to="/cart">
            <img src="images/cart.png" alt="cart" width="30px" height="30px" loading="lazy" />
          </NavLink>
          <img src="images/menu.png" alt="menu" className="menu-icon" loading="lazy" />
        </Navbar>
      </Container>
    </div>
  );
}

const Navbar = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  nav {
    flex: 1;
    text-align: right;
  }
  nav ul {
    display: inline-block;
    list-style-type: none;
  }
  nav ul li {
    display: inline-block;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
    color: #373737;
    font-weight: bold;
  }
  a.active {
    color: #0a58ca;
  }
  .menu-icon {
    width: 28px;
    margin-left: 20px;
    display: none;
  }
  @media only screen and (max-width: 800px) {
    nav ul {
      position: absolute;
      top: 70px;
      left: 0;
      background: #333;
      width: 100%;
      overflow: hidden;
      transition: max-height 0.5s;
    }
    nav ul li {
      display: block;
      margin-right: 50px;
      margin-top: 10px;
      margin: bottom 10px;
    }
    nav ul li a {
      color: white;
    }
    .menu-icon {
      display: block;
      cursor: pointer;
    }
  }
`;
