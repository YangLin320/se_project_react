import "./Profile.css";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ clothingItems, handleCardClick, handleAddClick, handleEditProfileClick, handleLogout}) {
   return (
      <section className="profile__section">
         <Sidebar handleEditProfileClick = {handleEditProfileClick} handleLogout = {handleLogout}/>
         <ClothesSection
            clothingItems={clothingItems}
            handleCardClick={handleCardClick}
            handleAddClick={handleAddClick}
         />
      </section>
   );
}

export default Profile;
