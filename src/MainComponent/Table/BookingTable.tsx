import React from "react";
import { Button } from "../../components/ui/button";
interface Booking {
  id: string;
  sunbedType: "VIP" | "Cabana" | "Standard";
  dateTime: string;
  addOns: string;
  status: "Confirmed" | "Ongoing" | "Cancelled";
}

const bookings: Booking[] = [
  {
    id: "124751",
    sunbedType: "VIP",
    dateTime: "12/02/2025, 09:00 AM",
    addOns: "Extra Towels",
    status: "Confirmed",
  },
  {
    id: "124752",
    sunbedType: "Cabana",
    dateTime: "12/02/2025, 10:30 AM",
    addOns: "Breakfast",
    status: "Ongoing",
  },
  {
    id: "124754",
    sunbedType: "Standard",
    dateTime: "12/02/2025, 11:00 AM",
    addOns: "Drinks",
    status: "Cancelled",
  },
];

const BookingTable: React.FC = () => {
  return (
    <div className="mt-3 flex flex-col gap-4">
      <div className="text-lg font-bold text-[#0d0d0d] ">
        Current & Upcoming Bookings
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#f5f5f5] rounded-[10px]">
          <thead>
            <tr className=" text-[#252525] font-semibold text-sm font-[Poppins,Sans-serif] border-b border-gray-300">
              <th className="p-3 font-[Poppins,Sans-serif] text-left">#</th>
              <th className="p-3 font-[Poppins,Sans-serif] text-left">
                Booking ID
              </th>
              <th className="p-3 font-[Poppins,Sans-serif] text-left">
                Sunbed Type
              </th>
              <th className="p-3 font-[Poppins,Sans-serif] text-left">
                Date & Time
              </th>
              <th className="p-3 font-[Poppins,Sans-serif] text-left">
                Add-ons
              </th>
              <th className="p-3 font-[Poppins,Sans-serif] text-left">
                Booking Status
              </th>
              <th className="p-3 font-[Poppins,Sans-serif] text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, index) => (
              <tr
                key={booking.id}
                className={` text-[#252525] font-normal text-sm ${
                  index !== bookings.length - 1 && "border-b border-gray-300"
                }`}
              >
                <td className="p-3 font-[Poppins,Sans-serif]">{index}</td>
                <td className="p-3 font-[Poppins,Sans-serif]">{booking.id}</td>
                <td className="p-3 font-[Poppins,Sans-serif]">
                  {booking.sunbedType}
                </td>
                <td className="p-3 font-[Poppins,Sans-serif]">
                  {booking.dateTime}
                </td>
                <td className="p-3 font-[Poppins,Sans-serif]">
                  {booking.addOns}
                </td>
                <td className="p-3 font-[Poppins,Sans-serif]">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-normal"
                    style={{
                      backgroundColor:
                        booking.status === "Confirmed"
                          ? "rgba(59, 167, 118, 0.3)"
                          : booking.status === "Ongoing"
                          ? "rgba(241, 90, 41, 0.3)"
                          : "rgba(215, 38, 56, 0.5)",
                      color: "#252525",
                    }}
                  >
                    {booking.status}
                  </span>
                </td>
                <td>
                  {" "}
                  <Button variant={"actionButton"}>Modify</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingTable;
