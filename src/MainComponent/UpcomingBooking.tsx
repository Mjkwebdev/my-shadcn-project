import { CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";

const UpcomingBooking = () => {
  return (
    <div>
      <p className="text-2xl font-bold font-[ambit] pt-3"> Upcoming Bookings</p>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-8 gap-3 w-full flex bg-[#F5F5F5] p-4 rounded-[11px]">
          <img src="src/assets/image (1).png" className="rounded-md" />
          <div className="flex flex-col justify-center gap-4">
            <div className=" font-[ambit] font-bold text-[20px]">
              {" "}
              Golden Sands Beach – VIP Cabana
            </div>
            <CardContent className="text-black flex flex-col gap-3 mt-1">
              <p className="font-normal text-sm font-[poppins]">
                🗓️ March 5, 2025 – 10:00 AM - 6:00 PM
              </p>
              <p className="font-normal text-sm font-[poppins]">
                📍 123 Seaside Avenue, Rügen Island, Germany
              </p>
              <p className="font-normal text-sm font-[poppins]">
                🌍 Coordinates: 54.4234° N, 13.4299° E
              </p>
              <p className="font-normal text-sm font-[poppins]">
                Booking Status :
                <span
                  className="ml-2 px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor: "rgba(59, 167, 118, 0.4)",
                  }}
                >
                  Confirmed
                </span>
              </p>
            </CardContent>
            <CardFooter className="mt-4">
              <Button variant="booknow" className="text-[white] bg-[#B56E08]">
                Add to Calendar
              </Button>
              <Button variant="link">Need Help?</Button>
            </CardFooter>
          </div>
        </div>
        <div className="col-span-4 bg-[#b56e08] px-4 py-3 rounded-[11px] shadow-md flex flex-col">
          <div className="font-bold text-white text-[20px] font-[ambit]">
            Booking starts in
          </div>
          <div className="flex-1 flex items-center justify-center">
            <p className="text-[70px] font-[poppins] font-semibold text-white">
              08:45:30
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBooking;
