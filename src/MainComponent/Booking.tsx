import { CalendarIcon } from "lucide-react";
import { UserIcon } from "@heroicons/react/24/outline";
import LoginForm from "./Form/LoginForm";

const Booking = () => {
  return (
    <div className="flex items-start gap-12 py-6  mx-24">
      <div className="w-[35%] bg-white shadow-lg rounded-lg border border-gray-200  p-6">
        <div className="flex items-center border-b pb-3">
          <img
            src="/src/assets/avatar.jpg"
            alt="Beach Club"
            className="w-16 h-16 rounded-full mr-3"
          />
          <div>
            <h2 className="text-lg font-[poppins] font-semibold">
              Calabro Beach Club
            </h2>
            <p className="text-sm font-[poppins] text-gray-500">
              9 promenade de la mer, Menton, France
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center py-3 border-b">
          <div className="flex gap-2 items-center text-gray-700 font-semibold font-[poppins]">
            <UserIcon className="h-6 w-6 text-blue-700 " />
            <span>2</span>
          </div>
          <div className="flex gap-3 items-center text-gray-700 font-semibold font-[poppins]">
            {/* <FaRegCalendarAlt className="mr-1" /> */}
            <CalendarIcon size={20} className="text-blue-700" />
            <span>01 May 2025</span>
          </div>
        </div>
        <div className="py-3 flex flex-col gap-6">
          <div className="flex justify-between text-gray-700">
            <span>Sunbed - All rows x2</span>
            <span className="font-semibold">40,00 €</span>
          </div>
          <div className="flex justify-between text-gray-500 mt-1">
            <span>Parasol (1 per 2 pers) x1</span>
            <span className="font-semibold">Include</span>
          </div>
        </div>
      </div>
      <div className="w-[65%]">
        <LoginForm />
      </div>
    </div>
  );
};

export default Booking;
