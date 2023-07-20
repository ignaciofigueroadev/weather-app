type Props = {
  city: string;
  temperature: string;
  tempMax: string;
  tempMin: string;
  location: string;
};

const Weather = ({ city, temperature, tempMax, tempMin, location }: Props) => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-5xl lg:text-7xl font-bold">
          {city !== "" ? city : "Welcome"}
        </h1>
        <div className="text-5xl lg:text-7xl lg:mt-10 font-bold flex items-center gap-16">
          {temperature === "" ? "" : `${temperature}°`}
          {tempMax !== "" && tempMin !== "" && (
            <p className="text-secondary-color text-xl font-bold">{`${tempMax}° / ${tempMin}°`}</p>
          )}
        </div>
        <div className="flex items-center flex-col gap-2">
          {location !== "" && (
            <img src="/icons/location.svg" alt="Location" className="w-5" />
          )}
          <span>{location !== "" ? location : ""}</span>
        </div>
      </div>
    </section>
  );
};

export default Weather;
