import "./ModalWithForm.css";
import modalClose from "../../assets/modalClose.svg";

function ModalWithForm({
   children,
   modalTitle,
   submitTitle,
   activeModal,
   closeModal,
   handleSubmit
}) {
   return (
      <div className={`modal ${activeModal === "add-garment" && "modal_opened"}`}>
         <div className="modal__content">
            <h2 className="modal__title">{modalTitle}</h2>
            <button
               onClick={closeModal}
               type="button"
               className="modal__close"
            ></button>
            <form onSubmit={handleSubmit} className="modal__form" name="name">
               {children}
               <button className="modal__submit" type="submit">
                  {submitTitle}
               </button>
            </form>
         </div>
      </div>
   );
}

export default ModalWithForm;
