import Searchbox from "./SearchCalenderbox";
import SearchButton from "./SearchButton";
import SelectBox from "./SelectBox";
import { useState } from "react";
const SearchInput = () => {
  const [date, setDate] = useState("");
  const [selectedGuest, setSelectedGuest] = useState("2");
  // console.log("selectedGuest", selectedGuest);
  // console.log("date", date);
  return (
    <div
      className="absolute top-[24.5rem] p-2 left-[3rem] flex rounded-full w-[35rem] justify-around"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
    >
      <Searchbox date={date} setDate={setDate} />

      <SelectBox
        selectedGuest={selectedGuest}
        setSelectedGuest={setSelectedGuest}
        maxGuest={18}
      />

      <div className="flex items-center">
        <SearchButton date={date} guests={selectedGuest} />
      </div>
    </div>
  );
};

export default SearchInput;
