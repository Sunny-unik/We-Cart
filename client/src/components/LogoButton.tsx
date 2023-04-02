import { Link } from "react-router-dom";

export default function LogoButton({ theme }: { theme: "dark" | "light" }) {
  return (
    <Link to="/">
      <img
        src={theme === "dark" ? "images/logo-white.png" : "images/logo.png"}
        alt="logo"
        width="125px"
        loading="lazy"
      />
    </Link>
  );
}
