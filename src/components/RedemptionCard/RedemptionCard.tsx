import { RedeemButton } from ".";
import { RedemptionItemType } from "./types";

const RedemptionCard = ({
  name,
  points,
  currentPoints,
  id,
}: RedemptionItemType) => {
  return (
    <div className="p-2 bg-gray-800 rounded-md flex flex-col gap-2 text-gray-200">
      <h1>{name}</h1>
      <p>points: {points}</p>
      <p>points to earn: {points - currentPoints}</p>
      <RedeemButton
        disabled={points > currentPoints}
        cardData={{
          id,
          points,
        }}
      >
        Redeem
      </RedeemButton>
    </div>
  );
};

export { RedemptionCard };
