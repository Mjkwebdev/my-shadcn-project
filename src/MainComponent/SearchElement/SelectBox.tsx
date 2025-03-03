import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../components/ui/select";

const SelectBox = () => {
  return (
    <Select>
    <SelectTrigger className="w-[10rem] h-full">
      <SelectValue placeholder="2 guests" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="1">1 guests</SelectItem>
      <SelectItem value="2">2 guests</SelectItem>
      <SelectItem value="3">3 guests</SelectItem>
      <SelectItem value="4">4 guests</SelectItem>
      <SelectItem value="5">5 guests</SelectItem>
      <SelectItem value="6">6 guests</SelectItem>
      <SelectItem value="7">7 guests</SelectItem>
      <SelectItem value="8">8 guests</SelectItem>
      <SelectItem value="9">9 guests</SelectItem>
      <SelectItem value="10">10 guests</SelectItem>
      <SelectItem value="11">11 guests</SelectItem>
      <SelectItem value="12">12 guests</SelectItem>
    </SelectContent>
  </Select>
  )
}

export default SelectBox