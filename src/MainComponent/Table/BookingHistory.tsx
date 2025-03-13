import React from "react";
interface Booking {
  location: string;
}

const bookings: Booking[] = [
  {
    location: "Coastal Haven",
  },
  {
    location: "Coastal Haven",
  },
  {
    location: "Coastal Haven",
  },
];

const BookingHistory: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-lg text-[#0d0d0d] font-[ambit] ">
        Booking History
      </div>
      <div className="overflow-x-auto flex flex-col items-center bg-[#f5f5f5] rounded-[10px]">
        <table className="min-w-full ">
          <thead>
            <tr className=" text-[#252525]  border-b border-gray-300">
              <th className="p-3 font-semibold text-sm font-[poppins] text-left">
                #
              </th>

              <th className="p-3 font-semibold text-sm font-[poppins] text-left">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, index) => (
              <tr key={index} className=" text-sm border-b border-gray-300">
                <td className="p-3 text-sm font-normal  text-[#252525] font-[poppins]">
                  {index}
                </td>
                <td className="p-3 text-sm font-[poppins] font-normal  text-[#252525]">
                  {booking.location}
                </td>

                <td>
                  <button className="text-[#4a90e2] italic font-medium text-sm">
                    Re-book
                  </button>
                  {/* <Button variant={"actionButton"}>Modify</Button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-[#b56e08] font-semibold font-[poppins] text-base cursor-pointer my-3">
          Download Invoice
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
