import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <h3>POOJA MARBLE</h3>
        <nav ref={navRef}>
          <Link to="/">Home</Link>
          <Link to="/frames">Frames</Link>
          <Link to="/statues">Statues</Link>
          {/* <Link>Gallary</Link> */}
          <Link to="/contact">Contact Us</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Navbar;
