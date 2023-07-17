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
      <img className="w-14" src={ConditionIcon} />
      <p className="text-3xl font-bold">{ConditionTitle}</p>
      <p className="text-xl">{ConditionInfo}</p>
    </div>
  );
};

export default ConditionCard;
