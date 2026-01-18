import day_sunny from '../../assets/weather/day_sunny.svg';
import './WeatherCard.css';
import {weatherOptions} from "../../util/constants";

function WeatherCard({weatherData}){
   const weatherOption = weatherOptions.filter((option)=>{
      return(
         option.day === weatherData.isDay &&
         option.condition === weatherData.condition
      );
   })
    return (
       <section className="weather-card">
          <p className="weather-card__temp">{weatherData.temp.F}° F</p>
          <img src={weatherOption[0].url} alt="Visual of Weather" className="weather-card__img"/>
       </section>
    );
}

export default WeatherCard;