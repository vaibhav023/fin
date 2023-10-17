import { auth } from "@clerk/nextjs";
import SettlementTable from "@/components/settlements/settlementTable";
import CurrentLocation from "@/components/shared/CurrentLocation";
import { redirect } from "next/navigation";
import { findUserByClerkId } from "@/lib/actions/user.action";

const Settlements = async () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  // const userDetails = await findUserByClerkId(userId);
  // if (userDetails?.details == undefined || userDetails.details == false) {
  //   redirect("/details");
  // }

  return (
    <div className="bg-[#FAFBFC] p-5">
      <CurrentLocation />
      <SettlementTable />
    </div>
  );
};

export default Settlements;
