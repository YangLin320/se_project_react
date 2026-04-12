import useForm from "../../hooks/useForm.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

const RegisterModal = ({
   handleRegistration,
   closeModal,
   activeModal,
   handleOrButton,
}) => {
   const { values, handleChange, handleReset } = useForm({
      name: "",
      avatar: "",
      email: "",
      password: "",
   });

   function handleSubmit(evt) {
      evt.preventDefault();
      handleRegistration(values, handleReset);
   }

   return (
      <ModalWithForm
         modalTitle={"Sign Up"}
         submitTitle={"Next"}
         activeModal={activeModal}
         closeModal={closeModal}
         handleSubmit={handleSubmit}
         isOpen={activeModal === "register"}
         orButtonText={"or Log in"}
         onOrButton={handleOrButton}
      >
         <div className="modal__field">
            <label className="modal__label" htmlFor="register-email">
               {" "}
               Email*{" "}
            </label>
            <input
               type="email"
               className="modal__input"
               id="register-email"
               placeholder="Email"
               name="email"
               value={values.email}
               onChange={handleChange}
            />
         </div>

         <div className="modal__field">
            <label className="modal__label" htmlFor="register-password">
               {" "}
               Password*{" "}
            </label>
            <input
               type="password"
               className="modal__input"
               id="register-password"
               placeholder="Password"
               name="password"
               value={values.password}
               onChange={handleChange}
            />
         </div>

         <div className="modal__field">
            <label className="modal__label" htmlFor="register-name">
               {" "}
               Name{" "}
            </label>
            <input
               type="text"
               className="modal__input"
               id="register-name"
               placeholder="Name"
               name="name"
               value={values.name}
               onChange={handleChange}
            />
         </div>

         <div className="modal__field">
            <label className="modal__label" htmlFor="register-avatar">
               {" "}
               Avatar URL{" "}
            </label>
            <input
               type="url"
               className="modal__input"
               id="register-avatar"
               placeholder="Avatar URL"
               name="avatar"
               value={values.avatar}
               onChange={handleChange}
            />
         </div>
      </ModalWithForm>
   );
};

export default RegisterModal;
