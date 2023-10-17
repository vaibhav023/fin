import React from "react";
import Image from "next/image";

interface FeatureDataProps {
  icon: string;
  data: string;
}

const FeatureData = ({ icon, data }: FeatureDataProps) => {
  return (
    <div className="bg-white w-full p-8 m-0">
    <div className="flex flex-row gap-3 justify-center items-center">
      <Image src={icon} width={50} height={50} alt="icon" />
      <p className="w-[280px] text-[16px] leading-[24px] text-[#272D37]">
        {data}
      </p>
    </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="flex flex-row justify-between px-10 py-5 bg-white max-md:flex-col max-md:gap-7 max-md:py-5">
      <FeatureData
        icon="/images/icon1.png"
        data="Fastest UPI Payment Processor"
      />
      <FeatureData
        icon="/images/icon2.png"
        data="Superfast Onboarding & Settlement Service Provider"
      />
      <FeatureData
        icon="/images/icon3.png"
        data="Highly Secured and on Cutting-Edge Technologies"
      />
    </div>
  );
};

export default Features;
