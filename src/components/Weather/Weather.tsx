type Props = {
  city: string;
  temperature: string;
  tempMax: string;
  tempMin: string;
  location: string;
};

const Weather = ({ city, temperature, tempMax, tempMin, location }: Props) => {
  return (
    <section className="flex flex-col items-center bg-background-components py-10 gap-10 rounded">
      <h1 className="text-5xl lg:text-7xl font-bold">{city}</h1>
      <div className="text-5xl lg:text-7xl font-bold flex items-center gap-4">
        {temperature === "" ? "" : `${temperature}°`}
        {tempMax !== "" && tempMin !== "" && (
          <p className="text-secondary-color text-xl font-bold">{`${tempMax}° / ${tempMin}°`}</p>
        )}
      </div>
      <div className="flex flex-col items-center gap-2">
        {location !== "" && (
          <img src="/icons/location.svg" alt="Location" className="w-5" />
        )}
        <span className="text-xs">{location !== "" ? location : ""}</span>
      </div>
    </section>
  );
};

export default Weather;
