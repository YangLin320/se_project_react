import useForm from "../../hooks/useForm.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

const LoginModal = ({
   handleLogin,
   closeModal,
   activeModal,
   handleOrButton,
}) => {
   const { values, handleChange, handleReset } = useForm({
      email: "",
      password: "",
   });

   function handleSubmit(evt) {
      evt.preventDefault();
      handleLogin(values, handleReset);
   }

   return (
      <ModalWithForm
         modalTitle={"Log in"}
         submitTitle={"Log in"}
         activeModal={activeModal}
         closeModal={closeModal}
         handleSubmit={handleSubmit}
         isOpen={activeModal === "login"}
         orButtonText={"or Register"}
         onOrButton={handleOrButton}
      >
         <div className="modal__field">
            <label className="modal__label"> Email </label>
            <input
               type="email"
               className="modal__input"
               id="login-email"
               placeholder="Email"
               name="email"
               value={values.email}
               onChange={handleChange}
            />
         </div>

         <div className="modal__field">
            <label className="modal__label"> Password </label>
            <input
               type="password"
               className="modal__input"
               id="login-password"
               placeholder="Password"
               name="password"
               value={values.password}
               onChange={handleChange}
            />
         </div>
      </ModalWithForm>
   );
};

export default LoginModal;
