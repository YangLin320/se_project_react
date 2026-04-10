import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ClothesSection({ clothingItems, handleCardClick, handleAddClick, isLoggedIn}) {
   const currentUser = useContext(CurrentUserContext);
   return (
      <section className="clothes-section">
         <div className="clothes-section__header">
            <p className="clothes-section__header_title">Your Items</p>
            <button className="clothes-section__add-clothes-btn" onClick={()=>{
               handleAddClick();
            }}>
               + Add Clothes
            </button>
         </div>
         <ul className="clothes-section__cards">
            {clothingItems.map((item) => {
               const isOwn = item.owner === currentUser._id;
               if(isOwn){
               return (
                  <ItemCard
                     key={item._id}
                     item={item}
                     onCardClick={handleCardClick}
                     isLoggedIn={isLoggedIn}
                  ></ItemCard>
               );}
            })}
         </ul>
      </section>
   );
}

export default ClothesSection;
