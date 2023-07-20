// Hook imports
import { useEffect, useState } from "react";

// Component imports
import Conditions from "./components/Conditions/Conditions";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
import Loader from "./components/utils/Loader/Loader";
import Welcome from "./components/utils/Welcome/Welcome";
// import Forecast from "./components/Forecast/Forecast";

// dayjs import
import dayjs from "dayjs";

type WeatherData = {
  name: string;
  main?: {
    temp: number;
    temp_max: number;
    temp_min: number;
    feels_like: number;
    humidity: number;
  };
  sys?: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  wind?: {
    speed: number;
  };
  visibility: number;
};

function App() {
  const [location, setLocation] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = (city: string) => {
    setLocation(city);
  };

  const searchLocation = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsLoading(true);
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
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
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
        <>
          {weatherData ? (
            <Weather
              city={weatherData.name}
              temperature={convertToCelsius(weatherData.main?.temp || 0)}
              tempMax={convertToCelsius(weatherData.main?.temp_max || 0)}
              tempMin={convertToCelsius(weatherData.main?.temp_min || 0)}
              location={weatherData.sys?.country || ""}
            />
          ) : (
            <Welcome />
          )}

          {/* <Forecast /> */}

          <Conditions
            feelsLikeValue={convertToCelsius(
              weatherData?.main?.feels_like ?? 0
            )}
            humidityValue={weatherData?.main?.humidity || 0}
            windValue={weatherData?.wind?.speed || 0}
            sunriseValue={dayjs
              .unix(weatherData?.sys?.sunrise || 0)
              .format("HH:mm")}
            sunsetValue={dayjs
              .unix(weatherData?.sys?.sunset || 0)
              .format("HH:mm")}
            visibilityValue={weatherData?.visibility || 0}
          />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
