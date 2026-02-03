import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Footer from "../Footer/Footer.jsx";
import { useState, useEffect } from "react";
import { getWeather, filterWeatherData } from "../../utils/weatherapi.js";
import { coordinates, apiKey } from "../../utils/constants.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile.jsx";
import { deleteClothing, getClothes, postClothing } from "../../utils/Api.js";

function App() {
   const [weatherData, setWeatherData] = useState({
      city: "",
      temp: { F: 999, C: 999 },
      type: "",
      condition: "",
      isDay: true,
   });
   const [activeModal, setActiveModal] = useState("");
   const [selectedCard, setSelectedCard] = useState({});
   const [clothingItems, setClothingItems] = useState([]);
   const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

   const handleToggleSwitchChange = () => {
      if (currentTemperatureUnit == "F") {
         setCurrentTemperatureUnit("C");
      } else {
         setCurrentTemperatureUnit("F");
      }
   };

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

   const handleAddItem = (data) => {
      postClothing(data)
         .then((data) => {
            setClothingItems([data,...clothingItems]);
            closeModal();
         })
         .catch(console.error);
   };
   const handleDeleteItem = (data) => {
      deleteClothing(data._id)
         .then(() => {
            setClothingItems(
               clothingItems.filter((items) => {
                  return items._id != data._id;
               }),
            );
            closeModal();
         })
         .catch(console.error);
   };

   useEffect(() => {
      getWeather(coordinates, apiKey)
         .then((data) => {
            setWeatherData(filterWeatherData(data));
         })
         .catch(console.error);

      getClothes()
         .then((data) => {
            setClothingItems(data);
         })
         .catch(console.error);
   }, []);

   return (
      <CurrentTemperatureUnitContext.Provider
         value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
         <div className="page">
            <div className="page__content">
               <Header
                  handleAddClick={handleAddClick}
                  weatherData={weatherData}
               ></Header>
               <Routes>
                  <Route
                     path="/"
                     element={
                        <Main
                           weatherData={weatherData}
                           handleCardClick={handleCardClick}
                           clothingItems={clothingItems}
                        ></Main>
                     }
                  />
                  <Route
                     path="/profile"
                     element={
                        <Profile
                           clothingItems={clothingItems}
                           handleCardClick={handleCardClick}
                           handleAddClick = {handleAddClick}
                        />
                     }
                  />
               </Routes>
               <Footer></Footer>
            </div>

            <AddItemModal
               isOpen={activeModal === "add-garment"}
               closeModal={closeModal}
               activeModal={activeModal}
               handleAddItem={handleAddItem}
            />
            <ItemModal
               activeModal={activeModal}
               card={selectedCard}
               closeModal={closeModal}
               handleDeleteItem={handleDeleteItem}
            />
         </div>
      </CurrentTemperatureUnitContext.Provider>
   );
}

export default App;
