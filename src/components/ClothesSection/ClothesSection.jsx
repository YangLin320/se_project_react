import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, handleCardClick, handleAddClick}) {
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
               return (
                  <ItemCard
                     key={item._id}
                     item={item}
                     onCardClick={handleCardClick}
                  ></ItemCard>
               );
            })}
         </ul>
      </section>
   );
}

export default ClothesSection;
