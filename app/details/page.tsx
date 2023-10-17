import Image from "next/image";
import MyForm from "@/components/Contact_Detail";
import { findUserByClerkId } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const page = async () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  // const userDetails = await findUserByClerkId(userId);
  // if (userDetails?.details == true) {
  //   redirect("/settlements");
  // }

  return (
    <div className="p-6">
      <div className="justify-start ">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={120}
          height={120}
        ></Image>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="h2-bold justify-center text-center text-[#170F49]">
          Please provide us details
        </div>
        <div className="text-[#6F6C90] text-[14px] mt-2 justify-center text-center p-2 w-[500px]">
          Please fill the form below to receive a quote. Feel free to add as
          much detail as needed.
        </div>
      </div>
      <div className="flex flex-col items-center justify center">
        <div className="bg-white shadow-lg flex flex-col items-center shadow-[#080F34]-6% w-[1100px] pb-6 m-10 ml-16 rounded-lg">
          <div className="h2-bold text-[#FF781F] mt-6">Contact Details</div>
          <div className="text-[#6F6C90] text-[14px] p-2 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisc.
          </div>
          <div>
            <MyForm></MyForm>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
