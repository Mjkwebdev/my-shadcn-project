import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg shadow">
      {/* Left Section - Search Bar */}
      <div className="relative w-80">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-4 font-[poppins] font-normal pr-10 py-2 text-sm bg-white rounded-full focus:outline-none placeholder:text-[#0d0d0d] text-[#0d0d0d]"
          style={{ borderColor: "rgba(13, 13, 13, 0.2)", borderWidth: "1px" }}
        />

        <div
          className="absolute inset-y-0 right-[2px] m-[3px] rounded-full px-1 py-2 cursor-pointer flex items-center"
          style={{ backgroundColor: "rgba(173, 131, 48, 0.14)" }}
        >
          <MagnifyingGlassIcon className="h-5 w-5 text-[#ad8330]" />
        </div>
      </div>

      {/* Right Section - Bell Icon & Profile */}
      <div className="flex items-center space-x-4">
        <div
          className="p-2 rounded-full shadow cursor-pointer hover:bg-gray-200"
          style={{ backgroundColor: "rgba(173, 131, 48, 0.14)" }}
        >
          <BellIcon className="h-6 w-6 text-[#ad8330]" />
        </div>
        <img
          src="/src/assets/avatar.png"
          alt="User Avatar"
          className="h-10 w-10 rounded-full border border-gray-300 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
