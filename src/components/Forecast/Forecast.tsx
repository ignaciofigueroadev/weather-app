// Component imports
import ForecastCards from "./ForecastCards";

// Data import
import data from "../json/data.json";

// Styles import
import styles from "./Forecast.module.css";

const Forecast = () => {
  return (
    <section className="bg-background-components px-10 py-5 rounded-md">
      <p className="p-2 text-secondary-color">Today's forecast</p>
      <section className={styles.forecast}>
        {data.weathers.map((weather) => (
          <ForecastCards
            Time={weather.time}
            WeatherIcon={weather.weatherIcon}
            Weather={weather.weather}
          />
        ))}
      </section>
    </section>
  );
};

export default Forecast;
