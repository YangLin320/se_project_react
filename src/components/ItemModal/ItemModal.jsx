import "./ItemModal.css"
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ItemModal({activeModal, closeModal, card, handleDeleteItem}){
   const currentUser = useContext(CurrentUserContext);
   const isOwn = card.owner === currentUser._id;
    return (
       <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
          <div className="modal__content_type_preview">
             <button
                onClick={closeModal}
                type="button"
                className="modal__close"
             ></button>

             <img
                src={card.imageUrl}
                alt="enlarged image"
                className="modal__img"
             />
             <div className="modal__footer">
                <div className="modal__card-info">
                   <p className="modal__caption">{card.name}</p>
                   <p className="modal__weather">Weather: {card.weather}</p>
                </div>
                {isOwn && (
                   <button
                      className="modal__delete"
                      onClick={() => {
                         handleDeleteItem(card);
                      }}
                   >
                      {" "}
                      Delete Item{" "}
                   </button>
                )}
             </div>
          </div>
       </div>
    );
}

export default ItemModal;