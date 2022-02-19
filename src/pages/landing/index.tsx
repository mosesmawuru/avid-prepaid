import Divider from "components/Divider";
import React from "react";
import AboutPart from "./AboutPart";
import BenefitPart from "./BenefitPart";
import FooterPart from "./FooterPart";

import IntroPart from "./IntroPart";
import ServicePart from "./ServicePart";
import SupportPart from "./SupportPart";

const LandingPage = () => {
  return (
    <div>
      <IntroPart />
      <AboutPart />
      <ServicePart />
      <BenefitPart />
      <SupportPart />
      <Divider />
      <FooterPart />
    </div>
  );
};

export default LandingPage;
