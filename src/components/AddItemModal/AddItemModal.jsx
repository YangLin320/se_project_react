import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import useForm from "../../hooks/useForm.js"

const AddItemModal = ({ isOpen, handleAddItem, closeModal, activeModal }) => {
   const { values, handleChange } = useForm({
      name: "",
      imageUrl: "",
      weather: "",
   });

   function handleSubmit(evt){
      evt.preventDefault();
      handleAddItem(values);
   }

   return (
      <ModalWithForm
         modalTitle={"New Garment"}
         submitTitle={"Add Garment"}
         activeModal={activeModal}
         closeModal={closeModal}
         name={"newCard"}
         isOpen={isOpen}
         handleSubmit={handleSubmit}
      >
         <div className="modal__field">
            <label htmlFor="name" className="modal__label">
               {" "}
               Name{" "}
            </label>
            <input
               type="text"
               className="modal__input"
               id="name"
               placeholder="Name"
               name = "name"
               value={values.name}
               onChange={handleChange}
            />
         </div>

         <div className="modal__field">
            <label htmlFor="imageURL" className="modal__label">
               {" "}
               Image{" "}
            </label>
            <input
               type="url"
               className="modal__input"
               id="imageURL"
               placeholder="Image URL"
               name = "imageUrl"
               value={values.imageUrl}
               onChange={handleChange}
            />
         </div>

         <fieldset className="modal__radio">
            <legend className="modal__legend">Select the Weather Type: </legend>
            <label
               htmlFor="hot"
               className="modal__label modal__label_type_radio"
            >
               <input
                  name="weather"
                  value="hot"
                  type="radio"
                  className="modal__radio-input"
                  id="hot"
                  onChange={handleChange}
               />
               Hot
            </label>

            <label
               htmlFor="warm"
               className="modal__label modal__label_type_radio"
            >
               <input
                  name="weather"
                  value="warm"
                  type="radio"
                  className="modal__radio-input"
                  id="warm"
                  onChange={handleChange}
               />
               Warm
            </label>

            <label
               htmlFor="cold"
               className="modal__label modal__label_type_radio"
            >
               <input
                  name="weather"
                  value="cold"
                  type="radio"
                  className="modal__radio-input"
                  id="cold"
                  onChange={handleChange}
               />
               Cold
            </label>
         </fieldset>
      </ModalWithForm>
   );
};

export default AddItemModal;
