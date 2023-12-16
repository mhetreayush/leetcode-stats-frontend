import { RedemptionItemType } from "./types";

const RedemptionCard = ({
  name,
  points,
  currentPoints,
}: Omit<RedemptionItemType, "id">) => {
  return (
    <div className="p-2 bg-gray-800 rounded-md flex flex-col gap-2 text-gray-200">
      <h1>{name}</h1>
      <p>points: {points}</p>
      <p>points to earn: {points - currentPoints}</p>
      <button
        disabled={points > currentPoints}
        className="disabled:opacity-30 disabled:cursor-not-allowed w-full p-2 rounded-md flex items-center justify-center bg-white text-black"
      >
        Redeem
      </button>
    </div>
  );
};

export { RedemptionCard };
