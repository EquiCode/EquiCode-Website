import React from "react";
import VolMain from "./volunteer/VolMain";
import VolWhat from "./volunteer/VolWhat";
import VolBenefits from "./volunteer/VolBenefits";
import VolPath from "./volunteer/VolPath";
import VolApply from "./volunteer/VolApply";
import JoinUs from "./JoinUs";

export default function Volunteer() {
  return (
    <div>
      <VolMain />
      <VolWhat />
      <VolBenefits />
      <VolPath />
      <VolApply />
      <JoinUs />
    </div>
  );
}
