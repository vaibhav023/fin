import Image from "next/image";
import { Input } from "../ui/input";

const SearchBar = () => {
  return (
    <div className="bg-white relative w-full max-w-[400px] border border-gray-300 rounded-xl px-5">
      <div
        className="bg-white border-r-2 shadow-none border-none relative 
      flex min-h-[40px] items-center gap-1 rounded-xl"
      >
        <Image
          src="/icons/search.svg"
          width={24}
          height={24}
          alt=""
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="Search for anything"
          className="paragraph-regular no-focus placeholder bg-white
          border-none shadow-none outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
