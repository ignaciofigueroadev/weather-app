type Props = {
  ConditionIcon: string;
  ConditionTitle: string;
  ConditionInfo: string;
};

const ConditionCard = ({
  ConditionIcon,
  ConditionTitle,
  ConditionInfo,
}: Props) => {
  return (
    <div className="bg-background-components flex flex-col justify-center items-center gap-10 p-5 rounded-md">
      <div className="flex flex-col items-center gap-1">
        <img className="w-10 lg:w-20" src={ConditionIcon} />
        <p className="text-2xl text-center">{ConditionTitle}</p>
      </div>
      <p className="text-xl font-bold">{ConditionInfo}</p>
    </div>
  );
};

export default ConditionCard;
