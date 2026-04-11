import useForm from "../../hooks/useForm.js";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
const EditProfileModal = ({
   isOpen,
   closeModal,
   activeModal,
   handleEditProfile,
}) => {
   const currentUser = useContext(CurrentUserContext);
   const { values, handleChange, setValues } = useForm({
      name: "",
      avatar: "",
   });

   function handleSubmit(evt) {
      evt.preventDefault();
      handleEditProfile(values);
   }

   useEffect(() => {
      if (isOpen && currentUser) {
         setValues({
            name: currentUser.name,
            avatar: currentUser.avatar,
         });
      }
   }, [isOpen, currentUser]);

   return (
      <ModalWithForm
         modalTitle={"Change Profile Data"}
         submitTitle={"Save Changes"}
         activeModal={activeModal}
         closeModal={closeModal}
         handleSubmit={handleSubmit}
         isOpen={activeModal === "editProfile"}
      >
         <div className="modal__field">
            <label className="modal__label"> Name </label>
            <input
               type="text"
               className="modal__input"
               id="editProfile-name"
               placeholder={"Name"}
               name="name"
               value={values.name}
               onChange={handleChange}
            />
         </div>

         <div className="modal__field">
            <label className="modal__label"> Avatar URL </label>
            <input
               type="url"
               className="modal__input"
               id="editProfile-avatar"
               placeholder={"Avatar Url"}
               name="avatar"
               value={values.avatar}
               onChange={handleChange}
            />
         </div>
      </ModalWithForm>
   );
};

export default EditProfileModal;
