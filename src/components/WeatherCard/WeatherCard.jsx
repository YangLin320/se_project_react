import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function WeatherCard({ weatherData }) {
   const weatherOption = weatherOptions.filter((option) => {
      return (
         option.day === weatherData.isDay &&
         option.condition === weatherData.condition
      );
   });

   const {currentTemperatureUnit} = useContext(
      CurrentTemperatureUnitContext,
   );
   return (
      <section className="weather-card">
         <p className="weather-card__temp">
            {currentTemperatureUnit === "F"
               ? `${weatherData.temp.F} °F`
               : `${weatherData.temp.C} °C`}
         </p>
         <img
            src={weatherOptions[0].url}
            alt={`${weatherData.condition} icon`}
            className="weather-card__img"
         />
      </section>
   );
}

export default WeatherCard;
