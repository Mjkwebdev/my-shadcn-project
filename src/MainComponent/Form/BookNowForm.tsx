import { useState } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function BookNowForm() {
  const navigate = useNavigate()
  const [guests, setGuests] = useState<number>(2); // Set initial type to number
  const [date, setDate] = useState<string>(""); // Set initial type to string

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ guests, date });
  };

  return (
    <div className="p-6 w-full bg-white rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-lg font-[ambit] text-center">Book Your Sunbed</h2>

        <div className="flex flex-col">
          <label
            htmlFor="guests"
            className="font-[poppins] font-medium text-xs text-[#252525]"
          >
            Number of Guests
          </label>
          <input
            type="number"
            id="guests"
            min="1"
            value={guests}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setGuests(Number(e.target.value)) // Ensure value is treated as a number
            }
            className="mt-1 p-2 font-[poppins] text-sm border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="date"
            className="font-[poppins] font-medium text-xs text-[#252525]"
          >
            Select Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDate(e.target.value) // Correct typing for date
            }
            className="mt-1 p-2 font-[poppins] text-sm text-[#0d0d0d] border border-gray-300 rounded-md"
          />
        </div>

        <Button onClick={()=>navigate("/booking")} variant={"booknow"}>Book Now</Button>
      </form>
    </div>
  );
}
