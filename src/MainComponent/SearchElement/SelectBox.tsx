import { UsersIcon, UserIcon } from "@heroicons/react/24/outline";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { useState } from "react";

interface SelectProps {
  maxGuest: number;
}
const SelectBox = ({ maxGuest }: SelectProps) => {
  const [selectedGuest, setSelectedGuest] = useState("2");
  const handleSelectGuest=( value: string)=>{
      setSelectedGuest(value);
  }
  const guests = Array.from({ length: maxGuest }, (_, i) => i + 1);
  return (
    <Select value={selectedGuest} onValueChange={handleSelectGuest}>
      <SelectTrigger className="w-[17rem] h-[3rem] mb-2 bg-white">
        <SelectValue/> 
      </SelectTrigger>
      <SelectContent>
        {guests.map((num) => (
          <SelectItem key={num} value={num.toString()}>
            {num == 1 ? (
              <UserIcon className="h-8 w-8 text-gray-500 " />
            ) : (
              <UsersIcon className="h-8 w-8 text-gray-500" />
            )}
           {num} Guest{num > 1 ? "s" : ""}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectBox;
