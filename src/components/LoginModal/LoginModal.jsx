import useForm from "../../hooks/useForm.js";

const LoginModal = ({ handleLogin, closeModal, activeModal }) => {
   const { values, handleChange, handleReset } = useForm({
      email: "",
      password: "",
   });

   function handleSubmit(evt) {
      evt.preventDefault();
      handleLogin(values, handleReset);
   }

   return (
      <div
         className={`modal ${activeModal === "login" && "modal_opened"}`}
      >
         <div className="modal__content">
            <h2 className="modal__title">Sign In</h2>
            <button
               onClick={closeModal}
               type="button"
               className="modal__close"
            ></button>
            <form onSubmit={handleSubmit} className="modal__form" name="name">
               <div className="modal__field">
                  <label htmlFor="email" className="modal__label">
                     {" "}
                     Email{" "}
                  </label>
                  <input
                     type="email"
                     className="modal__input"
                     id="email"
                     placeholder="Email"
                     name="email"
                     value={values.email}
                     onChange={handleChange}
                  />
               </div>

               <div className="modal__field">
                  <label htmlFor="password" className="modal__label">
                     {" "}
                     Password{" "}
                  </label>
                  <input
                     type="password"
                     className="modal__input"
                     id="password"
                     placeholder="Password"
                     name="password"
                     value={values.password}
                     onChange={handleChange}
                  />
               </div>
               <button className="modal__submit" type="submit">
                 Log In
               </button>
            </form>
         </div>
      </div>
   );
};

export default LoginModal;
