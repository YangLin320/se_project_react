import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
   const weatherOption = weatherOptions.filter((option) => {
      return (
         option.day === weatherData.isDay &&
         option.condition === weatherData.condition
      );
   });
   return (
      <section className="weather-card">
         <p className="weather-card__temp">{weatherData.temp.F}° F</p>
         <img
            src={weatherOptions[0].url}
            alt = {`${weatherData.condition} icon`}
            className="weather-card__img"
         />
      </section>
   );
}

export default WeatherCard;
