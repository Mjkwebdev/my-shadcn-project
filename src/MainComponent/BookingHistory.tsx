import React from "react";
interface Booking {
  location: string;
}

const bookings: Booking[] = [
  {
    location: "Coastal Haven",
  },
];

const BookingHistory: React.FC = () => {
  return (
    <div className="mt-3 flex flex-col gap-4">
      <div className="text-lg font-bold text-[#0d0d0d] ">Booking History</div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#f5f5f5] rounded-[10px]">
          <thead>
            <tr className=" text-[#252525] font-semibold text-sm font-[Poppins,Sans-serif] border-b border-gray-300">
              <th className="p-3 font-[Poppins,Sans-serif] text-left">#</th>

              <th className="p-3 font-[Poppins,Sans-serif] text-left">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, index) => (
              <tr
                key={index}
                className={`  font-normal text-sm ${
                  index !== bookings.length - 1 && "border-b border-gray-300"
                }`}
              >
                <td className="p-3 font-normal  text-[#252525] font-[Poppins,Sans-serif]">
                  {index}
                </td>
                <td className="p-3 font-[Poppins,Sans-serif] font-normal  text-[#252525]">
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
      </div>
    </div>
  );
};

export default BookingHistory;
