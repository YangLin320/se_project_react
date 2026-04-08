import "./ItemCard.css";
import { useContext} from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, handleCardLike}) {
   const currentUser = useContext(CurrentUserContext);

   const isLiked = item.likes.some((id) => id === currentUser?._id);
   const itemLikeButtonClassName = `card__like-btn ${
      isLiked ? "card__like-btn_active" : "card__like-btn_default"
   }`;

   const handleLike = (item) =>{
      handleCardLike({item, isLiked});
   }
   return (
      <li
         className="card"
         onClick={() => {
            onCardClick(item);
         }}
      >
         <div className="card__title-card">
            <h2 className="card__title">{item.name}</h2>
            <button
               className= {itemLikeButtonClassName}
               onClick={()=>{handleLike(item)}}
            />
         </div>
         <img src={item.imageUrl} alt={item.name} className="card__image" />
      </li>
   );
}

export default ItemCard;
