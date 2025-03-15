import { useState } from "react";
import FilterButton from "./FilterButton";
import FindCity from "./FindCity";
import SearchButton from "./SearchElement/SearchButton";
import SearchCalenderbox from "./SearchElement/SearchCalenderbox";
import SelectBox from "./SearchElement/SelectBox";

const SearchInput = ({ dateParam, guestsParam }: any) => {
  const [date, setDate] = useState(dateParam);
  const [selectedGuest, setSelectedGuest] = useState(guestsParam || 2);
  return (
    <div className="flex w-full bg-[#F5F5F5] h-[3.75rem] justify-around">
      <FindCity />
      <div className="flex items-center rounded focus:outline-none">  <SearchCalenderbox date={date} setDate={setDate} /></div>
      <div className="flex items-center rounded focus:outline-none">
        <SelectBox
          selectedGuest={selectedGuest}
          setSelectedGuest={setSelectedGuest}
          maxGuest={18}
        />
      </div>
      <div className="flex items-center ">
        <SearchButton date={date} guests={selectedGuest} />
      </div>
      <div className="flex items-center">
        <FilterButton />
      </div>
    </div>
  );
};

export default SearchInput;
