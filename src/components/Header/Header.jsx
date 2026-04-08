import "./Header.css";
import logo from "../../assets/Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const currentDate = new Date().toLocaleString("default", {
   month: "long",
   day: "numeric",
});

function Header({
   handleAddClick,
   handleRegisterClick,
   handleLoginClick,
   weatherData,
   isLoggedIn,
}) {
   const currentUser = useContext(CurrentUserContext);
   return (
      <header className="header">
         <NavLink to="/" className="header__navlink">
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
            {isLoggedIn ? (
               <>
                  <p className="header__username"> {currentUser.name} </p>
                  <NavLink to="/profile" className="header__navlink">
                     <img
                        src={currentUser.avatar}
                        alt="Image of User Avatar"
                        className="header__avatar"
                     />
                  </NavLink>
               </>
            ) : (
               <>
                  <button
                     onClick={handleRegisterClick}
                     className="header__add-clothes-btn"
                  >
                     Sign Up
                  </button>
                  <button
                     onClick={handleLoginClick}
                     className="header__add-clothes-btn"
                  >
                     Log In
                  </button>
               </>
            )}
         </div>
      </header>
   );
}

export default Header;
