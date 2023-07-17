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
    <div>
      <div className="flex items-center gap-2">
        <img className="w-10" src={ConditionIcon} />
        <p className="text-3xl font-bold">{ConditionTitle}</p>
      </div>
      <div className="pl-12 text-xl">{ConditionInfo}</div>
    </div>
  );
};

export default ConditionCard;
