import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";

const Hero = () => {
  const images = ["images/fed_upi 1.png", "images/upi_section 1.png", "images/upi-illus 1.png"];
  return (
    
    <div className="bg-[#F5F7FA] flex flex-col w-full items-center px-10 py-14">
      <h1 className="text-[48px] max-sm:text-[30px] leading-none">
        Seamless experience
      </h1>
      <h2 className="text-[64px] max-sm:text-[40px] leading-none mt-2">
        with Open Banking
      </h2>
      <Image
        className="mt-2"
        src="/images/line.png"
        width={400}
        height={400}
        alt="line"
      />
      <p className="mt-3 mb-5 text-center max-w-3xl max-sm:text-[12px]">
        Our advanced technology and secure systems provide a safe and reliable
        way to transfer funds, allowing you to benefit from reduced processing
        times and improved efficiency.
      </p>
      <Carousel images={images}/>
    </div>
  );
};

export default Hero;
