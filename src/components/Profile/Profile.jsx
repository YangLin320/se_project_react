import "./Profile.css";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ clothingItems, handleCardClick }) {
   return (
      <section className="profile__section">
         <Sidebar />
         <ClothesSection
            clothingItems={clothingItems}
            handleCardClick={handleCardClick}
         />
      </section>
   );
}

export default Profile;
