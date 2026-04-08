import "./Sidebar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Sidebar({handleEditProfileClick, handleLogout}) {
   const currentUser = useContext(CurrentUserContext);
   return (
      <aside className="sidebar">
         <div className="sidebar__profile">
            <img
               src={currentUser.avatar}
               alt="Image of User Avatar"
               className="sidebar__avatar"
            />
            <p className="sidebar__username"> {currentUser.name} </p>
         </div>
         <button className="sidebar__change-profile-btn" onClick={handleEditProfileClick}>Change Profile Data</button>
         <button className="sidebar__log-out-btn" onClick={handleLogout}>Log Out</button>
      </aside>
   );
}

export default Sidebar;
