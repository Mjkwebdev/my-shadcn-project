import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StepperForm2() {
  const navigate = useNavigate();

  // Single state for all fields
  const [formData, setFormData] = useState({
    duration: "",
    eco: "",
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
      {/* Beach duration */}
    

      <div className="flex flex-col">
        <label className="font-[poppins] font-medium text-xs text-[#252525]">
        Booking Duration
        </label>
        <select
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="mt-1 font-[poppins] font-normal cursor-pointer text-xs text-[#0d0d0d] p-2 w-full border border-gray-300 rounded-md"
        >
          <option value="">Select</option>
          <option value="Standard">Standard</option>
          <option value="VIP">VIP</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="font-[poppins] font-medium text-xs text-[#252525]">
        Eco-Friendly Option
        </label>
        <select
          name="eco"
          value={formData.eco}
          onChange={handleChange}
          className="mt-1 font-[poppins] font-normal cursor-pointer text-xs text-[#0d0d0d] p-2 w-full border border-gray-300 rounded-md"
        >
          <option value="">(Choose sustainable sunbeds made from recycled materials)</option>
          <option value="Standard">Standard</option>
          <option value="VIP">VIP</option>
        </select>
      </div>

      <div className=" text-[#252525] text-sm font-semibold font-[poppins] ">
      Add-on Privacy Options
        </div>
        <div className="flex gap-8 mt-1 mb-3">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="h-3 w-3" />
            <span className="text-[#0d0d0d] font-normal text-sm font-[poppins]">
            Private Area
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="h-3 w-3" />
            <span className="text-[#0d0d0d] font-normal text-sm font-[poppins]">
            Shaded Area
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="h-3 w-3" />
            <span className="text-[#0d0d0d] font-normal text-sm font-[poppins]">
            Near Water
            </span>
          </label>
         
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
