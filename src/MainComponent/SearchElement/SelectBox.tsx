import { UserIcon } from "@heroicons/react/24/outline";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

interface SelectProps {
  maxGuest: number;
  selectedGuest: string;
  setSelectedGuest: any;
}
const SelectBox = ({
  maxGuest,
  selectedGuest,
  setSelectedGuest,
}: SelectProps) => {
  const handleSelectGuest = (value: string) => {
    setSelectedGuest(value);
  };

  const guests = Array.from({ length: maxGuest }, (_, i) => i + 1);
  return (
    <Select value={selectedGuest} onValueChange={handleSelectGuest}>
      <SelectTrigger className="w-[17rem] h-[3rem]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {guests.map((num) => (
          <SelectItem key={num} value={num.toString()}>
            <UserIcon className="h-8 w-8 " />
            <div className="font-[poppins] text-sm text-[#0d0d0d]">
              {num} Guest{num > 1 ? "s" : ""}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectBox;
