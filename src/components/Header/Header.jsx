import "./Header.css";
import logo from "../../assets/Logo.svg";
import avatar from "../../assets/avatar.svg";

const currentDate = new Date().toLocaleString("default", {
   month: "long",
   day: "numeric",
});

function Header({ handleAddClick, weatherData }) {
   return (
      <header className="header">
         <img src={logo} alt="Image of Logo" className="header__logo" />
         <p className="header__setting">
            {" "}
            {currentDate}, {weatherData.city}{" "}
         </p>
         <button onClick={handleAddClick} className="header__add-clothes-btn">
            + Add Clothes
         </button>
         <div className="header__user-container">
            <p className="header__username"> Terrence Tegegne </p>
            <img
               src={avatar}
               alt="Image of User Avatar"
               className="header__avatar"
            />
         </div>
      </header>
   );
}

export default Header;
