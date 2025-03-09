import { MapPinIcon } from "@heroicons/react/24/outline";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useState } from "react";

const cities = [
  { name: "Chakwal", value: "chakwal" },
  { name: "Lahore", value: "lahore" },
  { name: "Karachi", value: "karachi" },
  { name: "Islamabad", value: "islamabad" },
  // Add more cities as needed
];

const CitySelect: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState("");

  const handleSelectCity = (value: string) => {
    setSelectedCity(value);
  };

  return (
    <Select value={selectedCity} onValueChange={handleSelectCity}>
      <SelectTrigger className="w-[29rem] h-[3rem] bg-white mt-1.5">
        <SelectValue placeholder="Where?" />
      </SelectTrigger>
      <SelectContent>
        {cities.map((city) => (
          <SelectItem key={city.value} value={city.value}>
            <MapPinIcon className="h-8 w-8 text-gray-500 mr-2" />
            {city.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CitySelect;