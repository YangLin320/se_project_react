import useForm from "../../hooks/useForm.js";

const RegisterModal = ({ handleRegistration, closeModal, activeModal }) => {
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
      <div
         className={`modal ${activeModal === "register" && "modal_opened"}`}
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
                  <label htmlFor="register" className="modal__label">
                     {" "}
                     Email*{" "}
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
                     Password*{" "}
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
                     placeholder="Avatar URL"
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

export default RegisterModal;
