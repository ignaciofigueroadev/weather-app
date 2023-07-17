import ConditionCard from "./ConditionCard";

const Conditions = () => {
  return (
    <section className="flex flex-col bg-background-components px-10 py-5 rounded-md">
      <p className="p-5 text-secondary-color">Air conditions</p>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-10">
          <ConditionCard
            ConditionIcon="/icons/thermometer.svg"
            ConditionTitle="Real Feel"
            ConditionInfo="30°"
          />
          <ConditionCard
            ConditionIcon="/icons/humidity.svg"
            ConditionTitle="Chance of rain"
            ConditionInfo="0%"
          />
        </div>
        <div className="flex flex-col gap-10 mt-10 lg:mt-0">
          <ConditionCard
            ConditionIcon="/icons/wind.svg"
            ConditionTitle="Wind"
            ConditionInfo="0.2km/h"
          />
          <ConditionCard
            ConditionIcon="/icons/uv-index.svg"
            ConditionTitle="UV index"
            ConditionInfo="3"
          />
        </div>
      </div>
    </section>
  );
};

export default Conditions;
