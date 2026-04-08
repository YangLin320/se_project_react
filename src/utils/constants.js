export const coordinates = {
   latitude: 41.089525,
   longitude: -73.841906,
};

export const weatherOptions = [
   {
      day: true,
      condition: "sunny",
      url: new URL("../assets/weather/day_sunny.svg", import.meta.url).href,
   },
   {
      day: true,
      condition: "cloudy",
      url: new URL("../assets/weather/day_cloudy.svg", import.meta.url).href,
   },
   {
      day: true,
      condition: "rain",
      url: new URL("../assets/weather/day_rain.svg", import.meta.url).href,
   },
   {
      day: true,
      condition: "storm",
      url: new URL("../assets/weather/day_storm.svg", import.meta.url).href,
   },
   {
      day: true,
      condition: "snow",
      url: new URL("../assets/weather/day_snow.svg", import.meta.url).href,
   },
   {
      day: true,
      condition: "fog",
      url: new URL("../assets/weather/day_fog.svg", import.meta.url).href,
   },
   //NIGHT OPTIONS
   {
      day: false,
      condition: "sunny",
      url: new URL("../assets/weather/night_sunny.svg", import.meta.url).href,
   },
   {
      day: false,
      condition: "cloudy",
      url: new URL("../assets/weather/night_cloudy.svg", import.meta.url).href,
   },
   {
      day: false,
      condition: "rain",
      url: new URL("../assets/weather/night_rain.svg", import.meta.url).href,
   },
   {
      day: false,
      condition: "storm",
      url: new URL("../assets/weather/night_storm.svg", import.meta.url).href,
   },
   {
      day: false,
      condition: "snow",
      url: new URL("../assets/weather/night_snow.svg", import.meta.url).href,
   },
   {
      day: false,
      condition: "fog",
      url: new URL("../assets/weather/night_fog.svg", import.meta.url).href,
   },
];

export const apiKey = "e361352166eedca5be0beea7a16e7c64";

export const baseUrl = "http://localhost:3001";
