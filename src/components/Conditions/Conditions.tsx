import ConditionCard from "./ConditionCard";

type Props = {
  feelsLikeValue: any;
  humidityValue: any;
  windValue: any;
  visibilityValue: any;
  sunriseValue: any;
  sunsetValue: any;
};

const Conditions = ({
  feelsLikeValue,
  humidityValue,
  visibilityValue,
  windValue,
  sunriseValue,
  sunsetValue,
}: Props) => {
  const convertToKilometers = (value: number) => {
    if (value) {
      return (value / 1000).toFixed(2);
    }
    return "";
  };

  const convertToCelsius = (temperature: number) => {
    if (temperature) {
      return (temperature - 273.15).toFixed(0);
    }
    return "";
  };

  return (
    <>
      <p className="text-secondary-color font-medium">Air conditions</p>
      <section className="flex flex-col rounded-md">
        <div className="grid grid-cols-2 gap-5">
          <ConditionCard
            ConditionIcon={"/icons/thermometer.svg"}
            ConditionTitle={"Feels like"}
            ConditionInfo={
              feelsLikeValue ? `${convertToCelsius(feelsLikeValue)}°` : "N/A"
            }
          />
          <ConditionCard
            ConditionIcon={"/icons/humidity.svg"}
            ConditionTitle={"Humidity"}
            ConditionInfo={humidityValue ? `${humidityValue}%` : "N/A"}
          />
          <ConditionCard
            ConditionIcon={"/icons/wind.svg"}
            ConditionTitle={"Wind"}
            ConditionInfo={windValue ? `${windValue}km/h` : "N/A"}
          />
          <ConditionCard
            ConditionIcon={"/icons/visibility.svg"}
            ConditionTitle={"Visibility"}
            ConditionInfo={
              visibilityValue
                ? `${convertToKilometers(visibilityValue)}km`
                : "N/A"
            }
          />
          <ConditionCard
            ConditionIcon={"/icons/sunrise.svg"}
            ConditionTitle={"Sunrise"}
            ConditionInfo={sunriseValue || "N/A"}
          />
          <ConditionCard
            ConditionIcon={"/icons/sunset.svg"}
            ConditionTitle={"Sunset"}
            ConditionInfo={sunsetValue || "N/A"}
          />
        </div>
      </section>
    </>
  );
};

export default Conditions;
