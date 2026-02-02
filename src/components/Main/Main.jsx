import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import "./Main.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard.jsx";
function Main({ weatherData, handleCardClick, clothingItems}) {
   const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
   return (
      <main>
         <WeatherCard weatherData={weatherData} />

         <section className="cards">
            <p className="cards__header">
               Today is{" "}
               {currentTemperatureUnit === "F"
                  ? `${weatherData.temp.F} °F`
                  : `${weatherData.temp.C} °C`}{" "}
               / You may want to wear:
            </p>

            <ul className="cards__list">
               {clothingItems
                  .filter((item) => {
                     return item.weather === weatherData.type;
                  })
                  .map((item) => {
                     return (
                        <ItemCard
                           key={item._id}
                           item={item}
                           onCardClick={handleCardClick}
                        ></ItemCard>
                     );
                  })}
            </ul>
         </section>
      </main>
   );
}

export default Main;
