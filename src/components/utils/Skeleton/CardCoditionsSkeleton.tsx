type CardConditionsSkeletonProps = {
  totalCards: number;
};

const CardConditionsSkeleton = ({
  totalCards,
}: CardConditionsSkeletonProps) => {
  const skeletonCards = Array.from({ length: totalCards }, (_, index) => (
    <div
      key={index}
      className="bg-background-components animate-pulse flex flex-col justify-center items-center gap-2 p-5"
    >
      <div className="h-10 w-10 lg:h-20 lg:w-20 bg-background rounded-full" />
      <div className="h-5 w-40 lg:h-5 lg:w-40 bg-background rounded-full" />
      <div className="h-5 w-40 lg:h-5 lg:w-40 bg-background rounded-full mt-5" />
    </div>
  ));

  return (
    <section className="flex flex-col rounded-md">
      <div className="grid grid-cols-2 gap-5">{skeletonCards}</div>
    </section>
  );
};

export default CardConditionsSkeleton;
