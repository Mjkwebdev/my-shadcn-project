import { useState } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function StepperForm1() {
  const navigate = useNavigate();

  // Single state for all fields
  const [formData, setFormData] = useState({
    location: "",
    date: "",
    timeSlot: "",
    guests: "",
    sunbedType: "",
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    navigate("/booking"); // Redirect on form submit
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Beach Location */}
      <div className="flex flex-col">
        <label className="font-[poppins] font-medium text-xs text-[#252525]">
          Beach Location
        </label>
        <input
          type="text"
          name="location"
          placeholder="Add Location..."
          value={formData.location}
          onChange={handleChange}
          className="mt-1 font-[poppins] font-normal text-xs text-[#0d0d0d] p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      {/* Select Date */}
      <div className="flex flex-col">
        <label className="font-[poppins] font-medium text-xs text-[#252525]">
          Select Date
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="mt-1 font-[poppins] font-normal text-xs text-[#0d0d0d] p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      {/* Time Slot & Guests */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="font-[poppins] font-medium text-xs text-[#252525]">
            Choose Time Slot
          </label>
          <select
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleChange}
            className="mt-1 font-[poppins] font-normal text-xs text-[#0d0d0d] p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
          </select>
        </div>
        <div>
          <label className="font-[poppins] font-medium text-xs text-[#252525]">
            Number of Guests
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="mt-1 font-[poppins] font-normal text-xs text-[#0d0d0d] p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>

      {/* Sunbed Type */}
      <div className="flex flex-col">
        <label className="font-[poppins] font-medium text-xs text-[#252525]">
          Choose Sunbed Type
        </label>
        <select
          name="sunbedType"
          value={formData.sunbedType}
          onChange={handleChange}
          className="mt-1 font-[poppins] font-normal cursor-pointer text-xs text-[#0d0d0d] p-2 w-full border border-gray-300 rounded-md"
        >
          <option value="">Select</option>
          <option value="Standard">Standard</option>
          <option value="VIP">VIP</option>
        </select>
      </div>

      {/* Price */}
      <div className="flex gap-2 items-center bg-gray-100 p-2 rounded-md">
        <div className="font-[poppins] font-medium text-xs text-[#252525]">
          Price
        </div>
        <span className="p-3 rounded-[6px] text-[20px] font-[poppins] font-semibold text-[#B56E08] bg-[rgba(157,157,157,0.3)]">
          $220.00
        </span>
      </div>
    </form>
  );
}
