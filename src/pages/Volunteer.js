import React from "react";
import VolMain from "../components/volunteer/VolMain";
import VolWhat from "../components/volunteer/VolWhat";
import VolBenefits from "../components/volunteer/VolBenefits";
import VolPath from "../components/volunteer/VolPath";
import VolApply from "../components/volunteer/VolApply";
import JoinUs from "../components/JoinUs";

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
