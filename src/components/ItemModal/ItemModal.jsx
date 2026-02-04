import "./ItemModal.css"

function ItemModal({activeModal, closeModal, card, handleDeleteItem}){
    return (
       <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
          <div className="modal__content modal__content_type_preview">
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
                <div modal__card-info>
                   <p className="modal__caption">{card.name}</p>
                   <p className="modal__weather">Weather: {card.weather}</p>
                </div>
                <button className="modal__delete" onClick={()=>{
                  handleDeleteItem(card);
                }}> Delete Item </button>
             </div>
          </div>
       </div>
    );
}

export default ItemModal;