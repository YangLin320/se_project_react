import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, handleCardLike, isLoggedIn }) {
   const currentUser = useContext(CurrentUserContext);

   const isLiked = item.likes.some((id) => id === currentUser._id);
   const itemLikeButtonClassName = `card__like-btn ${
      isLiked ? "card__like-btn_active" : "card__like-btn_default"
   }`;

   const handleLike = (id, isLiked) => {
      handleCardLike({ id, isLiked });
   };
   return (
      <li className="card">
         <div className="card__title-card">
            <h2 className="card__title">{item.name}</h2>
            {isLoggedIn ? (
               <>
                  <button
                     className={itemLikeButtonClassName}
                     onClick={() => {
                        handleLike(item._id, isLiked);
                     }}
                  />
               </>
            ) : (
               <></>
            )}
         </div>
         <img
            src={item.imageUrl}
            alt={item.name}
            className="card__image"
            onClick={() => {
               onCardClick(item);
            }}
         />
      </li>
   );
}

export default ItemCard;
