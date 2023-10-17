import React from "react";


// export const InfoType3 = () => {
//   return (
//     (<div className={`bg-[${background}] flex flex-row w-full justify-between m-1 max-md:flex-col`}>
//         <div className="flex flex-1 flex-col  ">
//         {data.map((item, index) => (
//             <div key={index} className="mt-8 m-10 ">
//               <p className="text-[28px] w-[409px] leading-normal">{item.title}</p>
//               <p className="mt-10 text-[16px] w-[409px] leading-normal">{item.description}</p>
//             </div>
//           ))}
//         </div>
        
//         <div className=" flex m-10 mb-0 bg-[#1F2933] w-[520px] items-center justify-center">
//           <div className="p-2 mb-0 w-full bg-black text-white break-words w-[409px]">
//   <p className="break-words max-w-full text-[12px] ">{code_data}</p>
//   </div>
// </div>


//       </div>)
//   )
// }


interface InfoType2Props {
  title: string;
  data: {
    title: string;
    description: string;
  }[];
  code_data:string;
  textFirst: boolean;
}
interface InfoType3Props {
  title: string;
  data: {
    title: string;
    description: string;
  }[];
  code_data:string;
  textFirst: boolean;
  
}

const InfoType2 = ({ title, data, code_data,textFirst }: InfoType2Props) => {
  return (
    <div className="flex flex-col  p-14 items-center ml-10 mr-10 mt-10 rounded-lg max-md:flex-col">
       <h2 className="h2-bold text-[36px] mb-2 p-4 leading-10">{title}</h2>
       <div className={`flex flex-row w-full justify-between m-1 max-md:flex-col`}>
        <div className="flex flex-1 flex-col  ">
        {data.map((item, index) => (
            <div key={index} className="mt-8 m-10 ">
              <p className="text-[28px] w-[409px] leading-normal">{item.title}</p>
              <p className="mt-10 text-[16px] w-[409px] leading-normal">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className=" flex m-10 mb-0 bg-[#1F2933] w-[520px] h-[300px] items-center justify-center">
          <div className="p-2 mb-0 w-full bg-black text-white break-words w-[409px] ">
  <p className="break-words max-w-full text-[12px] ">{code_data}</p>
  </div>
</div>


      </div>

   
    </div>

  )
};


const InfoType3 = ({ title, data, code_data,textFirst }: InfoType3Props) => {
  return (
    <div className="flex flex-col  p-14 items-center ml-10 mr-10 mt-10 rounded-lg max-md:flex-col">
       <h2 className="h2-bold text-[36px] mb-4 p-4 leading-10">{title}</h2>
       <div className={`flex flex-row w-full justify-between gap-8 m-1 max-md:flex-col`}>
       <div className=" flex m-10 mb-0 bg-[#1F2933] w-[520px] h-[300px] items-center justify-center">
          <div className="p-2 mb-0 w-full bg-black text-white break-words w-[409px]">
  <p className="break-words max-w-full text-[12px] ">{code_data}</p>
  </div>
</div>
        <div className="flex flex-1 flex-col  m-10">
        {data.map((item, index) => (
            <div key={index} className="mt-8 m-10 ">
              <p className="text-[28px] w-[409px] leading-normal">{item.title}</p>
              <p className="mt-10 text-[16px] w-[409px] leading-normal">{item.description}</p>
            </div>
          ))}
        </div>
        
      


      </div>

   
    </div>

  )
};

export default InfoType2;
export {InfoType3}