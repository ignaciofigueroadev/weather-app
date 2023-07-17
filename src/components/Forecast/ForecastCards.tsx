// Styles import
import styles from "./Forecast.module.css";

type Props = {
  Time: string;
  WeatherIcon: string;
  Weather: string;
};

const ForecastCards = ({ Time, Weather, WeatherIcon }: Props) => {
  return (
    <div className={styles.forecastCard}>
      <p className="font-bold text-lg">{Time}</p>
      <img src={WeatherIcon} alt="Weather icon" />
      <p className="font-bold text-3xl">{Weather}</p>
    </div>
  );
};

export default ForecastCards;
