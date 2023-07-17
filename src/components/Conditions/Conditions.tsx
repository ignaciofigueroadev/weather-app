// Component import
import ConditionCard from "./ConditionCard";

// Data import
import data from "../json/data.json";

const Conditions = () => {
  return (
    <section className="flex flex-col rounded-md">
      <p className="p-5 text-secondary-color">Air conditions</p>
      <div className="grid grid-cols-2 gap-5">
        {data.conditions.map((condition) => (
          <ConditionCard
            ConditionIcon={condition.icon}
            ConditionTitle={condition.title}
            ConditionInfo={condition.info}
          />
        ))}
      </div>
    </section>
  );
};

export default Conditions;
