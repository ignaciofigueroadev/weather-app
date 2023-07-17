const Weather = () => {
  return (
    <section className="flex flex-row items-center gap-10 py-5 lg:flex-row lg:justify-between md:flex-row md:justify-between">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl lg:text-7xl font-bold">Buenos Aires</h1>
        <p className="text-secondary-color text-xs">Chances of rain: 0%</p>
        <div className="text-5xl lg:text-7xl lg:mt-10 font-bold">21°</div>
      </div>
      <div className="flex items-center justify-between">
        <img src="/icons/sunny.svg" className="w-60" />
      </div>
    </section>
  );
};

export default Weather;
