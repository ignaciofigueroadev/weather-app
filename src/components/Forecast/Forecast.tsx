// Component imports
import ForecastCards from "./ForecastCards";

// Data import
import data from "../json/data.json";

// Styles import
import styles from "./Forecast.module.css";

type Props = {
  city: string;
};

const Forecast = ({ city }: Props) => {
  return (
    <>
      <p className="text-secondary-color font-medium">
        Forecast: ("In development")
      </p>
      <section className="bg-background-components px-10 py-5 rounded-md">
        <section className={styles.forecast}>
          {data.weathers.map((weather, index) => (
            <ForecastCards
              key={index}
              Time={weather.time}
              WeatherIcon={weather.weatherIcon}
              Weather={weather.weather}
            />
          ))}
        </section>
      </section>
    </>
  );
};

export default Forecast;
