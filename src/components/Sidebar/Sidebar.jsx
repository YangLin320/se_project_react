import "./Sidebar.css";
import avatar from "../../assets/avatar.svg";

function Sidebar() {
   return (
      <aside className="sidebar">
         <div className="sidebar__profile">
            <img
               src={avatar}
               alt="Image of User Avatar"
               className="sidebar__avatar"
            />
            <p className="sidebar__username"> Terrence Tegegne </p>
         </div>
      </aside>
   );
}

export default Sidebar;
