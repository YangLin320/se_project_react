import "./Header.css";
import logo from "../../assets/Logo.svg";
import avatar from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";

const currentDate = new Date().toLocaleString("default", {
   month: "long",
   day: "numeric",
});

function Header({ handleAddClick, weatherData }) {
   return (
      <header className="header">
         <NavLink NavLink to="/" className="header__navlink">
            <img src={logo} alt="Image of Logo" className="header__logo" />
         </NavLink>
         <p className="header__setting">
            {" "}
            {currentDate}, {weatherData.city}{" "}
         </p>
         <ToggleSwitch></ToggleSwitch>
         <button onClick={handleAddClick} className="header__add-clothes-btn">
            + Add Clothes
         </button>
         <div className="header__user-container">
            <p className="header__username"> Terrence Tegegne </p>
            <NavLink to="/profile" className="header__navlink">
               <img
                  src={avatar}
                  alt="Image of User Avatar"
                  className="header__avatar"
               />
            </NavLink>
         </div>
      </header>
   );
}

export default Header;
