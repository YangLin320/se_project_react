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
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import Profile from "../Profile/Profile.jsx";
import {
   deleteClothing,
   getClothes,
   postClothing,
   likeItem,
   dislikeItem,
} from "../../utils/Api.js";
import { register, signin, checkToken, editUser } from "../../utils/auth.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

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
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [currentUser, setCurrentUser] = useState({});
   const [token, setToken] = useState(localStorage.getItem("jwt"));

   const handleToggleSwitchChange = () => {
      if (currentTemperatureUnit === "F") {
         setCurrentTemperatureUnit("C");
      } else {
         setCurrentTemperatureUnit("F");
      }
   };

   const handleAddClick = () => {
      setActiveModal("add-garment");
   };

   const handleRegisterClick = () => {
      setActiveModal("register");
   };

   const handleLoginClick = () => {
      setActiveModal("login");
   };

   const handleEditProfileClick = () => {
      setActiveModal("editProfile");
   };

   const handleCardClick = (card) => {
      setActiveModal("preview");
      setSelectedCard(card);
   };

   const closeModal = () => {
      setActiveModal("");
   };

   const handleAddItem = (data, handleReset) => {
      postClothing(data, token)
         .then((res) => {
            setClothingItems((prevItems)=> [res.item, ...prevItems]);
            closeModal();
            handleReset();
         })
         .catch(console.error);
   };

   const handleDeleteItem = (data) => {
      deleteClothing(data._id, token)
         .then(() => {
            setClothingItems(
               clothingItems.filter((items) => {
                  return items._id !== data._id;
               }),
            );
            closeModal();
         })
         .catch(console.error);
   };

   const handleCardLike = ({ id, isLiked }) => {
      setToken(localStorage.getItem("jwt"));
      !isLiked
         ? likeItem(id, token)
              .then((updatedCard) => {
                 setClothingItems((cards) =>
                    cards.map((item) => (item._id === id ? updatedCard.data : item)),
                 );
              })
              .catch((err) => console.log(err))
         : dislikeItem(id, token)
              .then((updatedCard) => {
                 setClothingItems((cards) =>
                    cards.map((item) => (item._id === id ? updatedCard.data : item)),
                 );
              })
              .catch((err) => console.log(err));
   };

   const handleLogin = ({ email, password }) => {
      if (!email || !password) return;
      signin(email, password)
         .then((data) => {
            if (data.token) {
               localStorage.setItem("jwt", data.token);
               setToken(data.token);
               return checkToken(data.token);
            }
         })
         .then((userData) => {
            setCurrentUser(userData.user);
            setIsLoggedIn(true);
            closeModal();
         })
         .catch((err) => {
            console.error("Login failed:", err);
            localStorage.removeItem("jwt");
         });
   };
   const handleRegistration = ({ name, avatar, email, password }) => {
      register(name, avatar, email, password)
         .then(() => {
            handleLogin(email, password);
         })
         .catch((err) => console.error("Registration failed:", err));
      closeModal();
   };

   const handleEditProfile = (data) => {
      editUser(data, token).then((res) => {
         setCurrentUser(res);
         closeModal();
      });
   };

   const handleLogout = () => {
      localStorage.removeItem("jwt");
      setIsLoggedIn(false);
      setCurrentUser({});
   };

   useEffect(() => {
      getWeather(coordinates, apiKey)
         .then((data) => {
            setWeatherData(filterWeatherData(data));
         })
         .catch(console.error);

      getClothes()
         .then((data) => {
            setClothingItems(data.items);
         })
         .catch(console.error);

      const jwt = localStorage.getItem("jwt");
      if (jwt) {
         checkToken(jwt)
            .then((res) => {
               setIsLoggedIn(true);
               setCurrentUser(res.user);
            })
            .catch((err) => {
               console.error("Token verification failed:", err);
               localStorage.removeItem("jwt");
            });
      } else {
         setIsLoggedIn(false);
         setCurrentUser({});
      }
   }, []);

   return (
      <CurrentUserContext.Provider value={currentUser}>
         <CurrentTemperatureUnitContext.Provider
            value={{ currentTemperatureUnit, handleToggleSwitchChange }}
         >
            <div className="page">
               <div className="page__content">
                  <Header
                     handleAddClick={handleAddClick}
                     weatherData={weatherData}
                     isLoggedIn={isLoggedIn}
                     handleRegisterClick={handleRegisterClick}
                     handleLoginClick={handleLoginClick}
                  ></Header>
                  <Routes>
                     <Route
                        path="/"
                        element={
                           <Main
                              weatherData={weatherData}
                              handleCardClick={handleCardClick}
                              clothingItems={clothingItems}
                              handleCardLike={handleCardLike}
                              isLoggedIn={isLoggedIn}
                           ></Main>
                        }
                     />
                     <Route
                        path="/profile"
                        element={
                           <ProtectedRoute isLoggedIn={isLoggedIn}>
                              <Profile
                                 clothingItems={clothingItems}
                                 handleCardClick={handleCardClick}
                                 handleAddClick={handleAddClick}
                                 handleEditProfileClick={handleEditProfileClick}
                                 handleLogout={handleLogout}
                              />
                           </ProtectedRoute>
                        }
                     />
                  </Routes>
                  <Footer></Footer>
               </div>

               <AddItemModal
                  closeModal={closeModal}
                  activeModal={activeModal}
                  handleAddItem={handleAddItem}
               />

               <RegisterModal
                  closeModal={closeModal}
                  activeModal={activeModal}
                  handleRegistration={handleRegistration}
               />

               <LoginModal
                  closeModal={closeModal}
                  activeModal={activeModal}
                  handleLogin={handleLogin}
               />

               <ItemModal
                  activeModal={activeModal}
                  card={selectedCard}
                  closeModal={closeModal}
                  handleDeleteItem={handleDeleteItem}
               />

               <EditProfileModal
                  activeModal={activeModal}
                  closeModal={closeModal}
                  handleEditProfile={handleEditProfile}
               ></EditProfileModal>
            </div>
         </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
   );
}

export default App;
