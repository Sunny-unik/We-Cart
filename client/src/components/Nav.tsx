import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" width="125px" />
            </Link>
          </div>
          <nav>
            <ul id="menu-items">
              <li>
                <Link to="/collection">Products</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <Link to="/cart">
            <img src="/images/cart.png" alt="cart" width="30px" height="30px" />
          </Link>
          <img src="/images/menu.png" alt="menu" className="menu-icon" />
        </div>
      </div>
    </div>
  );
}
