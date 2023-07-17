// Component import
import ConditionCard from "./ConditionCard";

// Data import
import data from "../json/data.json";

const Conditions = () => {
  return (
    <>
      <p className=" text-secondary-color font-medium">Air conditions</p>
      <section className="flex flex-col rounded-md">
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
    </>
  );
};

export default Conditions;
