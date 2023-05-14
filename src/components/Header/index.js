import "./index.css";

import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

  const handleCheckboxChange = (e) => {
    const navbarList = document.querySelector(".navbar-list");
    if (e.target.checked) {
      navbarList.classList.add("checked");
    } else {
      navbarList.classList.remove("checked");
    }
  };

  const hideNavbarList = () => {
    const navbarList = document.querySelector(".navbar-list");
    navbarList.classList.remove("checked");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <h1 className="logo">
          LOGO
        </h1>
      </Link>
      <ul className="navbar-list">
        <Link to="/" className="nav-link">
          <li onClick={hideNavbarList}>HOME</li>
        </Link>
        <Link to="/fabric" className="nav-link">
          <li onClick={hideNavbarList}>FABRIC</li>
        </Link>
        <Link to="/product" className="nav-link">
          <li onClick={hideNavbarList}>PRODUCT</li>
        </Link>
        
        <Link to="/cart" className="nav-link">
          <li onClick={hideNavbarList}>CART</li>
        </Link>
      </ul>
      <input type="checkbox" id="check" onChange={handleCheckboxChange} />
      <label htmlFor="check" className="checkbtn">
        <GiHamburgerMenu />
      </label>
    </nav>
  );
};

export default Header;