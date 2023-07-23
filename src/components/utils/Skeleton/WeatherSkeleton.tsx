const WeatherSkeleton = () => {
  return (
    <section className="flex flex-col items-center bg-background-components py-20 px-10 gap-10 rounded animate-pulse">
      <div className="h-10 bg-background rounded-full w-2/3" />
      <div className="text-5xl lg:text-7xl font-bold flex items-center gap-4">
        <div className="h-16 w-16 bg-background rounded-3xl" />
        <div className="h-16 w-16 bg-background rounded-3xl" />
      </div>
    </section>
  );
};

export default WeatherSkeleton;
