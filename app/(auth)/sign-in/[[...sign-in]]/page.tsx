import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
    <SignIn />
    <div className="text-[14px] p-4 ">*By signing in, you are continuing to our terms and conditions.</div>
    </div>
  )
}
