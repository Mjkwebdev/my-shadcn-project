import { Button } from "../../components/ui/button";
import Searchbox from "./Searchbox";
import SelectBox from "./SelectBox";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
const SearchInput = () => {
  return (
    <div className="absolute top-[24.5rem] left-[3rem] flex rounded-full w-[41rem] h-[3.75rem] bg-white">
      <Searchbox/>
       <div className="bg-white flex items-center  focus:outline-none">
       <SelectBox/>
     <Button> <MagnifyingGlassIcon className="h-5 w-full text-[#AD8330]" />  </Button> 
        </div>
      </div>
  );
};

export default SearchInput;
