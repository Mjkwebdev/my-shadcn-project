import FilterButton from "./FilterButton";
import FindCity from "./FindCity";
import SearchButton from "./SearchElement/SearchButton";
import SearchCalenderbox from "./SearchElement/SearchCalenderbox";
import SelectBox from "./SearchElement/SelectBox";


const SearchInput = () => {
  return (
    <div className="flex w-full bg-[#F5F5F5] h-[3.75rem] justify-around">
      <div> 
        <FindCity /> </div>
        <div>
      <SearchCalenderbox/>
        </div>
       <div className="flex items-center mt-2 rounded focus:outline-none">
       <SelectBox maxGuest={18}/>
        </div>
        <div className="flex items-center ">
        <SearchButton date={undefined} guests={""}/>
        </div>
        <div className="flex items-center">
        <FilterButton/>
        </div>
      </div>
  );
};

export default SearchInput;
