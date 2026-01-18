import "./ItemModal.css"

function ItemModal({activeModal, closeModal, card}){
    return (
       <div
          className={`modal ${
             activeModal === "preview" && "modal__opened"
          }`}
       >
          <div className="modal__content modal__content_type_preview">
             <button
                onClick={closeModal}
                type="button"
                className="modal__close"
             ></button>

             <img src={card.link} alt="enlarged image" className="modal__img" />
             <div className="modal__footer">
                <p className="modal__caption">{card.name}</p>
                <p className="modal__weather">Weather: {card.weather}</p>
             </div>
          </div>
       </div>
    );
}

export default ItemModal;