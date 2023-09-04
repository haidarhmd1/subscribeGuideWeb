"use client";

import { PrimaryButton } from "components/Button";

export default function Subscriptions() {
  return (
    <div>
      <PrimaryButton onClick={() => alert(1)}>Add Subscriptions</PrimaryButton>
    </div>
  );
}
