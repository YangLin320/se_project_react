import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import useForm from "../../hooks/useForm.js";

const AddItemModal = ({ handleAddItem, closeModal, activeModal }) => {
   const { values, handleChange, handleReset } = useForm({
      name: "",
      imageUrl: "",
      weather: "",
   });

   function handleSubmit(evt) {
      evt.preventDefault();
      handleAddItem(values, handleReset);
   }

   return (
      <ModalWithForm
         modalTitle={"New Garment"}
         submitTitle={"Add Garment"}
         activeModal={activeModal}
         closeModal={closeModal}
         handleSubmit={handleSubmit}
         isOpen={activeModal === "add-garment"}
      >
         <div className="modal__field">
            <label className="modal__label"> Name </label>
            <input
               type="text"
               className="modal__input"
               id="addItem-name"
               placeholder="Name"
               name="name"
               value={values.name}
               onChange={handleChange}
            />
         </div>

         <div className="modal__field">
            <label className="modal__label"> Image </label>
            <input
               type="url"
               className="modal__input"
               id="addItem-imageURL"
               placeholder="Image URL"
               name="imageUrl"
               value={values.imageUrl}
               onChange={handleChange}
            />
         </div>

         <fieldset className="modal__radio">
            <legend className="modal__legend">Select the Weather Type: </legend>
            <label
               className="modal__label modal__label_type_radio"
               htmlFor="addItem-hot"
            >
               <input
                  name="weather"
                  value="hot"
                  type="radio"
                  className="modal__radio-input"
                  id="addItem-hot"
                  onChange={handleChange}
                  checked={values.weather === "hot"}
               />
               Hot
            </label>

            <label
               className="modal__label modal__label_type_radio"
               htmlFor="addItem-warm"
            >
               <input
                  name="weather"
                  value="warm"
                  type="radio"
                  className="modal__radio-input"
                  id="addItem-warm"
                  onChange={handleChange}
                  checked={values.weather === "warm"}
               />
               Warm
            </label>

            <label
               className="modal__label modal__label_type_radio"
               htmlFor="addItem-cold"
            >
               <input
                  name="weather"
                  value="cold"
                  type="radio"
                  className="modal__radio-input"
                  id="addItem-cold"
                  onChange={handleChange}
                  checked={values.weather === "cold"}
               />
               Cold
            </label>
         </fieldset>
      </ModalWithForm>
   );
};

export default AddItemModal;
