import React from "react";
import Image from "next/image";

interface InfoProps {
  image: string;
  title: string;
  data: {
    title: string;
    description: string;
  }[];
  textFirst: boolean;
}

const Info = ({ image, title, data, textFirst }: InfoProps) => {
  return (
    <div className="bg-[#F5F7FA] flex flex-row gap-5 w-full p-10 max-md:flex-col">
      {textFirst && (
        <div className="py-20 px-10 flex-1 flex flex-col rounded-lg bg-[#dfc9c0]">
          <h2 className="h2-bold text-[36px] mb-2 leading-10">{title}</h2>
          {data.map((item, index) => (
            <div key={index} className="mt-8">
              <h3 className="h3-bold">{item.title}</h3>
              <p className="text-[16px]">{item.description}</p>
            </div>
          ))}
        </div>
      )}
      <div className="py-10 px-10 flex-1 bg-white rounded-lg w-full flex flex-row items-center justify-center">
        <Image src={image} alt="image" width={500} height={500} />
      </div>
      {!textFirst && (
        <div className="py-20 px-10 flex-1 flex flex-col rounded-lg bg-[#A9CECC]">
          <h2 className="h2-bold text-[36px] mb-2 leading-10">{title}</h2>
          {data.map((item, index) => (
            <div key={index} className="mt-8">
              <h3 className="h3-bold">{item.title}</h3>
              <p className="p-regular">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Info;
