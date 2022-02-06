import { Link } from "react-router-dom";
import profile from "./../img/profile.png";
import "./../App.css";

const flex = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  top: "50%",
  height: "100vh",
  width: "20%",
  gap: "10px",
  backgroundColor: "green",
};

const picture = {
  borderRadius: "50%",
  height: "100px",
};

const navItems = {
  textDecoration: "none",
  color: "white",
};

export default function Navbar() {
  return (
    <div style={flex}>
      <img src={profile} style={picture} />
      <Link style={navItems} to="/">
        Home
      </Link>
      <Link style={navItems} to="/about">
        About
      </Link>
      <Link style={navItems} to="/experience">
        Experience
      </Link>
      <Link style={navItems} to="/skills">
        Skills
      </Link>
      <Link style={navItems} to="/interest">
        Interest
      </Link>
      <Link style={navItems} to="/awards">
        Awards
      </Link>
    </div>
  );
}
