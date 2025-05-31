import logo from "../assets/logo.svg";
import searchImage from "../assets/search-icon.svg";
import avatarImage from "../assets/avatar.svg";
import notificationImage from "../assets/notification-icon.svg";
import dropdownImage from "../assets/dropdown-icon.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to='/'>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="header-search">
        <input type="text" className="header-search-input" placeholder="search for anything" />
        <button type="submit" className="search-icon">
          <img src={searchImage} alt="Search" />
        </button>
      </div>
      <div className="header-avatar">
        <Link to="/documentation">Docs</Link>
        <img src={notificationImage} alt="Notifications" />
        <img className="avatar-image" src={avatarImage} alt="Avatar" />
        <p>Adedeji</p>
        <img src={dropdownImage} alt="Dropdown" />
      </div>
    </header>
  );
}

export default Header;
