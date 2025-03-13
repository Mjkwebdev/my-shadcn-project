import { Button } from "../../components/ui/button";
const QuickBookingForm = () => {
  return (
    <>
      <div className="text-lg text-[#0d0d0d] font-[ambit] ">Quick Booking</div>
      <div className="bg-[#f5f5f5] rounded-[10px] px-4 py-[14px] mt-2">
        <form className="">
          {/* Location field */}
          <div className="relative z-0 w-full mb-2 group">
            <input
              type="location"
              name="floating_location"
              id="floating_location"
              className="block py-2.5 font-[poppins] font-normal px-0 w-full text-[#0d0d0d] text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:focus:border-[#0d0d0d] focus:outline-none focus:ring-0 focus:border-[#0d0d0d] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_location"
              className="peer-focus:font-normal absolute font-normal text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0d0d0d] peer-focus:dark:text-[#0d0d0d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Add Location...
            </label>
          </div>
          <div className="relative z-0 mb-2 w-full group">
            <input
              type="price_estimate"
              name="floating_price_estimate"
              id="floating_price_estimate"
              className="block py-2.5 font-[poppins] font-normal px-0 w-full text-[#0d0d0d] text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:focus:border-[#0d0d0d] focus:outline-none focus:ring-0 focus:border-[#0d0d0d] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_price_estimate"
              className="peer-focus:font-normal absolute font-normal text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0d0d0d] peer-focus:dark:text-[#0d0d0d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Total Price Estimate
            </label>
          </div>
        </form>

        <div className=" text-[#252525] text-sm font-semibold font-[poppins] ">
          Add-ons
        </div>
        <div className="flex gap-8 mt-2 mb-3">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="h-3 w-3" />
            <span className="text-[#0d0d0d] font-normal text-sm font-[poppins]">
              Drinks
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="h-3 w-3" />
            <span className="text-[#0d0d0d] font-normal text-sm font-[poppins]">
              Towels
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="h-3 w-3" />
            <span className="text-[#0d0d0d] font-normal text-sm font-[poppins]">
              Umbrella
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="h-3 w-3" />
            <span className="text-[#0d0d0d] font-normal text-sm font-[poppins]">
              Novel
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="h-3 w-3" />
            <span className="text-[#0d0d0d] font-normal text-sm font-[poppins]">
              Food
            </span>
          </label>
        </div>

        <Button variant={"booknow"}>Book Now</Button>
      </div>
    </>
  );
};

export default QuickBookingForm;
