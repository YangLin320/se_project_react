import "./ModalWithForm.css";

function ModalWithForm({
   children,
   modalTitle,
   submitTitle,
   activeModal,
   closeModal,
   handleSubmit,
   isOpen,
   orButtonText,
   onOrButton,
}) {
   return (
      <div className={`modal ${isOpen && "modal_opened"}`}>
         <div className="modal__content">
            <h2 className="modal__title">{modalTitle}</h2>
            <button
               onClick={closeModal}
               type="button"
               className="modal__close"
            ></button>
            <form onSubmit={handleSubmit} className="modal__form" name="name">
               {children}
               <div className="modal__buttons">
                  <button className="modal__submit" type="submit">
                     {submitTitle}
                  </button>
                  {orButtonText && (
                     <button
                        className="modal__or-button"
                        onClick={onOrButton}
                        type="button"
                     >
                        {orButtonText}
                     </button>
                  )}
               </div>
            </form>
         </div>
      </div>
   );
}

export default ModalWithForm;
