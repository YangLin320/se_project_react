import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { useState, useEffect } from "react";
import { weather, filterWeatherData } from "../../utils/weatherapi.js";
import { coordinates, apiKey } from "../../utils/constants.js";

function App() {
   const [weatherData, setWeatherData] = useState({
      type: "",
      temp: { F: 999 },
      city: "",
   });
   const [activeModal, setActiveModal] = useState("");
   const [selectedCard, setSelectedCard] = useState({});

   const handleAddClick = () => {
      setActiveModal("add-garment");
   };

   const handleCardClick = (card) => {
      setActiveModal("preview");
      setSelectedCard(card);
   };

   const closeModal = () => {
      setActiveModal("");
   };

   useEffect(() => {
      weather(coordinates, apiKey)
         .then((data) => {
            setWeatherData(filterWeatherData(data));
         })
         .catch(console.error);
   }, []);

   return (
      <div className="page">
         <div className="page__content">
            <Header
               handleAddClick={handleAddClick}
               weatherData={weatherData}
            ></Header>
            <Main
               weatherData={weatherData}
               handleCardClick={handleCardClick}
            ></Main>
         </div>
         <ModalWithForm
            modalTitle={"New Garment"}
            submitTitle={"Add Garment"}
            activeModal={activeModal}
            closeModal={closeModal}
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
               />
            </div>

            <fieldset className="modal__radio">
               <legend className="modal__legend">
                  Select the Weather Type:{" "}
               </legend>
               <label
                  htmlFor="hot"
                  className="modal__label modal__label_type_radio"
               >
                  <input type="radio" className="modal__radio-input" id="hot" />
                  Hot
               </label>

               <label
                  htmlFor="warm"
                  className="modal__label modal__label_type_radio"
               >
                  <input
                     type="radio"
                     className="modal__radio-input"
                     id="warm"
                  />
                  Warm
               </label>

               <label
                  htmlFor="cold"
                  className="modal__label modal__label_type_radio"
               >
                  <input
                     type="radio"
                     className="modal__radio-input"
                     id="cold"
                  />
                  Cold
               </label>
            </fieldset>
         </ModalWithForm>

         <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            closeModal={closeModal}
         />
      </div>
   );
}

export default App;
