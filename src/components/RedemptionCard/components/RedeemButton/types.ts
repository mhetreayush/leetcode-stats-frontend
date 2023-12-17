import { ButtonProps } from "@/components/Button";
import { RedemptionItemType } from "../..";

export type RedeemButtonProps = ButtonProps & {
  cardData: Pick<RedemptionItemType, "id" | "points">;
};
