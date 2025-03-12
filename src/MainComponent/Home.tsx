import { Button } from "../components/ui/button";
import BookingTable from "./Table/BookingTable";
const Home = () => {
  return (
    <div className="mt-3">
      <div className="w-full bg-gradient-to-r from-[#ad8330] to-[#d7ad59] rounded-lg relative p-4">
        <div className="flex flex-col justify-center gap-4 items-start">
          <div className="text-white text-4xl font-bold">
            Hi John, ready for a beach day?
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/src/assets/avatar.png"
              alt="User Avatar"
              className="h-10 w-10"
            />
            <div className="text-white font-[Poppins,Sans-serif] text-lg font-semibold">
              John Smith
            </div>
          </div>{" "}
          <Button variant={"homebutton"}> Book a Sunbed Now</Button>
        </div>

        <img
          src="/src/assets/frame.png"
          alt="Frame"
          className="h-[175px] absolute right-4 bottom-[-10px] "
        />
      </div>
      <BookingTable/>
    </div>
  );
};

export default Home;
