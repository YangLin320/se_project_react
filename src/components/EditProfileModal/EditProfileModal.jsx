import useForm from "../../hooks/useForm.js";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

const EditProfileModal = ({closeModal, activeModal, handleEditProfile}) => {
   const currentUser = useContext(CurrentUserContext);
   const { values, handleChange, handleReset } = useForm({
      name: "",
      avatar: "",
   });

   function handleSubmit(evt) {
      evt.preventDefault();
      handleEditProfile(values);
   }

   return (
      <div
         className={`modal ${activeModal === "editProfile" && "modal_opened"}`}
      >
         <div className="modal__content">
            <h2 className="modal__title">Sign Up</h2>
            <button
               onClick={closeModal}
               type="button"
               className="modal__close"
            ></button>
            <form onSubmit={handleSubmit} className="modal__form" name="name">
               <div className="modal__field">
                  <label htmlFor="name" className="modal__label">
                     {" "}
                     Name{" "}
                  </label>
                  <input
                     type="text"
                     className="modal__input"
                     id="name"
                     placeholder = {currentUser.name}
                     name="name"
                     value={values.name}
                     onChange={handleChange}
                  />
               </div>

               <div className="modal__field">
                  <label htmlFor="avatar" className="modal__label">
                     {" "}
                     Avatar URL{" "}
                  </label>
                  <input
                     type="url"
                     className="modal__input"
                     id="avatar"
                     placeholder= {currentUser.avatar}
                     name="avatar"
                     value={values.avatar}
                     onChange={handleChange}
                  />
               </div>
               <button className="modal__submit" type="submit">
                  Next
               </button>
            </form>
         </div>
      </div>
   );
};

export default EditProfileModal;
