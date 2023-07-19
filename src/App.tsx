// Hook imports
import { useEffect, useState } from "react";

// Component imports
import Conditions from "./components/Conditions/Conditions";
import Footer from "./components/Footer/Footer";
import Forecast from "./components/Forecast/Forecast";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
import Loader from "./components/utils/Loader/Loader";

// dayjs import
import dayjs from "dayjs";

function App() {
  const [location, setLocation] = useState<string>("");
  const [weatherData, setWeatherData] = useState<{}>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = (city: string) => {
    setLocation(city);
  };

  const searchLocation = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsLoading(true);
      // setWeatherData({});
    }
  };

  const convertToCelsius = (temperature: number) => {
    if (temperature) {
      return (temperature - 273.15).toFixed(0);
    }
    return "";
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const API_KEY = "281f44d1895cfeaa30ef8864824e9334";
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          location
        )}&appid=${API_KEY}`;

        const response = await fetch(API);
        const data = await response.json();

        setWeatherData(data);
        setIsLoading(!isLoading);
      } catch (error) {
        setIsLoading(isLoading);
      }
    };

    if (location && isLoading) {
      fetchWeatherData();
    }
  }, [location, isLoading]);

  return (
    <div className="min-h-screen bg-background text-principal-color px-10 lg:px-80 font-thin flex flex-col gap-11">
      <Header onSearch={handleSearch} onKeyPress={searchLocation} />

      {isLoading ? (
        <Loader />
      ) : (
        <Weather
          city={weatherData.name}
          temperature={convertToCelsius(weatherData.main?.temp)}
          tempMax={convertToCelsius(weatherData.main?.temp_max)}
          tempMin={convertToCelsius(weatherData.main?.temp_min)}
          location={weatherData.sys?.country}
        />
      )}

      <Forecast city={location} />

      {isLoading ? (
        <Loader />
      ) : (
        <Conditions
          feelsLikeValue={convertToCelsius(weatherData.main?.feels_like)}
          humidityValue={weatherData.main?.humidity}
          windValue={weatherData.wind?.speed}
          sunriseValue={dayjs.unix(weatherData.sys?.sunrise).format("HH:mm ")}
          sunsetValue={dayjs.unix(weatherData.sys?.sunset).format("HH:mm ")}
          visibilityValue={weatherData.visibility}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
