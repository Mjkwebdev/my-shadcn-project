import Searchbox from "./SearchCalenderbox";
import SearchButton from "./SearchButton";
import SelectBox from "./SelectBox";

const SearchInput = () => {
  return (
    <div className="absolute top-[24.5rem] left-[3rem] flex rounded-full w-[35rem] h-[3.75rem] bg-white justify-around">
      <Searchbox/>
       <div className="bg-white flex items-center focus:outline-none">
       <SelectBox maxGuest={18}/>
        </div>
        <div className="flex items-center">
      <SearchButton date={undefined} guests={""}/>
        </div>
      </div>
  );
};

export default SearchInput;
