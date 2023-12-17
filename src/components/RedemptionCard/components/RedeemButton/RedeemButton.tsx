"use client";

import { Button } from "../../../Button";
import { RedeemButtonProps } from "./types";

const RedeemButton = (props: RedeemButtonProps) => {
  const handleOnclick = () => {
    // on click logic here
  };
  return (
    <Button onClick={handleOnclick} {...props}>
      Redeem
    </Button>
  );
};

export { RedeemButton };
